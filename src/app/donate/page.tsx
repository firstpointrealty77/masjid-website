"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type DonateCategory = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  badge?: string;
};

const categories: DonateCategory[] = [
  {
    title: "MASJID MAINTENANCE",
    subtitle: "Support daily masjid needs",
    href: "/donate/masjid-maintenance",
    image: "/media/donate/masjid-maintenance.jpg",
    badge: "Essential Support",
  },
  {
    title: "ZAKAAT",
    subtitle: "Obligatory charity",
    href: "/donate/zakaat",
    image: "/media/donate/zakaat.jpg",
    badge: "Zakat Eligible",
  },
  {
    title: "SADAQA",
    subtitle: "General charity",
    href: "/donate/sadaqa",
    image: "/media/donate/sadaqa.jpg",
    badge: "Give Anytime",
  },
  {
    title: "MONTHLY PLEDGE",
    subtitle: "Recurring monthly support",
    href: "/donate/monthly-pledge",
    image: "/media/donate/monthly-pledge.jpg",
    badge: "Recurring",
  },
  {
    title: "MASJID CONSTRUCTION",
    subtitle: "Help build the House of Allah",
    href: "/donate/masjid-construction",
    image: "/media/donate/masjid-construction.jpg",
    badge: "Phase 1",
  },
  {
    title: "ISLAMIC SCHOOL",
    subtitle: "Support students and Islamic learning",
    href: "/donate/islamic-school",
    image: "/media/donate/islamic-school.jpg",
    badge: "Education",
  },
];

function DonateCard({ title, subtitle, href, image, badge }: DonateCategory) {
  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl
        border border-[#E7DFC9]
        bg-white
        shadow-sm
        transition-all duration-500
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-[170px] w-full object-cover
            transition duration-700 group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {badge && (
          <div
            className="
              absolute left-3 top-3 rounded-full
              border border-[#E8D8A8]
              bg-[rgba(255,250,238,0.92)]
              px-3 py-1
              text-[11px] font-medium tracking-[0.03em]
              text-[#8E6A24]
              shadow-sm
            "
          >
            {badge}
          </div>
        )}

        <Link
          href={href}
          aria-label={`Open ${title}`}
          className="
            absolute right-3 top-3
            flex h-10 w-10 items-center justify-center rounded-full
            bg-white/90
            shadow-sm
            transition duration-300 hover:scale-105 hover:bg-white
          "
        >
          <ArrowUpRight className="h-4 w-4 text-[#0A3A34]" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3
          className="
            text-lg font-semibold leading-tight text-[#0A3A34]
            sm:min-h-[56px]
          "
        >
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-500">{subtitle}</p>

        <div className="mb-4 mt-3 h-[2px] w-10 bg-[#D4A447]" />

        <div className="mt-auto">
          <Link
            href={href}
            className="
              block rounded-full
              bg-gradient-to-r from-[#E1BA5A] to-[#C8922E]
              py-2.5 text-center font-semibold text-[#0A3A34]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-lg
            "
          >
            Donate
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#0A3A34]">
            Donation Categories
          </h2>

          <span className="text-sm text-gray-500">{categories.length} Total</span>
        </div>

        <div
          className="
            grid grid-cols-1 gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.map((category) => (
            <DonateCard key={category.title} {...category} />
          ))}
        </div>
      </section>
    </main>
  );
}