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

function MetricBlock({
  value,
  label,
  align = "left",
}: {
  value: string;
  label: string;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className="tabular-nums text-[15px] font-semibold leading-none text-[#f3dfad]">
        {value}
      </div>
      <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.70)]">
        {label}
      </div>
    </div>
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
            <div className="relative h-[82vh] min-h-[680px] w-full overflow-hidden pt-[88px]">
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

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,14,24,0.34)_0%,rgba(4,14,24,0.46)_24%,rgba(4,14,24,0.92)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.28)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(214,179,106,0.10),transparent_40%)]" />
              <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(10,58,52,0.24),transparent)]" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4">
                <div className="mx-auto max-w-[26rem] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,31,27,0.88),rgba(10,31,27,0.72))] px-4 py-4 backdrop-blur-[10px] shadow-[0_24px_60px_rgba(0,0,0,0.34)] ring-1 ring-white/6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="coming-soon-badge inline-flex items-center gap-1.5 rounded-full border border-[#e7cf93]/60 bg-[linear-gradient(180deg,rgba(240,216,151,0.18),rgba(214,179,106,0.08))] px-4 py-1.5 shadow-[0_0_22px_rgba(214,179,106,0.16),inset_0_1px_0_rgba(255,244,210,0.12)]">
                      <CrescentIcon className="h-3.5 w-3.5 text-[#f3dfad] drop-shadow-[0_0_6px_rgba(240,216,151,0.35)]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3dfad]">
                        Masjid Coming Soon
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#d8c48a]/95">
                    Construction starting soon
                  </p>

                  <div className="headline-spotlight-mobile relative mt-3 rounded-[22px]">
                    <div className="ayah-wrap-mobile">
                      <div className="arabic-verse arabic-verse-mobile text-[#e7d29b]/90">
                        ﴿ مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا ﴾
                      </div>

                      <p className="english-verse english-verse-mobile mt-1 text-[#e6d7b0]/88">
                        “Who is it that will lend to Allah a goodly loan?”
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.20em] text-[#d8c48a]/90">
                        Qur&apos;an 2:245
                      </p>
                    </div>

                    <h1 className="mt-3 text-[33px] font-semibold leading-[1.04] tracking-[-0.02em] text-[#f8fafc]">
                      Help Build a
                      <span className="block text-[#ead7a1]">
                        House of Allah
                      </span>
                    </h1>
                  </div>

                  <div className="mt-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-3 py-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ead7a1]">
                        {constructionProgressData.phaseLabel} Construction Goal
                      </span>
                      <span className="tabular-nums text-[12px] font-semibold uppercase tracking-[0.14em] text-white/90">
                        {Math.round(progress)}%
                      </span>
                    </div>

                    <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="progress-fill h-full rounded-full bg-[linear-gradient(90deg,#d6b36a_0%,#f1dfb0_50%,#c89a43_100%)]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="mt-3.5 grid grid-cols-2 gap-3 rounded-[14px] border border-white/8 bg-black/10 px-3 py-2.5">
                      <MetricBlock value={formatCurrency(raised)} label="Raised" />
                      <MetricBlock
                        value={formatCurrency(goal)}
                        label="Goal"
                        align="right"
                      />
                    </div>

                    <div className="funding-gap-panel relative mt-3.5 overflow-hidden rounded-[15px] border border-[#e7c978]/24 bg-[linear-gradient(180deg,rgba(214,179,106,0.11),rgba(0,0,0,0.18))] px-3 py-3.5 text-center shadow-[0_0_22px_rgba(214,179,106,0.10)]">
                      <div className="pointer-events-none absolute inset-x-[16%] top-[36%] h-12 rounded-full bg-[radial-gradient(circle,rgba(233,205,131,0.16)_0%,rgba(233,205,131,0.06)_36%,transparent_72%)] blur-xl" />

                      <p className="relative z-10 text-[9px] uppercase tracking-[0.18em] text-[#e7cf93]/90">
                        Current Funding Gap
                      </p>

                      <div className="relative z-10 mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#e7cf93]/70 to-transparent" />

                      <p className="relative z-10 mt-2 tabular-nums text-[15px] font-bold uppercase tracking-[0.12em] text-[#f3dfad]">
                        {formatCurrency(remaining)} still needed
                      </p>

                      <p className="relative z-10 mt-1.5 text-[11px] leading-[1.55] text-[rgba(255,255,255,0.82)]">
                        Be part of the first brick.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 flex flex-col gap-2.5">
                    <Link
                      href="/donate"
                      className="donate-btn group relative inline-flex min-h-[50px] w-full items-center justify-center overflow-hidden rounded-[19px] border border-[#f0d897]/58 bg-[linear-gradient(180deg,#f4dfa4_0%,#dbba6c_50%,#b8892c_100%)] px-5 py-3 text-base font-semibold text-[#1f1808] shadow-[0_18px_40px_rgba(214,179,106,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f7e7b8]/74 hover:shadow-[0_24px_54px_rgba(214,179,106,0.30)] before:absolute before:inset-0 before:rounded-[19px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent)] before:opacity-40"
                    >
                      <span className="shine-layer absolute inset-0 overflow-hidden rounded-[19px]" />
                      <span className="relative z-10">Donate Now</span>
                    </Link>

                    <Link
                      href="/construction-progress"
                      className="pdf-btn group relative inline-flex min-h-[42px] w-full items-center justify-center overflow-hidden rounded-[15px] border border-[#e7c978]/20 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f0ddb0] transition-all duration-300 hover:border-[#e7c978]/34 hover:bg-white/[0.06]"
                    >
                      <span className="pdf-shine absolute inset-0 overflow-hidden rounded-[15px]" />
                      <span className="relative z-10">View Phase 1 Progress</span>
                    </Link>

                    <div className="mx-auto flex items-center justify-center gap-2 rounded-full border border-[#e7cf93]/16 bg-white/[0.025] px-3 py-1.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e7cf93] shadow-[0_0_10px_rgba(231,207,147,0.65)]" />
                      <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[rgba(255,255,255,0.74)]">
                        Verified project planning underway
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

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,24,0.50)_0%,rgba(4,14,24,0.38)_34%,rgba(4,14,24,0.18)_58%,rgba(4,14,24,0.34)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(0,0,0,0.18),transparent_34%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(212,164,71,0.10),transparent_28%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.18)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(10,58,52,0.22),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />

              <div className="relative z-10 flex min-h-[calc(100vh-var(--header-h,88px))] items-center justify-between gap-8 px-8 pr-10 xl:px-14 xl:pr-16 2xl:px-20">
                <div className="max-w-[610px] flex-1">
                  <div className="w-full rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,31,27,0.78),rgba(10,31,27,0.62))] px-8 py-8 backdrop-blur-[10px] shadow-[0_30px_90px_rgba(0,0,0,0.28)] ring-1 ring-white/6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="coming-soon-badge inline-flex items-center gap-2 rounded-full border border-[#e7cf93]/60 bg-[linear-gradient(180deg,rgba(240,216,151,0.18),rgba(214,179,106,0.08))] px-[18px] py-1.5 shadow-[0_0_24px_rgba(214,179,106,0.18),inset_0_1px_0_rgba(255,244,210,0.14)]">
                        <CrescentIcon className="h-4 w-4 text-[#f3dfad] drop-shadow-[0_0_7px_rgba(240,216,151,0.35)]" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3dfad]">
                          Masjid Coming Soon
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#d8c48a]/95">
                      Construction starting soon • Be part of the first brick
                    </p>

                    <div className="headline-spotlight relative mt-4 rounded-[24px]">
                      <div className="ayah-wrap">
                        <div className="arabic-verse text-[#e7d29b]/90">
                          ﴿ مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا ﴾
                        </div>

                        <p className="english-verse mt-2 text-[14px] leading-[1.5] text-[#e6d7b0]/88">
                          “Who is it that will lend to Allah a goodly loan?”
                        </p>

                        <p className="mt-1.5 text-[10px] uppercase tracking-[0.24em] text-[#d8c48a]/90">
                          Qur&apos;an 2:245
                        </p>
                      </div>

                      <h1 className="mt-4 text-5xl font-semibold leading-[1.03] tracking-[-0.03em] text-[#f8fafc] xl:text-6xl">
                        Help Build a
                        <span className="block text-[#ead7a1]">
                          House of Allah
                        </span>
                      </h1>

                      <p className="mt-4 max-w-[500px] text-lg leading-[1.7] text-[rgba(255,255,255,0.86)] xl:text-[19px]">
                        Be among the first to build this masjid and earn Sadaqah
                        Jariyah.
                      </p>
                    </div>

                    <div className="mt-5 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ead7a1]">
                          {constructionProgressData.phaseLabel} Construction Goal
                        </span>
                        <span className="tabular-nums text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
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
                        <span className="tabular-nums text-[#f0ddb0]">
                          {formatCurrency(raised)} raised
                        </span>
                        <span className="tabular-nums text-[rgba(255,255,255,0.78)]">
                          of {formatCurrency(goal)}
                        </span>
                      </div>

                      <div className="funding-gap-panel relative mt-4 overflow-hidden rounded-[16px] border border-[#e7c978]/24 bg-[linear-gradient(180deg,rgba(214,179,106,0.11),rgba(0,0,0,0.18))] px-4 py-3 text-center shadow-[0_0_26px_rgba(214,179,106,0.12)]">
                        <div className="pointer-events-none absolute inset-x-[20%] top-[34%] h-14 rounded-full bg-[radial-gradient(circle,rgba(233,205,131,0.16)_0%,rgba(233,205,131,0.06)_36%,transparent_72%)] blur-xl" />

                        <p className="relative z-10 text-[10px] uppercase tracking-[0.18em] text-[#e7cf93]/90">
                          Current Funding Gap
                        </p>

                        <div className="relative z-10 mx-auto mt-2 h-px w-28 bg-gradient-to-r from-transparent via-[#e7cf93]/70 to-transparent" />

                        <p className="relative z-10 mt-2 tabular-nums text-[13px] font-bold uppercase tracking-[0.16em] text-[#f3dfad]">
                          {formatCurrency(remaining)} still needed
                        </p>

                        <p className="relative z-10 mt-1.5 text-sm text-[rgba(255,255,255,0.82)]">
                          Be part of the first brick.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <Link
                        href="/donate"
                        className="donate-btn group relative inline-flex min-h-[60px] items-center justify-center overflow-hidden rounded-[20px] border border-[#f0d897]/58 bg-[linear-gradient(180deg,#f4dfa4_0%,#dbba6c_50%,#b8892c_100%)] px-9 py-3 text-base font-semibold text-[#1f1808] shadow-[0_18px_40px_rgba(214,179,106,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f7e7b8]/74 hover:shadow-[0_24px_58px_rgba(214,179,106,0.30)] before:absolute before:inset-0 before:rounded-[20px] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent)] before:opacity-40"
                      >
                        <span className="shine-layer absolute inset-0 overflow-hidden rounded-[20px]" />
                        <span className="relative z-10 tracking-[0.02em]">
                          Donate Now
                        </span>
                      </Link>

                      <Link
                        href="/construction-progress"
                        className="pdf-btn group relative inline-flex min-h-[60px] items-center justify-center overflow-hidden rounded-[20px] border border-[#e7c978]/20 bg-white/[0.03] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f0ddb0] transition-all duration-300 hover:border-[#e7c978]/34 hover:bg-white/[0.06]"
                      >
                        <span className="pdf-shine absolute inset-0 overflow-hidden rounded-[20px]" />
                        <span className="relative z-10">View Phase 1 Progress</span>
                      </Link>
                    </div>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#e7cf93]/16 bg-white/[0.025] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e7cf93] shadow-[0_0_10px_rgba(231,207,147,0.65)]" />
                      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[rgba(255,255,255,0.74)]">
                        Verified project planning underway
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
          animation: donatePulse 9s ease-in-out infinite;
        }

        .funding-gap-panel {
          animation: fundingGapPulse 10s ease-in-out infinite;
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
          inset: -30px -30px -14px -30px;
          background: radial-gradient(
            circle at 26% 28%,
            rgba(0, 0, 0, 0.30) 0%,
            rgba(0, 0, 0, 0.18) 28%,
            rgba(0, 0, 0, 0.06) 52%,
            transparent 74%
          );
          pointer-events: none;
          filter: blur(8px);
        }

        .headline-spotlight-mobile::before {
          content: "";
          position: absolute;
          inset: -22px -18px -8px -18px;
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
          max-width: 410px;
        }

        .ayah-wrap-mobile {
          max-width: 280px;
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

        @keyframes fundingGapPulse {
          0% {
            box-shadow:
              0 0 22px rgba(214, 179, 106, 0.10),
              inset 0 1px 0 rgba(255, 244, 210, 0.02);
          }
          10% {
            box-shadow:
              0 0 30px rgba(214, 179, 106, 0.16),
              0 0 12px rgba(233, 205, 131, 0.06),
              inset 0 1px 0 rgba(255, 244, 210, 0.05);
          }
          20% {
            box-shadow:
              0 0 22px rgba(214, 179, 106, 0.10),
              inset 0 1px 0 rgba(255, 244, 210, 0.02);
          }
          100% {
            box-shadow:
              0 0 22px rgba(214, 179, 106, 0.10),
              inset 0 1px 0 rgba(255, 244, 210, 0.02);
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
          .funding-gap-panel,
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