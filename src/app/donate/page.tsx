"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

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
      group flex h-full flex-col
      overflow-hidden
      rounded-[24px]
      border border-[#E7DFC9]
      bg-white
      shadow-sm
      hover:shadow-xl
      transition-all duration-500
      hover:-translate-y-1
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full 
          h-[170px] 
          object-cover 
          group-hover:scale-105 
          transition duration-700
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {badge && (
          <div
            className="
          absolute top-3 left-3 
          bg-[#FFF8E6]
          border border-[#E7DFC9]
          px-3 py-1 
          rounded-full 
          text-xs 
          font-medium 
          text-[#8E6A24]
          "
          >
            {badge}
          </div>
        )}

        <div
          className="
        absolute top-3 right-3 
        w-10 h-10 
        rounded-full 
        bg-white/90 
        flex items-center justify-center
        shadow
        "
        >
          <ArrowUpRight className="w-4 h-4 text-[#0A3A34]" />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-[#0A3A34]">{title}</h3>

        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>

        <div className="w-10 h-[2px] bg-[#D4A447] mt-3 mb-4" />

        <div className="mt-auto">
          <Link
            href={href}
            className="
          block 
          text-center 
          py-3
          rounded-full 
          font-semibold 
          text-[#0A3A34]
          bg-gradient-to-r 
          from-[#E1BA5A] 
          to-[#C8922E]
          hover:shadow-lg 
          transition-all
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
    <main className="bg-[#F8F6F1] min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Premium Trust Banner */}

        <div
          className="
          mb-8
          rounded-[26px]
          border border-[#E7DFC9]
          bg-white
          shadow-[0_10px_30px_rgba(15,23,42,0.05)]
          p-6
          relative
          overflow-hidden
          group
          "
        >
          {/* Gold Animated Line */}

          <div
            className="
            absolute top-0 left-0 right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#D4A447]
            to-transparent
            animate-pulse
            "
          />

          <div
            className="
            grid 
            grid-cols-1 
            lg:grid-cols-[1fr_auto]
            gap-4
            items-center
            "
          >
            {/* Left */}

            <div className="flex items-start gap-3">
              
              <div
                className="
                w-10 h-10
                rounded-xl
                bg-[#F8F6F1]
                border border-[#E7DFC9]
                flex items-center justify-center
                "
              >
                <ShieldCheck
                  className="w-5 h-5 text-[#D4A447]"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0A3A34]">
                  501(c)(3) Non-Profit Organization
                </h3>

                <p className="mt-1 text-sm text-[#667085]">
                  Ballantyne Islamic Center is a registered nonprofit organization.
                  All donations are tax-deductible to the extent permitted by law.
                </p>
              </div>
            </div>

            {/* Trust Badges */}

            <div
              className="
              flex 
              items-center 
              gap-2
              whitespace-nowrap
              "
            >
              <span
                className="
                px-3 py-1.5
                rounded-full
                border border-[#E7DFC9]
                bg-[#F8F6F1]
                text-xs
                font-medium
                text-[#0A3A34]
                hover:bg-white
                hover:shadow-sm
                transition
                "
              >
                ✓ Tax Deductible
              </span>

              <span
                className="
                px-3 py-1.5
                rounded-full
                border border-[#E7DFC9]
                bg-[#F8F6F1]
                text-xs
                font-medium
                text-[#0A3A34]
                hover:bg-white
                hover:shadow-sm
                transition
                "
              >
                ✓ Non-Profit
              </span>

              <span
                className="
                px-3 py-1.5
                rounded-full
                border border-[#E7DFC9]
                bg-[#F8F6F1]
                text-xs
                font-medium
                text-[#0A3A34]
                hover:bg-white
                hover:shadow-sm
                transition
                "
              >
                ✓ Community Supported
              </span>
            </div>
          </div>
        </div>

        {/* Header */}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#0A3A34]">
            Donation Categories
          </h2>

          <span className="text-sm text-gray-500">
            {categories.length} Total
          </span>
        </div>

        {/* Cards */}

        <div
          className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-5
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