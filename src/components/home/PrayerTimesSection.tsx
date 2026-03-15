import React from "react";
import { MasjidInfoPanel } from "./prayer/MasjidInfoPanel";
import { PrayerTimesWelcomePanel } from "./prayer/PrayerTimesWelcomePanel";
import { PrayerTimesTableCard } from "./prayer/PrayerTimesTableCard";

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
          backgroundImage: "radial-gradient(rgba(17,24,39,0.18) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="pointer-events-none absolute -top-20 left-1/2 h-[340px] w-[min(1400px,96vw)] -translate-x-1/2 opacity-[0.06]">
        <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,300 Q600,-80 1200,300 L1200,0 L0,0 Z" fill="#0B3B2E" />
        </svg>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-10 py-10 lg:-mt-12">
        <div className="mx-auto max-w-screen-2xl relative">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[calc(100vw-2rem)] max-w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl -z-10" />

          {/* Desktop: Masjid Info | Welcome | Prayer Times */}
          <div className="grid gap-6 lg:grid-cols-[360px_460px_1fr] lg:items-start">
            {/* Left sticky */}
            <div className="lg:sticky lg:top-[108px]">
              <MasjidInfoPanel />
            </div>

            {/* Middle centered */}
            <div className="lg:flex lg:min-h-[calc(100vh-160px)] lg:items-center lg:justify-center">
              <div className="w-full">
                <PrayerTimesWelcomePanel />
              </div>
            </div>

            {/* Right sticky */}
            <div className="lg:sticky lg:top-[108px]">
              <PrayerTimesTableCard rows={rows} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}