import { constructionProgressData } from "@/data/constructionProgress";
import { formatCurrency } from "@/lib/formatCurrency";

export function SpendingBreakdown() {
  const categories = constructionProgressData.spending;
  const total = categories.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="rounded-[28px] border border-[#eadbb3] bg-white px-5 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:px-7 sm:py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a6b25]">
            Phase 1 Spending
          </div>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#153726]">
            Categorized allocation overview
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#4a5d53]">
            Phase 1 expenditures are organized by category so the community can
            see where funds are being used with clarity and trust.
          </p>
        </div>

        <div className="rounded-2xl border border-[#ead8a5] bg-[#fff8ea] px-4 py-3 text-right">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#8a6b22]">
            Total Accounted Spend
          </div>
          <div className="mt-1 text-xl font-semibold text-[#173726]">
            {formatCurrency(total)}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((item) => {
          const pct = total ? Math.round((item.amount / total) * 100) : 0;

          return (
            <div
              key={item.id}
              className="rounded-[22px] border border-[#eef1ef] bg-[#fcfdfc] p-4 shadow-[0_6px_18px_rgba(15,23,42,0.03)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-[#173726]">
                      {item.label}
                    </h3>
                    <span className="rounded-full bg-[#f6edd1] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6b22]">
                      {pct}%
                    </span>
                  </div>
                  {item.note ? (
                    <p className="mt-2 text-sm leading-6 text-[#5b6962]">
                      {item.note}
                    </p>
                  ) : null}
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#7e8b84]">
                    Amount
                  </div>
                  <div className="mt-1 text-lg font-semibold text-[#163625]">
                    {formatCurrency(item.amount)}
                  </div>
                </div>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#edf1ee]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#d4af37_0%,#eddba2_100%)] transition-all duration-1000"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}