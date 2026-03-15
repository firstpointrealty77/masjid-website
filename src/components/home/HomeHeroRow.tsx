"use client";

import Link from "next/link";
import { PrayerTimesModule } from "@/components/home/PrayerTimesModule";
import { constructionProgressData } from "@/data/constructionProgress";

const HERO_MEDIA = {
  type: "image" as "image" | "video",
  imageSrc: "/media/hero/masjid-hero.png",
  videoSrc: "/media/hero/masjid-hero.mp4",
  posterSrc: "/media/hero/masjid-hero.png",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function HomeHeroRow() {
  const isVideo = HERO_MEDIA.type === "video";

  const raised = constructionProgressData.amountRaised;
  const goal = constructionProgressData.phaseGoalAmount;
  const remaining = Math.max(goal - raised, 0);

  const progress = Math.min(100, Math.max(0, (raised / goal) * 100));

  return (
    <section className="relative bg-[#f7f5ef]">
      <div className="relative w-full">
        <div className="relative lg:min-h-[calc(100vh-var(--header-h,88px))]">
          {/* MOBILE */}
          <div className="block lg:hidden">
            <div className="relative h-[74vh] min-h-[600px] w-full overflow-hidden">
              {isVideo ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={HERO_MEDIA.posterSrc}
                >
                  <source src={HERO_MEDIA.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="absolute inset-0 cinematic-zoom">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_MEDIA.imageSrc}')` }}
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,24,0.30)_0%,rgba(4,14,24,0.32)_26%,rgba(4,14,24,0.78)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.24)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(214,179,106,0.08),transparent_42%)]" />
              <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(10,58,52,0.24),transparent)]" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5">
                <div className="mx-auto max-w-[26rem] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,25,21,0.86),rgba(8,25,21,0.72))] px-4 py-4 backdrop-blur-[7px] shadow-[0_18px_50px_rgba(0,0,0,0.26)] ring-1 ring-white/6">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="founding-badge inline-flex items-center rounded-full border border-[#e8c979]/30 bg-[#d6b36a]/10 px-3 py-1">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f2d79c]">
                        Founding Donor
                      </span>
                    </div>

                    <div className="inline-flex rounded-full border border-[#d6b36a]/28 bg-[#d6b36a]/10 px-3 py-1">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e8cb8a]">
                        {constructionProgressData.phaseLabel}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="arabic-verse arabic-verse-mobile text-[#ecd7a1]">
                      ﴿ مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا ﴾
                    </div>

                    <p className="english-verse english-verse-mobile mt-2 text-[#f1dfb0]">
                      “Who is it that will lend to Allah a goodly loan?”
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#d6b36a]/90">
                      Qur&apos;an 2:245
                    </p>
                  </div>

                  <h1 className="mt-3 text-[30px] font-semibold leading-[1.08] tracking-tight text-white">
                    Help Build a
                    <span className="block text-[#f4e1b0]">House of Allah</span>
                  </h1>

                  <p className="mt-3 text-[14px] leading-6 text-white/84">
                    Support Phase 1 construction for Masjid Ballantyne and help
                    establish a place for prayer, learning, and community for
                    generations to come.
                  </p>

                  <div className="mt-4 rounded-[20px] border border-white/10 bg-white/[0.03] px-3 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#ecd7a1]">
                        {constructionProgressData.phaseLabel} Construction Goal
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                        {Math.round(progress)}%
                      </span>
                    </div>

                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="progress-fill h-full rounded-full bg-[linear-gradient(90deg,#d6b36a_0%,#f1dfb0_50%,#c89a43_100%)]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-3 text-[11px]">
                      <span className="text-[#f4e1b0]">
                        {formatCurrency(raised)} raised
                      </span>
                      <span className="text-white/70">
                        of {formatCurrency(goal)}
                      </span>
                    </div>

                    <div className="mt-3 rounded-[14px] border border-[#e7c978]/16 bg-black/10 px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f1dfb0]">
                        {formatCurrency(remaining)} still needed
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-white/72">
                        Help complete Phase 1 and establish a permanent house of
                        Allah for the community.
                      </p>
                    </div>

                    <div className="mt-3">
                      <Link
                        href="/construction-progress"
                        className="pdf-btn group relative inline-flex min-h-[42px] w-full items-center justify-center overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f3dfad] transition-all duration-300 hover:border-[#e7c978]/30 hover:bg-white/[0.07]"
                      >
                        <span className="pdf-shine absolute inset-0 overflow-hidden rounded-[16px]" />
                        <span className="relative z-10">
                          View Phase 1 Progress
                        </span>
                      </Link>
                    </div>
                  </div>

                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#ecd7a1]/95">
                    Help secure the first permanent masjid in Ballantyne
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <Link
                      href="/donate"
                      className="donate-btn group relative inline-flex min-h-[46px] items-center justify-center overflow-hidden rounded-[18px] border border-[#e5c57a]/30 bg-[linear-gradient(180deg,rgba(232,206,138,0.22),rgba(214,179,106,0.14))] px-5 py-3 text-sm font-semibold text-[#f7ebc8] shadow-[0_12px_32px_rgba(0,0,0,0.20)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f0d897]/45 hover:bg-[linear-gradient(180deg,rgba(232,206,138,0.30),rgba(214,179,106,0.18))]"
                    >
                      <span className="shine-layer absolute inset-0 overflow-hidden rounded-[18px]" />
                      <span className="relative z-10">Donate Now</span>
                    </Link>

                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                      Sadaqah Jariyah
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f7f5ef] px-0 pb-6 pt-3">
              <div className="mx-auto w-full">
                <div className="[&>aside]:w-full [&>aside]:max-w-none [&>aside]:rounded-none [&>aside]:shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:[&>aside]:mx-3 sm:[&>aside]:rounded-[28px]">
                  <PrayerTimesModule />
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative min-h-[calc(100vh-var(--header-h,88px))] w-full overflow-hidden">
              {isVideo ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={HERO_MEDIA.posterSrc}
                >
                  <source src={HERO_MEDIA.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="absolute inset-0 cinematic-zoom">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_MEDIA.imageSrc}')` }}
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,24,0.38)_0%,rgba(4,14,24,0.28)_34%,rgba(4,14,24,0.14)_58%,rgba(4,14,24,0.34)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(0,0,0,0.18),transparent_34%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(212,164,71,0.10),transparent_28%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.18)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(10,58,52,0.22),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />

              <div className="relative z-10 flex min-h-[calc(100vh-var(--header-h,88px))] items-center justify-between gap-8 px-8 pr-10 xl:px-14 xl:pr-16 2xl:px-20">
                <div className="max-w-[590px] flex-1">
                  <div className="w-full rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,25,21,0.80),rgba(8,25,21,0.62))] px-8 py-8 backdrop-blur-[8px] shadow-[0_28px_90px_rgba(0,0,0,0.24)] ring-1 ring-white/6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="founding-badge inline-flex items-center rounded-full border border-[#e8c979]/30 bg-[#d6b36a]/10 px-4 py-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.30em] text-[#f2d79c]">
                          Founding Donor
                        </span>
                      </div>

                      <div className="inline-flex rounded-full border border-[#d6b36a]/28 bg-[#d6b36a]/10 px-4 py-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e8cb8a]">
                          {constructionProgressData.phaseLabel} Construction
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="arabic-verse text-[#ecd7a1]">
                        ﴿ مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا ﴾
                      </div>

                      <p className="english-verse mt-3 text-lg text-[#f1dfb0]">
                        “Who is it that will lend to Allah a goodly loan?”
                      </p>

                      <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[#d6b36a]/92">
                        Qur&apos;an 2:245
                      </p>
                    </div>

                    <h1 className="mt-5 text-5xl font-semibold leading-[1.04] tracking-tight text-white xl:text-6xl">
                      Help Build a
                      <span className="block text-[#f5e3b3]">
                        House of Allah
                      </span>
                    </h1>

                    <p className="mt-6 max-w-[510px] text-lg leading-8 text-white/84 xl:text-[19px]">
                      Support Phase 1 construction for Masjid Ballantyne and
                      help establish a place for prayer, learning, and community
                      for generations to come.
                    </p>

                    <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ecd7a1]">
                          {constructionProgressData.phaseLabel} Construction Goal
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                          {Math.round(progress)}%
                        </span>
                      </div>

                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="progress-fill h-full rounded-full bg-[linear-gradient(90deg,#d6b36a_0%,#f1dfb0_50%,#c89a43_100%)]"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-4 text-sm">
                        <span className="text-[#f4e1b0]">
                          {formatCurrency(raised)} raised
                        </span>
                        <span className="text-white/70">
                          of {formatCurrency(goal)}
                        </span>
                      </div>

                      <div className="mt-4 rounded-[16px] border border-[#e7c978]/16 bg-black/10 px-4 py-3">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f1dfb0]">
                          {formatCurrency(remaining)} still needed
                        </p>
                        <p className="mt-1.5 text-sm leading-6 text-white/72">
                          Help complete Phase 1 and establish a permanent house
                          of Allah for prayer, learning, and community.
                        </p>
                      </div>

                      <div className="mt-4">
                        <Link
                          href="/construction-progress"
                          className="pdf-btn group relative inline-flex min-h-[46px] w-full items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3dfad] transition-all duration-300 hover:border-[#e7c978]/30 hover:bg-white/[0.07]"
                        >
                          <span className="pdf-shine absolute inset-0 overflow-hidden rounded-[18px]" />
                          <span className="relative z-10">
                            View Phase 1 Progress
                          </span>
                        </Link>
                      </div>
                    </div>

                    <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.24em] text-[#ecd7a1]/95">
                      Help secure the first permanent masjid in Ballantyne
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href="/donate"
                        className="donate-btn group relative inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-[20px] border border-[#e5c57a]/28 bg-[linear-gradient(180deg,rgba(232,206,138,0.22),rgba(214,179,106,0.14))] px-8 py-3 text-base font-semibold text-[#f7ebc8] shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f0d897]/44 hover:bg-[linear-gradient(180deg,rgba(232,206,138,0.30),rgba(214,179,106,0.18))]"
                      >
                        <span className="shine-layer absolute inset-0 overflow-hidden rounded-[20px]" />
                        <span className="relative z-10 tracking-[0.02em]">
                          Donate Now
                        </span>
                      </Link>

                      <span className="text-sm uppercase tracking-[0.18em] text-white/64">
                        Sadaqah Jariyah • Lasting Reward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[390px] xl:max-w-[430px] 2xl:max-w-[460px]">
                  <div className="[&>aside]:shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
                    <PrayerTimesModule />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent lg:block" />
      </div>

      <style jsx global>{`
        .cinematic-zoom {
          position: absolute;
          inset: 0;
          transform: scale(1);
          animation: cinematicZoom 16s ease-in-out infinite alternate;
          will-change: transform;
        }

        .donate-btn {
          animation: donatePulse 10s ease-in-out infinite;
        }

        .shine-layer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 244, 200, 0.45),
            transparent
          );
          transform: skewX(-25deg);
          animation: donateShine 6s ease-in-out infinite;
        }

        .pdf-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 36%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 244, 200, 0.25),
            transparent
          );
          transform: skewX(-25deg);
          animation: pdfShine 8s ease-in-out infinite;
        }

        .arabic-verse {
          position: relative;
          display: inline-block;
          font-size: 20px;
          line-height: 1.5;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-shadow: 0 1px 18px rgba(214, 179, 106, 0.1);
        }

        .arabic-verse-mobile {
          font-size: 15px;
          line-height: 1.55;
        }

        .arabic-verse::after {
          content: "";
          position: absolute;
          inset: -6px -18px;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 38%,
            rgba(255, 245, 214, 0.04) 46%,
            rgba(255, 225, 150, 0.24) 50%,
            rgba(255, 245, 214, 0.06) 54%,
            transparent 62%,
            transparent 100%
          );
          transform: translateX(-160%);
          pointer-events: none;
          border-radius: 999px;
          mix-blend-mode: screen;
          animation: verseGlow 9s ease-in-out infinite;
        }

        .english-verse {
          position: relative;
          display: inline-block;
          line-height: 1.55;
        }

        .english-verse-mobile {
          font-size: 14px;
        }

        .english-verse::after {
          content: "";
          position: absolute;
          inset: -4px -16px;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 38%,
            rgba(255, 245, 214, 0.04) 46%,
            rgba(255, 225, 150, 0.26) 50%,
            rgba(255, 245, 214, 0.06) 54%,
            transparent 62%,
            transparent 100%
          );
          transform: translateX(-160%);
          pointer-events: none;
          border-radius: 999px;
          mix-blend-mode: screen;
          animation: englishVerseGlow 8s ease-in-out infinite;
        }

        .founding-badge {
          backdrop-filter: blur(6px);
        }

        .progress-fill {
          box-shadow: 0 0 18px rgba(214, 179, 106, 0.26);
        }

        @keyframes cinematicZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.06);
          }
        }

        @keyframes donatePulse {
          0% {
            box-shadow: 0 18px 50px rgba(214, 179, 106, 0.08);
          }
          5% {
            box-shadow: 0 22px 60px rgba(214, 179, 106, 0.18);
          }
          10% {
            box-shadow: 0 18px 50px rgba(214, 179, 106, 0.08);
          }
          100% {
            box-shadow: 0 18px 50px rgba(214, 179, 106, 0.08);
          }
        }

        @keyframes donateShine {
          0% {
            left: -60%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          25% {
            left: 140%;
            opacity: 0;
          }
          100% {
            left: 140%;
            opacity: 0;
          }
        }

        @keyframes pdfShine {
          0% {
            left: -60%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          26% {
            left: 140%;
            opacity: 0;
          }
          100% {
            left: 140%;
            opacity: 0;
          }
        }

        @keyframes verseGlow {
          0% {
            transform: translateX(-160%);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          24% {
            transform: translateX(160%);
            opacity: 0;
          }
          100% {
            transform: translateX(160%);
            opacity: 0;
          }
        }

        @keyframes englishVerseGlow {
          0% {
            transform: translateX(-160%);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          24% {
            transform: translateX(160%);
            opacity: 0;
          }
          100% {
            transform: translateX(160%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cinematic-zoom,
          .donate-btn,
          .shine-layer::before,
          .pdf-shine::before,
          .arabic-verse::after,
          .english-verse::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}