import Link from "next/link";
import { leadershipTeam } from "@/data/leadership";
import { LeadershipCard } from "@/components/leadership/LeadershipCard";

export default function LeadershipPage() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#05211d_0%,#0a3a34_30%,#f7f4ea_30%,#fcfbf7_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,164,71,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute inset-x-0 top-[110px] h-px bg-[linear-gradient(90deg,transparent,rgba(212,164,71,0.65),transparent)]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8c48a]/30 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-[#f2df9b] backdrop-blur-md">
            Leadership
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Serving the Community with
            <span className="block bg-[linear-gradient(180deg,#f6e7b0_0%,#d4a447_100%)] bg-clip-text text-transparent">
              Trust, Vision, and Ihsan
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
            Our leadership team is committed to building a welcoming masjid rooted
            in prayer, service, transparency, and community care. We aim to serve
            with sincerity, uphold trust, and help establish a lasting house of
            Allah for present and future generations.
          </p>
        </div>
      </section>

      <section className="relative mx-auto -mt-2 max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-[32px] border border-[#eadbb3] bg-white/95 shadow-[0_25px_80px_rgba(10,58,52,0.14)] backdrop-blur-sm">
          <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#d4a447,transparent)]" />

          <div className="grid gap-0 lg:grid-cols-[1.05fr_1.3fr]">
            <div className="border-b border-[#efe7d0] bg-[linear-gradient(180deg,#fffdf8_0%,#f8f4e9_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b48a2c]">
                  Our Commitment
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b2f2a] sm:text-3xl">
                  Leadership grounded in amanah and service
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#35524c] sm:text-[15px]">
                  We believe masjid leadership is a trust. Our role is to support
                  the religious, educational, and community needs of families in
                  Ballantyne and surrounding areas with integrity, humility, and
                  excellence.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#eadbb3] bg-white px-4 py-4 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b48a2c]">
                      Faith-Centered
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#35524c]">
                      Decisions guided by Islamic values, community benefit, and
                      long-term responsibility.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#eadbb3] bg-white px-4 py-4 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b48a2c]">
                      Community Focused
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#35524c]">
                      Dedicated to serving families, youth, elders, and future
                      generations with care and balance.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] border border-[#d9c78f] bg-[linear-gradient(135deg,#0b3c36_0%,#082b27_100%)] p-5 text-white shadow-[0_18px_40px_rgba(10,58,52,0.24)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2df9b]">
                    Note
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    You can replace the placeholder names and roles below with your
                    real board members, shura members, imam, or executive team.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {leadershipTeam.map((leader) => (
                  <LeadershipCard key={leader.id} leader={leader} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[30px] border border-[#eadbb3] bg-[linear-gradient(180deg,#fffdf8_0%,#f6f1e5_100%)] px-6 py-8 shadow-[0_20px_55px_rgba(10,58,52,0.08)] sm:px-8 sm:py-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b48a2c]">
              Work With Us
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b2f2a] sm:text-3xl">
              Building a masjid for generations to come
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#3a5751] sm:text-[15px]">
              We welcome your du‘a, support, and involvement as we continue this
              journey. Together, with Allah’s help, we hope to establish a place of
              worship, learning, and community benefit that serves families for
              years to come.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#e7c76d_0%,#d4a447_45%,#b98622_100%)] px-6 py-3 text-sm font-semibold text-[#10241f] shadow-[0_14px_34px_rgba(212,164,71,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Support the Masjid
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[#d3c18c] bg-white px-6 py-3 text-sm font-semibold text-[#0b2f2a] transition-colors duration-200 hover:bg-[#fffaf0]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}