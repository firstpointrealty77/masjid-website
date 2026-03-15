import Link from "next/link";
import { constructionProgressData } from "@/data/constructionProgress";
import { formatCurrency } from "@/lib/formatCurrency";

function percent(value: number, total: number) {
  if (!total) return 0;
  return Math.min(100, Math.round((value / total) * 100));
}

export function ConstructionProgressPreview() {
  const {
    phaseLabel,
    phaseStatus,
    targetCompletion,
    phaseGoalAmount,
    amountRaised,
    amountSpent,
    stages,
  } = constructionProgressData;

  const currentStage =
    stages.find((stage) => stage.status === "active") ?? stages[0];

  const raisedPct = percent(amountRaised, phaseGoalAmount);
  const spentPct = percent(amountSpent, phaseGoalAmount);

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#d9ca9f]/50 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_30%),linear-gradient(135deg,#0e241a_0%,#143425_45%,#1a4330_100%)] px-5 py-7 text-white shadow-[0_18px_55px_rgba(0,0,0,0.12)] sm:px-7 sm:py-8 lg:px-8 lg:py-10">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,transparent_12%,rgba(255,255,255,0.04)_30%,transparent_48%)]" />

      <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full border border-[#ead9a4]/30 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#f1deaa]">
            Construction Progress
          </div>

          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#fff9ea] sm:text-3xl">
            Property secured. The masjid journey is underway.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#ecf3ef]/90">
            The future home of the masjid has been secured through a lease-to-own
            arrangement. Follow each phase of progress and see how Phase 1 funds
            are being allocated with transparency.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#e9d7a6]">
                Current Phase
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {phaseLabel}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#e9d7a6]">
                Status
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {phaseStatus}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#e9d7a6]">
                Target
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {targetCompletion}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/construction-progress"
              className="inline-flex items-center justify-center rounded-full border border-[#ead8a5]/30 bg-[#d4af37] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f3327] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:brightness-105"
            >
              View Full Progress
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/12"
            >
              Support This Phase
            </Link>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#e1cf9d]/20 bg-white/8 p-5 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold text-[#fff8e8]">
              Snapshot
            </h3>
            <span className="rounded-full bg-[#d4af37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f1deaa]">
              {currentStage.title}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[#edf4f0]">
                <span>Raised</span>
                <span className="font-semibold">
                  {formatCurrency(amountRaised)} / {formatCurrency(phaseGoalAmount)}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#d4af37_0%,#efdeaa_100%)]"
                  style={{ width: `${raisedPct}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[#edf4f0]">
                <span>Spent</span>
                <span className="font-semibold">
                  {formatCurrency(amountSpent)} / {formatCurrency(phaseGoalAmount)}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#8ecfad_0%,#daf3e5_100%)]"
                  style={{ width: `${spentPct}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#e9d7a6]">
              Current Focus
            </div>
            <div className="mt-2 text-base font-semibold text-white">
              {currentStage.title}
            </div>
            <p className="mt-2 text-sm leading-6 text-[#e5eeea]">
              {currentStage.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}