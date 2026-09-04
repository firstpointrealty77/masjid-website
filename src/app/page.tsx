import type { Metadata } from "next";
import Link from "next/link";
import { PrayerTimesModule } from "@/components/home/PrayerTimesModule";
import {
  ArrowRight,
  Clock3,
  Compass,
  HandHeart,
  Landmark,
  MapPin,
  MessageCircle,
  Navigation,
  Sparkles,
} from "lucide-react";

const SITE_URL = "https://www.ballantynemasjid.org";
const SITE_NAME = "Ballantyne Islamic Center";
const ALTERNATE_NAME = "Masjid Ballantyne";
const SHARE_IMAGE = "/og/whatsapp-preview-v2.jpg";

const PAGE_TITLE = "Ballantyne Islamic Center | Jumu'ah Prayer";
const SHARE_TITLE = "Ballantyne Islamic Center | Jumu'ah Prayer";

const PAGE_DESCRIPTION =
  "Friday Jumu'ah prayer and community updates as we grow together toward our permanent masjid, In Sha Allah. Khutbah begins at 1:30 PM.";

const SHARE_DESCRIPTION =
  "Friday Jumu'ah prayer and community updates as we grow together toward our permanent masjid, In Sha Allah.";

const TEMPORARY_ADDRESS_LINE_1 = "10562 Providence Rd W";
const TEMPORARY_ADDRESS_LINE_2 = "Charlotte, NC 28277";

const KHUTBAH_TIME = "1:30 PM";
const SALAH_TIME = "1:55 PM";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=10562%20Providence%20Rd%20W%2C%20Charlotte%2C%20NC%2028277";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/EcIDT1sYYqbBozdH4AMk9h?s=cl&p=i&mlu=0&amv=2";

const DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=XTBPXKLENK5H8";

const ZELLE_RECIPIENT = "Carolina Muslim Development Fund";
const ZELLE_TAG = "bicc10935";
const ZELLE_MEMO = "Masjid Support";

const MONTHLY_DONATION_OPTIONS = ["$30", "$50", "$100"] as const;

const EXPLORE_LINKS = [
  {
    href: "/about",
    title: "About Ballantyne Islamic Center",
    description:
      "Learn about our story, mission, Islamic values, and permanent masjid vision.",
  },
  {
    href: "/about/leadership",
    title: "Our Leadership",
    description:
      "Meet the board members serving the community with amanah and responsibility.",
  },
  {
    href: "/jummah-prayer-ballantyne",
    title: "Friday Jumu’ah Prayer",
    description:
      "View the latest Khutbah time, prayer venue, directions, and visitor guidance.",
  },
  {
    href: "/masjid-ballantyne",
    title: "Masjid Near Ballantyne",
    description:
      "Find Friday prayer information for Muslim families in the Ballantyne area.",
  },
  {
    href: "/mosque-fort-mill",
    title: "Mosque Near Fort Mill",
    description:
      "Jumu’ah information for Muslim families traveling from Fort Mill and Tega Cay.",
  },
  {
    href: "/masjid-indian-land",
    title: "Masjid Near Indian Land",
    description:
      "Friday prayer information serving Indian Land and nearby South Carolina communities.",
  },
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "Ballantyne Islamic Center",
    "Masjid Ballantyne",
    "Jumu'ah prayer Ballantyne",
    "Jummah prayer Ballantyne",
    "Friday prayer Ballantyne",
    "mosque near Ballantyne",
    "masjid near Ballantyne",
    "Friday prayer Fort Mill",
    "Jumu'ah prayer Fort Mill",
    "Jummah prayer Indian Land",
    "Islamic center South Charlotte",
    "Muslim community Ballantyne",
  ],

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Ballantyne Islamic Center Jumu'ah Prayer",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

