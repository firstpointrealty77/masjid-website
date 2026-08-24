import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  MapPin,
  Clock,
  Car,
  Users,
  Navigation,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import SeoPhotoSection from "@/components/SeoPhotoSection";

const SITE_URL = "https://www.ballantynemasjid.org";
const PAGE_PATH = "/mosque-fort-mill";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const SEO_IMAGE_PATH = "/media/seo/fort-mill-jummah-prayer.jpeg";
const SEO_IMAGE_URL = `${SITE_URL}${SEO_IMAGE_PATH}`;

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=10562+Providence+Rd+W+Charlotte+NC+28277";

export const metadata: Metadata = {
  title: "Mosque Near Fort Mill SC | Friday Jumu'ah Prayer",
  description:
    "Looking for Friday Jumu'ah prayer near Fort Mill, SC? Ballantyne Islamic Center welcomes Muslim families at 10562 Providence Rd W, Charlotte, NC 28277.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Mosque Near Fort Mill SC | Friday Jumu'ah Prayer",
    description:
      "Find Friday Jumu'ah prayer serving Fort Mill, Indian Land, Ballantyne and nearby communities.",
    url: PAGE_URL,
    siteName: "Ballantyne Islamic Center",
    type: "website",
    images: [
      {
        url: SEO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Friday Jumu'ah prayer near Fort Mill served by Ballantyne Islamic Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosque Near Fort Mill SC | Friday Jumu'ah Prayer",
    description:
      "Friday Jumu'ah prayer serving Muslim families near Fort Mill, Indian Land and Ballantyne.",
    images: [SEO_IMAGE_URL],
  },
};

const areas = [
  "Fort Mill",
  "Indian Land",
  "Ballantyne",
  "Tega Cay",
  "Pineville",
  "South Charlotte",
  "Waxhaw",
  "Marvin",
];

const faqs = [
  {
    question: "Where can I attend Jumu'ah prayer near Fort Mill?",
    answer:
      "Ballantyne Islamic Center currently holds Friday Jumu'ah prayer at 10562 Providence Rd W, Charlotte, NC 28277. The location serves Muslim families traveling from Fort Mill, Indian Land, Ballantyne and nearby communities.",
  },
  {
    question: "Is the Jumu'ah venue located in Fort Mill?",
    answer:
      "No. The current interim Friday prayer venue is located in Charlotte near the Ballantyne area. It is intended to serve Muslim families from Fort Mill and surrounding communities.",
  },
  {
    question: "Does Ballantyne Islamic Center serve Fort Mill families?",
    answer:
      "Yes. Muslim families from Fort Mill, Indian Land, Tega Cay, Ballantyne and South Charlotte are welcome to attend the weekly Friday Jumu'ah prayer.",
  },
  {
    question: "Is this location open for five daily prayers?",
    answer:
      "The current interim venue is used for Friday Jumu'ah prayer and announced community gatherings. It is not currently presented as a full-time daily-prayer facility.",
  },
  {
    question: "Is parking available for Friday prayer?",
    answer:
      "Parking is available. Please arrive early, follow volunteer instructions and avoid blocking neighboring entrances, driveways or designated spaces.",
  },
];

const nearbyPages = [
  {
    href: "/jummah-prayer-ballantyne",
    title: "Friday Jumu'ah Prayer Details",
    description:
      "View the latest Khutbah time, prayer information, address and visitor guidance.",
  },
  {
    href: "/masjid-ballantyne",
    title: "Masjid Near Ballantyne",
    description:
      "Learn more about Friday prayer and the Muslim community serving the Ballantyne area.",
  },
  {
    href: "/masjid-indian-land",
    title: "Masjid Near Indian Land",
    description:
      "Find Jumu'ah prayer information for Muslim families traveling from Indian Land.",
  },
];

export default function MosqueFortMillPage() {
  const mosqueSchema = {
    "@context": "https://schema.org",
    "@type": "Mosque",
    name: "Ballantyne Islamic Center",
    alternateName: "Masjid Ballantyne",
    url: SITE_URL,
    image: SEO_IMAGE_URL,
    description:
      "Ballantyne Islamic Center provides weekly Friday Jumu'ah prayer serving Muslim families near Fort Mill, Indian Land, Ballantyne and South Charlotte.",
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
    hasMap: DIRECTIONS_URL,
    sameAs: [SITE_URL],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Jumu'ah Prayer",
        item: `${SITE_URL}/jummah-prayer-ballantyne`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mosque Near Fort Mill",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#123b35]">
      <section className="bg-[#0A3A34] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-white/70"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href="/jummah-prayer-ballantyne"
                  className="transition hover:text-white"
                >
                  Jumu&apos;ah Prayer
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li className="text-[#A7D7C5]">Fort Mill</li>
            </ol>
          </nav>

          <p className="mb-4 inline-flex rounded-full border border-[#A7D7C5]/40 px-4 py-2 text-sm font-medium text-[#A7D7C5]">
            Mosque Near Fort Mill, South Carolina
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Friday Jumu&apos;ah Prayer Serving Fort Mill Families
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Ballantyne Islamic Center welcomes Muslim families from Fort Mill,
            Indian Land, Tega Cay, Ballantyne and nearby communities to our
            weekly Friday Jumu&apos;ah prayer.
          </p>

          <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 sm:max-w-3xl">
            <p className="font-semibold text-[#A7D7C5]">
              Current service information
            </p>

            <p className="mt-2 leading-7 text-white/85">
              Our current interim venue is used for Friday Jumu&apos;ah prayer.
              It is not currently presented as a full-time facility for the five
              daily prayers.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/jummah-prayer-ballantyne"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A447] px-6 py-3 text-center font-semibold text-[#0A3A34] transition hover:opacity-90"
            >
              View Jumu&apos;ah Details
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <InfoCard
            icon={<MapPin className="h-5 w-5" />}
            title="Current Jumu'ah Venue"
            text="10562 Providence Rd W, Charlotte, NC 28277."
          />

          <InfoCard
            icon={<Clock className="h-5 w-5" />}
            title="Friday Prayer"
            text="Check the Jumu'ah page or homepage for the latest confirmed Khutbah and prayer timing."
          />

          <InfoCard
            icon={<Car className="h-5 w-5" />}
            title="Parking Guidance"
            text="Please arrive early, follow volunteer instructions and park respectfully."
          />
        </div>
      </section>

      <SeoPhotoSection
        imageSrc={SEO_IMAGE_PATH}
        imageAlt="Friday Jumu'ah prayer near Fort Mill served by Ballantyne Islamic Center"
        eyebrow="Serving Fort Mill Families"
        title="A Welcoming Friday Prayer Community Near Fort Mill"
        description="Ballantyne Islamic Center provides a weekly Jumu'ah prayer option for Muslim families traveling from Fort Mill, Indian Land, Tega Cay, Ballantyne and nearby areas. Our community is growing together toward establishing a permanent masjid, In Sha Allah."
      />

      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold leading-tight text-[#0A3A34] sm:text-3xl">
              Jumu&apos;ah Prayer for the Fort Mill Muslim Community
            </h2>

            <p className="mt-5 leading-8 text-[#31524c]">
              Muslim families living in Fort Mill often look for a convenient
              mosque, masjid or Friday prayer location near the Ballantyne and
              South Charlotte corridor. Ballantyne Islamic Center provides a
              welcoming weekly Jumu&apos;ah prayer option for families traveling
              from Fort Mill and surrounding areas.
            </p>

            <p className="mt-5 leading-8 text-[#31524c]">
              The current Friday prayer venue is located at{" "}
              <strong>10562 Providence Rd W, Charlotte, NC 28277</strong>. The
              venue is in Charlotte near the Ballantyne area and is not located
              inside Fort Mill.
            </p>

            <p className="mt-5 leading-8 text-[#31524c]">
              Our community includes families from Fort Mill, Indian Land, Tega
              Cay, Ballantyne, Pineville, Waxhaw, Marvin and South Charlotte.
              Together, we are working toward establishing a permanent masjid
              that can support worship, Islamic education, youth engagement and
              family connection, In Sha Allah.
            </p>

            <div className="mt-8 rounded-2xl bg-[#f7f3ea] p-5 sm:p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0A3A34]">
                <Navigation className="h-5 w-5 text-[#D4A447]" />
                Communities We Serve
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0A3A34] shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-semibold text-[#0A3A34]">
              Why Fort Mill Families Attend
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <MiniPoint
                icon={<Users className="h-5 w-5" />}
                title="Serving Fort Mill"
                text="Welcoming Muslim families from Fort Mill, Tega Cay, Indian Land and nearby communities."
              />

              <MiniPoint
                icon={<MapPin className="h-5 w-5" />}
                title="Clearly Listed Venue"
                text="The current Charlotte prayer address is clearly provided before visitors travel."
              />

              <MiniPoint
                icon={<Clock className="h-5 w-5" />}
                title="Friday Prayer Focus"
                text="Dedicated Jumu'ah information, timing updates and visitor guidance."
              />

              <MiniPoint
                icon={<Car className="h-5 w-5" />}
                title="Directions and Parking"
                text="Visitors can open directions and review parking guidance before arriving."
              />
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#0A3A34] p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A7D7C5]">
                Friday Prayer Venue
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Visit Us for Jumu&apos;ah
              </h2>

              <address className="mt-4 not-italic leading-7 text-white/85">
                <strong className="text-white">
                  10562 Providence Rd W
                </strong>
                <br />
                <strong className="text-white">Charlotte, NC 28277</strong>
              </address>

              <p className="mt-4 text-sm leading-6 text-white/75">
                This is the current interim Friday prayer venue serving the
                Ballantyne-area community.
              </p>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4A447] px-5 py-3 font-semibold text-[#0A3A34] transition hover:opacity-90"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0A3A34]">
                Nearby Jumu&apos;ah Information
              </h2>

              <div className="mt-5 space-y-5">
                {nearbyPages.map((page) => (
                  <div
                    key={page.href}
                    className="border-b border-[#e8dfcf] pb-5 last:border-b-0 last:pb-0"
                  >
                    <Link
                      href={page.href}
                      className="inline-flex items-center gap-2 font-semibold text-[#0A3A34] transition hover:text-[#9a742e]"
                    >
                      {page.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <p className="mt-2 text-sm leading-6 text-[#31524c]">
                      {page.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A447]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#0A3A34] sm:text-3xl">
              Fort Mill Mosque and Jumu&apos;ah Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-[#e8dfcf] bg-[#f7f3ea] p-5"
              >
                <h3 className="flex gap-3 text-lg font-semibold text-[#0A3A34]">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-[#D4A447]" />
                  {faq.question}
                </h3>

                <p className="mt-3 leading-7 text-[#31524c]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            mosqueSchema,
            faqSchema,
            breadcrumbSchema,
          ]).replace(/</g, "\\u003c"),
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
    <article className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0A3A34] text-[#D4A447]">
        {icon}
      </div>

      <h2 className="text-xl font-semibold text-[#0A3A34]">{title}</h2>

      <p className="mt-3 leading-7 text-[#31524c]">{text}</p>
    </article>
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
    <article className="rounded-2xl border border-[#e8dfcf] p-5">
      <div className="mb-3 text-[#D4A447]">{icon}</div>

      <h3 className="font-semibold text-[#0A3A34]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#31524c]">{text}</p>
    </article>
  );
}