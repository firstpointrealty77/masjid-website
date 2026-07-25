import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  HandHeart,
  HeartHandshake,
  Landmark,
  MapPin,
  MessageCircle,
  MoonStar,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const SITE_URL = "https://www.ballantynemasjid.org";
const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const SHARE_IMAGE_PATH = "/og/whatsapp-preview.jpg";
const SHARE_IMAGE_URL = `${SITE_URL}${SHARE_IMAGE_PATH}`;

const WHATSAPP_URL =
  "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t";

const COMMUNITIES = [
  "Ballantyne",
  "Fort Mill",
  "Indian Land",
  "South Charlotte",
  "Waxhaw",
  "Pineville",
  "Marvin",
  "Weddington",
  "Tega Cay",
];

const COMMUNITY_PILLARS = [
  {
    icon: <MoonStar className="h-6 w-6" />,
    title: "Worship",
    description:
      "Providing a welcoming place where Muslims can gather for Jumu’ah prayer, remembrance, and spiritual connection.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Islamic Learning",
    description:
      "Building a foundation for Qur’anic education, Islamic knowledge, and lifelong spiritual development.",
  },
  {
    icon: <UsersRound className="h-6 w-6" />,
    title: "Families and Youth",
    description:
      "Supporting children, youth, parents, elders, and families through meaningful programs and community relationships.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Community Service",
    description:
      "Encouraging compassion, volunteerism, neighborly care, and service that benefits the wider community.",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "A Permanent Masjid",
    description:
      "Working toward a lasting home for prayer, learning, gathering, and service for generations to come.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Community Connection",
    description:
      "Bringing Muslim families together across Ballantyne, Fort Mill, Indian Land, and the surrounding region.",
  },
];

