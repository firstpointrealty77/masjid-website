import { constructionProgressData } from "@/data/constructionProgress";
import { formatCurrency } from "@/lib/formatCurrency";

function percent(value: number, total: number) {
  if (!total) return 0;
  return Math.min(100, Math.round((value / total) * 100));
}

export function FundingSummary() {
  const { phaseGoalAmount, amountRaised, amountSpent, phaseLabel } =
    constructionProgressData;

  const remainingToRaise = Math.max(phaseGoalAmount - amountRaised, 0);
  const remainingToSpend = Math.max(phaseGoalAmount - amountSpent, 0);
  const raisedPct = percent(amountRaised, phaseGoalAmount);
  const spentPct = percent(amountSpent, phaseGoalAmount);

  return (
    <section className="rounded-[28px] border border-[#eadbb3] bg-[linear-gradient(135deg,#112d20_0%,#173a2a_50%,#1c4632_100%)] px-5 py-7 text-white shadow-[0_18px_55px_rgba(0,0,0,0.16)] sm:px-7 sm:py-8">
      <div className="mb-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f0dfab]">
          Funding Snapshot
        </div>
        <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#fff8e8]">
          {phaseLabel} progress summary
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        <div className="rounded-[22px] border border-white/10 bg-white/6 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#e8d8a8]">
            Goal
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(phaseGoalAmount)}
          </div>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-white/6 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#e8d8a8]">
            Raised
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(amountRaised)}
          </div>
          <div className="mt-1 text-sm text-[#e3efe7]">{raisedPct}% of goal</div>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-white/6 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#e8d8a8]">
            Spent
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(amountSpent)}
          </div>
          <div className="mt-1 text-sm text-[#e3efe7]">{spentPct}% of goal</div>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-white/6 p-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#e8d8a8]">
            Still Needed
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(remainingToRaise)}
          </div>
          <div className="mt-1 text-sm text-[#e3efe7]">
            To fully fund this phase
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-[#edf4f0]">
            <span>Funds Raised</span>
            <span>{raisedPct}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#d4af37_0%,#eddca1_100%)] shadow-[0_0_20px_rgba(212,175,55,0.32)]"
              style={{ width: `${raisedPct}%` }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-[#edf4f0]">
            <span>Funds Utilized</span>
            <span>{spentPct}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#90d2ad_0%,#daf3e5_100%)]"
              style={{ width: `${spentPct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-[22px] border border-[#ead8a5]/20 bg-black/10 p-4 text-sm leading-7 text-[#edf3ef]">
        Transparent updates help build trust and show the community how each
        donation supports the masjid journey. Remaining usable allocation based
        on current spending is <span className="font-semibold text-white">{formatCurrency(remainingToSpend)}</span>.
      </div>
    </section>
  );
}