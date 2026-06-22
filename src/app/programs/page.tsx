import Link from "next/link";
import { programsData } from "@/data/programs";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-2 pt-3">
      <span className="h-px w-16 bg-[#8edbe4]/70 sm:w-20" />
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#6fd7e6]" />
        <span className="h-2 w-2 rounded-full bg-[#6fd7e6]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6fd7e6]" />
        <span className="h-2 w-2 rounded-full bg-[#6fd7e6]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#6fd7e6]" />
      </div>
      <span className="h-px w-16 bg-[#8edbe4]/70 sm:w-20" />
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_22%,#fbfaf6_100%)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#ead7a3]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#67d4e4] sm:text-base">
              Our Programs
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Programs That Build Faith, Knowledge, and Community
            </h1>
            <SectionDivider />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#4c5563] sm:text-lg">
              Explore our growing programs designed to serve families, youth,
              sisters, and new Muslims through learning, mentorship, and
              meaningful connection to the masjid.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programsData.map((program) => (
              <article
                key={program.slug}
                className="group overflow-hidden rounded-[24px] border border-[#eadfbe] bg-white shadow-[0_16px_42px_rgba(16,24,40,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(16,24,40,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c7a42]">
                    {program.heroEyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#111111]">
                    {program.title}
                  </h2>

                  <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

                  <p className="mt-5 text-[1rem] leading-8 text-[#3f4754]">
                    {program.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={program.href}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-gradient-to-r from-[#c6a55c] via-[#e7d08a] to-[#c6a55c] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(198,165,92,0.28)] transition duration-300 hover:-translate-y-0.5 hover:from-[#b8964f] hover:via-[#dcc57c] hover:to-[#b8964f]"
                    >
                      {program.ctaLabel}
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#dcc892] bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#7a5b18] transition hover:bg-[#fff9e8]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}