"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X, Mail, BookOpen, FileText, ArrowUpRight } from "lucide-react";
import { spiritualTeam } from "@/data/spiritualTeam";

type Member = (typeof spiritualTeam)[number];

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function BioModal({
  member,
  onClose,
}: {
  member: Member | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!member) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [member, onClose]);

  if (!member) return null;

  const bioParagraphs = member.bio
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#031714]/70 px-4 py-8 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="spiritual-team-modal-title"
        className="relative w-full max-w-4xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#FFFDF7_0%,#FFF8EA_100%)] px-6 py-5 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B8891E]">
                Spiritual Team
              </p>
              <h2
                id="spiritual-team-modal-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-[#0A3A34] sm:text-3xl"
              >
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
                {member.role}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-50"
              aria-label="Close biography"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
          <div className="border-b border-slate-200 bg-[#F8FAFA] p-5 lg:border-b-0 lg:border-r">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[24px] bg-slate-100">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#dce9e4,#f7faf9)]" />
              )}
            </div>

            <div className="mt-4 space-y-3">
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex max-w-full items-start gap-2 break-all text-sm font-medium text-[#0A3A34] transition hover:text-[#0F766E]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#B8891E]" />
                  <span>{member.email}</span>
                </a>
              ) : null}

              {member.credentialsPdf ? (
                <a
                  href={member.credentialsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0A3A34] transition hover:text-[#0F766E]"
                >
                  <FileText className="h-4 w-4 shrink-0 text-[#B8891E]" />
                  <span>View Credentials PDF</span>
                </a>
              ) : null}
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-7">
            <div className="space-y-5 text-[16px] leading-8 text-slate-700">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamCard({
  member,
  onOpenBio,
  priority = false,
  featured = false,
}: {
  member: Member;
  onOpenBio: (member: Member) => void;
  priority?: boolean;
  featured?: boolean;
}) {
  const bioPreview = member.bio
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)[0];

  return (
    <article
      className={clsx(
        "group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)]",
        featured && "xl:col-span-2"
      )}
    >
      <div className={clsx("grid", featured ? "lg:grid-cols-[1fr_0.95fr]" : "")}>
        <div className="relative aspect-[4/4.15] overflow-hidden bg-[#EEF3F1]">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              priority={priority}
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes={
                featured
                  ? "(max-width: 1280px) 100vw, 640px"
                  : "(max-width: 1280px) 100vw, 560px"
              }
            />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#dce9e4,#f7faf9)]" />
          )}

          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(7,24,20,0.84),rgba(7,24,20,0.10))] p-5 sm:p-6">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
              Spiritual Team
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
              {member.name}
            </h2>

            <p className="mt-1 text-sm font-medium text-[#E0BC66] sm:text-base">
              {member.role}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          {featured && bioPreview ? (
            <p className="text-[16px] leading-8 text-slate-700">{bioPreview}</p>
          ) : null}

          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className={clsx(
                "inline-flex max-w-full items-start gap-2 break-all text-[15px] font-medium text-slate-600 transition hover:text-[#0A3A34]",
                featured ? "mt-5" : ""
              )}
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#B8891E]" />
              <span>{member.email}</span>
            </a>
          ) : null}

          <div className={clsx("flex flex-wrap gap-3", featured ? "mt-6" : "mt-5")}>
            <button
              type="button"
              onClick={() => onOpenBio(member)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0A3A34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C4A43]"
            >
              <BookOpen className="h-4 w-4" />
              View Bio
            </button>

            {member.credentialsPdf ? (
              <a
                href={member.credentialsPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                <FileText className="h-4 w-4" />
                Credentials PDF
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B8891E]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#0A3A34]">
        {title}
      </h2>
      <p className="mt-3 text-[15px] leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function SpiritualTeamPage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const sortedTeam = useMemo(
    () => [...spiritualTeam].sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    []
  );

  const featuredMember = sortedTeam.find((member) => member.featured);
  const regularMembers = sortedTeam.filter((member) => !member.featured);

  return (
    <main className="min-h-screen bg-[#F7F8F7] text-slate-900">
      <section className="border-b border-[#E7D8B1] bg-[linear-gradient(180deg,#FFFDF7_0%,#FFF8EA_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <p className="text-[13px] font-semibold tracking-[0.22em] text-[#B8891E] sm:text-[14px]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#D4A447] to-transparent" />

          <p className="mt-6 font-amiri text-[2rem] leading-[3.2rem] text-[#0A3A34] sm:text-[2.5rem] sm:leading-[3.9rem] lg:text-[3rem] lg:leading-[4.5rem]">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-[18px] italic leading-9 text-slate-600 sm:text-[19px]">
            “The best among you are those who learn the Qur’an and teach it.”
          </p>

          <p className="mt-3 text-[15px] font-medium text-[#B8891E]">
            — Prophet Muhammad ﷺ
          </p>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-[#0A3A34] sm:text-4xl lg:text-[3.15rem]">
            Spiritual Team
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-slate-600 sm:text-[16px]">
            Our spiritual team serves the Masjid through teaching, guidance, and
            care for the community, helping nurture faith, strengthen knowledge,
            and support lives rooted in remembrance of Allah.
          </p>
        </div>
      </section>

      <section
        id="team-grid"
        className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
      >
        <SectionIntro
          eyebrow="Imam & Scholars"
          title="Meet our spiritual team"
          description="Learn more about the teachers and spiritual leaders serving Ballantyne Islamic Center. Each member brings experience, knowledge, and dedication to the growth of the community."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {featuredMember ? (
            <TeamCard
              member={featuredMember}
              onOpenBio={setSelectedMember}
              priority
              featured
            />
          ) : null}

          {regularMembers.map((member, index) => (
            <TeamCard
              key={`${member.name}-${member.role}-${index}`}
              member={member}
              onOpenBio={setSelectedMember}
              priority={index < 1 && !featuredMember}
            />
          ))}
        </div>
      </section>

      <BioModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  );
}