import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { MapPin, Clock, Car, Users, Navigation, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ballantyne Islamic Center | Jumu'ah Prayer Near Ballantyne NC",
  description:
    "Ballantyne Islamic Center serves Muslim families near Ballantyne, Waxhaw, Weddington, Marvin, Fort Mill, Indian Land and South Charlotte. Join Friday Jumu'ah prayer at 10562 Providence Rd W, Charlotte, NC 28277.",
  alternates: {
    canonical: "/masjid-ballantyne",
  },
  openGraph: {
    title: "Ballantyne Islamic Center | Jumu'ah Prayer Near Ballantyne NC",
    description:
      "Find Jumu'ah prayer near Ballantyne, Waxhaw, Weddington, Marvin, Fort Mill, Indian Land and South Charlotte.",
    url: "https://www.ballantynemasjid.org/masjid-ballantyne",
    siteName: "Masjid Ballantyne",
    type: "website",
  },
};

const areas = [
  "Ballantyne",
  "Waxhaw",
  "Weddington",
  "Marvin",
  "Pineville",
  "South Charlotte",
  "Fort Mill",
  "Indian Land",
];

const faqs = [
  {
    q: "Where is Jumu'ah prayer held near Ballantyne?",
    a: "Current Jumu'ah prayer is held at 10562 Providence Rd W, Charlotte, NC 28277.",
  },
  {
    q: "What areas does Masjid Ballantyne serve?",
    a: "Masjid Ballantyne serves Ballantyne, Waxhaw, Weddington, Marvin, Fort Mill, Indian Land, Pineville and South Charlotte.",
  },
  {
    q: "Is this location convenient for Ballantyne families?",
    a: "Yes. The current Jumu'ah location is convenient for many families living near Ballantyne and surrounding South Charlotte communities.",
  },
  {
    q: "Is parking available for Jumu'ah?",
    a: "Yes. Please arrive early and follow parking guidance from volunteers.",
  },
];

export default function MasjidBallantynePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#123b35]">
      <section className="bg-[#0A3A34] px-5 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 inline-flex rounded-full border border-[#A7D7C5]/40 px-4 py-2 text-sm font-medium text-[#A7D7C5]">
            Masjid Near Ballantyne
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Masjid Ballantyne Serving Ballantyne, Waxhaw & South Charlotte
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            Masjid Ballantyne provides Jumu&apos;ah prayer and community
            services for Muslim families near Ballantyne, Waxhaw, Weddington,
            Marvin, Fort Mill, Indian Land and South Charlotte.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/jummah-prayer-ballantyne"
              className="rounded-full bg-[#D4A447] px-6 py-3 text-center font-semibold text-[#0A3A34] transition hover:opacity-90"
            >
              View Jumu&apos;ah Details
            </Link>

            <a
              href="https://www.google.com/maps/search/?api=1&query=10562+Providence+Rd+W+Charlotte+NC+28277"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <InfoCard
            icon={<MapPin />}
            title="Current Jumu'ah Location"
            text="10562 Providence Rd W, Charlotte, NC 28277."
          />
          <InfoCard
            icon={<Clock />}
            title="Friday Prayer"
            text="Please check the Jumu'ah page or homepage for the latest confirmed Khutbah and Salah timing."
          />
          <InfoCard
            icon={<Car />}
            title="Parking"
            text="Please arrive early, follow volunteer guidance, and park respectfully."
          />
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-semibold text-[#0A3A34]">
              A Local Masjid for the Ballantyne Area
            </h2>

            <p className="mt-5 leading-8 text-[#31524c]">
              Masjid Ballantyne was established to serve the growing Muslim
              community in and around Ballantyne. Many families in this area
              search for a nearby masjid, mosque, or Friday Jumu&apos;ah prayer
              location that is convenient, welcoming, and easy to access.
            </p>

            <p className="mt-5 leading-8 text-[#31524c]">
              Our current Jumu&apos;ah prayer location is{" "}
              <strong>10562 Providence Rd W, Charlotte, NC 28277</strong>. This
              location helps serve Muslim families from Ballantyne, Waxhaw,
              Weddington, Marvin, Pineville, Fort Mill, Indian Land and South
              Charlotte.
            </p>

            <p className="mt-5 leading-8 text-[#31524c]">
              In addition to Friday prayer, Masjid Ballantyne is working toward
              building a strong Islamic community focused on worship, learning,
              youth involvement, family connection and service to the broader
              community.
            </p>

            <div className="mt-8 rounded-2xl bg-[#f7f3ea] p-5">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <Navigation className="h-5 w-5 text-[#D4A447]" />
                Areas Served
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
              Why Families Search for Masjid Ballantyne
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <MiniPoint
                icon={<Users />}
                title="Close to Ballantyne"
                text="Convenient for families living and working near Ballantyne and South Charlotte."
              />
              <MiniPoint
                icon={<MapPin />}
                title="Clear Location"
                text="Current Jumu'ah prayer location is clearly listed for visitors."
              />
              <MiniPoint
                icon={<Clock />}
                title="Friday Prayer Focus"
                text="Dedicated information for Jumu'ah prayer and community updates."
              />
              <MiniPoint
                icon={<Car />}
                title="Easy Directions"
                text="Visitors can quickly open directions and plan their visit."
              />
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#0A3A34] p-6 text-white shadow-sm">
              <h3 className="text-2xl font-semibold">Visit for Jumu&apos;ah</h3>
              <p className="mt-3 leading-7 text-white/80">
                Current Friday prayer location:
                <br />
                <strong>10562 Providence Rd W</strong>
                <br />
                <strong>Charlotte, NC 28277</strong>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10562+Providence+Rd+W+Charlotte+NC+28277"
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
                <li>Masjid Ballantyne</li>
                <li>Ballantyne Masjid</li>
                <li>Mosque near Ballantyne</li>
                <li>Jumu&apos;ah Prayer Ballantyne</li>
                <li>Friday Prayer South Charlotte</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A447]">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#0A3A34]">
              Masjid Ballantyne Questions
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Mosque",
              name: "Masjid Ballantyne",
              alternateName: "Ballantyne Islamic Center",
              url: "https://www.ballantynemasjid.org/masjid-ballantyne",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10562 Providence Rd W",
                addressLocality: "Charlotte",
                addressRegion: "NC",
                postalCode: "28277",
                addressCountry: "US",
              },
              areaServed: areas,
              description:
                "Masjid Ballantyne serves Muslim families near Ballantyne, Waxhaw, Weddington, Marvin, Fort Mill, Indian Land and South Charlotte.",
            },
            {
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
            },
          ]),
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