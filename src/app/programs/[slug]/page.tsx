import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramBySlug, programsData } from "@/data/programs";

type ProgramDetailPageProps = {
  params: {
    slug: string;
  };
};

function SectionDividerLeft() {
  return (
    <div className="flex items-center gap-2 pt-3">
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

export function generateStaticParams() {
  return programsData.map((program) => ({
    slug: program.slug,
  }));
}

export function generateMetadata({ params }: ProgramDetailPageProps) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: `${program.title} | Masjid Ballantyne`,
    description: program.shortDescription,
  };
}

export default function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="bg-[linear-gradient(180deg,#fcfaf4_0%,#ffffff_24%,#fbfaf6_100%)]">
      <section className="relative overflow-hidden border-b border-[#efe5c8]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ead7a3]/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-44 w-44 rounded-full bg-[#6fd7e6]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#67d4e4] sm:text-base">
              {program.heroEyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              {program.title}
            </h1>

            <SectionDividerLeft />

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#48515d] sm:text-lg">
              {program.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={program.registerHref}
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-[#c6a55c] via-[#e7d08a] to-[#c6a55c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(198,165,92,0.28)] transition hover:-translate-y-0.5 hover:from-[#b8964f] hover:via-[#dcc57c] hover:to-[#b8964f]"
              >
                {program.registerText}
              </Link>

              {program.whatsappHref ? (
                <Link
                  href={program.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#dcc892] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5b18] transition hover:bg-[#fff9e8]"
                >
                  {program.whatsappText ?? "Join WhatsApp"}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#eadfbe] bg-white shadow-[0_20px_52px_rgba(16,24,40,0.10)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#b9923f] via-[#f0dd9b] to-[#b9923f]" />
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="rounded-[24px] border border-[#eadfbe] bg-white p-6 shadow-[0_12px_32px_rgba(16,24,40,0.06)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c7a42]">
                About the Program
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                A meaningful space for faith and growth
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

              <div className="mt-5 space-y-4 text-[1rem] leading-8 text-[#48515d]">
                {program.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#eadfbe] bg-white p-6 shadow-[0_12px_32px_rgba(16,24,40,0.06)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c7a42]">
                What This Program Offers
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                Program highlights
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {program.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#efe4c2] bg-[#fffdf7] px-4 py-4 text-sm font-medium leading-7 text-[#3f4754]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[24px] border border-[#eadfbe] bg-white p-6 shadow-[0_12px_32px_rgba(16,24,40,0.06)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c7a42]">
                Schedule
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                Program structure
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

              <div className="mt-6 space-y-3">
                {program.schedule.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-[#efe4c2] bg-[#fffdf7] px-4 py-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#c6a55c] to-[#e7d08a] text-sm font-bold text-[#1a1a1a]">
                      {index + 1}
                    </div>
                    <p className="pt-0.5 text-sm leading-7 text-[#3f4754]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#eadfbe] bg-white p-6 shadow-[0_12px_32px_rgba(16,24,40,0.06)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c7a42]">
                Who It’s For
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                Intended audience
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

              <ul className="mt-6 space-y-3">
                {program.audience.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#efe4c2] bg-[#fffdf7] px-4 py-4 text-sm leading-7 text-[#3f4754]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-[#eadfbe] bg-[linear-gradient(180deg,#fffdf7_0%,#fff8e8_100%)] p-6 shadow-[0_12px_32px_rgba(16,24,40,0.06)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8c7a42]">
                Get Involved
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                Take the next step
              </h2>
              <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#c6a55c] to-[#e8d48f]" />

              <p className="mt-5 text-[1rem] leading-8 text-[#48515d]">
                We welcome individuals and families to connect with the masjid
                and become part of a nurturing Islamic environment.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={program.registerHref}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-[#c6a55c] via-[#e7d08a] to-[#c6a55c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(198,165,92,0.28)] transition hover:-translate-y-0.5 hover:from-[#b8964f] hover:via-[#dcc57c] hover:to-[#b8964f]"
                >
                  {program.registerText}
                </Link>

                {program.whatsappHref ? (
                  <Link
                    href={program.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#dcc892] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#7a5b18] transition hover:bg-[#fff9e8]"
                  >
                    {program.whatsappText ?? "Join WhatsApp"}
                  </Link>
                ) : null}

                <Link
                  href="/programs"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-[#e7dcc0] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#444] transition hover:bg-[#faf7ef]"
                >
                  Back to All Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}