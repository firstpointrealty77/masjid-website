import type { ReactNode } from "react";
import {
  ArrowUpRight,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Car,
} from "lucide-react";

type PolicyCardProps = {
  id?: string;
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

function PolicyCard({
  id,
  icon,
  eyebrow,
  title,
  description,
  children,
}: PolicyCardProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden rounded-[30px] border border-[#E6E0D4] bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/70 to-transparent" />

      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D8C28A]/30 bg-[linear-gradient(135deg,rgba(10,58,52,0.07),rgba(212,164,71,0.08))] text-[#0A3A34] shadow-[0_10px_24px_rgba(10,58,52,0.07)]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B8891E]">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0A3A34] sm:text-[2rem]">
            {title}
          </h2>

          <p className="mt-3 max-w-3xl text-[15px] leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-8">{children}</div>
    </section>
  );
}

function GuidelineItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#E9E4D8] bg-[linear-gradient(180deg,#FFFEFC,#FBF9F4)] p-5 shadow-[0_10px_26px_rgba(15,23,42,0.03)]">
      <h3 className="text-lg font-semibold text-[#0A3A34]">{title}</h3>
      <p className="mt-2 text-[15px] leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <main className="bg-[#F7F8F7] text-slate-900">
      <section className="relative overflow-hidden border-b border-[#E7DFCF] bg-[radial-gradient(circle_at_top,rgba(212,164,71,0.08),transparent_22%),linear-gradient(180deg,#F7F2E8_0%,#F5F0E5_100%)] px-6 py-14 text-center sm:px-8 sm:py-16 lg:py-18">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/45 to-transparent" />

        <div className="mx-auto max-w-5xl">
          <p
            dir="rtl"
            className="text-sm font-semibold tracking-wide text-[#C89A2B]"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#D4A447] to-transparent" />

          <p
            dir="rtl"
            className="mx-auto mt-6 max-w-5xl font-amiri text-2xl leading-[2] text-[#0A4A52] sm:text-3xl lg:text-[2.4rem]"
          >
            وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base italic leading-8 text-slate-600 sm:text-[1.05rem]">
            “And hold firmly to the rope of Allah all together and do not become
            divided.”
          </p>

          <p className="mt-3 text-sm font-medium text-[#C89A2B] sm:text-[15px]">
            Qur’an 3:103
          </p>

          <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-[#D4A447] to-transparent" />

          <div className="mx-auto mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8891E]">
              Policies & Constitution
            </p>

            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A3A34] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.1]">
              Principles that preserve unity, dignity, and trust in the House of
              Allah.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-slate-600">
              These policies are intended to maintain a respectful, organized,
              and spiritually conscious environment for worship, learning,
              family life, and community service at Ballantyne Islamic Center.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="space-y-8">
          <PolicyCard
            id="safety"
            icon={<ShieldCheck className="h-5 w-5" />}
            eyebrow="Protection"
            title="Safety"
            description="The Masjid is a place of worship, peace, and community gathering. Maintaining a safe and secure environment is a shared responsibility of attendees, volunteers, and leadership. These guidelines help protect individuals and families while preserving the calm and respectful atmosphere of the House of Allah."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <GuidelineItem
                title="Emergency Awareness"
                text="Attendees should remain aware of exits, safety signage, and assembly areas. Emergency pathways, entrances, and access points must remain unobstructed at all times."
              />
              <GuidelineItem
                title="Children’s Supervision"
                text="Parents and guardians are responsible for supervising children throughout their time at the Masjid. Children should not be left unattended in parking areas, hallways, classrooms, or prayer spaces."
              />
              <GuidelineItem
                title="Orderly Movement"
                text="Please move carefully during prayer times, classes, and community events. Running, rough play, or unsafe behavior inside the facility should be avoided to protect all attendees."
              />
              <GuidelineItem
                title="Report Concerns Promptly"
                text="Any injury, hazard, suspicious activity, or other safety concern should be reported immediately to Masjid leadership or designated volunteers so it can be addressed without delay."
              />
            </div>
          </PolicyCard>

          <PolicyCard
            id="respect"
            icon={<HeartHandshake className="h-5 w-5" />}
            eyebrow="Adab"
            title="Respect the Mosque"
            description="The Masjid is the House of Allah and should be treated with reverence, humility, and dignity. Every visitor is encouraged to observe proper Islamic manners, preserve the spiritual atmosphere, and show consideration for worshippers, guests, elders, and families."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <GuidelineItem
                title="Maintain Quiet and Dignity"
                text="Conversations should remain soft and respectful, especially near prayer areas and during acts of worship. Phones should be silenced before entering spaces used for salah or reflection."
              />
              <GuidelineItem
                title="Dress Modestly"
                text="Attendees are encouraged to wear clean and modest clothing appropriate for prayer, classes, gatherings, and family participation in the Masjid."
              />
              <GuidelineItem
                title="Preserve Cleanliness"
                text="Please dispose of trash properly, return shared items to their place, and leave prayer and gathering areas clean for those who come after you."
              />
              <GuidelineItem
                title="Show Mercy and Respect"
                text="Treat fellow worshippers, volunteers, children, elders, and guests with patience, gentleness, and Islamic character at all times."
              />
            </div>
          </PolicyCard>

          <PolicyCard
            id="parking"
            icon={<Car className="h-5 w-5" />}
            eyebrow="Courtesy"
            title="Parking"
            description="Parking and traffic flow should reflect the values of courtesy, patience, and consideration. Proper parking helps maintain safety, reduce disruption, respect neighboring properties, and support an orderly arrival and departure experience for all attendees."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <GuidelineItem
                title="Park in Designated Areas"
                text="Please use approved parking spaces only. Do not park in fire lanes, restricted access areas, loading zones, or any space reserved for emergency use."
              />
              <GuidelineItem
                title="Do Not Block Access"
                text="Vehicles must not block entrances, exits, sidewalks, drive aisles, or other parked cars. Clear access should always be maintained for safety and convenience."
              />
              <GuidelineItem
                title="Respect Neighbors"
                text="Avoid parking in ways that inconvenience neighboring properties, nearby businesses, or residents. Our conduct outside the Masjid should reflect the same adab observed within it."
              />
              <GuidelineItem
                title="Follow Volunteer Guidance"
                text="During Jumu‘ah, Eid, and larger gatherings, parking attendants or volunteers may help direct traffic flow. Their guidance should be followed for the benefit of the community."
              />
            </div>
          </PolicyCard>

          <PolicyCard
            id="by-laws"
            icon={<FileText className="h-5 w-5" />}
            eyebrow="Governance"
            title="By-Laws"
            description="The official governing document of Ballantyne Islamic Center outlines organizational structure, board governance, procedures, and key operating principles. It serves as the primary reference for formal administration and institutional accountability."
          >
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[24px] border border-[#E9E4D8] bg-[linear-gradient(180deg,#FFFEFC,#FBF9F4)] p-6 shadow-[0_10px_26px_rgba(15,23,42,0.03)]">
                <h3 className="text-xl font-semibold text-[#0A3A34]">
                  Official By-Laws Document
                </h3>

                <p className="mt-3 text-[15px] leading-8 text-slate-600">
                  The by-laws are provided in PDF format for professional
                  presentation, clear review, and official recordkeeping. You
                  may open the document in a new tab for reading or download a
                  copy for reference.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/docs/ballantyne-islamic-center-by-laws.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A3A34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C4A43]"
                  >
                    View By-Laws
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#D8C28A]/30 bg-[linear-gradient(135deg,rgba(10,58,52,0.04),rgba(212,164,71,0.09))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B8891E]">
                  Governance Note
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[#0A3A34]">
                  Maintain one official version
                </h3>

                <p className="mt-3 text-[15px] leading-8 text-slate-600">
                  Keeping one approved and consistent version of the by-laws
                  helps ensure clarity for leadership, donors, legal advisors,
                  banks, and future board members.
                </p>
              </div>
            </div>
          </PolicyCard>
        </div>
      </div>
    </main>
  );
}