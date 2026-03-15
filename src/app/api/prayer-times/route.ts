import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Basic CSV parsing for a single line (supports quoted fields).
function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (ch === '"') {
      // Escaped quote inside quotes
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (ch === "," && !inQuotes) {
      out.push(cur.trim());
      cur = "";
      continue;
    }

    cur += ch;
  }

  out.push(cur.trim());
  return out;
}

// Google Sheets sometimes publishes each row like: "salah,adhan,iqamah"
// i.e., one quoted field containing commas. This fixes that.
function normalizeGoogleQuotedRow(cols: string[]): string[] {
  if (cols.length === 1 && cols[0].includes(",")) {
    const unwrapped = cols[0].trim().replace(/^"|"$/g, "");
    // Now split by comma (these inner values are not individually quoted in your format)
    return unwrapped.split(",").map((s) => s.trim());
  }
  return cols.map((c) => c.trim().replace(/^"|"$/g, ""));
}

function normalizeHeader(h: string) {
  return (h || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
}

export async function GET() {
  const url = process.env.PRAYER_TIMES_CSV_URL;

  if (!url) {
    return NextResponse.json(
      { error: "Missing PRAYER_TIMES_CSV_URL in .env.local" },
      { status: 500 }
    );
  }

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    return NextResponse.json(
      { error: `Failed to fetch CSV: ${res.status}` },
      { status: 500 }
    );
  }

  const text = await res.text();

  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return NextResponse.json({
      rows: [],
      lastUpdated: new Date().toISOString(),
      fetchedUrl: url,
    });
  }

  // Header
  const headerRaw = normalizeGoogleQuotedRow(parseCsvLine(lines[0]));
  const headerNorm = headerRaw.map(normalizeHeader);

  const idxSalah = headerNorm.indexOf("salah");
  const idxAdhan = headerNorm.indexOf("adhan");
  const idxIqamah = headerNorm.indexOf("iqamah");

  if (idxSalah === -1) {
    return NextResponse.json(
      { error: "CSV missing required column: salah", header: headerRaw },
      { status: 500 }
    );
  }
  if (idxAdhan === -1) {
    return NextResponse.json(
      { error: "CSV missing required column: adhan", header: headerRaw },
      { status: 500 }
    );
  }
  if (idxIqamah === -1) {
    return NextResponse.json(
      { error: "CSV missing required column: iqamah", header: headerRaw },
      { status: 500 }
    );
  }

  const rows = lines.slice(1).map((line) => {
    const cols = normalizeGoogleQuotedRow(parseCsvLine(line));
    return {
      salah: cols[idxSalah] || "",
      adhan: cols[idxAdhan] || "",
      iqamah: cols[idxIqamah] || "",
    };
  });

  // Remove Sunrise if present
  const cleaned = rows.filter((r) => r.salah.trim().toLowerCase() !== "sunrise");

  return NextResponse.json({
    rows: cleaned,
    lastUpdated: new Date().toISOString(),
    fetchedUrl: url,
  });
}
