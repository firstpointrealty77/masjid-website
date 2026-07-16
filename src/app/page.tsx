import type { Metadata } from "next";
import {
  Clock3,
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
const SHARE_IMAGE = "/og/whatsapp-preview.jpg";

const PAGE_TITLE =
  "Friday Jumu'ah Prayer in Ballantyne | Ballantyne Islamic Center";

const SHARE_TITLE = "Ballantyne Islamic Center | Friday Jumu'ah Prayer";

const PAGE_DESCRIPTION =
  "Ballantyne Islamic Center currently serves Friday Jumu'ah prayer near Ballantyne, Fort Mill, Indian Land, and South Charlotte while growing together toward our permanent masjid, In Sha Allah. Khutbah begins at 1:30 PM.";

const SHARE_DESCRIPTION =
  "Currently serving Friday Jumu'ah prayer and growing together toward our permanent masjid, In Sha Allah.";

const TEMPORARY_ADDRESS_LINE_1 = "10562 Providence Rd W";
const TEMPORARY_ADDRESS_LINE_2 = "Charlotte, NC 28277";
const KHUTBAH_TIME = "1:30 PM";
const SALAH_TIME = "1:55 PM";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=10562%20Providence%20Rd%20W%2C%20Charlotte%2C%20NC%2028277";

const WHATSAPP_URL =
  "https://chat.whatsapp.com/EcIDT1sYYqbBozdH4AMk9h?s=cl&p=i&mlu=0&amv=2";

const DONATE_URL = "https://www.paypal.com/ncp/payment/9DNAZTUH3M6LU";

const ZELLE_RECIPIENT = "Carolina Muslim Development Fund";
const ZELLE_TAG = "bicc10935";
const ZELLE_MEMO = "Masjid Support";

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
        alt: "Ballantyne Islamic Center Friday Jumu'ah Prayer",
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
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },

    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
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

      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Subtle geometric background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg,#D4A447 0,#D4A447 1px,transparent 0,transparent 50%),repeating-linear-gradient(-60deg,#D4A447 0,#D4A447 1px,transparent 0,transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient colour glow */}
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

        {/* PRAYER SCHEDULE CARD */}
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

        {/* CTA Buttons */}
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

        {/* Section divider */}
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

        {/* Section divider */}
        <div className="my-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#D4A447]/15" />
          <span className="text-base text-[#D4A447]/40">🤲</span>
          <span className="h-px flex-1 bg-[#D4A447]/15" />
        </div>

        {/* DONATION */}
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

          <div className="p-6 text-center sm:p-9">
            <h2
              id="donate-heading"
              className="font-serif text-2xl font-semibold text-[#FFFDF7] sm:text-3xl"
            >
              Support Our Permanent Masjid —{" "}
              <span className="text-[#F5DFA0]">
                A Sadaqah Jariyah for Generations
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#DCEBE4]">
              Your contribution helps establish a permanent home for prayer,
              Qur&apos;anic education, youth programs, family services, and
              community support —{" "}
              <span className="font-semibold text-[#E0B75C]">
                a lasting sadaqah jariyah
              </span>{" "}
              for you and your family.
            </p>

            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A447] px-8 py-3.5 font-semibold text-[#063C34] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0B75C] sm:w-auto"
            >
              <HandHeart className="h-5 w-5" />
              Donate Online
            </a>
          </div>

          {/* Zelle */}
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
                    <p className="text-sm font-medium text-[#BDD3C8]">Memo</p>
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