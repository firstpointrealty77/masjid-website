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

const SITE_URL = "https://ballantynemasjid.org";

const PAGE_TITLE =
  "Jumu’ah Prayer in Ballantyne, Fort Mill & Indian Land | Masjid Ballantyne";

const PAGE_DESCRIPTION =
  "Friday Jumu’ah (Jummah) prayer near Ballantyne, Fort Mill, Indian Land, and Charlotte. Khutbah begins at 1:30 PM and Jumu’ah Salah is at 1:55 PM.";

const TEMPORARY_ADDRESS_LINE_1 = "10562 Providence Rd W";
const TEMPORARY_ADDRESS_LINE_2 = "Charlotte, NC 28277";

const KHUTBAH_TIME = "1:30 PM";
const JUMUAH_SALAH_TIME = "1:55 PM";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=10562%20Providence%20Rd%20W%2C%20Charlotte%2C%20NC%2028277";

// Replace these before production deployment.
const WHATSAPP_URL = "https://chat.whatsapp.com/JYqpEJtvn5a6riVMf1vnk6";
const DONATE_URL = "https://www.paypal.com/ncp/payment/9DNAZTUH3M6LU";

const ZELLE_RECIPIENT = "Carolina Muslim Development Fund Accounts";
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

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Masjid Ballantyne",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ReligiousOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Ballantyne Islamic Center",
      alternateName: "Masjid Ballantyne",
      url: SITE_URL,
      description:
        "A growing Muslim community serving Ballantyne, Fort Mill, Indian Land, and Charlotte through Friday Jummah prayer and community programs.",
      areaServed: [
        "Ballantyne, Charlotte, NC",
        "Fort Mill, SC",
        "Indian Land, SC",
        "Charlotte, NC",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Masjid Ballantyne",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#jummah-prayer`,
      url: SITE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#063C34] text-[#FFFDF7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -12%, rgba(212,164,71,0.14), transparent 33%), radial-gradient(circle at 0% 70%, rgba(167,215,197,0.07), transparent 28%), radial-gradient(circle at 100% 52%, rgba(212,164,71,0.04), transparent 24%)",
        }}
      />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.016]"
      >
        <defs>
          <pattern
            id="islamicPattern"
            width="96"
            height="96"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 5 57 31 83 40 57 49 48 75 39 49 13 40 39 31Z"
              fill="none"
              stroke="#D4A447"
              strokeWidth="1.1"
            />
            <circle cx="48" cy="40" r="8" fill="none" stroke="#D4A447" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
      </svg>

      <div className="relative mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4A447]/55 sm:w-16" />

            <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E0B75C] sm:text-xs sm:tracking-[0.28em]">
              Friday Jummah
            </p>

            <span className="h-px w-10 bg-[#D4A447]/55 sm:w-16" />
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#FFFDF7] sm:text-5xl md:text-6xl">
            Jumu’ah Prayer
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#DCEBE4] sm:text-lg">
            Ballantyne Islamic Center welcomes you to Friday Jummah prayer — 
            serving the Muslim community of Ballantyne, Fort Mill, Indian Land, and greater Charlotte.
            </p>
        </header>

        <section className="mx-auto mt-10 w-full max-w-4xl overflow-hidden rounded-[30px] border border-[#D4A447]/40 bg-[#10594A] shadow-[0_26px_80px_rgba(0,0,0,0.32)]">
          <div className="border-b border-[#D4A447]/25 px-6 py-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E0B75C] sm:tracking-[0.3em]">
              Friday Prayer Schedule
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A447]/30 bg-[#073F36]">
                <Clock3 className="h-5 w-5 text-[#E0B75C]" />
              </span>

              <div className="pt-0.5 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#A7D7C5]">
                  Please arrive by 1:25 PM
                </p>

                <p className="mt-1 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                  Please be seated before the khutbah begins.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <div className="rounded-2xl border border-white/10 bg-[#073F36] p-4 sm:p-6">
                <p className="text-lg font-semibold tracking-tight text-[#FFFDF7] sm:text-2xl">
                  Khutbah Begins
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-tight text-[#FFFDF7] sm:text-5xl">
                  {KHUTBAH_TIME}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#073F36] p-4 sm:p-6">
                <p className="text-lg font-semibold tracking-tight text-[#FFFDF7] sm:text-2xl">
                  Jumu’ah Salah
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-tight text-[#FFFDF7] sm:text-5xl">
                  {JUMUAH_SALAH_TIME}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4A447]/25 bg-[#063C34]/50 px-5 py-6 sm:px-8 sm:py-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A447]/30 bg-[#0B4C40]">
                <MapPin className="h-5 w-5 text-[#E0B75C]" />
              </span>

              <div className="min-w-0 text-left">
                <div className="inline-flex rounded-full border border-[#D4A447]/30 bg-[#073F36] px-3 py-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E0B75C] sm:text-[11px]">
                    Temporary Friday Prayer Venue
                  </p>
                </div>

                <address className="mt-4 not-italic text-xl font-semibold leading-snug text-[#FFFDF7] sm:text-3xl">
                  {TEMPORARY_ADDRESS_LINE_1}
                  <br />
                  {TEMPORARY_ADDRESS_LINE_2}
                </address>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E0B75C] transition hover:text-[#F0CB78]"
                >
                  <Navigation className="h-4 w-4" />
                  View on Google Maps
                </a>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                  This is our interim prayer venue, currently hosting Friday Jummah and Ramadan programs. Daily congregational prayers are not yet available at this location.
                 </p>

                <div className="mt-4 max-w-2xl rounded-2xl border border-[#D4A447]/20 bg-[#073F36]/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E0B75C]">
                    Parking & Entrance Information
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                    Please use the designated entrance and follow parking guidance
                    posted at the venue. Detailed arrival information will be shared
                    in our WhatsApp community before the first Jumu’ah prayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A447] px-8 py-3.5 font-semibold text-[#063C34] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#E1B85C] sm:w-auto"
          >
            <Navigation className="h-5 w-5" />
            Get Directions
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#A7D7C5]/35 bg-white/[0.03] px-8 py-3.5 font-semibold text-[#FFFDF7] transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 text-[#A7D7C5]" />
            WhatsApp Updates
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-[#BDD3C8] sm:text-base">
          Join our WhatsApp community for Jumu’ah updates, Ramadan information,
          and future Masjid Ballantyne announcements.
        </p>

        <section className="mx-auto mt-12 w-full max-w-4xl rounded-[30px] border border-[#D4A447]/25 bg-[#0C493E]/95 p-6 text-center shadow-xl sm:p-10">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#D4A447]/30 bg-[#073F36] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#E0B75C]" />

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0B75C]">
              A Growing Community
            </p>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#FFFDF7] sm:text-4xl">
            Building Toward a Permanent Masjid Home
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#DCEBE4] sm:text-lg">
            Masjid Ballantyne is working toward a permanent home for daily
            prayers, Qur’an learning, youth programs, families, and community
            service in the Ballantyne area.
          </p>

          <div className="mt-7 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#073F36] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A7D7C5]">
                Today
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                Friday Jumu’ah prayer and selected Ramadan programs at our
                temporary community venue.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#073F36] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A7D7C5]">
                 Our Vision — In Sha Allah
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                A permanent masjid and welcoming community home for families
                across Ballantyne, Fort Mill, Indian Land, and Charlotte.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-[30px] border border-[#D4A447]/25 bg-[#10594A] shadow-[0_24px_70px_rgba(0,0,0,0.26)]">
          <div className="border-b border-[#D4A447]/25 px-6 py-5 text-center">
            <div className="inline-flex items-center gap-2 text-[#E0B75C]">
              <HandHeart className="h-5 w-5" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Support Masjid Ballantyne
              </p>
            </div>
          </div>

          <div className="p-6 text-center sm:p-9">
            <h2 className="font-serif text-3xl font-semibold text-[#FFFDF7]">
              Support Our Permanent Masjid — Invest in Your Community's Future
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#DCEBE4]">
              Your support helps establish a permanent home for prayer, Qur’an
              education, youth programs, families, and community service.
            </p>

            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A447] px-8 py-3.5 font-semibold text-[#063C34] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#E1B85C] sm:w-auto"
            >
              <HandHeart className="h-5 w-5" />
              Donate Online
            </a>
          </div>

          <div className="border-t border-[#D4A447]/25 bg-[#063C34]/50 p-5 sm:p-8">
            <div className="flex items-start gap-3 text-left sm:gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4A447]/30 bg-[#0B4C40]">
                <Landmark className="h-5 w-5 text-[#E0B75C]" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#A7D7C5]">
                  Give by Zelle
                </p>

                <div className="mt-4 rounded-2xl border border-[#D4A447]/20 bg-[#073F36]/55 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E0B75C]">
                    Donation Processing Notice
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-[#DCEBE4] sm:text-base">
                    Donations for Masjid Ballantyne are received through Carolina
                    Muslim Development Fund Accounts for the Masjid Ballantyne
                    project. For your security, please verify the recipient name matches exactly 
                    before completing your transfer.
                    
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-[#073F36] p-4">
                    <p className="text-sm font-medium text-[#BDD3C8]">
                      Recipient
                    </p>

                    <p className="mt-2 text-base font-semibold leading-relaxed text-[#FFFDF7] sm:text-lg">
                      {ZELLE_RECIPIENT}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#073F36] p-4">
                    <p className="text-sm font-medium text-[#BDD3C8]">
                      Zelle Tag
                    </p>

                    <p className="mt-2 break-words font-mono text-xl font-bold tracking-wide text-[#FFFDF7] sm:text-2xl">
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
                  Please confirm the recipient name before sending your Zelle
                  donation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-14 max-w-4xl border-t border-white/10 pt-8 text-center">
          <p className="font-serif text-xl text-[#FFFDF7]">
            Ballantyne Islamic Center
          </p>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#A7D7C5]">
            Masjid Ballantyne
          </p>

          <p className="mt-4 text-sm text-[#BDD3C8] sm:text-base">
            Serving Ballantyne, Fort Mill, Indian Land & Charlotte
          </p>

          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} Masjid Ballantyne
          </p>
        </footer>
      </div>
    </main>
  );
}