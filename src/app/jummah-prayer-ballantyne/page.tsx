import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  MapPin,
  Clock,
  Car,
  Users,
  Heart,
  HelpCircle,
  Navigation,
} from "lucide-react";

import SeoPhotoSection from "../../components/SeoPhotoSection";

const SITE_URL = "https://www.ballantynemasjid.org";
const PAGE_URL = `${SITE_URL}/jummah-prayer-ballantyne`;

const SEO_IMAGE_PATH =
  "/media/seo/jummah-prayer-ballantyne-charlotte.jpeg";
const SEO_IMAGE_URL = `${SITE_URL}${SEO_IMAGE_PATH}`;

const JUMUAH_ADDRESS = "10562 Providence Rd W, Charlotte, NC 28277";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=10562+Providence+Rd+W+Charlotte+NC+28277";

export const metadata: Metadata = {
  title:
    "Jumu'ah Prayer in Ballantyne, Fort Mill & Indian Land | Masjid Ballantyne",
  description:
    "Join Friday Jumu'ah prayer with Masjid Ballantyne at 10562 Providence Rd W, Charlotte, NC 28277, serving Ballantyne, Fort Mill, Indian Land, Waxhaw, Weddington, Marvin and South Charlotte.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Jumu'ah Prayer in Ballantyne, Fort Mill & Indian Land | Masjid Ballantyne",
    description:
      "Friday Jumu'ah prayer information for Muslim families near Ballantyne, Fort Mill, Indian Land, Waxhaw and South Charlotte.",
    url: PAGE_URL,
    siteName: "Masjid Ballantyne",
    type: "website",
    images: [
      {
        url: SEO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Friday Jumu'ah prayer with Masjid Ballantyne near Ballantyne, Fort Mill and Indian Land",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jumu'ah Prayer in Ballantyne, Fort Mill & Indian Land | Masjid Ballantyne",
    description:
      "Friday Jumu'ah prayer information for Muslim families near Ballantyne, Fort Mill, Indian Land and South Charlotte.",
    images: [SEO_IMAGE_URL],
  },
};

const areas = [
  "Ballantyne",
  "Fort Mill",
  "Indian Land",
  "Marvin",
  "Waxhaw",
  "Weddington",
  "Pineville",
  "South Charlotte",
];

const faqs = [
  {
    q: "Where is Jumu'ah prayer held?",
    a: `Current Jumu'ah prayer is held at ${JUMUAH_ADDRESS}. Please check the homepage for the latest confirmed prayer timing and announcements.`,
  },
  {
    q: "What time does Jumu'ah start?",
    a: "Jumu'ah timing may change based on venue availability and seasonal scheduling. Please check the homepage prayer section for the latest confirmed Khutbah and Salah times.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Please arrive early, follow volunteer parking guidance, and avoid blocking nearby businesses, driveways or neighboring properties.",
  },
  {
    q: "Can families and children attend?",
    a: "Yes. Families are welcome. Parents are kindly requested to supervise their children and help maintain a peaceful prayer environment.",
  },
  {
    q: "Are sisters welcome?",
    a: "When space and venue arrangements allow, sisters are welcome. Please check the latest website announcement for current arrangements.",
  },
];

const mosqueSchema = {
  "@context": "https://schema.org",
  "@type": "Mosque",
  "@id": `${SITE_URL}/#mosque`,
  name: "Masjid Ballantyne",
  alternateName: "Ballantyne Islamic Center",
  url: SITE_URL,
  image: [SEO_IMAGE_URL],
  description:
    "Masjid Ballantyne serves Muslim families near Ballantyne, Fort Mill, Indian Land, Marvin, Waxhaw, Weddington, Pineville and South Charlotte with Friday Jumu'ah prayer and Islamic community services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10562 Providence Rd W",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28277",
    addressCountry: "US",
  },
  areaServed: areas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  sameAs: [SITE_URL],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function JummahPrayerBallantynePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#123b35]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A3A34] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 inline-flex rounded-full border border-[#A7D7C5]/40 px-4 py-2 text-sm font-medium text-[#A7D7C5]">
            Friday Prayer • Ballantyne Area
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Jumu&apos;ah Prayer in Ballantyne, Fort Mill &amp; Indian Land
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Masjid Ballantyne serves Muslim families looking for Friday prayer
            and Islamic community near Ballantyne, Fort Mill, Indian Land,
            Marvin, Waxhaw, Weddington, Pineville and South Charlotte.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#D4A447] px-6 py-3 text-center font-semibold text-[#0A3A34] transition hover:opacity-90"
            >
              View Latest Prayer Time
            </Link>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Quick Information */}
      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <InfoCard
            icon={<Clock />}
            title="Friday Jumu'ah"
            text="Check the homepage for the latest confirmed Khutbah and Salah timing."
          />

          <InfoCard
            icon={<MapPin />}
            title="Current Location"
            text={JUMUAH_ADDRESS}
          />

          <InfoCard
            icon={<Car />}
            title="Arrive Early"
            text="Please arrive early and follow volunteer parking instructions."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-semibold text-[#0A3A34]">
              Friday Prayer Near Ballantyne
            </h2>

            <p className="mt-5 leading-8 text-[#31524c]">
              Masjid Ballantyne was established to serve the growing Muslim
              community around Ballantyne, Fort Mill, Indian Land and South
              Charlotte. Many local families search for a nearby masjid, mosque
              or Jumu&apos;ah prayer location that is convenient, welcoming and
              rooted in Islamic values.
            </p>

            <p className="mt-5 leading-8 text-[#31524c]">
              Current Friday Jumu&apos;ah prayer is held at{" "}
              <strong>{JUMUAH_ADDRESS}</strong>. The location is convenient for
              many Muslim families traveling from Ballantyne, Waxhaw,
              Weddington, Marvin, Pineville, Fort Mill, Indian Land and
              surrounding South Charlotte communities.
            </p>

            <p className="mt-5 leading-8 text-[#31524c]">
              Our goal is to provide a peaceful place for Friday prayer,
              Islamic learning, family connection, youth involvement and
              community service. As the community grows, Masjid Ballantyne is
              working toward establishing a permanent house of Allah for daily
              prayer, Jumu&apos;ah, Ramadan, Eid and educational programs.
            </p>

            <div className="mt-8 rounded-2xl bg-[#f7f3ea] p-5">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <Navigation className="h-5 w-5 text-[#D4A447]" />
                Areas We Serve
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0A3A34]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-semibold text-[#0A3A34]">
              What to Expect at Jumu&apos;ah
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <MiniPoint
                icon={<Users />}
                title="Welcoming Community"
                text="Families, youth, elders and new community members are welcome."
              />

              <MiniPoint
                icon={<Heart />}
                title="Peaceful Environment"
                text="Please help keep the prayer area clean, respectful and quiet."
              />

              <MiniPoint
                icon={<Clock />}
                title="Come Early"
                text="Arriving early helps with parking, seating and a calm prayer experience."
              />

              <MiniPoint
                icon={<Car />}
                title="Parking Guidance"
                text="Follow volunteer directions and remain respectful to neighboring properties."
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#0A3A34] p-6 text-white shadow-sm">
              <h3 className="text-2xl font-semibold">
                Visit for Jumu&apos;ah
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                Current Friday prayer location:
                <br />
                <strong>10562 Providence Rd W</strong>
                <br />
                <strong>Charlotte, NC 28277</strong>
              </p>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-[#D4A447] px-5 py-3 font-semibold text-[#0A3A34]"
              >
                Get Directions
              </a>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0A3A34]">
                Popular Searches
              </h3>

              <ul className="mt-4 space-y-3 text-[#31524c]">
                <li>Friday Prayer Ballantyne</li>
                <li>Jumu&apos;ah near Fort Mill</li>
                <li>Masjid near Indian Land</li>
                <li>Mosque near South Charlotte</li>
                <li>Ballantyne Masjid</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* SEO Photo Section */}
      <SeoPhotoSection
        imageSrc={SEO_IMAGE_PATH}
        imageAlt="Friday Jumu'ah prayer setup for Masjid Ballantyne near Ballantyne, Fort Mill and Indian Land"
        eyebrow="Friday Prayer Location"
        title="Jumu'ah Prayer Serving Ballantyne, Indian Land & Fort Mill"
        description={`Masjid Ballantyne welcomes Muslim families looking for Jumu'ah prayer near Ballantyne, Fort Mill, Indian Land, Waxhaw, Weddington, Marvin, Pineville and South Charlotte. Current Friday prayer is held at ${JUMUAH_ADDRESS}.`}
      />

      {/* Internal Links */}
      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A447]">
            Nearby Communities
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-[#0A3A34]">
            Masjid and Mosque Information for Nearby Areas
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#31524c]">
            Find local Jumu&apos;ah prayer information for Muslim families near
            Ballantyne, Indian Land and Fort Mill.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <AreaLink
              href="/masjid-ballantyne"
              title="Masjid Ballantyne"
              description="Jumu'ah prayer and mosque information near Ballantyne and South Charlotte."
            />

            <AreaLink
              href="/masjid-indian-land"
              title="Masjid Indian Land"
              description="Friday prayer information for Muslim families near Indian Land."
            />

            <AreaLink
              href="/mosque-fort-mill"
              title="Mosque Fort Mill"
              description="Jumu'ah prayer information for Muslim families near Fort Mill."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A447]">
              FAQ
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#0A3A34]">
              Jumu&apos;ah Prayer Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-[#e8dfcf] bg-[#f7f3ea] p-5"
              >
                <h3 className="flex gap-3 text-lg font-semibold text-[#0A3A34]">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-[#D4A447]" />
                  {item.q}
                </h3>

                <p className="mt-3 leading-7 text-[#31524c]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mosqueSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0A3A34] text-[#D4A447]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-[#0A3A34]">{title}</h3>

      <p className="mt-3 leading-7 text-[#31524c]">{text}</p>
    </div>
  );
}

function MiniPoint({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e8dfcf] p-5">
      <div className="mb-3 text-[#D4A447]">{icon}</div>

      <h3 className="font-semibold text-[#0A3A34]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#31524c]">{text}</p>
    </div>
  );
}

function AreaLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-[#e8dfcf] bg-[#f7f3ea] p-5 transition hover:border-[#D4A447] hover:shadow-sm"
    >
      <h3 className="font-semibold text-[#0A3A34]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#31524c]">
        {description}
      </p>
    </Link>
  );
}