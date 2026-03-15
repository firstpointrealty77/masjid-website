"use client";

import { constructionProgressData } from "@/data/constructionProgress";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function JourneyTimeline() {
  const stages = constructionProgressData.stages;
  const activeIndex = stages.findIndex((stage) => stage.status === "active");

  return (
    <section className="rounded-[28px] border border-[#eadbb3] bg-white px-5 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:px-7 sm:py-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a6b25]">
            Construction Journey
          </div>
          <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#153726]">
            Phase-by-phase progress line
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#4a5d53]">
            A premium journey line shows the current stage of construction, with
            completed steps illuminated and upcoming stages clearly visible.
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto pb-2">
        <div className="min-w-[980px]">
          <div className="relative px-6 pt-8">
            <div className="absolute left-6 right-6 top-[42px] h-[4px] rounded-full bg-[#e8ece9]" />

            <div
              className="absolute left-6 top-[42px] h-[4px] rounded-full bg-[linear-gradient(90deg,#c8a64a_0%,#ead9a3_100%)] shadow-[0_0_22px_rgba(212,175,55,0.28)] transition-all duration-1000"
              style={{
                width:
                  stages.length > 1
                    ? `calc(${(Math.max(activeIndex, 0) / (stages.length - 1)) * 100}% - 0px)`
                    : "0%",
              }}
            />

            <div
              className="absolute top-[30px] h-7 w-7 rounded-full border border-[#ecdca7] bg-[radial-gradient(circle_at_30%_30%,#fff8e7_0%,#e4c76d_55%,#b7881c_100%)] shadow-[0_0_24px_rgba(212,175,55,0.45)] animate-[journeyFloat_3.6s_ease-in-out_infinite]"
              style={{
                left:
                  stages.length > 1
                    ? `calc(${(Math.max(activeIndex, 0) / (stages.length - 1)) * 100}% + 1.5rem - 14px)`
                    : "1.5rem",
              }}
            />

            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}
            >
              {stages.map((stage) => {
                const isCompleted = stage.status === "completed";
                const isActive = stage.status === "active";

                return (
                  <div key={stage.id} className="relative text-center">
                    <div
                      className={cx(
                        "mx-auto flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300",
                        isCompleted &&
                          "border-[#d8ba63] bg-[linear-gradient(135deg,#d6b151_0%,#f0e1b0_100%)] text-[#3e2d04] shadow-[0_0_18px_rgba(212,175,55,0.28)]",
                        isActive &&
                          "border-[#0e4c35] bg-[#123f2d] text-white shadow-[0_0_0_6px_rgba(18,63,45,0.08)]",
                        !isCompleted &&
                          !isActive &&
                          "border-[#d8ddd9] bg-white text-[#68756e]"
                      )}
                    >
                      {stage.id}
                    </div>

                    <div className="mt-4">
                      <div className="text-sm font-semibold text-[#163625]">
                        {stage.title}
                      </div>
                      <div
                        className={cx(
                          "mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]",
                          isCompleted && "bg-[#f6edd1] text-[#8b6b1f]",
                          isActive && "bg-[#153827] text-[#f0e7ca]",
                          !isCompleted && !isActive && "bg-[#eff2f0] text-[#66756c]"
                        )}
                      >
                        {stage.target}
                      </div>
                      <p className="mt-3 text-xs leading-6 text-[#596960]">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes journeyFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}