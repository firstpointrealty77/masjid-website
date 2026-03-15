// src/app/api/masjidal-prayer-times/route.ts
import { NextResponse } from "next/server";

export const revalidate = 60;

const MASJID_ID = "0dYp0yA6";
const TZ = "America/New_York";

const DAILY_EMBED_URL = `https://timing.athanplus.com/masjid/widgets/embed?masjid_id=${encodeURIComponent(
  MASJID_ID
)}&theme=2&header=1`;

const MONTHLY_URL = `https://timing.athanplus.com/masjid/widgets/monthly?masjid_id=${encodeURIComponent(
  MASJID_ID
)}&theme=2`;

// ✅ Manual override fallback (always applied if parser can't find Jummah times)
const MANUAL_JUMUAH = {
  jummah1: "1:00 PM",
  jummah2: "2:00 PM",
};

function stripHtmlToText(html: string) {
  return (
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<\/div>/gi, "\n")
      .replace(/<\/h\d>/gi, "\n")
      .replace(/<\/tr>/gi, "\n")
      .replace(/<\/td>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/[ \t]+/g, " ")
      .replace(/\n\s+/g, "\n")
      .replace(/\n{2,}/g, "\n")
      .trim()
  );
}

function formatMasjidalHeading(d: Date) {
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: TZ }).format(d);
  const month = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: TZ }).format(d);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: TZ }).format(d);
  const year = new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: TZ }).format(d);
  return `${weekday}, ${month} ${day}, ${year}`;
}

function getNYDayOfMonth(d: Date) {
  return Number(new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: TZ }).format(d));
}

function extractTodayBlock(text: string, todayHeading: string) {
  const start = text.indexOf(todayHeading);
  if (start === -1) return null;

  const afterStart = text.slice(start);

  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const headingRegex = new RegExp(
    `\\b(${weekdayNames.join("|")}),\\s+[A-Z][a-z]{2}\\s+\\d{1,2},\\s+\\d{4}\\b`,
    "g"
  );

  headingRegex.lastIndex = 0;
  headingRegex.exec(afterStart); // today
  const second = headingRegex.exec(afterStart); // next day
  if (!second) return afterStart;

  return afterStart.slice(0, second.index);
}

function parseRowsFromDailyBlock(block: string) {
  const rows: Array<{ salah: string; adhan: string; iqamah: string }> = [];

  const dailyRegex =
    /\b(Fajr|Dhuhr|Asr|Maghrib|Isha)\b\s+(\d{1,2}:\d{2}\s*(?:AM|PM))\s+(\d{1,2}:\d{2}\s*(?:AM|PM))/g;

  let m: RegExpExecArray | null;
  while ((m = dailyRegex.exec(block)) !== null) {
    rows.push({
      salah: m[1],
      adhan: m[2].replace(/\s+/g, " ").trim(),
      iqamah: m[3].replace(/\s+/g, " ").trim(),
    });
  }

  return rows;
}

function parseSunriseFromMonthly(monthlyText: string, dayOfMonth: number) {
  const lines = monthlyText.split("\n").map((l) => l.trim()).filter(Boolean);

  const dayToken = new RegExp(`\\b${dayOfMonth}\\b`);
  const candidates = lines.filter((l) => dayToken.test(l)).slice(0, 10);

  for (const line of candidates) {
    const times = [...line.matchAll(/\b(\d{1,2}:\d{2})(?:\s*(AM|PM))?\b/gi)].map((m) =>
      (m[1] + (m[2] ? ` ${m[2].toUpperCase()}` : "")).trim()
    );

    if (times.length >= 2) {
      const raw = times[1];
      return /\b(AM|PM)\b/i.test(raw) ? raw : `${raw} AM`;
    }
  }

  return null;
}

function normalizeJLabel(raw?: string | null): "1" | "2" | null {
  if (!raw) return null;
  const s = raw.toUpperCase();
  if (s.includes("2") || s.includes("II") || s.includes("2ND") || s.includes("SECOND")) return "2";
  if (s.includes("1") || s.includes("I") || s.includes("1ST") || s.includes("FIRST")) return "1";
  return null;
}

function parseJummahFromMonthly(text: string) {
  const candidates: Array<{ which: "1" | "2" | null; time: string }> = [];

  // label -> time
  for (const m of text.matchAll(
    /\b(JUMU'?AH|JUMUAH|JUMMAH)\b\s*[-:]?\s*(1|2|I{1,2}|1ST|2ND|FIRST|SECOND)?\s*[-:]?\s*(\d{1,2}:\d{2}\s*(?:AM|PM))\b/gi
  )) {
    candidates.push({ which: normalizeJLabel(m[2]), time: m[3].replace(/\s+/g, " ").trim() });
  }

  // time -> label
  for (const m of text.matchAll(
    /\b(\d{1,2}:\d{2}\s*(?:AM|PM))\b\s+(JUMU'?AH|JUMUAH|JUMMAH)\b\s*[-:]?\s*(1|2|I{1,2}|1ST|2ND|FIRST|SECOND)?\b/gi
  )) {
    candidates.push({ which: normalizeJLabel(m[3]), time: m[1].replace(/\s+/g, " ").trim() });
  }

  const uniq = Array.from(
    new Map(candidates.map((c) => [`${c.which ?? ""}:${c.time.toUpperCase()}`, c])).values()
  );

  const jummah1 = uniq.find((c) => c.which === "1")?.time ?? uniq[0]?.time ?? null;
  const jummah2 = uniq.find((c) => c.which === "2")?.time ?? uniq[1]?.time ?? null;

  return { jummah1, jummah2 };
}

export async function GET() {
  try {
    // 1) Daily embed => Athan + Iqamah
    const dailyRes = await fetch(DAILY_EMBED_URL, {
      next: { revalidate },
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!dailyRes.ok) {
      return NextResponse.json(
        { error: `Masjidal daily fetch failed: ${dailyRes.status}` },
        { status: 502 }
      );
    }

    const dailyHtml = await dailyRes.text();
    const dailyText = stripHtmlToText(dailyHtml);

    const todayHeading = formatMasjidalHeading(new Date());
    const block = extractTodayBlock(dailyText, todayHeading);

    if (!block) {
      return NextResponse.json(
        { error: "Could not locate today's block in Masjidal daily output", dateHeading: todayHeading },
        { status: 500 }
      );
    }

    const rows = parseRowsFromDailyBlock(block);

    // 2) Monthly widget => Sunrise + (try) Jummah
    let sunrise: string | null = null;
    let jummah1: string | null = null;
    let jummah2: string | null = null;

    const monthlyRes = await fetch(MONTHLY_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (monthlyRes.ok) {
      const monthlyHtml = await monthlyRes.text();
      const monthlyText = stripHtmlToText(monthlyHtml);

      const dayOfMonth = getNYDayOfMonth(new Date());
      sunrise = parseSunriseFromMonthly(monthlyText, dayOfMonth);

      const j = parseJummahFromMonthly(monthlyText);
      jummah1 = j.jummah1;
      jummah2 = j.jummah2;
    }

    // ✅ Always apply fallback if missing (all days)
    const finalJummah1 = jummah1 ?? MANUAL_JUMUAH.jummah1;
    const finalJummah2 = jummah2 ?? MANUAL_JUMUAH.jummah2;

    return NextResponse.json({
      source: "masjidal",
      masjidId: MASJID_ID,
      dateHeading: todayHeading,
      sunrise,
      jummah1: finalJummah1,
      jummah2: finalJummah2,
      rows,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Unknown server error" },
      { status: 500 }
    );
  }
}