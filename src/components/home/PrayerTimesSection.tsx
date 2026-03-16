import React from "react";

type PrayerRow = {
  salah: string;
  adhan: string;
  iqamah: string;
};

type Props = {
  rows?: PrayerRow[];
};

export function PrayerTimesSection({ rows }: Props) {
  return (
    <section className="relative w-full overflow-x-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/[0.06] via-white to-[#F6F2E9]/70" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,24,39,0.18) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-[#eadbb3] bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <span className="inline-flex rounded-full border border-[#d9c48a] bg-[#fbf7ea] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a16]">
                Prayer & Community
              </span>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Prayer Times
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                Stay connected with the daily salah schedule, Jumu‘ah timings,
                and important prayer updates for Masjid Ballantyne.
              </p>

              <div className="mt-6 rounded-2xl border border-[#e8e1cf] bg-[#fcfaf4] p-5">
                <p className="text-sm text-neutral-700">
                  The premium prayer times section is being prepared and will be
                  restored here soon, inshaAllah.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#eadbb3] bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <h3 className="text-lg font-semibold text-neutral-900">
                Today&apos;s Schedule
              </h3>

              {rows && rows.length > 0 ? (
                <div className="mt-5 space-y-3">
                  {rows.map((row) => (
                    <div
                      key={row.salah}
                      className="flex items-center justify-between rounded-2xl border border-[#ece6d8] bg-[#fffdf8] px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-neutral-900">
                          {row.salah}
                        </p>
                        <p className="text-xs text-neutral-500">Adhan</p>
                      </div>

                      <div className="text-right">
                        <p className="font-medium text-neutral-900">
                          {row.adhan}
                        </p>
                        <p className="text-xs text-neutral-500">
                          Iqamah: {row.iqamah}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-dashed border-[#d9cfb5] bg-[#fcfaf4] px-4 py-5 text-sm text-neutral-600">
                  Prayer times will appear here once the data loads.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}