"use client";

import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  HeartHandshake,
  ChevronRight,
  MessageCircle,
  Clock3,
} from "lucide-react";

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Prayer Times", href: "/prayer-times" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Construction Progress", href: "/construction-progress" },
  { label: "Contact", href: "/contact" },
];

const COMMUNITY_LINKS = [
  { label: "Donate", href: "/donate" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Plan a Visit", href: "/contact" },
  { label: "Weekend School", href: "/programs" },
  { label: "Youth Programs", href: "/programs" },
  { label: "Volunteer", href: "/get-involved" },
];

const CONTACT = {
  email: "info@ballantynemasjid.org",
  phone: "(980) 000-0000",
  addressLine1: "10935 Harrisburg Road",
  addressLine2: "Fort Mill, SC 29707",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=10935+Harrisburg+Road+Fort+Mill+SC+29707",
  whatsappUrl: "https://chat.whatsapp.com/",
};

function FooterSectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={clsx(
        "text-[13px] font-semibold uppercase tracking-[0.12em] text-[#d4a447] md:text-[14px]",
        className
      )}
    >
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const baseClass =
    "group inline-flex items-center gap-3 text-[16px] leading-7 text-white/82 transition-all duration-300 hover:translate-x-0.5 hover:text-[#f0d48a]";

  const inner = (
    <>
      <span className="mt-[1px] inline-flex h-1.5 w-1.5 rounded-full bg-[#a7d7c5]/65 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d4a447]" />
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClass}>
      {inner}
    </Link>
  );
}

