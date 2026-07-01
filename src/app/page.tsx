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

const PAGE_TITLE =
  "Jumu'ah Prayer in Ballantyne, Fort Mill & Indian Land | Masjid Ballantyne";

const SHARE_TITLE = "Masjid Ballantyne | Friday Jumu'ah Prayer";

const PAGE_DESCRIPTION =
  "Friday Jumu'ah (Jummah) prayer near Ballantyne, Fort Mill, Indian Land, and Charlotte. Khutbah begins at 1:30 PM. Kindly arrive by 1:25 PM.";

const TEMPORARY_ADDRESS_LINE_1 = "10562 Providence Rd W";
const TEMPORARY_ADDRESS_LINE_2 = "Charlotte, NC 28277";
const KHUTBAH_TIME = "1:30 PM";
const SALAH_TIME = "1:55 PM";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=10562%20Providence%20Rd%20W%2C%20Charlotte%2C%20NC%2028277";

const WHATSAPP_URL = "https://chat.whatsapp.com/EcIDT1sYYqbBozdH4AMk9h?s=cl&p=i&mlu=0&amv=2";
const DONATE_URL = "https://www.paypal.com/ncp/payment/9DNAZTUH3M6LU";

const ZELLE_RECIPIENT = "Carolina Muslim Development Fund";
const ZELLE_TAG = "bicc10935";
const ZELLE_MEMO = "Masjid Support";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Masjid Ballantyne",
    title: SHARE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// ─────────────────────────────────────────────────────────────
