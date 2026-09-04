"use client";

import { useEffect, useMemo, useState } from "react";

type PrayerRow = {
  salah: string;
  adhan?: string;
  time?: string;
};

type PrayerResponse = {
  dateHeading?: string;
  hijriDate?: string | null;
  rows?: PrayerRow[];
};

const ENDPOINT =
  "/api/masjidal-prayer-times?source=masjidal&masjidId=0dYp0yA6";

function formatDate(dateHeading?: string) {
  if (dateHeading?.trim()) {
    return dateHeading.replace(/^[A-Za-z]+,\s*/, "");
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

function formatHijriDate(hijriDate?: string | null) {
  if (hijriDate?.trim()) return hijriDate;

  try {
    return new Intl.DateTimeFormat("en-US-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  } catch {
    return "";
  }
}

function displayTime(time?: string) {
  return time?.trim() || "—";
}

export function PrayerTimesModule() {
  const [data, setData] = useState<PrayerResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadPrayerTimes() {
      try {
        setError(false);

        const response = await fetch(ENDPOINT, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Prayer-time request failed");
        }

        const result = (await response.json()) as PrayerResponse;

        if (active) {
          setData(result);
        }
      } catch {
        if (active) {
          setError(true);
        }
      }
    }

    loadPrayerTimes();

    return () => {
      active = false;
    };
  }, []);

  const prayerRows = useMemo(() => {
    const rows = Array.isArray(data?.rows) ? data.rows : [];

    const findPrayer = (names: string[]) =>
      rows.find((row) =>
        names.some(
          (name) =>
            row.salah?.trim().toLowerCase() === name.trim().toLowerCase()
        )
      );

    const fajr = findPrayer(["Fajr", "Fajar"]);
    const dhuhr = findPrayer(["Dhuhr", "Zuhr"]);
    const asr = findPrayer(["Asr"]);
    const maghrib = findPrayer(["Maghrib"]);
    const isha = findPrayer(["Isha", "Ishaa"]);

    return [
      {
        name: "Fajr",
        time: fajr?.adhan ?? fajr?.time,
      },
      {
        name: "Dhuhr",
        time: dhuhr?.adhan ?? dhuhr?.time,
      },
      {
        name: "Asr",
        time: asr?.adhan ?? asr?.time,
      },
      {
        name: "Maghrib",
        time: maghrib?.adhan ?? maghrib?.time,
      },
      {
        name: "Isha",
        time: isha?.adhan ?? isha?.time,
      },
    ];
  }, [data]);

  const displayDate = formatDate(data?.dateHeading);
  const displayHijri = formatHijriDate(data?.hijriDate);

  return (
    <section
      aria-labelledby="daily-prayer-times-heading"
      className="mt-10 overflow-hidden rounded-[26px] border border-[#D4A447]/25 bg-[#0C4F43] shadow-[0_20px_55px_rgba(0,0,0,0.24)] sm:rounded-[28px]"
    >
      {/* HEADER */}

      <div className="border-b border-[#D4A447]/20 bg-[#063C34]/45 px-5 py-5 sm:px-8 sm:py-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E0B75C] sm:text-[11px] sm:tracking-[0.24em]">
            Ballantyne &amp; South Charlotte
          </p>

          {/* Location */}

          <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs font-normal leading-none text-[#A7D7C5]">
            <svg
              className="h-3.5 w-3.5 shrink-0 text-[#7DCFB8]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            Charlotte, NC
          </p>

          {/* Title */}

          <h2
            id="daily-prayer-times-heading"
            className="mt-3.5 font-serif text-[29px] font-semibold leading-none tracking-[-0.025em] text-[#FFFDF7] sm:text-4xl"
          >
            Daily Salah Times
          </h2>

          {/* Dates */}

          <div className="mt-4 flex w-full flex-col items-center text-center">
            <p className="text-sm font-semibold leading-none text-[#FFFDF7] sm:text-[15px]">
              {displayDate}
            </p>

            {displayHijri ? (
              <p className="mt-2 text-xs font-normal leading-none text-[#A7D7C5] sm:text-[13px]">
                {displayHijri}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* TIMETABLE CONTENT */}

      <div className="px-4 pb-5 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
        <p className="mx-auto mb-5 max-w-xl text-center text-[13px] font-normal leading-5 text-[#DCEBE4] sm:text-sm sm:leading-6">
          Local prayer start times provided for personal reference.
        </p>

        {/* Prayer table */}

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#073F36]">
          <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#D4A447]/20 bg-[#063C34]/60 px-5 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D7C5] sm:text-[11px]">
              Prayer
            </p>

            <p className="text-right text-[10px] font-bold uppercase tracking-[0.18em] text-[#A7D7C5] sm:text-[11px]">
              Begins
            </p>
          </div>

          {error ? (
            <div
              role="status"
              className="px-5 py-7 text-center text-[13px] font-normal leading-5 text-[#BDD3C8] sm:text-sm"
            >
              Could not load today&apos;s prayer times. Please try again later.
            </div>
          ) : data === null ? (
            <div
              role="status"
              className="px-5 py-7 text-center text-[13px] font-normal leading-5 text-[#BDD3C8] sm:text-sm"
            >
              Loading today&apos;s prayer times…
            </div>
          ) : (
            prayerRows.map((prayer, index) => (
              <div
                key={prayer.name}
                className={[
                  "grid grid-cols-[1fr_auto] items-center px-5 py-3.5 sm:py-4",
                  index % 2 === 0
                    ? "bg-[#0A493D]/45"
                    : "bg-[#073F36]",
                  index !== prayerRows.length - 1
                    ? "border-b border-white/[0.08]"
                    : "",
                ].join(" ")}
              >
                <p className="text-[14px] font-medium tracking-[0.005em] text-[#FFFDF7] sm:text-base">
                  {prayer.name}
                </p>

                <p className="min-w-[86px] text-right text-[14px] font-semibold tabular-nums text-[#F5DFA0] sm:min-w-[92px] sm:text-base">
                  {displayTime(prayer.time)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Automatic-update note */}

        <div className="mt-3 flex items-center justify-center gap-1.5 px-2 text-center text-[11px] font-normal leading-4 text-[#A7D7C5] sm:text-xs">
          <svg
            className="h-3.5 w-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 4v5h5" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 20v-5h-5" />
          </svg>

          <span>Prayer times update automatically each day.</span>
        </div>

        {/* Jumu'ah-only notice */}

        <div className="mt-5 rounded-2xl border border-[#D4A447]/40 bg-[#D4A447]/10 px-4 py-5 text-center sm:px-7 sm:py-6">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#D4A447]/35 bg-[#063C34]/45 text-[#F5DFA0]">
            <svg
              className="h-[18px] w-[18px]"
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

          <p className="mx-auto mt-3 max-w-md text-[14px] font-semibold leading-5 text-[#F5DFA0] sm:text-[15px]">
            Jumu&apos;ah Prayer Only at Our Current Venue
          </p>

          <p className="mx-auto mt-2 max-w-md text-[13px] font-normal leading-6 text-[#DCEBE4] sm:text-sm">
            These times are for personal reference. Ballantyne Islamic Center
            currently does not hold daily congregational Salah at this location.
          </p>
        </div>
      </div>
    </section>
  );
}