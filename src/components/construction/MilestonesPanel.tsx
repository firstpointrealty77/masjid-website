import { constructionProgressData } from "@/data/constructionProgress";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MilestonesPanel() {
  const items = constructionProgressData.milestones;

  return (
    <section className="rounded-[28px] border border-[#eadbb3] bg-[linear-gradient(180deg,#fffdfa_0%,#fff9ef_100%)] px-5 py-7 shadow-[0_16px_46px_rgba(15,23,42,0.05)] sm:px-7 sm:py-8">
      <div className="mb-6">
        <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a6b25]">
          Milestones
        </div>
        <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#163625]">
          Key progress checkpoints
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={cx(
              "rounded-[22px] border p-5 transition-transform duration-300 hover:-translate-y-0.5",
              item.status === "done" &&
                "border-[#ead8a5] bg-white shadow-[0_10px_30px_rgba(212,175,55,0.08)]",
              item.status === "current" &&
                "border-[#14412e] bg-[linear-gradient(180deg,#143926_0%,#193f2e_100%)] text-white shadow-[0_14px_38px_rgba(18,63,45,0.18)]",
              item.status === "next" &&
                "border-[#e5e9e6] bg-white"
            )}
          >
            <div
              className={cx(
                "inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
                item.status === "done" && "bg-[#f7ecd1] text-[#8a6b22]",
                item.status === "current" && "bg-white/10 text-[#f2e4b8]",
                item.status === "next" && "bg-[#eef2ef] text-[#61726a]"
              )}
            >
              {item.status === "done"
                ? "Completed"
                : item.status === "current"
                ? "Current"
                : "Upcoming"}
            </div>

            <div
              className={cx(
                "mt-4 font-serif text-xl font-semibold",
                item.status === "current" ? "text-white" : "text-[#173726]"
              )}
            >
              {item.label}
            </div>

            <div
              className={cx(
                "mt-2 text-sm",
                item.status === "current" ? "text-[#e9f2ed]" : "text-[#5d6c64]"
              )}
            >
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}