// STRUCTURED DATA
// Three graphs:
//   1. ReligiousOrganization  — who we are
//   2. WebSite / WebPage      — site metadata
//   3. Event (recurring)      — Friday Jumu'ah in Google Events
// ─────────────────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ── 1. Organisation ──────────────────────────────────────
    {
      "@type": "ReligiousOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ballantyne Islamic Center",
      alternateName: "Masjid Ballantyne",
      url: SITE_URL,
      description:
        "A growing Muslim community serving Ballantyne, Fort Mill, Indian Land, and South Charlotte through Friday Jumu'ah prayer and community programs.",
      areaServed: [
        "Ballantyne, Charlotte, NC",
        "Fort Mill, SC",
        "Indian Land, SC",
        "South Charlotte, NC",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "10562 Providence Rd W",
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

    // ── 2. WebSite ───────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Masjid Ballantyne",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },

    // ── 3. WebPage ───────────────────────────────────────────
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#jummah-prayer`,
      url: SITE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },

    // ── 4. Event — recurring Friday Jumu'ah ─────────────────
    // This graph entry is what makes the prayer appear in
    // Google Search "Events near me", Google Maps event pins,
    // and AI-generated local answers for queries like
    // "Friday prayer near Ballantyne" or "mosque events this week".
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#jummah-event`,
      name: "Friday Jumu'ah Prayer — Ballantyne Islamic Center",
      description:
        "Weekly Friday Jumu'ah prayer serving the Muslim community of Ballantyne, Fort Mill, Indian Land, and South Charlotte. Khutbah begins at 1:30 PM. Jumu'ah Salah at 1:55 PM. Kindly arrive by 1:25 PM. All are welcome.",

      // First occurrence — update this date to the actual first Jumu'ah
      startDate: "2026-07-03T13:30:00-04:00",
      endDate: "2026-07-03T14:30:00-04:00",

      // Recurring schedule — tells Google this repeats every Friday
      eventSchedule: {
        "@type": "Schedule",
        startDate: "2026-07-03",
        // No endDate — open-ended weekly recurrence
        repeatFrequency: "P1W",     // every 1 week
        byDay: "https://schema.org/Friday",
        startTime: "13:30",
        endTime: "14:30",
      },

      // Attendance mode — in-person
      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",

      // Status — scheduled (change to EventCancelled if needed)
      eventStatus: "https://schema.org/EventScheduled",

      // Venue — interim location
      location: {
        "@type": "Place",
        name: "Ballantyne Islamic Center — Interim Venue",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10562 Providence Rd W",
          addressLocality: "Charlotte",
          addressRegion: "NC",
          postalCode: "28277",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          // Approximate coordinates for 10562 Providence Rd W, Charlotte NC
          latitude: 35.0335,
          longitude: -80.8741,
        },
      },

      // Organiser — links back to the organisation node
      organizer: {
        "@id": `${SITE_URL}/#organization`,
      },

      // Audience
      audience: {
        "@type": "Audience",
        audienceType: "Muslim community",
      },

      // Keywords help AI search surfaces categorise the event
      keywords: [
        "Jumu'ah",
        "Jummah",
        "Friday prayer",
        "mosque",
        "Islamic center",
        "Ballantyne",
        "Fort Mill",
        "Indian Land",
        "South Charlotte",
        "Muslim",
      ],

      // Free event
      isAccessibleForFree: true,

      // URL of the event page
      url: SITE_URL,
    },
  ],
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#063C34] text-[#FFFDF7]">
      {/* ── Structured data — all four schema graphs ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Subtle geometric background pattern ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg,#D4A447 0,#D4A447 1px,transparent 0,transparent 50%),repeating-linear-gradient(-60deg,#D4A447 0,#D4A447 1px,transparent 0,transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Ambient colour glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% -5%, rgba(212,164,71,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 0% 65%, rgba(77,184,154,0.08) 0%, transparent 60%), radial-gradient(ellipse 35% 40% at 100% 50%, rgba(212,164,71,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-14">

        {/* ══════════════════════════════════════
            HEADER
        ══════════════════════════════════════ */}
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
            Gathering the Muslim Community of{" "}
            <span className="font-medium text-[#7DCFB8]">
              Ballantyne, Fort Mill, Indian Land &amp; South Charlotte
            </span>{" "}
            for Friday Jumu&apos;ah — Every Week, In Sha Allah.
          </p>
        </header>

        {/* ══════════════════════════════════════
            PRAYER SCHEDULE CARD
        ══════════════════════════════════════ */}
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
                  Please be seated before the Khutbah begins —
                  listening attentively is Sunnah.
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
                <span className="font-semibold text-[#FFFDF7]">{SALAH_TIME}</span>
              </p>
            </div>
          </div>

          {/* ── Venue ── */}
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
                  This is where our community gathers every Friday for
                  Jumu&apos;ah prayer. Join us every Friday as we work toward
                  our permanent masjid, In Sha Allah.
                </p>

                <div className="mt-4 rounded-2xl border border-[#D4A447]/18 bg-[#073F36]/55 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E0B75C]">
                    Parking &amp; Entrance
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                    Follow posted signs on arrival. Join our WhatsApp for
                    detailed parking and entrance guidance before your first
                    visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Buttons ── */}
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
            aria-label="Join the Masjid Ballantyne WhatsApp community"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#A7D7C5] bg-[#A7D7C5] px-8 py-3.5 font-semibold text-[#063C34] shadow-[0_10px_28px_rgba(167,215,197,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#C4E8D8] hover:shadow-[0_14px_34px_rgba(167,215,197,0.28)] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Community
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-[#BDD3C8]">
          Stay connected — get Jumu&apos;ah reminders and community updates.{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7DCFB8] underline-offset-2 hover:underline"
          >
            Join our WhatsApp community.
          </a>
        </p>

        {/* ── Section divider ── */}
        <div className="my-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#D4A447]/15" />
          <span className="text-base text-[#D4A447]/40">☪</span>
          <span className="h-px flex-1 bg-[#D4A447]/15" />
        </div>

        {/* ══════════════════════════════════════
            GROWING COMMUNITY
        ══════════════════════════════════════ */}
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
              Your Sadaqah Jariyah —{" "}
              <span className="text-[#F5DFA0]">
                A Permanent Masjid for Ballantyne,
              </span>{" "}
              In Sha Allah.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#DCEBE4] sm:text-lg">
              By the will of Allah, we are working to establish a permanent
              masjid — a center of worship, learning, and community for Muslim
              families across Ballantyne, Fort Mill, Indian Land, and South
              Charlotte.
            </p>

            <div className="mt-7 grid gap-4 text-left sm:grid-cols-2">
              {/* WHERE WE ARE — ruby/red tone */}
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
                  Alhamdulillah, we gather every Friday for Jumu&apos;ah prayer
                  at our interim venue — growing together toward our permanent
                  masjid, In Sha Allah.
                </p>
              </div>

              {/* OUR VISION — amber/gold tone */}
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
                  In Sha Allah, a permanent masjid where Muslim families across
                  Ballantyne, Fort Mill, Indian Land, and South Charlotte can
                  worship, learn, and truly belong.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section divider ── */}
        <div className="my-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#D4A447]/15" />
          <span className="text-base text-[#D4A447]/40">🤲</span>
          <span className="h-px flex-1 bg-[#D4A447]/15" />
        </div>

        {/* ══════════════════════════════════════
            DONATION
        ══════════════════════════════════════ */}
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
                Support Masjid Ballantyne
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
                Invest in Your Community&apos;s Future
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#DCEBE4]">
              Your contribution helps establish a permanent home for daily
              prayer, Qur&apos;anic education, youth programs, and community
              service —{" "}
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

          {/* ── Zelle ── */}
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
                    Fund for the Masjid Ballantyne project. For your security,
                    please verify the recipient name matches exactly before
                    completing your transfer.
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

        {/* ══════════════════════════════════════
            FOOTER
        ══════════════════════════════════════ */}
        <footer className="mx-auto mt-14 max-w-2xl border-t border-white/10 pt-8 text-center">
          <p className="font-serif text-xl font-semibold text-[#FFFDF7]">
            Ballantyne Islamic Center
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7DCFB8]">
            Masjid Ballantyne
          </p>
          <p className="mt-4 text-sm text-[#BDD3C8] sm:text-base">
            A Friday Jumu&apos;ah Home for Muslims in Ballantyne, Fort Mill,
            Indian Land &amp; South Charlotte.
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
