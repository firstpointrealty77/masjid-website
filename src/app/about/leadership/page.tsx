import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { leadershipTeam } from "@/data/leadership";

const SITE_URL = "https://www.ballantynemasjid.org";
const PAGE_PATH = "/about/leadership";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SHARE_IMAGE = `${SITE_URL}/og/whatsapp-preview-v2.jpg`;

export const metadata: Metadata = {
  title: "Leadership",

  description:
    "Meet the board members serving Ballantyne Islamic Center with responsibility, transparency, consultation, and sincere service to the Muslim community.",

  alternates: {
    canonical: PAGE_PATH,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Leadership | Ballantyne Islamic Center",
    description:
      "Meet the board members serving Ballantyne Islamic Center and guiding its mission, governance, and permanent masjid vision.",
    url: PAGE_URL,
    siteName: "Ballantyne Islamic Center",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Leadership of Ballantyne Islamic Center",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Leadership | Ballantyne Islamic Center",
    description:
      "Meet the board members serving Ballantyne Islamic Center.",
    images: [SHARE_IMAGE],
  },
};

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto mt-5 flex items-center justify-center gap-2"
    >
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

function BoardCard({
  name,
  role,
  initials,
}: {
  name: string;
  role: string;
  initials?: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#E3E5E2] bg-white px-6 py-8 text-center shadow-[0_15px_40px_rgba(10,58,52,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#D4A447]/35 hover:shadow-[0_25px_60px_rgba(10,58,52,0.11)] sm:px-8 sm:py-9">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/60 to-transparent" />

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D8C48A]/60 bg-[linear-gradient(180deg,#0A3A34_0%,#062F2A_100%)] text-lg font-semibold tracking-[0.12em] text-[#F2DF9B] shadow-[0_12px_30px_rgba(10,58,52,0.18)] transition duration-300 group-hover:scale-105">
        {initials || "BIC"}
      </div>

      <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-[0.01em] text-[#0A3A34] sm:text-2xl">
        {name}
      </h2>

      <SectionDivider />

      <p className="mt-6 text-[15px] font-medium text-[#526B66]">
        {role}
      </p>
    </article>
  );
}

export default function LeadershipPage() {
  const sortedLeadership = [...leadershipTeam].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Leadership of Ballantyne Islamic Center",
    description:
      "Board members serving Ballantyne Islamic Center with responsibility, transparency, consultation, and sincere community service.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ballantyne Islamic Center",
    },
    about: {
      "@type": "ReligiousOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ballantyne Islamic Center",
      url: SITE_URL,
      member: sortedLeadership.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
      })),
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${SITE_URL}/about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Leadership",
          item: PAGE_URL,
        },
      ],
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F8F7] text-[#0A3A34]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hadith hero */}
      <section className="relative overflow-hidden border-b border-[#D9C898]/40 bg-[#F5F1E8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4A447]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#A7D7C5]/15 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/70 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-left text-sm text-[#56716B]"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#A97F29]"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true" className="text-[#0A3A34]/30">
                /
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#A97F29]"
                >
                  About
                </Link>
              </li>

              <li aria-hidden="true" className="text-[#0A3A34]/30">
                /
              </li>

              <li className="font-medium text-[#A97F29]">
                Leadership
              </li>
            </ol>
          </nav>

          <p
            dir="rtl"
            className="font-[family-name:var(--font-amiri)] text-xl leading-loose text-[#B0842D] sm:text-2xl"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#D4A447] to-transparent" />

          <blockquote
            dir="rtl"
            className="mx-auto mt-9 max-w-4xl font-[family-name:var(--font-amiri)] text-3xl leading-[1.8] text-[#0A3A34] sm:text-4xl"
          >
            كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ
          </blockquote>

          <p className="mx-auto mt-7 max-w-3xl font-[family-name:var(--font-lora)] text-base italic leading-8 text-[#536A65] sm:text-lg">
            “Each of you is a shepherd, and each of you is responsible for
            those under your care.”
          </p>

          <p className="mt-3 text-sm font-semibold text-[#A97F29]">
            Prophet Muhammad ﷺ — Sahih al-Bukhari and Sahih Muslim
          </p>

          <div className="mx-auto mt-12 inline-flex items-center gap-2 rounded-full border border-[#D4A447]/30 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#A97F29]">
            <ShieldCheck className="h-4 w-4" />
            Amanah and Service
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#0A3A34] sm:text-5xl lg:text-6xl">
            Leadership of Ballantyne Islamic Center
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#526B66] sm:text-lg">
            Leadership entrusted to guide the masjid with responsibility,
            transparency, consultation, and sincere service to the community.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0A3A34] text-[#F2DF9B] shadow-[0_14px_34px_rgba(10,58,52,0.18)]">
            <UsersRound className="h-6 w-6" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-[#B0842D]">
            Board and Leadership
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-[-0.02em] text-[#0A3A34] sm:text-4xl">
            Board Members
          </h2>

          <SectionDivider />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#526B66]">
            Our board members work together to support the mission, governance,
            development, and long-term vision of Ballantyne Islamic Center.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedLeadership.map((member) => (
            <BoardCard
              key={member.id}
              name={member.name}
              role={member.role}
              initials={member.initials}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/about"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#D6C590] bg-white px-6 py-3 text-sm font-semibold text-[#0A3A34] transition hover:border-[#D4A447] hover:bg-[#FFFDF7]"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to About Us
          </Link>
        </div>
      </section>
    </main>
  );
}