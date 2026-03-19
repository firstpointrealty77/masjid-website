import Link from "next/link";

type ComingSoonPageProps = {
  searchParams?: {
    program?: string;
    action?: string;
  };
};

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-2 pt-3">
      <span className="h-px w-16 bg-[#d4b46a]/55 sm:w-20" />
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4b46a]" />
        <span className="h-2 w-2 rounded-full bg-[#d4b46a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d4b46a]" />
        <span className="h-2 w-2 rounded-full bg-[#d4b46a]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4b46a]" />
      </div>
      <span className="h-px w-16 bg-[#d4b46a]/55 sm:w-20" />
    </div>
  );
}

function formatProgramName(value?: string) {
  if (!value) return "this program";

  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function ProgramsComingSoonPage({
  searchParams,
}: ComingSoonPageProps) {
  const programName = formatProgramName(searchParams?.program);

  const action =
    searchParams?.action === "join"
      ? "Joining"
      : searchParams?.action === "learn"
      ? "Access"
      : "Registration";

  const whatsappInvite =
    "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f5ef_0%,#fcfbf7_40%,#f7f5ef_100%)]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,179,106,0.08),transparent_42%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c48d]/45 to-transparent" />
          <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-[#e7d08a]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-var(--header-h,88px))] w-full max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="coming-card w-full overflow-hidden rounded-[32px] border border-[#eadfbe] bg-white shadow-[0_24px_70px_rgba(16,24,40,0.10)]">
            <div className="gold-bar h-1 w-full bg-[linear-gradient(90deg,#d4b46a_0%,#f0ddb0_50%,#c89a43_100%)]" />

            <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,74,67,0.18),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(212,180,106,0.22),transparent_26%)]" />
              </div>

              <div className="mx-auto max-w-3xl text-center">
                <p className="fade-up text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a24c] sm:text-[11px]">
                  Masjid Ballantyne
                </p>

                <h1 className="fade-up delay-1 mt-3 text-[2.2rem] font-semibold leading-[1.05] tracking-tight text-[#0d4a43] sm:text-5xl lg:text-[3.5rem]">
                  {action} Coming Soon
                </h1>

                <div className="fade-up delay-2">
                  <SectionDivider />
                </div>

                <div className="fade-up delay-3 mt-6 rounded-[24px] border border-[#eadfbe] bg-[linear-gradient(180deg,#fffdf7_0%,#fff9ec_100%)] px-5 py-5 sm:px-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.20em] text-[#8c7a42]">
                    {programName}
                  </p>

                  <p className="mt-4 text-[1rem] leading-8 text-[#46515d] sm:text-[1.05rem]">
                    Alhamdulillah, this program is being prepared as part of the
                    future services of Masjid Ballantyne.
                  </p>

                  <p className="shimmer-text mt-4 text-[1rem] font-medium leading-8 text-[#0d4a43] sm:text-[1.05rem]">
                    Registration for this program will open once Masjid
                    Ballantyne begins full operations, InshaAllah.
                  </p>

                  <p className="mt-4 text-[1rem] leading-8 text-[#46515d] sm:text-[1.05rem]">
                    We appreciate your interest and support as we work to
                    establish a permanent house of Allah for prayer, learning,
                    and community.
                  </p>
                </div>

                <p className="fade-up delay-4 mt-6 text-sm leading-7 text-[#5f6b75] sm:text-base sm:leading-8">
                  Stay connected for updates and announcements as these programs
                  become available.
                </p>

                <div className="fade-up delay-5 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href={whatsappInvite}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-shine inline-flex min-h-[48px] items-center justify-center rounded-[14px] bg-gradient-to-r from-[#c6a55c] via-[#e7d08a] to-[#c6a55c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(198,165,92,0.24)] transition duration-300 hover:-translate-y-0.5"
                  >
                    Join WhatsApp Updates
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-[14px] border border-[#dcc892] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5b18] transition duration-300 hover:bg-[#fff9e8]"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="fade-up delay-6 mt-8">
                  <Link
                    href="/programs"
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a6a22] transition hover:text-[#0d4a43]"
                  >
                    Back to All Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .coming-card {
          animation: cardEntrance 0.9s ease-out both;
        }

        .gold-bar {
          position: relative;
          overflow: hidden;
        }

        .gold-bar::after {
          content: "";
          position: absolute;
          top: 0;
          left: -40%;
          width: 25%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.75),
            transparent
          );
          transform: skewX(-22deg);
          animation: topBarSweep 7s ease-in-out infinite;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeUp 0.7s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.08s;
        }

        .delay-2 {
          animation-delay: 0.16s;
        }

        .delay-3 {
          animation-delay: 0.24s;
        }

        .delay-4 {
          animation-delay: 0.32s;
        }

        .delay-5 {
          animation-delay: 0.4s;
        }

        .delay-6 {
          animation-delay: 0.48s;
        }

        .cta-shine {
          position: relative;
          overflow: hidden;
        }

        .cta-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -55%;
          width: 34%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 248, 219, 0.7),
            transparent
          );
          transform: skewX(-24deg);
          animation: ctaSweep 6s ease-in-out infinite;
        }

        .shimmer-text {
          position: relative;
        }

        .shimmer-text::after {
          content: "";
          position: absolute;
          inset: -3px -12px;
          background: linear-gradient(
            110deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 235, 180, 0.06) 46%,
            rgba(255, 215, 120, 0.22) 50%,
            rgba(255, 235, 180, 0.06) 54%,
            transparent 60%,
            transparent 100%
          );
          transform: translateX(-160%);
          border-radius: 999px;
          pointer-events: none;
          animation: lineGlow 8.5s ease-in-out infinite;
        }

        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes topBarSweep {
          0% {
            left: -40%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          20% {
            left: 135%;
            opacity: 0;
          }
          100% {
            left: 135%;
            opacity: 0;
          }
        }

        @keyframes ctaSweep {
          0% {
            left: -55%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          24% {
            left: 135%;
            opacity: 0;
          }
          100% {
            left: 135%;
            opacity: 0;
          }
        }

        @keyframes lineGlow {
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
          .coming-card,
          .fade-up,
          .gold-bar::after,
          .cta-shine::before,
          .shimmer-text::after {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}