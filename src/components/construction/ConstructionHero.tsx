import { constructionProgressData } from "@/data/constructionProgress";
import { formatCurrency } from "@/lib/formatCurrency";

function percent(value: number, total: number) {
  if (!total) return 0;
  return Math.min(100, Math.round((value / total) * 100));
}

export function ConstructionHero() {
  const {
    pageEyebrow,
    pageTitle,
    intro,
    phaseLabel,
    phaseStatus,
    targetCompletion,
    phaseGoalAmount,
    amountRaised,
    amountSpent,
  } = constructionProgressData;

  const raisedPct = percent(amountRaised, phaseGoalAmount);
  const spentPct = percent(amountSpent, phaseGoalAmount);
  const remaining = Math.max(phaseGoalAmount - amountRaised, 0);

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#d7c7a0]/45 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_30%),linear-gradient(135deg,#0d2218_0%,#123324_45%,#173a2a_100%)] px-5 py-8 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:px-7 sm:py-10 lg:px-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_10%,rgba(255,255,255,0.05)_28%,transparent_46%)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-[#e8d7a8]/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-3 inline-flex items-center rounded-full border border-[#e6d3a0]/35 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-[#efdca9] sm:text-xs">
            {pageEyebrow}
          </div>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#fff9ea] sm:text-4xl lg:text-5xl">
            {pageTitle}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ecf3ef]/90 sm:text-[15px]">
            {intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-[#e3d09e]/25 bg-white/6 px-4 py-3 backdrop-blur-sm">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#ecdba8]">
                Current Phase
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {phaseLabel}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e3d09e]/25 bg-white/6 px-4 py-3 backdrop-blur-sm">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#ecdba8]">
                Status
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {phaseStatus}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e3d09e]/25 bg-white/6 px-4 py-3 backdrop-blur-sm">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#ecdba8]">
                Target Completion
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {targetCompletion}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#e3d09e]/25 bg-white/8 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-xl font-semibold text-[#fff7e5]">
              Funding Overview
            </h2>
            <span className="rounded-full border border-[#e2cf98]/35 bg-[#d4af37]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#f2dfaa]">
              Transparent Update
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[#eef5f1]">
                <span>Raised</span>
                <span className="font-semibold">
                  {formatCurrency(amountRaised)} / {formatCurrency(phaseGoalAmount)}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#d4af37_0%,#f0dfaa_100%)] shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-1000"
                  style={{ width: `${raisedPct}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-[#eef5f1]">
                <span>Spent</span>
                <span className="font-semibold">
                  {formatCurrency(amountSpent)} / {formatCurrency(phaseGoalAmount)}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#83c6a3_0%,#d3f0df_100%)] transition-all duration-1000"
                  style={{ width: `${spentPct}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#e7d49c]">
                Goal
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                {formatCurrency(phaseGoalAmount)}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#e7d49c]">
                Raised
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                {formatCurrency(amountRaised)}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#e7d49c]">
                Remaining
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                {formatCurrency(remaining)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}