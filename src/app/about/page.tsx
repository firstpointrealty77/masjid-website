import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Masjid Ballantyne",
  description:
    "Learn about Masjid Ballantyne near Ballantyne and Fort Mill, serving the local Muslim community through prayer, education, youth development, and community life.",
};

const impactItems = [
  "Daily prayers and Jumu’ah worship",
  "Islamic education for children, youth, and adults",
  "Mentorship and next-generation development",
  "Family connection and community support",
  "Service, outreach, and positive civic presence",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ec]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#e7dcc0] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_28%),linear-gradient(180deg,#0f2b22_0%,#14382c_45%,#1d4938_100%)] text-white">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2dc93] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f2dc93] to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#f2dc93] sm:text-xs">
            بسم الله الرحمن الرحيم
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Masjid Ballantyne
          </h1>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#f2dc93] to-transparent" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-9 text-white/85 sm:text-lg">
            Building a house where faith is strengthened, knowledge is shared,
            and hearts are brought closer to the Creator.
          </p>
        </div>

        {/* Subtle mosque silhouette background */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            className="h-[96px] w-full opacity-[0.18] sm:h-[114px] lg:h-[130px]"
            fill="#f2dc93"
            aria-hidden="true"
          >
            <path d="M0 160 L0 124 Q70 92 140 124 Q210 72 280 124 Q350 86 420 124 Q495 60 570 124 Q645 86 720 124 Q790 74 860 124 Q930 92 1000 124 Q1080 108 1200 124 L1200 160 Z" />
            <rect x="170" y="74" width="10" height="50" rx="1" />
            <rect x="560" y="52" width="12" height="72" rx="1" />
            <rect x="930" y="80" width="10" height="44" rx="1" />
            <path d="M248 122a28 28 0 1 1 56 0Z" />
            <path d="M528 124a42 42 0 1 1 84 0Z" />
            <path d="M898 124a26 26 0 1 1 52 0Z" />
          </svg>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d8bb6c]" />
          <div className="mx-3 text-lg text-[#c9a14f]">✦</div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d8bb6c]" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="rounded-[30px] border border-[#e7dcc0] bg-[#f9f6ef] p-6 shadow-[0_18px_50px_rgba(61,45,16,0.06)] sm:p-8 lg:p-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a7b33]">
                A House of Worship, Learning, and Service
              </p>

              <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#d8bb6c] to-transparent" />

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-lg leading-9 text-[#374151]">
                    Masjid Ballantyne is being established as a welcoming house
                    of worship and community center near Ballantyne and Fort
                    Mill, dedicated to serving the spiritual, educational, and
                    community needs of local families. Our hope is to create a
                    place where people gather for prayer, reflection, learning,
                    and service, and where individuals and families find faith,
                    belonging, and support in their everyday lives.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#102f25] sm:text-[2rem]">
                    Mission
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-r from-[#d8bb6c] to-transparent" />
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    Our mission is to establish a masjid where the remembrance
                    of Allah is upheld, daily prayers and Jumu’ah are performed
                    in congregation, and the values of faith, knowledge,
                    compassion, and service are nurtured within the community.
                    Through worship, Islamic learning, youth development, and
                    family engagement, we seek to strengthen character,
                    encourage responsibility, and inspire lives rooted in faith
                    and beneficial action.
                  </p>
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    At its heart, Masjid Ballantyne aims to serve as a place
                    where people grow spiritually, where knowledge is shared
                    with sincerity, and where the next generation is nurtured
                    with strong values, love for learning, and a deep connection
                    to their faith and community.
                  </p>

                  <blockquote className="mt-6 rounded-[20px] border border-[#e6d8b2] bg-gradient-to-b from-[#fffdf7] to-[#fff6df] px-5 py-5 text-base leading-8 text-[#4b5563] italic shadow-[0_8px_24px_rgba(61,45,16,0.04)]">
                    <p>
                      “The mosques of Allah are only to be maintained by those
                      who believe in Allah and the Last Day, establish prayer,
                      and give zakah.”
                    </p>
                    <footer className="mt-2 not-italic font-medium text-[#8b6a23]">
                      — Qur’an 9:18
                    </footer>
                  </blockquote>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#102f25] sm:text-[2rem]">
                    Vision
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-r from-[#d8bb6c] to-transparent" />
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    Our vision is to build a vibrant center of faith, learning,
                    and community life that benefits both the Muslim community
                    and the wider society. Masjid Ballantyne is envisioned as a
                    place where hearts reconnect with faith, families find
                    community, and the next generation grows through knowledge,
                    guidance, and positive mentorship.
                  </p>
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    We aspire to raise young people with strong moral character,
                    a love for the Qur’an and Islamic teachings, and a sense of
                    responsibility toward their families, neighbors, and
                    society. Through education, mentorship, and
                    community-centered programs, we hope to nurture confident,
                    compassionate, and responsible future leaders.
                  </p>
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    Rooted in the timeless values of compassion, generosity,
                    service, and learning, this masjid aims to be a source of
                    benefit not only for those who worship here, but also for
                    the broader community around us. By bringing people together
                    and promoting understanding, kindness, and service, we pray
                    that Masjid Ballantyne becomes a lasting source of barakah
                    for generations to come, InshaAllah.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#102f25] sm:text-[2rem]">
                    Serving Our Community
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-r from-[#d8bb6c] to-transparent" />
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    The Ballantyne and Fort Mill areas are home to a growing and
                    diverse population, including many Muslim families seeking a
                    nearby place of worship and community connection. Masjid
                    Ballantyne aims to serve as a spiritual home where people
                    gather for prayer, learn from the Qur’an and Islamic
                    teachings, support one another, and contribute positively to
                    the broader community.
                  </p>
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    With the support of donors, volunteers, and community
                    members, we hope this masjid becomes a lasting source of
                    learning, unity, and service — benefiting both the present
                    generation and those who will come after us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#102f25] sm:text-[2rem]">
                    Our Hope
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-r from-[#d8bb6c] to-transparent" />
                  <p className="mt-4 text-lg leading-9 text-[#374151]">
                    Together, we are working to build more than a building. We
                    are working to establish a place of worship, learning,
                    guidance, and community that will inspire faith, serve
                    families, and help shape the next generation with knowledge,
                    character, and purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-16">
              <div className="overflow-hidden rounded-[22px] border border-[#dbcda7] bg-white p-2 shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#ece7db]">
                  <Image
                    src="/images/about/masjid-about.jpg"
                    alt="Masjid Ballantyne community masjid near Ballantyne and Fort Mill"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#4b5563]">
                A growing masjid for worship, learning, service, and community
                life near Ballantyne and Fort Mill, South Carolina.
              </p>

              <div className="mt-8 rounded-[24px] border border-[#e5d7b3] bg-[linear-gradient(180deg,#fffdf8_0%,#f7f1e2_100%)] p-6 shadow-[0_10px_30px_rgba(61,45,16,0.05)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9a7b33]">
                  Community Impact
                </p>
                <div className="mt-3 h-px w-16 bg-gradient-to-r from-[#d8bb6c] to-transparent" />

                <ul className="mt-5 space-y-3">
                  {impactItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-[#374151]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a14f]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONOR INSPIRATION SECTION */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-[32px] border border-[#dfc57f] bg-[radial-gradient(circle_at_top,rgba(247,228,163,0.16),transparent_28%),linear-gradient(135deg,#133529_0%,#173c30_45%,#214c3b_100%)] p-7 text-white shadow-[0_24px_80px_rgba(16,36,29,0.24)] sm:p-9 lg:p-10">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f2dc93]">
              Join This Blessed Effort
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Help establish a lasting home for prayer, learning, and the next
              generation
            </h2>

            <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#f2dc93] to-transparent" />

            <p className="mt-6 text-lg leading-9 text-white/86">
              Every masjid begins with sincere intention, community sacrifice,
              and the generosity of people who believe in building something
              that will benefit others long after they are gone. By supporting
              Masjid Ballantyne, you are helping establish a place where worship
              is preserved, knowledge is taught, families are strengthened, and
              young hearts are guided with faith, character, and purpose.
            </p>

            <p className="mt-4 text-lg leading-9 text-white/86">
              Your support helps create more than walls and a roof. It helps
              build a spiritual home for local families, a place where children
              can learn the Qur’an, youth can find guidance and mentorship, and
              the wider community can experience service, compassion, and
              connection. We pray that every contribution becomes a source of
              lasting benefit and ongoing reward.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-full border border-[#f2dc93] bg-[linear-gradient(135deg,#f7e4a3_0%,#d9b85f_45%,#b8892d_100%)] px-6 py-3 text-sm font-semibold text-[#173427] transition hover:-translate-y-0.5"
              >
                Support the Masjid
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}