const VALUES = [
  {
    name: "Sincerity",
    arabicName: "Ikhlas",
    description:
      "Seeking the pleasure of Allah and approaching every responsibility with sincere intention.",
  },
  {
    name: "Faith",
    arabicName: "Iman",
    description:
      "Keeping worship, reliance upon Allah, and Islamic principles at the center of our work.",
  },
  {
    name: "Knowledge",
    arabicName: "Ilm",
    description:
      "Promoting beneficial Islamic learning for children, youth, adults, and families.",
  },
  {
    name: "Unity",
    arabicName: "Ukhuwwah",
    description:
      "Strengthening bonds of brotherhood, sisterhood, cooperation, and mutual respect.",
  },
  {
    name: "Service",
    arabicName: "Khidmah",
    description:
      "Serving the spiritual, educational, and practical needs of the community.",
  },
  {
    name: "Compassion",
    arabicName: "Rahmah",
    description:
      "Treating individuals and families with kindness, dignity, understanding, and care.",
  },
  {
    name: "Responsibility",
    arabicName: "Amanah",
    description:
      "Protecting the trust placed in leadership, resources, governance, and community service.",
  },
];

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Learn about Ballantyne Islamic Center, our mission, Islamic values, growing Muslim community, and vision for a permanent masjid serving Ballantyne, Fort Mill, Indian Land, and surrounding areas.",

  alternates: {
    canonical: PAGE_PATH,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About Ballantyne Islamic Center",
    description:
      "Discover our story, mission, Islamic values, and vision for a permanent masjid serving Muslim families across the Ballantyne region.",
    url: PAGE_URL,
    siteName: "Ballantyne Islamic Center",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SHARE_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "About Ballantyne Islamic Center",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Ballantyne Islamic Center",
    description:
      "Our story, mission, Islamic values, and vision for a permanent masjid serving the Ballantyne-area Muslim community.",
    images: [SHARE_IMAGE_URL],
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ReligiousOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: "Ballantyne Islamic Center",
        alternateName: "Masjid Ballantyne",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        image: SHARE_IMAGE_URL,
        description:
          "Ballantyne Islamic Center is a growing Muslim community currently providing weekly Friday Jumu’ah prayer while working toward a permanent masjid serving Ballantyne, Fort Mill, Indian Land, South Charlotte, and surrounding areas.",
        areaServed: COMMUNITIES.map((community) => ({
          "@type": "Place",
          name: community,
        })),
      },
      {
        "@type": "AboutPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "About Ballantyne Islamic Center",
        description:
          "Learn about the story, mission, Islamic values, and permanent masjid vision of Ballantyne Islamic Center.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Ballantyne Islamic Center",
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SHARE_IMAGE_URL,
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
      {
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
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-[#f8f5ed] text-[#163d37]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#062f2a] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,164,71,0.22),transparent_38%),radial-gradient(circle_at_0%_70%,rgba(167,215,197,0.10),transparent_34%),radial-gradient(circle_at_100%_55%,rgba(212,164,71,0.08),transparent_34%)]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg,#d4a447_0,#d4a447_1px,transparent_0,transparent_50%),repeating-linear-gradient(-60deg,#d4a447_0,#d4a447_1px,transparent_0,transparent_50%)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a447]/70 to-transparent" />
          <div className="absolute -left-28 top-32 h-72 w-72 rounded-full bg-[#a7d7c5]/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#d4a447]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-9 text-sm text-white/65"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors duration-200 hover:text-[#f2dc98]"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true" className="text-white/35">
                /
              </li>

              <li className="text-[#a7d7c5]">About</li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a447]/30 bg-[#d4a447]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f2dc98]">
                <Sparkles className="h-3.5 w-3.5" />
                About Ballantyne Islamic Center
              </div>

              <p
                dir="rtl"
                className="mt-7 font-[family-name:var(--font-amiri)] text-xl leading-loose text-[#f2dc98] sm:text-2xl"
              >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>

              <h1 className="mt-5 max-w-5xl font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-6xl xl:text-7xl">
                Rooted in Faith.
                <span className="mt-2 block bg-[linear-gradient(180deg,#f7e8b5_0%,#d4a447_100%)] bg-clip-text text-transparent">
                  Growing in Community.
                </span>
                <span className="mt-2 block">Building for Generations.</span>
              </h1>

              <p className="mt-7 max-w-3xl font-[family-name:var(--font-lora)] text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
                Ballantyne Islamic Center is a growing Muslim community united
                by worship, Islamic learning, service, and a shared vision for a
                permanent masjid that will benefit families for generations to
                come, In Sha Allah.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/jummah-prayer-ballantyne"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f0d278_0%,#d4a447_50%,#b98525_100%)] px-7 py-3.5 text-sm font-semibold text-[#082f2a] shadow-[0_16px_38px_rgba(212,164,71,0.26)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(212,164,71,0.34)]"
                >
                  View Jumu&apos;ah Details
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#a7d7c5]/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#a7d7c5]/65 hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4 text-[#a7d7c5]" />
                  Join Our Community
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-5 rounded-[42px] bg-[radial-gradient(circle_at_50%_20%,rgba(212,164,71,0.20),transparent_64%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.055] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a447]/80 to-transparent" />

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4a447]/25 bg-[#d4a447]/10 text-[#f2dc98]">
                  <Landmark className="h-6 w-6" />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#a7d7c5]">
                  A Verse That Guides Our Effort
                </p>

                <blockquote
                  dir="rtl"
                  className="mt-5 font-[family-name:var(--font-amiri)] text-[1.75rem] leading-[2] text-white sm:text-[2.1rem]"
                >
                  إِنَّمَا يَعْمُرُ مَسَاجِدَ ٱللَّهِ مَنْ آمَنَ بِٱللَّهِ
                  وَٱلْيَوْمِ ٱلْآخِرِ وَأَقَامَ ٱلصَّلَوٰةَ وَآتَى ٱلزَّكَوٰةَ
                  وَلَمْ يَخْشَ إِلَّا ٱللَّهَ
                </blockquote>

                <div className="mt-6 h-px bg-gradient-to-r from-[#d4a447]/55 via-white/10 to-transparent" />

                <p className="mt-6 font-[family-name:var(--font-lora)] text-sm italic leading-7 text-white/75 sm:text-[15px]">
                  “The mosques of Allah are only to be maintained by those who
                  believe in Allah and the Last Day, establish prayer, give
                  zakah, and fear none except Allah.”
                </p>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d48a]">
                  Qur&apos;an 9:18
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current status */}
      <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-[30px] border border-[#e1d2a8] bg-white p-5 shadow-[0_22px_70px_rgba(10,58,52,0.12)] sm:p-7 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a3a34] text-[#f0d48a]">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b0842d]">
              Our Current Stage
            </p>

            <p className="mt-2 text-sm leading-7 text-[#405d57] sm:text-[15px]">
              Ballantyne Islamic Center currently gathers at an interim venue
              for weekly Friday Jumu&apos;ah prayer and announced community
              activities while working toward establishing a permanent masjid.
            </p>
          </div>

          <Link
            href="/jummah-prayer-ballantyne"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7c590] bg-[#faf7ef] px-5 py-3 text-sm font-semibold text-[#0a3a34] transition duration-200 hover:border-[#d4a447] hover:bg-white"
          >
            Current Prayer Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Our story */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">
          <div>
            <SectionEyebrow>Our Story</SectionEyebrow>

            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#0a3a34] sm:text-4xl lg:text-5xl">
              A community brought together by faith and a shared future
            </h2>

            <div className="mt-7 space-y-5 font-[family-name:var(--font-lora)] text-base leading-8 text-[#3b5a54] sm:text-[17px] sm:leading-9">
              <p>
                Ballantyne Islamic Center was established to serve the rapidly
                growing Muslim community across Ballantyne, Fort Mill, South
                Charlotte, Waxhaw, Pineville, Marvin, Weddington, Tega Cay,
                Indian Land, and the surrounding areas.
              </p>

              <p>
                Our mission began with providing a welcoming and accessible
                space for weekly Jumu&apos;ah prayer, bringing together
                individuals and families from across the region in worship and
                community.
              </p>

              <p>
                As the community continues to grow, we are actively working
                toward establishing a permanent masjid—a lasting home for
                prayer, Islamic education, youth development, family connection,
                and community service.
              </p>

              <p>
                Ballantyne Islamic Center is more than a place to gather. It is
                a foundation for faith, belonging, connection, and continuity.
                We invite the Muslim community to join us as we build toward
                this shared future, In Sha Allah.
              </p>
            </div>
          </div>

          <aside className="overflow-hidden rounded-[32px] border border-[#e5d6ad] bg-white shadow-[0_24px_70px_rgba(10,58,52,0.10)]">
            <div className="bg-[#0a3a34] p-7 text-white sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#a7d7c5]/25 bg-white/10 text-[#a7d7c5]">
                <MapPin className="h-5 w-5" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#f0d48a]">
                Serving the Region
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight sm:text-3xl">
                One growing community across two states
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-[15px]">
                Our community brings together Muslim families from the
                Ballantyne and South Charlotte area as well as neighboring
                communities in North and South Carolina.
              </p>
            </div>

            <div className="p-7 sm:p-8">
              <div className="flex flex-wrap gap-2.5">
                {COMMUNITIES.map((community) => (
                  <span
                    key={community}
                    className="rounded-full border border-[#e5d6ad] bg-[#faf7ef] px-4 py-2 text-sm font-medium text-[#0a3a34]"
                  >
                    {community}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Purpose */}
      <section className="border-y border-[#e8dec4] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Our Purpose</SectionEyebrow>

            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#0a3a34] sm:text-4xl lg:text-5xl">
              A house of Allah for worship, learning, and community
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#46615c]">
              We are building the foundation for a permanent Islamic center
              where Muslims can strengthen their relationship with Allah,
              pursue beneficial knowledge, support one another, and raise future
              generations with strong Islamic identity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_PILLARS.map((pillar) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Mission and Vision</SectionEyebrow>

          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#0a3a34] sm:text-4xl lg:text-5xl">
            Serving today while building for tomorrow
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#46615c]">
            Our present work and future vision are connected by one purpose: to
            help Muslims worship, learn, grow, serve, and remain connected to
            their faith.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[32px] border border-[#e5d6ad] bg-white p-7 shadow-[0_18px_55px_rgba(10,58,52,0.07)] sm:p-9">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#a7d7c5]/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0a3a34] text-[#f0d48a] shadow-[0_12px_28px_rgba(10,58,52,0.20)]">
                <Compass className="h-6 w-6" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#b0842d]">
                Our Mission
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight text-[#0a3a34] sm:text-3xl">
                Strengthen faith, family, and community
              </h3>

              <div className="mt-5 space-y-4 text-base leading-8 text-[#405d57]">
                <p>
                  Our mission is to establish a masjid that nurtures faith,
                  promotes beneficial knowledge, and strengthens unity within
                  the community.
                </p>

                <p>
                  Through worship, Islamic education, youth development, family
                  engagement, and charitable service, Ballantyne Islamic Center
                  seeks to support believers in living with sincerity, purpose,
                  and Islamic character.
                </p>

                <p>
                  We seek to create a place where hearts are connected to Allah,
                  the Qur&apos;an is taught and loved, families feel supported,
                  and young people receive guidance, belonging, and purpose.
                </p>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] border border-[#d4a447]/25 bg-[#0a3a34] p-7 text-white shadow-[0_24px_70px_rgba(10,58,52,0.18)] sm:p-9">
            <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#d4a447]/16 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-[#a7d7c5]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#d4a447]/30 bg-[#d4a447]/10 text-[#f0d48a]">
                <Building2 className="h-6 w-6" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#a7d7c5]">
                Our Vision
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight sm:text-3xl">
                A permanent masjid for generations
              </h3>

              <div className="mt-5 space-y-4 text-base leading-8 text-white/75">
                <p>
                  Our vision is to establish a vibrant Islamic center that
                  serves as a lasting source of guidance, worship, learning, and
                  community connection for generations to come.
                </p>

                <p>
                  The permanent masjid is envisioned as a welcoming home for
                  daily prayers, Jumu&apos;ah, Eid, Taraweeh, Qur&apos;anic
                  education, youth development, family programs, and community
                  service.
                </p>

                <p>
                  This effort is intended to become a source of barakah and
                  Sadaqah Jariyah for the community and all who help establish
                  it, In Sha Allah.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Journey */}
      <section className="relative overflow-hidden bg-[#07352f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#d4a447]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#a7d7c5]/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a447]/65 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f0d48a]">
              Our Journey
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              From weekly Jumu&apos;ah to a permanent home
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Our current stage is only the beginning. Each gathering,
              relationship, contribution, volunteer effort, and sincere
              du&apos;a helps move the community toward its long-term vision.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <JourneyCard
              number="01"
              eyebrow="Today"
              title="Weekly Jumu’ah"
              description="We currently gather at an interim venue for Friday Jumu’ah prayer and announced community activities."
            />

            <JourneyCard
              number="02"
              eyebrow="Growing"
              title="A Connected Community"
              description="Families across Ballantyne, Fort Mill, Indian Land, and nearby areas are building relationships and shared purpose."
            />

            <JourneyCard
              number="03"
              eyebrow="In Sha Allah"
              title="A Permanent Masjid"
              description="We are working toward a lasting home for prayer, education, youth, families, service, and future generations."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <SectionEyebrow>Our Values</SectionEyebrow>

              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#0a3a34] sm:text-4xl">
                Islamic principles that guide how we serve
              </h2>

              <p className="mt-5 text-base leading-8 text-[#46615c]">
                The strength of a masjid is shaped not only by what it builds,
                but also by the sincerity, character, trust, and responsibility
                with which it serves.
              </p>

              <div className="mt-7 rounded-[26px] border border-[#e5d6ad] bg-[#faf7ef] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0a3a34] text-[#f0d48a]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <p className="text-sm leading-7 text-[#405d57]">
                    These principles guide our leadership, programs,
                    stewardship, governance, and community engagement as we
                    strive to establish a masjid rooted in sincerity and trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {VALUES.map((value) => (
                <ValueCard
                  key={value.name}
                  name={value.name}
                  arabicName={value.arabicName}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="overflow-hidden rounded-[34px] border border-[#e1d2a8] bg-[#faf7ef] shadow-[0_24px_70px_rgba(10,58,52,0.09)]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[#0a3a34] p-7 text-white sm:p-10 lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4a447]/30 bg-[#d4a447]/10 text-[#f0d48a]">
                <HandHeart className="h-6 w-6" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#a7d7c5]">
                Our Commitment
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl">
                Leadership grounded in amanah
              </h2>

              <p className="mt-5 text-base leading-8 text-white/75">
                We understand that serving a masjid and its community is a
                sacred responsibility that must be carried with sincerity,
                wisdom, consultation, and accountability.
              </p>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="space-y-5 text-base leading-8 text-[#405d57]">
                <p>
                  Ballantyne Islamic Center is committed to responsible
                  leadership, transparency, and long-term sustainability. The
                  organization seeks to serve the community with sincerity,
                  professionalism, and a clear sense of amanah in all matters
                  related to governance, resources, and community care.
                </p>

                <p>
                  As the masjid grows, we aim to build with wisdom, seek
                  appropriate consultation, communicate responsibly, and
                  maintain standards that honor both the sanctity of the masjid
                  and the trust placed in its leadership.
                </p>

                <p>
                  We are committed to creating welcoming opportunities for men,
                  women, children, youth, young professionals, families, elders,
                  new Muslims, and all who seek beneficial connection with the
                  house of Allah.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about/leadership"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#0a3a34] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#0d4941]"
                >
                  Meet Our Leadership
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[#d4a447]/25 bg-[#0a3a34] px-6 py-12 text-white shadow-[0_30px_90px_rgba(10,58,52,0.20)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#d4a447]/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#a7d7c5]/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a447]/80 to-transparent" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#a7d7c5]/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a7d7c5]">
                <HandHeart className="h-4 w-4" />
                Be Part of the Journey
              </div>

              <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Together, we will build a permanent masjid
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Join us in worship, stay connected with community updates, make
                du&apos;a, volunteer, and support the vision of a lasting house
                of Allah for generations to come.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f0d278_0%,#d4a447_50%,#b98525_100%)] px-7 py-3.5 text-sm font-semibold text-[#082f2a] shadow-[0_16px_38px_rgba(212,164,71,0.26)] transition duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Join WhatsApp
              </a>

              <Link
                href="/jummah-prayer-ballantyne"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                View Jumu&apos;ah
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b0842d]">
      {children}
    </p>
  );
}

function PillarCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-[28px] border border-[#e5d6ad] bg-white p-6 shadow-[0_15px_45px_rgba(10,58,52,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d4a447]/55 hover:shadow-[0_22px_60px_rgba(10,58,52,0.11)] sm:p-7">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0a3a34] text-[#f0d48a] shadow-[0_12px_26px_rgba(10,58,52,0.18)] transition duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0a3a34]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#46615c] sm:text-[15px]">
        {description}
      </p>
    </article>
  );
}

function JourneyCard({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-7">
      <div className="absolute right-5 top-3 font-[family-name:var(--font-playfair)] text-6xl font-semibold text-white/[0.05]">
        {number}
      </div>

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0d48a]">
          {eyebrow}
        </p>

        <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/70 sm:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}

function ValueCard({
  name,
  arabicName,
  description,
}: {
  name: string;
  arabicName: string;
  description: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#e7ddc3] bg-[#faf8f2] p-5 transition duration-300 hover:border-[#d4a447]/50 hover:bg-white hover:shadow-[0_16px_40px_rgba(10,58,52,0.07)] sm:p-6">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#b0842d]" />

        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0a3a34]">
            {name}
          </h3>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#b0842d]">
            {arabicName}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#46615c]">{description}</p>
    </article>
  );
}