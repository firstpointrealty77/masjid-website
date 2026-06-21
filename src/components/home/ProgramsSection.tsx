"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { programsData } from "@/data/programs";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="h-px w-12 bg-[#d4b46a]/55 sm:w-14" />
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4b46a]" />
        <span className="h-2 w-2 rounded-full bg-[#d4b46a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d4b46a]" />
        <span className="h-2 w-2 rounded-full bg-[#d4b46a]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4b46a]" />
      </div>
      <span className="h-px w-12 bg-[#d4b46a]/55 sm:w-14" />
    </div>
  );
}

type ProgramCardProps = {
  program: (typeof programsData)[number];
  featured?: boolean;
  compact?: boolean;
  sidePeek?: boolean;
};

function ProgramCard({
  program,
  featured = false,
  compact = false,
  sidePeek = false,
}: ProgramCardProps) {
  const wrapperClass = featured
    ? "rounded-[28px] border border-[#eadfbe] bg-white shadow-[0_26px_70px_rgba(16,24,40,0.16)] ring-1 ring-[#fff7df]"
    : compact
    ? "rounded-[24px] border border-[#eadfbe] bg-white shadow-[0_14px_38px_rgba(16,24,40,0.08)] opacity-80"
    : "rounded-[26px] border border-[#eadfbe] bg-white shadow-[0_18px_46px_rgba(16,24,40,0.10)] opacity-95";

  const imageClass = featured
    ? "aspect-[16/10]"
    : compact
    ? "aspect-[16/12]"
    : "aspect-[16/10]";

  const titleClass = featured
    ? "mt-3 text-[1.95rem] font-bold leading-tight tracking-tight text-[#111111] xl:text-[2.1rem]"
    : compact
    ? "mt-3 text-[1rem] font-bold leading-tight tracking-tight text-[#111111]"
    : "mt-3 text-[1.22rem] font-bold leading-tight tracking-tight text-[#111111]";

  const descClass = featured
    ? "mt-5 text-[1rem] leading-8 text-[#3f4754]"
    : compact
    ? "mt-4 text-[0.88rem] leading-6 text-[#46515d]"
    : "mt-5 text-[0.96rem] leading-7 text-[#46515d]";

  const contentPad = featured ? "p-7 xl:p-8" : compact ? "p-5" : "p-6";

  return (
    <article
      className={[
        "group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5",
        wrapperClass,
        featured ? "scale-[1.02]" : compact ? "scale-[0.92]" : "scale-[0.97]",
        sidePeek ? "select-none" : "",
      ].join(" ")}
    >
      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-[linear-gradient(90deg,#d4b46a_0%,#f0ddb0_50%,#c89a43_100%)]" />

      <Link href={program.href} className="block">
        <div className={`relative overflow-hidden ${imageClass}`}>
          <img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.38)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_42%)]" />

          <div className="absolute left-4 top-4 z-20">
            <div className="coming-soon-badge inline-flex items-center rounded-full border border-[#f2dfab]/45 bg-[linear-gradient(180deg,rgba(232,206,138,0.24),rgba(198,165,92,0.18))] px-3 py-1.5 shadow-[0_10px_22px_rgba(0,0,0,0.16)] backdrop-blur-md">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fff3cf]">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className={contentPad}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.30em] text-[#8c7a42]">
          {program.heroEyebrow}
        </p>

        <Link href={program.href} className="block">
          <h3 className={titleClass}>{program.title}</h3>
        </Link>

        <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

        <p className={descClass}>{program.shortDescription}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={program.registerHref}
            className={[
              "inline-flex items-center justify-center rounded-[14px] bg-gradient-to-r from-[#c6a55c] via-[#e7d08a] to-[#c6a55c] font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(198,165,92,0.24)] transition duration-300 hover:-translate-y-0.5",
              compact ? "min-h-[42px] px-4 py-2 text-[11px]" : "min-h-[48px] px-6 py-3 text-sm",
            ].join(" ")}
          >
            {program.ctaLabel}
          </Link>

          <Link
            href="/contact"
            className={[
              "inline-flex items-center justify-center rounded-[14px] border border-[#dcc892] bg-white font-semibold uppercase tracking-[0.14em] text-[#7a5b18] transition duration-300 hover:bg-[#fff9e8]",
              compact ? "min-h-[42px] px-4 py-2 text-[11px]" : "min-h-[48px] px-6 py-3 text-sm",
            ].join(" ")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = programsData.length;

  const visible = useMemo(() => {
    const farPrev = (activeIndex - 2 + total) % total;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    const farNext = (activeIndex + 2) % total;

    return [
      {
        program: programsData[farPrev],
        compact: true,
        sidePeek: true,
        key: `far-prev-${farPrev}`,
      },
      {
        program: programsData[prev],
        key: `prev-${prev}`,
      },
      {
        program: programsData[activeIndex],
        featured: true,
        key: `active-${activeIndex}`,
      },
      {
        program: programsData[next],
        key: `next-${next}`,
      },
      {
        program: programsData[farNext],
        compact: true,
        sidePeek: true,
        key: `far-next-${farNext}`,
      },
    ];
  }, [activeIndex, total]);

  useEffect(() => {
    if (paused || total <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <section className="relative overflow-hidden bg-[#f7f5ef] py-7 lg:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,179,106,0.06),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c48d]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d9c48d]/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-8 2xl:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.38em] text-[#c9a24c]">
            Masjid Life
          </p>

          <h2 className="mt-1 text-[1.7rem] font-semibold leading-none tracking-tight text-[#0d4a43] whitespace-nowrap sm:text-[2rem] lg:text-[2.55rem]">
            Learn Your Deen
          </h2>

          <div className="mt-1.5">
            <SectionDivider />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:hidden">
          {programsData.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>

        {/* Desktop */}
        <div
          className="mt-7 hidden xl:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="mb-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous programs"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dcc892] bg-white text-[#8a6a22] shadow-[0_10px_24px_rgba(122,91,24,0.08)] transition hover:-translate-y-0.5 hover:bg-[#fff9ea]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next programs"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dcc892] bg-white text-[#8a6a22] shadow-[0_10px_24px_rgba(122,91,24,0.08)] transition hover:-translate-y-0.5 hover:bg-[#fff9ea]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-[0.68fr_0.94fr_1.18fr_0.94fr_0.68fr] items-center gap-4 2xl:gap-5">
            {visible.map((item) => (
              <div key={item.key}>
                <ProgramCard
                  program={item.program}
                  featured={item.featured}
                  compact={item.compact}
                  sidePeek={item.sidePeek}
                />
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {programsData.map((program, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={program.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${program.title}`}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300",
                    active
                      ? "w-8 bg-[#c89a43]"
                      : "w-2.5 bg-[#d9c48d]/70 hover:bg-[#c89a43]/70",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/programs"
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d9c48d] bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6a22] shadow-[0_8px_22px_rgba(122,91,24,0.08)] transition hover:-translate-y-0.5 hover:bg-[#fff9ea]"
          >
            View All Programs
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .coming-soon-badge {
          position: relative;
          overflow: hidden;
        }

        .coming-soon-badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: -55%;
          width: 36%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 248, 221, 0.72),
            transparent
          );
          transform: skewX(-22deg);
          animation: comingSoonSweep 7s ease-in-out infinite;
        }

        @keyframes comingSoonSweep {
          0% {
            left: -55%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          24% {
            left: 140%;
            opacity: 0;
          }
          100% {
            left: 140%;
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .coming-soon-badge::before {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}