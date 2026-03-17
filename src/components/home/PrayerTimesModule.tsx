"use client";

import { useEffect, useMemo, useState } from "react";

type PrayerRow = {
  salah: string;
  adhan?: string;
  iqamah?: string;
  time?: string;
};

type PrayerResponse = {
  source?: string;
  masjidId?: string;
  dateHeading?: string;
  hijriDate?: string | null;
  sunrise?: string | null;
  jummah1?: string | null;
  jummah2?: string | null;
  rows?: PrayerRow[];
  lastUpdated?: string;
  [key: string]: any;
};

function normalizeRows(data: PrayerResponse): PrayerRow[] {
  if (data?.rows && Array.isArray(data.rows)) return data.rows;
  if (Array.isArray(data)) return data as PrayerRow[];
  return [];
}

function formatDateShort(dateHeading?: string) {
  if (dateHeading && dateHeading.trim()) {
    return dateHeading.replace(/^[A-Za-z]+,\s*/, "");
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

function formatHijriDate(hijriDate?: string | null) {
  if (hijriDate && hijriDate.trim()) return hijriDate;

  try {
    return new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  } catch {
    return "";
  }
}

function parseHM(t?: string) {
  if (!t) return null;
  const parts = t.trim().split(":");
  if (parts.length !== 2) return null;

  const hh = Number(parts[0]);
  const mm = Number(parts[1]);

  if (!Number.isFinite(hh) || !Number.isFinite(mm)) return null;
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;

  return { hh, mm };
}

function toTodayMinutes(salah: string, time?: string) {
  const hm = parseHM(time);
  if (!hm) return null;

  let { hh, mm } = hm;
  const s = salah.toLowerCase();

  const isPMPrayer = [
    "dhuhr",
    "zuhr",
    "asr",
    "maghrib",
    "isha",
    "ishaa",
    "first jummah",
    "second jummah",
    "jummah i",
    "jummah ii",
  ].includes(s);

  if (isPMPrayer && hh >= 1 && hh <= 11) hh += 12;

  return hh * 60 + mm;
}

function nowMinutesLocal() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

function isFridayLocal() {
  return new Date().getDay() === 5;
}

function displayTime(t?: string) {
  return t ?? "--:--";
}

export function PrayerTimesModule() {
  const [rows, setRows] = useState<PrayerRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiData, setApiData] = useState<PrayerResponse | null>(null);
  const [tick, setTick] = useState(0);

  const endpoint =
    "/api/masjidal-prayer-times?source=masjidal&masjidId=0dYp0yA6";

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setError(null);

        const res = await fetch(endpoint, { cache: "no-store" });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data = (await res.json()) as PrayerResponse;
        if (!alive) return;

        setApiData(data);
        setRows(normalizeRows(data));
      } catch {
        if (!alive) return;
        setApiData(null);
        setRows([]);
        setError("Could not load live prayer times.");
      }
    })();

    return () => {
      alive = false;
    };
  }, [endpoint]);

  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 60000);
    return () => clearInterval(id);
  }, []);

  const dailyRows = useMemo(() => {
    const list = rows ?? [];

    const findByNames = (names: string[]) =>
      list.find((r) =>
        names.some(
          (name) => r.salah.trim().toLowerCase() === name.trim().toLowerCase()
        )
      );

    const fajr = findByNames(["Fajr", "Fajar"]);
    const dhuhr = findByNames(["Dhuhr", "Zuhr"]);
    const asr = findByNames(["Asr"]);
    const maghrib = findByNames(["Maghrib"]);
    const isha = findByNames(["Isha", "Ishaa"]);

    const sunriseRow: PrayerRow | null = apiData?.sunrise
      ? {
          salah: "Sunrise",
          adhan: apiData.sunrise,
          iqamah: "—",
        }
      : null;

    return [fajr, sunriseRow, dhuhr, asr, maghrib, isha].filter(Boolean) as PrayerRow[];
  }, [rows, apiData]);

  const jummahRows = useMemo(() => {
    const result: PrayerRow[] = [];

    if (apiData?.jummah1) {
      result.push({
        salah: "First Jummah",
        adhan: apiData.jummah1,
        iqamah: apiData.jummah1,
      });
    }

    if (apiData?.jummah2) {
      result.push({
        salah: "Second Jummah",
        adhan: apiData.jummah2,
        iqamah: apiData.jummah2,
      });
    }

    return result;
  }, [apiData]);

  const displayDate = formatDateShort(apiData?.dateHeading);
  const displayHijri = formatHijriDate(apiData?.hijriDate);
  const friday = isFridayLocal();

  const nextPrayerName = useMemo(() => {
    const now = nowMinutesLocal();

    const prayerCandidates = dailyRows.filter(
      (r) => r.salah.trim().toLowerCase() !== "sunrise"
    );

    const candidates = friday
      ? [
          ...prayerCandidates.filter(
            (r) => !["dhuhr", "zuhr"].includes(r.salah.trim().toLowerCase())
          ),
          ...jummahRows,
        ]
      : prayerCandidates;

    for (const row of candidates) {
      const mins = toTodayMinutes(row.salah, row.iqamah ?? row.time);
      if (mins != null && mins >= now) return row.salah;
    }

    return "Fajr";
  }, [dailyRows, jummahRows, friday, tick]);

  return (
    <aside className="relative overflow-hidden rounded-[22px] border border-[#dccba0] bg-[linear-gradient(180deg,rgba(252,249,241,0.96),rgba(244,238,226,0.96))] text-[#163324] shadow-[0_18px_44px_rgba(0,0,0,0.14)] backdrop-blur-md before:pointer-events-none before:absolute before:inset-0 before:rounded-[28px] before:border before:border-[#d4a447]/20 md:rounded-[28px] md:shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
      <div className="border-b border-[#d9c592] bg-[linear-gradient(180deg,#113f30_0%,#1a5a43_100%)] px-4 py-3.5 md:px-5 md:py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-2.5 md:gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d4a447]/40 bg-[#0f3d2e]/70 text-[#d4a447] shadow-[0_0_0_1px_rgba(212,164,71,0.08)] md:h-10 md:w-10">
              <svg
                className="h-4 w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 20h16" />
                <path d="M6 20V10a6 6 0 0 1 12 0v10" />
                <path d="M9 20v-5h6v5" />
                <path d="M8 10h8" />
                <path d="M12 4v2" />
              </svg>
            </div>

            <div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#f8f2e7] md:text-[20px]">
                Prayer Times
              </h3>
              <div className="mt-1 h-px w-20 bg-gradient-to-r from-[#d4a447] via-[#e6c776] to-transparent md:w-28" />
            </div>
          </div>

          <div className="text-right">
            <div className="whitespace-nowrap text-[11px] font-medium text-[#f4ead2] md:text-[13px]">
              {displayDate}
            </div>
            {displayHijri ? (
              <div className="mt-0.5 whitespace-nowrap text-[10px] text-[#d9c592] md:mt-1 md:text-[12px]">
                {displayHijri}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="px-3.5 pb-3.5 pt-3.5 md:px-5 md:pb-5 md:pt-4.5">
        {error ? (
          <div className="text-sm text-black/60">{error}</div>
        ) : rows === null ? (
          <div className="text-sm text-black/60">Loading…</div>
        ) : (
          <>
            <div className="overflow-hidden rounded-[14px] border border-[#d8c8a0] bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.04)] md:rounded-[18px] md:shadow-[0_12px_30px_rgba(0,0,0,0.07)]">
              <div className="grid grid-cols-[1fr_62px_68px] items-center border-b border-[#d8c8a0] bg-[linear-gradient(180deg,#1b5b43_0%,#144733_100%)] px-4 py-2 md:grid-cols-[1fr_72px_82px] md:px-5 md:py-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f4ead2] md:text-[14px]">
                  Prayer
                </div>
                <div className="text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f4ead2] md:text-[13px]">
                  Adhan
                </div>
                <div className="text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f4ead2] md:text-[14px]">
                  Iqama
                </div>
              </div>

              {dailyRows.map((r, i) => {
                const adhan = displayTime(r.adhan);
                const iqamah = displayTime(r.iqamah ?? r.time);
                const isLast = i === dailyRows.length - 1;
                const isNext = r.salah === nextPrayerName;
                const isSunrise = r.salah === "Sunrise";

                return (
                  <div
                    key={`${r.salah}-${i}`}
                    className={[
                      "relative grid grid-cols-[1fr_62px_68px] items-center px-4 py-2 transition-colors duration-200 hover:bg-[#f5efdf] md:grid-cols-[1fr_72px_82px] md:px-5 md:py-3",
                      i % 2 === 0 ? "bg-[#fffdf8]" : "bg-[#f8f4ea]",
                      !isLast ? "border-b border-[#eee4cc]" : "",
                      isNext
                        ? "bg-[radial-gradient(circle_at_85%_50%,rgba(212,164,71,0.12),transparent_38%),linear-gradient(180deg,rgba(255,252,243,1),rgba(249,243,226,1))] md:shadow-[inset_0_0_0_1px_rgba(212,164,71,0.18)]"
                        : "",
                    ].join(" ")}
                  >
                    {isNext ? (
                      <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-gradient-to-b from-[#e2be63] via-[#d4a447] to-[#c6912c]" />
                    ) : null}

                    <div
                      className={`text-[13px] font-medium md:text-[17px] ${
                        isSunrise ? "text-gray-400" : "text-[#163324]"
                      }`}
                    >
                      {r.salah}
                    </div>

                    <div
                      className={`text-center text-[12px] font-medium tabular-nums md:text-[14px] ${
                        isSunrise ? "text-gray-400" : "text-[#486555]"
                      }`}
                    >
                      {adhan}
                    </div>

                    <div
                      className={`text-right font-semibold tabular-nums ${
                        isSunrise
                          ? "text-[14px] text-gray-400 md:text-[18px]"
                          : isNext
                          ? "text-[14px] text-[#123124] md:text-[19px]"
                          : "text-[14px] text-[#163324] md:text-[18px]"
                      }`}
                    >
                      {iqamah}
                    </div>
                  </div>
                );
              })}
            </div>

            {jummahRows.length > 0 && (
              <div className="mt-2.5 overflow-hidden rounded-[14px] border border-[#d8c8a0] bg-white/70 shadow-[0_6px_18px_rgba(0,0,0,0.04)] md:mt-3.5 md:rounded-[18px] md:shadow-[0_12px_30px_rgba(0,0,0,0.07)]">
                <div className="grid grid-cols-[1fr_82px] items-center border-b border-[#d8c8a0] bg-[linear-gradient(180deg,#1b5b43_0%,#144733_100%)] px-4 py-2 md:grid-cols-[1fr_100px] md:px-5 md:py-3">
                  <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#f4ead2] md:text-[14px]">
                    Jummah
                  </div>
                  <div className="text-right text-[12px] font-semibold uppercase tracking-[0.08em] text-[#f4ead2] md:text-[14px]">
                    Khutba
                  </div>
                </div>

                {jummahRows.map((r, i) => {
                  const iqamah = displayTime(r.iqamah ?? r.time);
                  const isLast = i === jummahRows.length - 1;
                  const isNext = r.salah === nextPrayerName;

                  return (
                    <div
                      key={`${r.salah}-${i}`}
                      className={[
                        "relative grid grid-cols-[1fr_82px] items-center px-4 py-2 transition-colors duration-200 hover:bg-[#f5efdf] md:grid-cols-[1fr_100px] md:px-5 md:py-3",
                        i % 2 === 0 ? "bg-[#fffdf8]" : "bg-[#f8f4ea]",
                        !isLast ? "border-b border-[#eee4cc]" : "",
                        isNext
                          ? "bg-[radial-gradient(circle_at_85%_50%,rgba(212,164,71,0.12),transparent_38%),linear-gradient(180deg,rgba(255,252,243,1),rgba(249,243,226,1))] md:shadow-[inset_0_0_0_1px_rgba(212,164,71,0.18)]"
                          : "",
                      ].join(" ")}
                    >
                      {isNext ? (
                        <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-gradient-to-b from-[#e2be63] via-[#d4a447] to-[#c6912c]" />
                      ) : null}

                      <div className="text-[14px] font-medium text-[#163324] md:text-[17px]">
                        {r.salah}
                      </div>

                      <div
                        className={`text-right font-semibold tabular-nums ${
                          isNext
                            ? "text-[15px] text-[#123124] md:text-[19px]"
                            : "text-[15px] text-[#163324] md:text-[18px]"
                        }`}
                      >
                        {iqamah}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-3.5 border-t border-[#e5d8b7] pt-2.5 md:mt-4 md:pt-3">
              <div className="flex flex-col gap-2">
                <a
                  href="/monthly-prayer-schedule.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#1b5b43] hover:underline md:text-[13px]"
                >
                  <svg
                    className="h-4 w-4 text-[#b48a2c]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                  </svg>
                  <span>Monthly Schedule</span>
                </a>

                <a
                  href="/annual-prayer-schedule.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#1b5b43] hover:underline md:text-[13px]"
                >
                  <svg
                    className="h-4 w-4 text-[#b48a2c]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                  <span>Download Annual Prayer Schedule</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}