// ─────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ReligiousOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}${SHARE_IMAGE}`,

      description:
        "Ballantyne Islamic Center is a growing Muslim community currently serving Friday Jumu'ah prayer near Ballantyne, Fort Mill, Indian Land, and South Charlotte while working toward a permanent masjid, In Sha Allah.",

      areaServed: [
        "Ballantyne, Charlotte, NC",
        "Fort Mill, SC",
        "Indian Land, SC",
        "South Charlotte, NC",
      ],

      address: {
        "@type": "PostalAddress",
        streetAddress: TEMPORARY_ADDRESS_LINE_1,
        addressLocality: "Charlotte",
        addressRegion: "NC",
        postalCode: "28277",
        addressCountry: "US",
      },

      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "13:00",
        closes: "15:00",
      },
    },

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAME,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SHARE_IMAGE}`,
        width: 1200,
        height: 630,
      },

      inLanguage: "en-US",
    },

    {
      "@type": "Event",
      "@id": `${SITE_URL}/#jummah-event`,
      name: "Friday Jumu'ah Prayer — Ballantyne Islamic Center",

      description:
        "Weekly Friday Jumu'ah prayer serving the Muslim community of Ballantyne, Fort Mill, Indian Land, and South Charlotte. Khutbah begins at 1:30 PM. Jumu'ah Salah begins at 1:55 PM. Kindly arrive by 1:25 PM.",

      startDate: "2026-07-03T13:30:00-04:00",
      endDate: "2026-07-03T14:30:00-04:00",

      eventSchedule: {
        "@type": "Schedule",
        startDate: "2026-07-03",
        repeatFrequency: "P1W",
        byDay: "https://schema.org/Friday",
        startTime: "13:30",
        endTime: "14:30",
      },

      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",

      eventStatus: "https://schema.org/EventScheduled",

      image: [`${SITE_URL}${SHARE_IMAGE}`],

      location: {
        "@type": "Place",
        name: "Ballantyne Islamic Center — Friday Jumu'ah Venue",

        address: {
          "@type": "PostalAddress",
          streetAddress: TEMPORARY_ADDRESS_LINE_1,
          addressLocality: "Charlotte",
          addressRegion: "NC",
          postalCode: "28277",
          addressCountry: "US",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.0335,
          longitude: -80.8741,
        },
      },

      organizer: {
        "@id": `${SITE_URL}/#organization`,
      },

      audience: {
        "@type": "Audience",
        audienceType: "Muslim community",
      },

      keywords: [
        "Jumu'ah",
        "Jummah",
        "Friday prayer",
        "mosque",
        "masjid",
        "Islamic center",
        "Ballantyne",
        "Fort Mill",
        "Indian Land",
        "South Charlotte",
        "Muslim community",
      ],

      isAccessibleForFree: true,
      url: SITE_URL,
    },
  ],
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#063C34] text-[#FFFDF7]">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg,#D4A447 0,#D4A447 1px,transparent 0,transparent 50%),repeating-linear-gradient(-60deg,#D4A447 0,#D4A447 1px,transparent 0,transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% -5%, rgba(212,164,71,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 0% 65%, rgba(77,184,154,0.08) 0%, transparent 60%), radial-gradient(ellipse 35% 40% at 100% 50%, rgba(212,164,71,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        {/* HEADER */}

        <header className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4A447]/50 sm:w-16" />

            <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.28em] text-[#E0B75C]">
              Friday Jumu&apos;ah
            </p>

            <span className="h-px w-10 bg-[#D4A447]/50 sm:w-16" />
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#FFFDF7] sm:text-5xl md:text-6xl">
            Jumu&apos;ah Prayer
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#DCEBE4] sm:text-lg">
            Ballantyne Islamic Center currently serves the Muslim community with{" "}
            <span className="font-medium text-[#7DCFB8]">
              Friday Jumu&apos;ah prayer near Ballantyne, Fort Mill, Indian
              Land &amp; South Charlotte
            </span>{" "}
            while growing together toward our permanent masjid, In Sha Allah.
          </p>
        </header>

        {/* JUMU'AH SCHEDULE */}

        <section
          aria-labelledby="schedule-heading"
          className="overflow-hidden rounded-[28px] border border-[#D4A447]/25 bg-[#0C4F43] shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
        >
          <div className="border-b border-[#D4A447]/20 bg-[#063C34]/40 px-6 py-4 text-center">
            <p
              id="schedule-heading"
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E0B75C]"
            >
              Friday Jumu&apos;ah Schedule
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A447]/28 bg-[#073F36]">
                <Clock3 className="h-5 w-5 text-[#E0B75C]" />
              </span>

              <div className="pt-0.5">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7DCFB8]">
                  Kindly arrive by 1:25 PM
                </p>

                <p className="mt-1 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                  Please be seated before the Khutbah begins — listening
                  attentively is part of the adab of Jumu&apos;ah.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#073F36] p-6 text-center sm:p-8">
              <p className="text-lg font-semibold tracking-tight text-[#FFFDF7] sm:text-xl">
                Khutbah Begins
              </p>

              <p className="mt-2 font-serif text-5xl font-semibold tracking-tight text-[#F5DFA0] sm:text-7xl">
                {KHUTBAH_TIME}
              </p>

              <p className="mt-3 text-sm text-[#BDD3C8] sm:text-base">
                Jumu&apos;ah Salah begins at{" "}
                <span className="font-semibold text-[#FFFDF7]">
                  {SALAH_TIME}
                </span>
              </p>
            </div>
          </div>

          {/* Venue */}

          <div className="border-t border-[#D4A447]/20 bg-[#063C34]/45 px-5 py-6 sm:px-8 sm:py-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#4DB89A]/30 bg-[#0B4C40]">
                <MapPin className="h-5 w-5 text-[#7DCFB8]" />
              </span>

              <div className="min-w-0 flex-1 text-left">
                <span className="inline-flex rounded-full border border-[#4DB89A]/35 bg-[#4DB89A]/12 px-3 py-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7DCFB8]">
                    Friday Prayer Venue
                  </p>
                </span>

                <address className="mt-4 font-serif text-xl font-semibold leading-snug not-italic text-[#FFFDF7] sm:text-3xl">
                  {TEMPORARY_ADDRESS_LINE_1}
                  <br />
                  {TEMPORARY_ADDRESS_LINE_2}
                </address>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#E0B75C] transition hover:text-[#F5DFA0]"
                >
                  <Navigation className="h-4 w-4" />
                  View on Google Maps
                </a>

                <p className="mt-4 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                  This is our current Friday Jumu&apos;ah venue. Join us every
                  Friday as we grow together toward our permanent masjid, In Sha
                  Allah.
                </p>

                <div className="mt-4 rounded-2xl border border-[#D4A447]/18 bg-[#073F36]/55 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E0B75C]">
                    Parking &amp; Entrance
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                    Follow posted signs on arrival. Join our WhatsApp community
                    for the latest parking, entrance, and Jumu&apos;ah updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A447] px-8 py-3.5 font-semibold text-[#063C34] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0B75C] sm:w-auto"
          >
            <Navigation className="h-5 w-5" />
            Get Directions
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Ballantyne Islamic Center WhatsApp community"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#A7D7C5] bg-[#A7D7C5] px-8 py-3.5 font-semibold text-[#063C34] shadow-[0_10px_28px_rgba(167,215,197,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#C4E8D8] hover:shadow-[0_14px_34px_rgba(167,215,197,0.28)] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Community
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-[#BDD3C8]">
          Stay connected for Jumu&apos;ah reminders, community announcements,
          and updates on the permanent masjid project.{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7DCFB8] underline-offset-2 hover:underline"
          >
            Join our WhatsApp community.
          </a>
        </p>
        {/* DAILY SALAH TIMES — REFERENCE ONLY */}

        <PrayerTimesModule />

        {/* SHIMMER DIVIDER INTO MONTHLY GIVING */}

        <div className="my-10 flex items-center gap-4">
          <span className="relative h-px flex-1 overflow-hidden bg-[#D4A447]/15">
            <span
              aria-hidden="true"
              className="donation-divider-shimmer absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#F5DFA0]/70 to-transparent"
            />
          </span>

          <span className="text-base text-[#D4A447]/55">🤲</span>

          <span className="relative h-px flex-1 overflow-hidden bg-[#D4A447]/15">
            <span
              aria-hidden="true"
              className="donation-divider-shimmer donation-divider-shimmer-delay absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#F5DFA0]/70 to-transparent"
            />
          </span>
        </div>

        {/* MONTHLY GIVING */}

        <section
          aria-labelledby="donate-heading"
          className="overflow-hidden rounded-[28px] border border-[#D4A447]/25 shadow-[0_24px_64px_rgba(0,0,0,0.28)]"
          style={{
            background:
              "linear-gradient(160deg, #10594A 0%, #0C4F43 50%, #063C34 100%)",
          }}
        >
          <div className="border-b border-[#D4A447]/20 bg-[#063C34]/40 px-6 py-4 text-center">
            <div className="inline-flex items-center gap-2">
              <HandHeart className="h-4 w-4 text-[#7DCFB8]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7DCFB8]">
                Support Ballantyne Islamic Center
              </p>
            </div>
          </div>

          <div className="p-5 text-center sm:p-9">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4A447]/30 bg-[#D4A447]/10">
              <HandHeart className="h-6 w-6 text-[#F5DFA0]" />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7DCFB8]">
              Monthly Giving
            </p>

            <h2
              id="donate-heading"
              className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-[#FFFDF7] sm:text-4xl md:text-5xl"
            >
              Sadaqah Jariyah
            </h2>

            <p className="monthly-text-shimmer mt-2 bg-gradient-to-r from-[#D4A447] via-[#FFF1BC] to-[#D4A447] bg-[length:220%_100%] bg-clip-text font-serif text-xl font-semibold text-transparent sm:text-2xl">
              One Month at a Time
            </p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
              Your monthly contribution helps sustain Jumu&apos;ah, Islamic
              programs, community activities, and our journey toward a permanent
              masjid, In Sha Allah.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E0B75C]">
                Choose a Monthly Amount
              </p>

              {/* Mobile: 2 x 2 compact grid
                  Desktop: 3 amounts + Other full width */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {MONTHLY_DONATION_OPTIONS.map((amount) => (
                  <a
                    key={amount}
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Donate ${amount} monthly to Ballantyne Islamic Center`}
                    className="group relative min-h-[108px] overflow-hidden rounded-2xl border border-[#D4A447]/30 bg-[#073F36] px-3 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-1 hover:border-[#D4A447]/65 hover:bg-[#0A493D] hover:shadow-[0_14px_32px_rgba(0,0,0,0.22)] sm:min-h-[118px] sm:py-5"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/55 to-transparent" />

                    <div className="flex h-full flex-col items-center justify-center">
                      <span className="block font-serif text-2xl font-semibold text-[#F5DFA0] sm:text-3xl">
                        {amount}
                      </span>

                      <span className="mt-1.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#A7D7C5]">
                        Monthly
                      </span>
                    </div>
                  </a>
                ))}

                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Choose another monthly donation amount"
                  className="group relative min-h-[108px] overflow-hidden rounded-2xl border border-white/10 bg-[#073F36] px-4 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[#D4A447]/45 hover:bg-[#0A493D] sm:col-span-3 sm:min-h-0 sm:px-5 sm:text-left"
                >
                  <div className="flex h-full flex-col items-center justify-center sm:flex-row sm:justify-between">
                    <div>
                      <p className="font-semibold text-[#FFFDF7]">
                        Other Amount
                      </p>

                      <p className="mt-1 hidden text-xs text-[#BDD3C8] sm:block">
                        Choose the monthly amount that works best for you.
                      </p>
                    </div>

                    <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-[#E0B75C] transition-transform duration-200 group-hover:translate-x-1 sm:mt-0" />
                  </div>
                </a>
              </div>
            </div>

            {/* Give Monthly */}

            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto mt-7 inline-flex w-[88%] max-w-sm overflow-hidden rounded-full bg-[#D4A447] px-8 py-4 text-base font-bold text-[#063C34] shadow-[0_12px_30px_rgba(212,164,71,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0B75C] hover:shadow-[0_16px_36px_rgba(212,164,71,0.3)] sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="donation-button-shimmer pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              />

              <span className="relative z-10 inline-flex w-full items-center justify-center gap-2">
                <HandHeart className="h-5 w-5" />
                DONATE
              </span>
            </a>

            <p className="mx-auto mt-4 max-w-lg px-2 text-xs leading-relaxed text-[#BDD3C8]">
              Secure giving through PayPal. Select{" "}
              <span className="font-semibold text-[#A7D7C5]">
                Monthly
              </span>{" "}
              to start your recurring contribution.
            </p>

            <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-[#D4A447]/20 bg-[#063C34]/45 p-5">
              <p className="font-serif text-lg font-semibold text-[#F5DFA0]">
                Your Monthly Support Makes a Difference
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                Consistent monthly giving helps sustain Jumu&apos;ah, Islamic
                education, youth programs, community services, and our journey
                toward a permanent masjid.
              </p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#BDD3C8]">
              Prefer to give once?{" "}
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F5DFA0] underline decoration-[#D4A447]/45 underline-offset-4 transition hover:text-[#FFFDF7]"
              >
                Choose One-Time on PayPal
              </a>
            </p>
          </div>

          {/* ZELLE */}

          <div className="border-t border-[#D4A447]/20 bg-[#063C34]/45 p-5 sm:p-8">
            <div className="flex items-start gap-3 text-left sm:gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A447]/28 bg-[#0B4C40]">
                <Landmark className="h-5 w-5 text-[#E0B75C]" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A7D7C5]">
                  Give by Zelle
                </p>

                <div
                  className="mt-4 rounded-2xl border p-4"
                  style={{
                    borderColor: "rgba(196,124,26,0.28)",
                    background: "rgba(196,124,26,0.08)",
                  }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E0B75C]">
                    Important Note
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                    Donations are received through Carolina Muslim Development
                    Fund for the Ballantyne Islamic Center / Masjid Ballantyne
                    project. For your security, please verify the recipient name
                    matches exactly before completing your transfer.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-[#073F36] p-4">
                    <p className="text-sm font-medium text-[#BDD3C8]">
                      Recipient
                    </p>

                    <p className="mt-2 text-base font-semibold leading-snug text-[#FFFDF7] sm:text-lg">
                      {ZELLE_RECIPIENT}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#073F36] p-4">
                    <p className="text-sm font-medium text-[#BDD3C8]">
                      Zelle Tag
                    </p>

                    <p className="mt-2 font-mono text-xl font-bold tracking-wide text-[#F5DFA0] sm:text-2xl">
                      {ZELLE_TAG}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#073F36] p-4">
                    <p className="text-sm font-medium text-[#BDD3C8]">
                      Memo
                    </p>

                    <p className="mt-2 text-base font-semibold text-[#FFFDF7] sm:text-lg">
                      {ZELLE_MEMO}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#BDD3C8]">
                  ⚠ For your security, please verify the recipient name before
                  sending.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}

        <div className="my-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#D4A447]/15" />
          <span className="text-base text-[#D4A447]/40">☪</span>
          <span className="h-px flex-1 bg-[#D4A447]/15" />
        </div>

        {/* GROWING COMMUNITY */}

        <section
          aria-labelledby="community-heading"
          className="relative overflow-hidden rounded-[28px] border border-[#D4A447]/22 p-6 text-center shadow-xl sm:p-10"
          style={{
            background:
              "linear-gradient(160deg, #0C4F43 0%, #0A4539 60%, #073F36 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(77,184,154,0.14) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4DB89A]/30 bg-[#4DB89A]/10 px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-[#7DCFB8]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7DCFB8]">
                A Growing Community
              </p>
            </div>

            <h2
              id="community-heading"
              className="font-serif text-2xl font-semibold leading-tight text-[#FFFDF7] sm:text-3xl md:text-4xl"
            >
              Growing Together Toward{" "}
              <span className="text-[#F5DFA0]">
                Our Permanent Masjid,
              </span>{" "}
              In Sha Allah.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#DCEBE4] sm:text-lg">
              By the will of Allah, we are working to establish a permanent
              masjid — a center of worship, Qur&apos;anic learning, youth
              development, and community service for Muslim families across
              Ballantyne, Fort Mill, Indian Land, and South Charlotte.
            </p>

            <div className="mt-7 grid gap-4 text-left sm:grid-cols-2">
              <div
                className="rounded-2xl border p-5"
                style={{
                  borderColor: "rgba(155,58,42,0.38)",
                  background:
                    "linear-gradient(135deg, rgba(61,21,16,0.82) 0%, rgba(40,12,8,0.65) 100%)",
                }}
              >
                <span className="inline-block rounded-full border border-[#C44E38]/40 bg-[#9B3A2A]/22 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C44E38]">
                  Where We Are
                </span>

                <p className="mt-3 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                  Alhamdulillah, we currently gather every Friday for
                  Jumu&apos;ah prayer at our interim venue while our community
                  continues working toward a permanent masjid.
                </p>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{
                  borderColor: "rgba(196,124,26,0.38)",
                  background:
                    "linear-gradient(135deg, rgba(58,38,6,0.88) 0%, rgba(35,22,3,0.68) 100%)",
                }}
              >
                <span className="inline-block rounded-full border border-[#D4A447]/40 bg-[#D4A447]/14 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#E0B75C]">
                  Our Vision — In Sha Allah
                </span>

                <p className="mt-3 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                  A permanent masjid where families can worship, learn, serve,
                  and build a strong Islamic foundation for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}

        <div className="my-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#D4A447]/15" />
          <span className="text-base text-[#D4A447]/40">✦</span>
          <span className="h-px flex-1 bg-[#D4A447]/15" />
        </div>

        {/* EXPLORE */}

        <section
          aria-labelledby="explore-heading"
          className="relative overflow-hidden rounded-[28px] border border-[#D4A447]/22 bg-[#073F36] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.24)] sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4A447]/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#4DB89A]/10 blur-3xl" />

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/65 to-transparent" />
          </div>

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A447]/25 bg-[#D4A447]/10 text-[#F5DFA0]">
                <Compass className="h-5 w-5" />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#7DCFB8]">
                Explore Our Community
              </p>

              <h2
                id="explore-heading"
                className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-semibold leading-tight text-[#FFFDF7] sm:text-3xl"
              >
                Learn More About Ballantyne Islamic Center
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#BDD3C8] sm:text-base">
                Explore our story, leadership, Friday prayer information, and
                the communities we serve across Ballantyne, Fort Mill, Indian
                Land, and nearby areas.
              </p>
            </div>

            <nav
              aria-label="Explore Ballantyne Islamic Center"
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {EXPLORE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A453B] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A447]/35 hover:bg-[#0C4F43] hover:shadow-[0_16px_38px_rgba(0,0,0,0.18)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-[#FFFDF7] transition group-hover:text-[#F5DFA0]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#BDD3C8]">
                        {item.description}
                      </p>
                    </div>

                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A7D7C5]/20 bg-white/5 text-[#A7D7C5] transition duration-300 group-hover:border-[#D4A447]/35 group-hover:text-[#F5DFA0]">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="mx-auto mt-14 max-w-2xl border-t border-white/10 pt-8 text-center">
          <p className="font-serif text-xl font-semibold text-[#FFFDF7]">
            Ballantyne Islamic Center
          </p>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7DCFB8]">
            Masjid Ballantyne
          </p>

          <p className="mt-4 text-sm text-[#BDD3C8] sm:text-base">
            Currently serving Friday Jumu&apos;ah prayer and growing together
            toward our permanent masjid, In Sha Allah.
          </p>

          <p className="mt-3 text-xs text-white/30">
            © {new Date().getFullYear()} Ballantyne Islamic Center. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}