function FooterActionButton({
  href,
  children,
  variant = "dark",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "gold";
  external?: boolean;
}) {
  const classes =
    variant === "gold"
      ? "inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-[#f1d58a]/60 bg-gradient-to-b from-[#f4d56e] via-[#e2b94d] to-[#c8922e] px-5 py-3.5 text-[15px] font-semibold text-[#062f2a] shadow-[0_12px_32px_rgba(212,164,71,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(212,164,71,0.38)]"
      : "inline-flex min-h-[54px] items-center justify-center rounded-2xl border border-white/12 bg-white/8 px-5 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a447]/35 hover:bg-white/12 hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterInfoItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[#a7d7c5] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        {icon}
      </div>
      <div>
        <p className="text-[15px] font-semibold text-white">{title}</p>
        <div className="mt-1.5 text-[16px] leading-8 text-white/74">{children}</div>
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[#d4a447]/12 bg-[#062f2a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,164,71,0.10),transparent_32%),radial-gradient(circle_at_top_right,rgba(167,215,197,0.08),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(212,164,71,0.05),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.018),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4a447]/75 to-transparent" />
        <div className="absolute left-[-9rem] top-8 h-64 w-64 rounded-full bg-[#d4a447]/8 blur-3xl" />
        <div className="absolute bottom-[-7rem] right-[-6rem] h-72 w-72 rounded-full bg-[#88c8b2]/10 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.02] xl:block" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 xl:grid-cols-[1.3fr_1fr_1.05fr_1.25fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-[2px] hover:border-[#d4a447]/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)] lg:p-7">
            <div className="mb-5">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#d4a447]/25 bg-[#d4a447]/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f0d48a]">
                Ballantyne Masjid
              </div>

              <h2 className="max-w-[12ch] font-serif text-[29px] font-semibold leading-[1.12] tracking-[0.01em] text-white md:text-[34px]">
                A House of Worship, Learning, and Community
              </h2>

              <div className="mt-5 h-[1.5px] w-32 bg-gradient-to-r from-[#d4a447] via-[#f0d48a] to-transparent" />
            </div>

            <p className="max-w-md text-[16px] leading-8 text-white/76">
              Serving the spiritual, educational, and community needs of families
              in Ballantyne, Fort Mill, and surrounding areas with prayer,
              knowledge, service, and lasting community benefit.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <FooterActionButton href="/donate" variant="gold">
                <span className="inline-flex items-center gap-2.5">
                  <HeartHandshake className="h-4.5 w-4.5" />
                  Donate Now
                </span>
              </FooterActionButton>

              <FooterActionButton href="/construction-progress" variant="dark">
                View Phase 1 Progress
              </FooterActionButton>
            </div>

            <div className="mt-7 rounded-[24px] border border-[#d4a447]/14 bg-[#0b3a34]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4a447]/20 bg-[#d4a447]/10 text-[#f0d48a]">
                  <HeartHandshake className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold leading-7 text-white">
                    Support a lasting Sadaqah Jariyah
                  </p>
                  <p className="mt-1.5 text-[15px] leading-7 text-white/68">
                    Help establish a welcoming masjid for prayer, youth, families,
                    and future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-[2px] hover:border-[#d4a447]/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.18)] lg:p-7">
            <FooterSectionHeading>Explore</FooterSectionHeading>

            <div className="mt-6 space-y-5">
              {QUICK_LINKS.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>

            <div className="mt-11">
              <FooterSectionHeading>Community</FooterSectionHeading>

              <div className="mt-6 space-y-5">
                {COMMUNITY_LINKS.map((item) => (
                  <FooterLink key={`${item.label}-${item.href}`} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-[2px] hover:border-[#d4a447]/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.18)] lg:p-7">
            <FooterSectionHeading>Visit & Contact</FooterSectionHeading>

            <div className="mt-6 space-y-7">
              <FooterInfoItem icon={<Mail className="h-4.5 w-4.5" />} title="Email">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-block text-white/78 transition-colors duration-300 hover:text-[#f0d48a]"
                >
                  {CONTACT.email}
                </a>
              </FooterInfoItem>

              <FooterInfoItem icon={<Phone className="h-4.5 w-4.5" />} title="Phone">
                <a
                  href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-block text-white/78 transition-colors duration-300 hover:text-[#f0d48a]"
                >
                  {CONTACT.phone}
                </a>
              </FooterInfoItem>

              <FooterInfoItem icon={<MapPin className="h-4.5 w-4.5" />} title="Address">
                <p>{CONTACT.addressLine1}</p>
                <p>{CONTACT.addressLine2}</p>
              </FooterInfoItem>

              <FooterInfoItem
                icon={<Clock3 className="h-4.5 w-4.5" />}
                title="Helpful Links"
              >
                <div className="mt-1 flex flex-wrap gap-3">
                  <FooterActionButton
                    href={CONTACT.googleMapsUrl}
                    variant="dark"
                    external
                  >
                    <span className="inline-flex items-center gap-2">
                      Open in Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </FooterActionButton>

                  <FooterActionButton
                    href={CONTACT.whatsappUrl}
                    variant="dark"
                    external
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-3.5 w-3.5" />
                      Join WhatsApp
                    </span>
                  </FooterActionButton>
                </div>
              </FooterInfoItem>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#d4a447]/16 bg-[linear-gradient(180deg,rgba(212,164,71,0.10),rgba(255,255,255,0.035))] p-6 shadow-[0_20px_65px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-[2px] hover:border-[#d4a447]/24 hover:shadow-[0_26px_80px_rgba(0,0,0,0.24)] lg:p-7">
            <FooterSectionHeading className="text-[#f0d48a]">
              Visit the Masjid
            </FooterSectionHeading>

            <div className="mt-6 overflow-hidden rounded-[26px] border border-white/10 bg-[#0a342f] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="h-36 bg-[radial-gradient(circle_at_20%_30%,rgba(167,215,197,0.22),transparent_22%),radial-gradient(circle_at_72%_35%,rgba(212,164,71,0.18),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
              <div className="border-t border-white/8 p-5">
                <p className="text-[19px] font-semibold leading-7 text-white md:text-[20px]">
                  {CONTACT.addressLine1}
                </p>
                <p className="mt-1.5 text-[16px] leading-7 text-white/68">
                  {CONTACT.addressLine2}
                </p>

                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[#f0d48a] transition-all duration-300 hover:gap-3"
                >
                  Get Directions
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-7 rounded-[24px] border border-white/10 bg-[#082f29]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <p className="text-[20px] font-semibold leading-7 text-white">
                New here?
              </p>
              <p className="mt-2.5 text-[15px] leading-7 text-white/68">
                Start with prayer times, upcoming events, and ways to support the
                masjid’s growth.
              </p>

              <div className="mt-5 grid gap-3">
                <FooterActionButton href="/prayer-times" variant="dark">
                  View Prayer Times
                </FooterActionButton>
                <FooterActionButton href="/events" variant="dark">
                  See Upcoming Events
                </FooterActionButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-[1.5px] w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        <div className="mt-7 flex flex-col gap-4 text-[15.5px] text-white/58 md:flex-row md:items-center md:justify-between md:text-[16px]">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <p>© {year} Ballantyne Masjid. All rights reserved.</p>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-flex" />
            <p className="text-white/46">
              Built for prayer, community, and lasting benefit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-[#f0d48a]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-[#f0d48a]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;