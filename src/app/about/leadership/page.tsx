"use client";

import { Mail } from "lucide-react";
import { leadershipTeam } from "@/data/leadership";

type BoardCardProps = {
  name: string;
  role?: string;
  email?: string;
};

function SectionDivider() {
  return (
    <div className="mx-auto mt-4 flex items-center justify-center gap-2">
      <div className="h-px w-14 bg-[#0A3A34]/20 sm:w-20" />
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#0A3A34]/50" />
        <span className="h-2 w-2 rounded-full bg-[#0A3A34]/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0A3A34]/70" />
        <span className="h-3 w-3 rounded-full bg-[#0A3A34]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#0A3A34]/70" />
        <span className="h-2 w-2 rounded-full bg-[#0A3A34]/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#0A3A34]/50" />
      </div>
      <div className="h-px w-14 bg-[#0A3A34]/20 sm:w-20" />
    </div>
  );
}

function BoardCard({ name, role, email }: BoardCardProps) {
  return (
    <article className="group rounded-[26px] border border-[#E6E8E6] bg-white px-6 py-9 text-center shadow-[0_15px_40px_rgba(10,58,52,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(10,58,52,0.10)] sm:px-8">
      
      <h3 className="text-xl font-semibold uppercase tracking-[0.03em] text-[#0A3A34] sm:text-[1.9rem]">
        {name}
      </h3>

      <SectionDivider />

      <div className="mt-6 space-y-3">
        {role && (
          <p className="text-[15px] font-medium text-slate-600">
            {role}
          </p>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="mx-auto inline-flex items-center gap-2 text-[15px] text-[#0A3A34] transition hover:text-[#DDB55A]"
          >
            <Mail className="h-4 w-4 text-[#DDB55A]" />
            {email}
          </a>
        )}
      </div>

    </article>
  );
}

export default function LeadershipPage() {

  const sortedLeadership = [...leadershipTeam].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  const topRow = sortedLeadership.slice(0,3);
  const remainingRows = sortedLeadership.slice(3);

  return (
    <main className="min-h-screen bg-[#F7F8F7]">

      {/* Hadith Hero */}
      <section className="border-b border-[#E6E8E6] bg-[#F5F1E8] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="font-amiri text-sm text-[#DDB55A]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <div className="mx-auto mt-4 h-px w-16 bg-[#DDB55A]" />

          <p className="mt-10 font-amiri text-3xl leading-relaxed text-[#0A3A34] lg:text-4xl">
            كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ
          </p>

          <p className="mt-8 italic text-slate-600">
            "Each of you is a shepherd and each of you is responsible for his flock."
          </p>

          <p className="mt-2 text-sm text-[#DDB55A]">
            Prophet Muhammad ﷺ — Bukhari & Muslim
          </p>

          <h1 className="mt-12 text-4xl font-semibold text-[#0A3A34]">
            Leadership of Ballantyne Islamic Center
          </h1>

          <p className="mt-4 text-slate-600">
            Leadership entrusted to guide the Masjid with responsibility,
            transparency, and sincere service to the community.
          </p>

        </div>
      </section>

      {/* Board Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#DDB55A]">
            Board & Leadership
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#0A3A34]">
            Board Members
          </h2>

          <SectionDivider />
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {topRow.map((member,index) => (
            <BoardCard
              key={index}
              name={member.name}
              role={member.role}
              email={member.email}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {remainingRows.map((member,index) => (
            <BoardCard
              key={index}
              name={member.name}
              role={member.role}
              email={member.email}
            />
          ))}
        </div>

      </section>

    </main>
  );
}