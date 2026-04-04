import type { Metadata, ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Ballantyne Islamic Center",
  description:
    "Ballantyne Islamic Center is a nonprofit Islamic institution serving the Muslim community through worship, education, outreach, and service.",
};

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[32px] border border-[#E6E0D4] bg-white px-7 py-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-4xl">
        {subtitle ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8891E]">
            {subtitle}
          </p>
        ) : null}

        <h2 className="mt-2 text-[1.8rem] font-semibold tracking-tight text-[#0A3A34] sm:text-[2rem] lg:text-[2.2rem]">
          {title}
        </h2>

        <div className="mt-4 h-px w-20 bg-gradient-to-r from-[#D4AF37] to-transparent" />

        <div className="mt-6 space-y-6 text-[16px] leading-8 text-slate-700 sm:text-[17px] sm:leading-9">
          {children}
        </div>
      </div>
    </section>
  );
}

function ValuePill({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-full border border-[#E3D2A6] bg-[#FFFDF7] px-4 py-2 text-sm font-medium text-[#6B5A2B] shadow-[0_4px_14px_rgba(15,23,42,0.03)]">
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F7] text-slate-900">
      <section className="border-b border-[#E7D8B1] bg-[linear-gradient(180deg,#FFFDF7_0%,#FFF8EA_100%)]">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.22em] text-[#B8891E]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D8BB6C] to-transparent" />

          <p
            dir="rtl"
            className="mx-auto mt-8 max-w-4xl font-amiri text-[2rem] leading-[2.1] text-[#0A3A34] sm:text-[2.45rem] sm:leading-[2.15] lg:text-[3rem]"
          >
            إِنَّمَا يَعْمُرُ مَسَاجِدَ ٱللَّهِ مَنْ آمَنَ بِٱللَّهِ
            وَٱلْيَوْمِ ٱلْآخِرِ وَأَقَامَ ٱلصَّلَوٰةَ وَآتَى ٱلزَّكَوٰةَ
            وَلَمْ يَخْشَ إِلَّا ٱللَّهَ
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg italic leading-9 text-slate-700 sm:text-[19px]">
            “The mosques of Allah are only to be maintained by those who believe
            in Allah and the Last Day, establish prayer, give zakah, and fear
            none except Allah.”
          </p>

          <p className="mt-3 text-sm font-medium text-[#8B6A23]">Qur’an 9:18</p>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-[#0A3A34] sm:text-4xl lg:text-[3.15rem]">
            About Ballantyne Islamic Center
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-slate-600 sm:text-[16px]">
            A masjid being established to serve worship, beneficial knowledge,
            spiritual growth, and community life for Muslim families in
            Ballantyne, Fort Mill, and the surrounding region.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8 px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <Section title="In the Name of Allah" subtitle="Bismillah & Intention">
          <p>
            Ballantyne Islamic Center is being established with the sincere
            intention of building a house dedicated to the worship of Allah
            (SWT), the pursuit of beneficial knowledge, and service to the
            community. The masjid is envisioned as a welcoming and nurturing
            environment where individuals and families can strengthen their
            faith, deepen their understanding of Islam, and remain connected to
            a community grounded in Islamic values of compassion, unity, and
            service.
          </p>

          <p>
            This blessed effort seeks to serve the growing Muslim community in
            Ballantyne, Fort Mill, South Carolina, and the surrounding areas,
            including neighboring communities across both South Carolina and
            North Carolina. Through prayer, education, and community
            engagement, Ballantyne Islamic Center aspires to foster faith,
            strengthen families, and support future generations, Insha’Allah.
          </p>
        </Section>

        <Section title="Our Purpose" subtitle="Niyyah & Foundation">
          <p>
            Ballantyne Islamic Center is being established as a house of Allah
            for prayer, remembrance, learning, and community gathering. The
            masjid aims to provide daily prayers, Jumu’ah, Eid, Taraweeh,
            Qur’an education, and community programs that support the spiritual
            and practical needs of Muslim individuals and families.
          </p>

          <p>
            The organization seeks to cultivate a welcoming environment where
            people can strengthen their faith, build meaningful connections, and
            benefit from a community rooted in Islamic values, good character,
            and mutual care.
          </p>
        </Section>

        <Section title="Our Mission" subtitle="Serving the House of Allah">
          <p>
            Our mission is to establish a masjid that nurtures faith, promotes
            beneficial knowledge, and strengthens unity within the community.
            Through worship, Islamic education, youth development, family
            engagement, and charitable service, Ballantyne Islamic Center seeks
            to support believers in living with sincerity, purpose, and Islamic
            character.
          </p>

          <p>
            The masjid aims to become a place where hearts are connected to
            Allah, the Qur’an is taught and loved, families feel supported, and
            young people are nurtured with guidance, belonging, and purpose.
          </p>

          <p>
            Ballantyne Islamic Center is committed to investing in the next
            generation by providing growth and leadership opportunities for
            youth and young professionals, creating welcoming spaces for diverse
            members of the community, and expanding those spaces to serve men,
            women, children, and families with excellence and care.
          </p>
        </Section>

        <Section title="Our Vision" subtitle="Building for Generations">
          <p>
            Our vision is to establish a vibrant Islamic center that serves as a
            lasting source of guidance, learning, and community connection for
            generations to come.
          </p>

          <p>
            Ballantyne Islamic Center aims to nurture future generations with
            strong Islamic values, strengthen families and community ties, and
            provide a welcoming place where Muslims can worship, learn, and
            grow together.
          </p>

          <p>
            The masjid seeks to invest in youth and children by creating
            meaningful opportunities for leadership, mentorship, and personal
            development. Dedicated spaces and programs will support youth,
            young professionals, and families of all ages as the community
            continues to grow.
          </p>

          <p>
            This effort is intended to become a source of barakah and Sadaqah
            Jariyah for generations to come, Insha’Allah.
          </p>
        </Section>

        <Section title="Our Values" subtitle="Islamic Principles">
          <div className="flex flex-wrap gap-3">
            <ValuePill>Sincerity (Ikhlas)</ValuePill>
            <ValuePill>Faith (Iman)</ValuePill>
            <ValuePill>Knowledge (Ilm)</ValuePill>
            <ValuePill>Unity (Ukhuwwah)</ValuePill>
            <ValuePill>Service (Khidmah)</ValuePill>
            <ValuePill>Compassion (Rahmah)</ValuePill>
            <ValuePill>Responsibility (Amanah)</ValuePill>
          </div>

          <p>
            These values guide our leadership, programs, stewardship, and
            community engagement as we strive to establish a masjid that serves
            with excellence, benefits families, and remains rooted in sincerity
            and trust.
          </p>
        </Section>

        <Section title="Our Commitment" subtitle="Amanah">
          <p>
            Ballantyne Islamic Center is committed to responsible leadership,
            transparency, and long-term sustainability. The organization seeks
            to serve the community with sincerity, professionalism, and a clear
            sense of amanah in all matters related to governance, resources, and
            community care.
          </p>

          <p>
            As the masjid grows, we aim to build with wisdom, consult with the
            community, and maintain standards that honor both the sanctity of
            the masjid and the trust placed in its leadership.
          </p>
        </Section>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="rounded-[30px] border border-[#E6E0D4] bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#B8891E]">
            Learn More
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A3A34] sm:text-3xl">
            Explore the leadership and governance of the Masjid
          </h2>

          <p className="mt-4 max-w-3xl text-[15px] leading-8 text-slate-600">
            Learn more about the individuals serving the community and the
            guiding policies that support the administration of Ballantyne
            Islamic Center.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about/leadership"
              className="inline-flex items-center rounded-full bg-[#0A3A34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C4A43]"
            >
              Leadership
            </Link>

            <Link
              href="/about/policies"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Policies & Constitution
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}