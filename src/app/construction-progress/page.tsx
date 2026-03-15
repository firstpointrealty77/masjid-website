import Link from "next/link";
import { ConstructionHero } from "@/components/construction/ConstructionHero";
import { JourneyTimeline } from "@/components/construction/JourneyTimeline";
import { MilestonesPanel } from "@/components/construction/MilestonesPanel";
import { SpendingBreakdown } from "@/components/construction/SpendingBreakdown";
import { FundingSummary } from "@/components/construction/FundingSummary";

export default function ConstructionProgressPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#fcfaf4_0%,#f7f4ea_22%,#ffffff_100%)]">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="space-y-6 sm:space-y-7">
          <ConstructionHero />
          <JourneyTimeline />
          <MilestonesPanel />
          <SpendingBreakdown />

          <section className="rounded-[28px] border border-[#eadbb3] bg-[linear-gradient(135deg,#112d20_0%,#173a2a_50%,#1b4531_100%)] px-5 py-7 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:px-7 sm:py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#f0dfab]">
                  Support the Build
                </div>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#fff8e8]">
                  Help complete Phase 1 of the masjid
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#e8f0eb]">
                  Every contribution helps move the project forward and
                  establish a permanent house of Allah for prayer, learning,
                  and community for generations to come.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-full border border-[#ead8a5]/30 bg-[#d4af37] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f3327] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:brightness-105"
                >
                  Donate Now
                </Link>

                <Link
                  href="/construction-progress"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
                >
                  View Progress
                </Link>
              </div>
            </div>
          </section>

          <FundingSummary />

          <section className="rounded-[28px] border border-[#eadbb3] bg-[linear-gradient(135deg,#112d20_0%,#173a2a_50%,#1b4531_100%)] px-5 py-7 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:px-7 sm:py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#f0dfab]">
                  Continue Exploring
                </div>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#fff8e8]">
                  Return to the homepage or support this phase
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#e8f0eb]">
                  Follow the broader masjid updates on the homepage, or continue
                  supporting Phase 1 construction.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
                >
                  Back to Home
                </Link>

                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-full border border-[#ead8a5]/30 bg-[#d4af37] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f3327] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:brightness-105"
                >
                  Donate for Phase 1
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}