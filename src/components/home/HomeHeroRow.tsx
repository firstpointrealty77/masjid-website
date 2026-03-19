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

function CrescentIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M14.8 3.2c-4.5.6-8 4.5-8 9.2 0 5.1 4.1 9.2 9.2 9.2 2.3 0 4.4-.8 6-2.2-1 .2-1.9.3-2.8.3-6 0-10.9-4.9-10.9-10.9 0-2 .5-3.9 1.5-5.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeHeroRow() {
  const isVideo = HERO_MEDIA.type === "video";

  const raised = constructionProgressData.amountRaised;
  const goal = constructionProgressData.phaseGoalAmount;
  const remaining = Math.max(goal - raised, 0);
  const progress =
    goal > 0 ? Math.min(100, Math.max(0, (raised / goal) * 100)) : 0;

  return (
    <section className="relative bg-[#f7f5ef]">
      <div className="relative w-full">
        <div className="relative lg:min-h-[calc(100vh-var(--header-h,88px))]">
          {/* MOBILE */}
          <div className="block lg:hidden">
            <div className="relative h-[86vh] min-h-[735px] w-full overflow-hidden">
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

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,24,0.34)_0%,rgba(4,14,24,0.44)_22%,rgba(4,14,24,0.90)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.28)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(214,179,106,0.10),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_32%,rgba(0,0,0,0.24),transparent_36%)]" />
              <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(10,58,52,0.24),transparent)]" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4">
                <div className="mx-auto max-w-[26rem] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,25,21,0.92),rgba(8,25,21,0.79))] px-4 py-4 backdrop-blur-[10px] shadow-[0_24px_60px_rgba(0,0,0,0.34)] ring-1 ring-white/6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="coming-soon-badge inline-flex items-center gap-1.5 rounded-full border border-[#f0d897]/55 bg-[linear-gradient(180deg,rgba(240,216,151,0.18),rgba(214,179,106,0.08))] px-4 py-1.5 shadow-[0_0_22px_rgba(214,179,106,0.16),inset_0_1px_0_rgba(255,244,210,0.12)]">
                      <CrescentIcon className="h-3.5 w-3.5 text-[#f7e7b8] drop-shadow-[0_0_6px_rgba(240,216,151,0.35)]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f7e7b8]">
                        Masjid Coming Soon
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#f7e7b8]/72">
                    Construction starting soon • Be part of the first brick
                  </p>

                  <div className="headline-spotlight-mobile relative mt-3.5 rounded-[22px]">
                    <div className="ayah-wrap-mobile">
                      <div className="arabic-verse arabic-verse-mobile text-[#e8d4a1]/82">
                        ﴿ مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا ﴾
                      </div>

                      <p className="english-verse english-verse-mobile mt-1 text-[#ecd9aa]/74">
                        “Who is it that will lend to Allah a goodly loan?”
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.20em] text-[#d6b36a]/68">
                        Qur&apos;an 2:245
                      </p>
                    </div>

                    <h1 className="mt-3 text-[31px] font-semibold leading-[1.02] tracking-tight text-white">
                      Help Build a
                      <span className="block text-[#f4e1b0]">
                        House of Allah
                      </span>
                    </h1>

                    <p className="mt-2 text-[13px] leading-[1.68] text-white/86">
                      Support Phase 1 construction and help establish a place
                      for prayer, learning, and community.
                    </p>
                  </div>

                  <div className="mt-3.5 rounded-[18px] border border-white/10 bg-white/[0.03] px-3 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ecd7a1]">
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

                    <div className="mt-3 rounded-[15px] border border-[#e7c978]/24 bg-[linear-gradient(180deg,rgba(214,179,106,0.11),rgba(0,0,0,0.18))] px-3 py-3 text-center shadow-[0_0_22px_rgba(214,179,106,0.10)]">
                      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#f5e3b3]">
                        {formatCurrency(remaining)} still needed
                      </p>
                      <p className="mt-1 text-[11px] leading-[1.55] text-white/76">
                        Your contribution brings us closer to building this
                        masjid.
                      </p>
                    </div>

                    <div className="mt-3">
                      <Link
                        href="/construction-progress"
                        className="pdf-btn group relative inline-flex min-h-[42px] w-full items-center justify-center overflow-hidden rounded-[15px] border border-[#e7c978]/18 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f3dfad] transition-all duration-300 hover:border-[#e7c978]/30 hover:bg-white/[0.06]"
                      >
                        <span className="pdf-shine absolute inset-0 overflow-hidden rounded-[15px]" />
                        <span className="relative z-10">
                          View Phase 1 Progress
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-3.5">
                    <p className="text-center text-[11px] font-medium text-[#f5e3b3]">
                      Every donation is a Sadaqah Jariyah that lives forever
                    </p>

                    <p className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-[#ecd7a1]/90">
                      Be among the first to build this masjid
                    </p>

                    <div className="mt-2.5 flex flex-col items-center gap-2.5">
                      <Link
                        href="/donate"
                        className="donate-btn group relative inline-flex min-h-[50px] w-full items-center justify-center overflow-hidden rounded-[19px] border border-[#f0d897]/58 bg-[linear-gradient(180deg,#f4dfa4_0%,#dbba6c_50%,#b8892c_100%)] px-5 py-3 text-base font-semibold text-[#1f1808] shadow-[0_18px_40px_rgba(214,179,106,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f7e7b8]/74 hover:shadow-[0_24px_54px_rgba(214,179,106,0.30)] before:absolute before:inset-0 before:rounded-[19px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent)] before:opacity-40"
                      >
                        <span className="shine-layer absolute inset-0 overflow-hidden rounded-[19px]" />
                        <span className="relative z-10">Donate Now</span>
                      </Link>

                      <span className="text-[10px] uppercase tracking-[0.16em] text-white/62">
                        Sadaqah Jariyah
                      </span>
                    </div>
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

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,24,0.46)_0%,rgba(4,14,24,0.36)_34%,rgba(4,14,24,0.16)_58%,rgba(4,14,24,0.34)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(0,0,0,0.18),transparent_34%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(212,164,71,0.10),transparent_28%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.18)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(10,58,52,0.22),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />

              <div className="relative z-10 flex min-h-[calc(100vh-var(--header-h,88px))] items-center justify-between gap-8 px-8 pr-10 xl:px-14 xl:pr-16 2xl:px-20">
                <div className="max-w-[610px] flex-1">
                  <div className="w-full rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,25,21,0.84),rgba(8,25,21,0.70))] px-8 py-8 backdrop-blur-[10px] shadow-[0_30px_90px_rgba(0,0,0,0.28)] ring-1 ring-white/6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="coming-soon-badge inline-flex items-center gap-2 rounded-full border border-[#f0d897]/55 bg-[linear-gradient(180deg,rgba(240,216,151,0.18),rgba(214,179,106,0.08))] px-[18px] py-1.5 shadow-[0_0_24px_rgba(214,179,106,0.18),inset_0_1px_0_rgba(255,244,210,0.14)]">
                        <CrescentIcon className="h-4 w-4 text-[#f7e7b8] drop-shadow-[0_0_7px_rgba(240,216,151,0.35)]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f7e7b8]">
                          Masjid Coming Soon
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#f7e7b8]/72">
                      Construction starting soon • Be part of the first brick
                    </p>

                    <div className="headline-spotlight relative mt-5 rounded-[24px]">
                      <div className="ayah-wrap">
                        <div className="arabic-verse text-[#e8d4a1]/82">
                          ﴿ مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا ﴾
                        </div>

                        <p className="english-verse mt-2 text-[15px] leading-[1.55] text-[#ecd9aa]/74">
                          “Who is it that will lend to Allah a goodly loan?”
                        </p>

                        <p className="mt-1.5 text-[10px] uppercase tracking-[0.24em] text-[#d6b36a]/68">
                          Qur&apos;an 2:245
                        </p>
                      </div>

                      <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight text-white xl:text-6xl">
                        Help Build a
                        <span className="block text-[#f5e3b3]">
                          House of Allah
                        </span>
                      </h1>

                      <p className="mt-4 max-w-[520px] text-lg leading-8 text-white/84 xl:text-[19px]">
                        Support Phase 1 construction and help establish a place
                        for prayer, learning, and community.
                      </p>
                    </div>

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

                      <div className="mt-4 rounded-[16px] border border-[#e7c978]/24 bg-[linear-gradient(180deg,rgba(214,179,106,0.11),rgba(0,0,0,0.18))] px-4 py-3 text-center shadow-[0_0_26px_rgba(214,179,106,0.12)]">
                        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#f5e3b3]">
                          {formatCurrency(remaining)} still needed
                        </p>
                        <p className="mt-1.5 text-sm text-white/76">
                          Your contribution brings us closer to building this
                          masjid.
                        </p>
                      </div>

                      <div className="mt-4">
                        <Link
                          href="/construction-progress"
                          className="pdf-btn group relative inline-flex min-h-[48px] w-full items-center justify-center overflow-hidden rounded-[18px] border border-[#e7c978]/18 bg-white/[0.03] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f3dfad] transition-all duration-300 hover:border-[#e7c978]/30 hover:bg-white/[0.06]"
                        >
                          <span className="pdf-shine absolute inset-0 overflow-hidden rounded-[18px]" />
                          <span className="relative z-10">
                            View Phase 1 Progress
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-[15px] font-medium text-[#f5e3b3]">
                        Every donation is a Sadaqah Jariyah that lives forever
                      </p>

                      <p className="mt-2 text-[12px] uppercase tracking-[0.22em] text-[#ecd7a1]/94">
                        Be among the first to build this masjid
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <Link
                          href="/donate"
                          className="donate-btn group relative inline-flex min-h-[60px] items-center justify-center overflow-hidden rounded-[20px] border border-[#f0d897]/58 bg-[linear-gradient(180deg,#f4dfa4_0%,#dbba6c_50%,#b8892c_100%)] px-9 py-3 text-base font-semibold text-[#1f1808] shadow-[0_18px_40px_rgba(214,179,106,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f7e7b8]/74 hover:shadow-[0_24px_58px_rgba(214,179,106,0.30)] before:absolute before:inset-0 before:rounded-[20px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent)] before:opacity-40"
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
          animation: donatePulse 9s ease-in-out infinite;
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
            rgba(255, 248, 210, 0.55),
            transparent
          );
          transform: skewX(-25deg);
          animation: donateShine 6.5s ease-in-out infinite;
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
            rgba(255, 244, 200, 0.18),
            transparent
          );
          transform: skewX(-25deg);
          animation: pdfShine 9s ease-in-out infinite;
        }

        .coming-soon-badge {
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
          box-shadow:
            0 0 0 1px rgba(240, 216, 151, 0.08),
            0 0 24px rgba(214, 179, 106, 0.14),
            inset 0 1px 0 rgba(255, 244, 210, 0.12);
          animation: badgePulse 6s ease-in-out infinite;
        }

        .coming-soon-badge::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            circle at 20% 50%,
            rgba(255, 236, 184, 0.12),
            transparent 55%
          );
          pointer-events: none;
        }

        .coming-soon-badge::after {
          content: "";
          position: absolute;
          top: 0;
          left: -72%;
          width: 34%;
          height: 100%;
          background: linear-gradient(
            115deg,
            transparent,
            rgba(255, 244, 210, 0.42),
            transparent
          );
          transform: skewX(-24deg);
          animation: badgeShine 7s ease-in-out infinite;
          pointer-events: none;
        }

        .headline-spotlight::before {
          content: "";
          position: absolute;
          inset: -36px -36px -18px -36px;
          background: radial-gradient(
            circle at 26% 28%,
            rgba(0, 0, 0, 0.32) 0%,
            rgba(0, 0, 0, 0.20) 28%,
            rgba(0, 0, 0, 0.07) 52%,
            transparent 74%
          );
          pointer-events: none;
          filter: blur(8px);
        }

        .headline-spotlight-mobile::before {
          content: "";
          position: absolute;
          inset: -26px -20px -10px -20px;
          background: radial-gradient(
            circle at 32% 24%,
            rgba(0, 0, 0, 0.30) 0%,
            rgba(0, 0, 0, 0.17) 30%,
            rgba(0, 0, 0, 0.06) 54%,
            transparent 74%
          );
          pointer-events: none;
          filter: blur(7px);
        }

        .ayah-wrap {
          max-width: 430px;
        }

        .ayah-wrap-mobile {
          max-width: 290px;
        }

        .arabic-verse {
          position: relative;
          display: inline-block;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 500;
          letter-spacing: 0.01em;
          text-shadow: 0 1px 14px rgba(214, 179, 106, 0.08);
        }

        .arabic-verse-mobile {
          font-size: 12px;
          line-height: 1.6;
        }

        .arabic-verse::after {
          content: "";
          position: absolute;
          inset: -3px -10px;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 42%,
            rgba(255, 230, 155, 0.10) 50%,
            transparent 58%,
            transparent 100%
          );
          transform: translateX(-180%);
          pointer-events: none;
          border-radius: 999px;
          mix-blend-mode: screen;
          animation: verseGlow 13s ease-in-out infinite;
        }

        .english-verse {
          position: relative;
          display: inline-block;
        }

        .english-verse-mobile {
          font-size: 12px;
          line-height: 1.55;
        }

        .english-verse::after {
          content: "";
          position: absolute;
          inset: -2px -10px;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 44%,
            rgba(255, 235, 175, 0.07) 50%,
            transparent 56%,
            transparent 100%
          );
          transform: translateX(-180%);
          pointer-events: none;
          border-radius: 999px;
          mix-blend-mode: screen;
          animation: englishVerseGlow 14s ease-in-out infinite;
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
            box-shadow:
              0 18px 40px rgba(214, 179, 106, 0.24),
              0 0 0 rgba(214, 179, 106, 0.08);
          }
          6% {
            box-shadow:
              0 22px 54px rgba(214, 179, 106, 0.32),
              0 0 28px rgba(214, 179, 106, 0.20);
          }
          12% {
            box-shadow:
              0 18px 40px rgba(214, 179, 106, 0.24),
              0 0 0 rgba(214, 179, 106, 0.08);
          }
          100% {
            box-shadow:
              0 18px 40px rgba(214, 179, 106, 0.24),
              0 0 0 rgba(214, 179, 106, 0.08);
          }
        }

        @keyframes badgePulse {
          0% {
            box-shadow:
              0 0 0 1px rgba(240, 216, 151, 0.08),
              0 0 24px rgba(214, 179, 106, 0.14),
              inset 0 1px 0 rgba(255, 244, 210, 0.12);
          }
          8% {
            box-shadow:
              0 0 0 1px rgba(240, 216, 151, 0.16),
              0 0 30px rgba(214, 179, 106, 0.24),
              0 0 12px rgba(255, 237, 184, 0.12),
              inset 0 1px 0 rgba(255, 244, 210, 0.18);
          }
          16% {
            box-shadow:
              0 0 0 1px rgba(240, 216, 151, 0.08),
              0 0 24px rgba(214, 179, 106, 0.14),
              inset 0 1px 0 rgba(255, 244, 210, 0.12);
          }
          100% {
            box-shadow:
              0 0 0 1px rgba(240, 216, 151, 0.08),
              0 0 24px rgba(214, 179, 106, 0.14),
              inset 0 1px 0 rgba(255, 244, 210, 0.12);
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
          24% {
            left: 140%;
            opacity: 0;
          }
          100% {
            left: 140%;
            opacity: 0;
          }
        }

        @keyframes badgeShine {
          0% {
            left: -72%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          28% {
            left: 145%;
            opacity: 0;
          }
          100% {
            left: 145%;
            opacity: 0;
          }
        }

        @keyframes verseGlow {
          0% {
            transform: translateX(-180%);
            opacity: 0;
          }
          10% {
            opacity: 0.55;
          }
          18% {
            transform: translateX(180%);
            opacity: 0;
          }
          100% {
            transform: translateX(180%);
            opacity: 0;
          }
        }

        @keyframes englishVerseGlow {
          0% {
            transform: translateX(-180%);
            opacity: 0;
          }
          10% {
            opacity: 0.45;
          }
          18% {
            transform: translateX(180%);
            opacity: 0;
          }
          100% {
            transform: translateX(180%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cinematic-zoom,
          .donate-btn,
          .coming-soon-badge,
          .shine-layer::before,
          .pdf-shine::before,
          .coming-soon-badge::after,
          .arabic-verse::after,
          .english-verse::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}