import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Users, ShieldCheck, HeartHandshake, CalendarDays } from "lucide-react";
import { leadershipTeam } from "@/data/leadership";

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type LeadershipCardProps = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  term?: string;
  priority?: boolean;
};

function LeadershipCard({
  name,
  role,
  bio,
  image,
  email,
  term,
  priority = false,
}: LeadershipCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-[4/4.15] overflow-hidden bg-[#EEF3F1]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            priority={priority}
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#dce9e4,#f7faf9)]" />
        )}

        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(7,24,20,0.78),rgba(7,24,20,0.08))] p-5 sm:p-6">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
            Leadership
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            {name}
          </h2>

          <p className="mt-1 text-sm font-medium text-[#DDB55A]">{role}</p>
        </div>
      </div>

      <div className="p-6">
        {term ? (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0A3A34]/10 bg-[#F8FAFA] px-3.5 py-2 text-xs font-semibold text-[#0A3A34]">
            <CalendarDays className="h-3.5 w-3.5 text-[#B8891E]" />
            {term}
          </div>
        ) : null}

        <p className="text-[15px] leading-8 text-slate-600">{bio}</p>

        {email ? (
          <a
            href={`mailto:${email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#0F766E]/30 hover:bg-teal-50 hover:text-[#0A3A34]"
          >
            <Mail className="h-4 w-4 text-[#B8891E]" />
            {email}
          </a>
        ) : null}
      </div>
    </article>
  );
}

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A3A34]/6 text-[#0A3A34]">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-[#0A3A34]">{title}</h3>
      <p className="mt-2 text-[15px] leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-[#FCFCFB] px-5 py-5 text-center">
      <div className="text-2xl font-semibold tracking-tight text-[#0A3A34]">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function LeadershipPage() {
  const sortedLeadership = [...leadershipTeam].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  return (
    <main className="min-h-screen bg-[#F7F8F7] text-slate-900">
      {/* Leadership Hadith Hero */}
      <section className="relative overflow-hidden bg-[#0A3A34] py-12 sm:py-14 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_58%)] opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#DDB55A]/70 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DDB55A]/90">
            Prophetic Guidance on Leadership
          </p>

          <p className="mt-5 font-amiri text-2xl leading-[1.9] text-white sm:text-3xl lg:text-4xl">
            كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ
          </p>

          <div className="mx-auto mt-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#DDB55A] to-transparent" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/88 sm:text-lg">
            “Each of you is a shepherd and each of you is responsible for his flock.”
          </p>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DDB55A]">
            Prophet Muhammad ﷺ — Bukhari &amp; Muslim
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8891E]">
                Leadership
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0A3A34] sm:text-5xl lg:text-6xl">
                Leadership serving with trust, responsibility, and care for the community.
              </h1>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600 sm:text-lg">
                Our leadership is entrusted with helping guide Masjid Ballantyne
                with integrity, transparency, and sincere service. Their
                responsibility is to support worship, governance, education,
                community development, and long-term benefit for future generations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#leadership-grid"
                  className="inline-flex items-center rounded-full bg-[#0A3A34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C4A43]"
                >
                  Meet the Leadership
                </a>

                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to About
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B8891E]">
                Governance Focus
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A3A34]">
                Building trust through service and accountability
              </h2>

              <p className="mt-4 text-[15px] leading-8 text-slate-600">
                A strong leadership structure helps preserve the Masjid’s mission,
                maintain sound governance, and support a stable future for worship,
                learning, family life, and community benefit.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <StatCard
                  value={String(sortedLeadership.length)}
                  label="Leaders"
                />
                <StatCard
                  value="Faith"
                  label="Mission"
                />
                <StatCard
                  value="Trust"
                  label="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <ValueCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Trust & Accountability"
            text="Leadership is entrusted with preserving the Masjid’s mission, governance, financial care, and organizational stability with responsibility and transparency."
          />

          <ValueCard
            icon={<HeartHandshake className="h-5 w-5" />}
            title="Service to the Community"
            text="Every decision should support worshippers, families, youth, elders, and future generations through sincere service and thoughtful planning."
          />

          <ValueCard
            icon={<Users className="h-5 w-5" />}
            title="Shared Vision"
            text="The leadership team works together to strengthen unity, support growth, and establish a lasting house of Allah for the Ballantyne community."
          />
        </div>
      </section>

      <section
        id="leadership-grid"
        className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8"
      >
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B8891E]">
              Board & Leadership
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#0A3A34]">
              Meet our leadership team
            </h2>
          </div>
        </div>

        <div
          className={clsx(
            "grid gap-6",
            sortedLeadership.length <= 2
              ? "md:grid-cols-2"
              : sortedLeadership.length === 3
              ? "md:grid-cols-2 xl:grid-cols-3"
              : "sm:grid-cols-2 xl:grid-cols-4"
          )}
        >
          {sortedLeadership.map((member, index) => (
            <LeadershipCard
              key={`${member.name}-${member.role}-${index}`}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              email={member.email}
              term={member.term}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B8891E]">
              Leadership Commitment
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A3A34]">
              Building a strong foundation for the Masjid and the generations to come
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              Our leadership aims to build a Masjid that reflects faith, dignity,
              sound governance, and community benefit. With Allah’s help, this
              effort is intended to become a lasting source of worship, learning,
              guidance, and sadaqah jariyah for generations to come.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Through careful stewardship, transparent decision-making, and sincere
              service, the leadership team seeks to support a welcoming Masjid for
              families, youth, elders, and the broader community.
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFA] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B8891E]">
              Learn More
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A3A34]">
              Governance and community standards
            </h3>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Review the Masjid’s by-laws, policies, and community guidance for a
              clearer understanding of governance, conduct, safety, and shared
              expectations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about/policies"
                className="inline-flex items-center rounded-full bg-[#0A3A34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C4A43]"
              >
                View Policies
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Contact Administration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}