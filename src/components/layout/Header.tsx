"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { WordmarkLogo } from "@/components/branding/WordmarkLogo";

type NavLink = { type: "link"; label: string; href: string };
type NavGroup = {
  type: "group";
  label: string;
  items: Array<{ label: string; href: string; description?: string }>;
};
type NavTopItem = NavLink | NavGroup;

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A7D7C5]/45 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.07),transparent_62%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_26px_rgba(0,0,0,0.22)] transition-all duration-200 hover:bg-white/5"
      aria-label="Open menu"
    >
      <div className="flex flex-col gap-[3px]">
        <span className="h-[2px] w-[14px] rounded-full bg-white" />
        <span className="h-[2px] w-[14px] rounded-full bg-white" />
        <span className="h-[2px] w-[14px] rounded-full bg-white" />
      </div>
    </button>
  );
}

function GoldChevron({ open }: { open?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={clsx(
        "h-3.5 w-3.5 shrink-0 transition-all duration-300",
        open ? "translate-y-[1px] rotate-180" : "rotate-0"
      )}
      fill="none"
    >
      <path
        d="M5.25 7.75 10 12.25l4.75-4.5"
        stroke="url(#gold-chevron-gradient)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="gold-chevron-gradient"
          x1="5.25"
          y1="7.75"
          x2="14.75"
          y2="12.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8922E" />
          <stop offset="0.5" stopColor="#F3D789" />
          <stop offset="1" stopColor="#C8922E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();

  const topNav: NavTopItem[] = useMemo(
    () => [
      { type: "link", label: "Home", href: "/" },

      {
        type: "group",
        label: "About",
        items: [
      {
        label: "About",
        href: "/about",
        description: "Who we are and our purpose",
      },
      {
        label: "Leadership",
        href: "/about/leadership",
        description: "Meet our leadership",
      },
      {
        label: "Spiritual Team",
        href: "/about/spiritual-team",
        description: "Imam and religious guidance",
      },
      {
        label: "Our Staff",
        href: "/about/staff",
        description: "Meet our Staff",
      },
      {
        label: "Our Policies & Constitution",
        href: "/about/policies",
        description: "Guidelines and governance",
      },
    ],
  },

    {
        type: "group",
        label: "Programs",
        items: [
          {
            label: "Programs Overview",
            href: "/programs",
            description: "Explore all masjid programs",
          },
          {
            label: "Quranic Education",
            href: "/programs/quranic-education",
            description: "Nazirah, tajwid, and memorization",
          },
          {
            label: "Sunday School",
            href: "/programs/sunday-school",
            description: "Weekend Islamic learning for children",
          },
          {
            label: "Sisters Program",
            href: "/programs/sisters",
            description: "Halaqas, learning, and sisterhood",
          },
          {
            label: "Youth Program",
            href: "/programs/youth",
            description: "Mentorship and masjid-centered youth development",
          },
          {
            label: "Converts Corner",
            href: "/programs/converts",
            description: "Support and guidance for new Muslims",
          },
        ],
      },

      { type: "link", label: "Events", href: "/events" },

      {
        type: "group",
        label: "Get Involved",
        items: [
          {
            label: "Volunteer",
            href: "/get-involved/volunteer",
            description: "Serve the community",
          },
          {
            label: "Donate",
            href: "/donate",
            description: "Support the masjid",
          },
          {
            label: "Services",
            href: "/services",
            description: "Community support and services",
          },
        ],
      },

      {
        type: "link",
        label: "Masjid Construction",
        href: "/construction-progress",
      },

      {
        type: "group",
        label: "Contact",
        items: [
          {
            label: "Contact Us",
            href: "/contact",
            description: "Reach the masjid team",
          },
          {
            label: "Plan a Visit",
            href: "/visit",
            description: "Visit the masjid",
          },
        ],
      },
    ],
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const navWrapRef = useRef<HTMLDivElement | null>(null);
  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
    show: boolean;
  }>({ left: 0, width: 0, show: false });

  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const apply = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    apply();
    const ro = new ResizeObserver(() => apply());
    ro.observe(el);

    window.addEventListener("resize", apply);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const activeTopKey: string | null = useMemo(() => {
    for (const it of topNav) {
      if (it.type === "link") {
        if (isActivePath(pathname, it.href)) return it.href;
      } else {
        const hit = it.items.find((x) => isActivePath(pathname, x.href));
        if (hit) return it.label;
      }
    }
    return null;
  }, [pathname, topNav]);

  const activeGroupLabel: string | null = useMemo(() => {
    for (const it of topNav) {
      if (
        it.type === "group" &&
        it.items.some((x) => isActivePath(pathname, x.href))
      ) {
        return it.label;
      }
    }
    return null;
  }, [pathname, topNav]);

  const computeIndicator = () => {
    const wrap = navWrapRef.current;
    if (!wrap || !activeTopKey) {
      setIndicator((s) => ({ ...s, show: false }));
      return;
    }

    const el = wrap.querySelector<HTMLElement>(`[data-key="${activeTopKey}"]`);
    if (!el) {
      setIndicator((s) => ({ ...s, show: false }));
      return;
    }

    const wrapRect = wrap.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const width = Math.max(38, Math.min(elRect.width - 6, 82));
    const left = elRect.left - wrapRect.left + (elRect.width - width) / 2;

    setIndicator({ left, width, show: true });
  };

  useLayoutEffect(() => {
    computeIndicator();
  }, [pathname, activeTopKey]);

  useEffect(() => {
    const wrap = navWrapRef.current;
    if (!wrap) return;

    const onResize = () => computeIndicator();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => computeIndicator());
    ro.observe(wrap);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!openGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openGroup]);

  useEffect(() => {
    setOpenGroup(null);
    if (activeGroupLabel) {
      setMobileGroupsOpen((prev) => ({
        ...prev,
        [activeGroupLabel]: true,
      }));
    }
  }, [pathname, activeGroupLabel]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!desktopNavRef.current) return;
      if (!desktopNavRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const openDesktopGroup = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenGroup(label);
  };

  const closeDesktopGroup = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenGroup(null);
    }, 140);
  };

  const whatsappInvite =
    "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t";

  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full">
        <header
          ref={headerRef}
          className={clsx(
            "relative border-b border-[#A7D7C5]/28",
            scrolled ? "bg-[#0A3A34]/92 backdrop-blur-md" : "bg-[#0A3A34]"
          )}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,164,71,0.18),transparent_56%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_55%,rgba(0,0,0,0.24),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_55%,rgba(0,0,0,0.24),transparent_60%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A7D7C5]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#A7D7C5]/22 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-[1720px] px-4 xl:px-6">
            <div
              className={clsx(
                "flex items-center gap-3 md:hidden",
                scrolled ? "py-2.5" : "py-3"
              )}
            >
              <div className="min-w-0 flex-1 overflow-hidden">
                <div className="max-w-full overflow-hidden">
                  <Link
                    href="/"
                    aria-label="Masjid Ballantyne Home"
                    className="group relative inline-flex max-w-full items-center rounded-xl px-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A447]/70"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(212,164,71,0.28), transparent 68%)",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-[135%] w-[70%] rounded-xl bg-gradient-to-r from-transparent via-[#F7E7B0]/30 to-transparent skew-x-[-18deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[logoShimmer_1.35s_ease-out_forwards]"
                    />
                    <span className="relative z-10 block max-w-full">
                      <WordmarkLogo />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="shrink-0">
                <MenuButton
                  onClick={() => {
                    setMobileOpen(true);
                    setMobileGroupsOpen((prev) => ({ ...prev }));
                  }}
                />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="pointer-events-none absolute inset-x-[18%] top-1 h-20 overflow-hidden">
                  <span className="absolute left-[4%] top-10 h-[3px] w-[3px] rounded-full bg-[#F3D789]/28 blur-[0.5px] animate-[floatParticleA_13s_ease-in-out_infinite]" />
                  <span className="absolute left-[14%] top-4 h-[4px] w-[4px] rounded-full bg-[#D4A447]/20 blur-[0.5px] animate-[floatParticleB_16s_ease-in-out_infinite]" />
                  <span className="absolute left-[25%] top-12 h-[2px] w-[2px] rounded-full bg-[#F3D789]/32 animate-[floatParticleC_12s_ease-in-out_infinite]" />
                  <span className="absolute left-[37%] top-2 h-[3px] w-[3px] rounded-full bg-[#E7C66C]/20 blur-[0.5px] animate-[floatParticleD_15s_ease-in-out_infinite]" />
                  <span className="absolute left-[49%] top-9 h-[4px] w-[4px] rounded-full bg-[#F6E7B0]/18 blur-[0.5px] animate-[floatParticleA_17s_ease-in-out_infinite]" />
                  <span className="absolute left-[60%] top-1 h-[2px] w-[2px] rounded-full bg-[#D4A447]/28 animate-[floatParticleB_14s_ease-in-out_infinite]" />
                  <span className="absolute left-[71%] top-14 h-[3px] w-[3px] rounded-full bg-[#F3D789]/22 blur-[0.5px] animate-[floatParticleC_18s_ease-in-out_infinite]" />
                  <span className="absolute left-[83%] top-5 h-[4px] w-[4px] rounded-full bg-[#E7C66C]/16 blur-[0.5px] animate-[floatParticleD_13s_ease-in-out_infinite]" />
                </div>

                <div
                  className={clsx(
                    "relative flex justify-center",
                    scrolled ? "pb-1 pt-2.5" : "pb-1.5 pt-3"
                  )}
                >
                  <Link
                    href="/"
                    aria-label="Masjid Ballantyne Home"
                    className="group relative inline-flex items-center justify-center rounded-2xl px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A447]/70"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-all duration-400 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(212,164,71,0.22), transparent 68%)",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-[8%] -left-[125%] w-[36%] rounded-2xl bg-gradient-to-r from-transparent via-[#FFF4CC]/38 to-transparent skew-x-[-18deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[logoShimmer_1.45s_ease-out_forwards]"
                    />
                    <span className="relative z-10 origin-center scale-[1.04] transition-transform duration-300 group-hover:scale-[1.06] xl:scale-[1.07] xl:group-hover:scale-[1.085]">
                      <WordmarkLogo />
                    </span>
                  </Link>
                </div>
              </div>

              <nav className="hidden">
                <div className="flex-[1.03]" />

                <div className="relative hidden" ref={desktopNavRef}>
                  <div className="pointer-events-none absolute inset-x-[8%] -top-4 h-14 overflow-hidden">
                    <span className="absolute left-[6%] top-8 h-[3px] w-[3px] rounded-full bg-[#F3D789]/24 blur-[0.5px] animate-[floatParticleB_14s_ease-in-out_infinite]" />
                    <span className="absolute left-[20%] top-2 h-[2px] w-[2px] rounded-full bg-[#D4A447]/22 animate-[floatParticleC_18s_ease-in-out_infinite]" />
                    <span className="absolute left-[34%] top-11 h-[4px] w-[4px] rounded-full bg-[#F6E7B0]/14 blur-[0.5px] animate-[floatParticleD_15s_ease-in-out_infinite]" />
                    <span className="absolute left-[47%] top-3 h-[3px] w-[3px] rounded-full bg-[#E7C66C]/18 blur-[0.5px] animate-[floatParticleA_12s_ease-in-out_infinite]" />
                    <span className="absolute left-[59%] top-9 h-[2px] w-[2px] rounded-full bg-[#F3D789]/24 animate-[floatParticleB_16s_ease-in-out_infinite]" />
                    <span className="absolute left-[73%] top-1 h-[3px] w-[3px] rounded-full bg-[#D4A447]/18 blur-[0.5px] animate-[floatParticleC_13s_ease-in-out_infinite]" />
                    <span className="absolute left-[87%] top-10 h-[2px] w-[2px] rounded-full bg-[#F3D789]/20 animate-[floatParticleD_17s_ease-in-out_infinite]" />
                  </div>

                  <div className="relative rounded-full">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-full border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_44px_rgba(0,0,0,0.18),0_8px_20px_rgba(3,20,18,0.16)] backdrop-blur-md"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-[8%] -left-[18%] w-[16%] rounded-full opacity-[0.14] blur-md animate-[navGoldSweep_12s_ease-in-out_infinite]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, rgba(243,215,137,0.00) 8%, rgba(243,215,137,0.08) 40%, rgba(255,244,204,0.22) 50%, rgba(243,215,137,0.08) 60%, rgba(243,215,137,0.00) 92%, transparent 100%)",
                      }}
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-10 top-[1px] h-[46%] rounded-full opacity-90"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05) 55%, transparent 100%)",
                      }}
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[12%] top-1/2 h-12 w-40 -translate-y-1/2 rounded-full blur-2xl"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(212,164,71,0.10), transparent 70%)",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[10%] top-1/2 h-12 w-40 -translate-y-1/2 rounded-full blur-2xl"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(167,215,197,0.07), transparent 70%)",
                      }}
                    />

                    <div
                      ref={navWrapRef}
                      className="relative flex max-w-[1060px] flex-nowrap items-center justify-center gap-5 rounded-full px-7 py-[13px] text-[14px] font-semibold tracking-[0.015em] lg:gap-6 xl:gap-7 xl:text-[16px]"
                      onMouseLeave={closeDesktopGroup}
                    >
                      <span
                        aria-hidden="true"
                        className={clsx(
                          "pointer-events-none absolute top-0 h-[2px] rounded-full bg-gradient-to-r from-[#C8922E] via-[#F3D789] to-[#C8922E] shadow-[0_0_16px_rgba(212,164,71,0.38)] transition-[transform,opacity,width] duration-300 ease-out",
                          indicator.show ? "opacity-100" : "opacity-0"
                        )}
                        style={{
                          width: `${indicator.width}px`,
                          transform: `translateX(${indicator.left}px)`,
                        }}
                      />

                      {topNav.map((item) => {
                        if (item.type === "link") {
                          const isActive = isActivePath(pathname, item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              data-key={item.href}
                              className={clsx(
                                "group relative shrink-0 whitespace-nowrap px-1 py-2 leading-none transition-colors duration-200",
                                isActive
                                  ? "text-[#F6E7B0]"
                                  : "text-white hover:text-[#A7D7C5]"
                              )}
                            >
                              <span className="relative z-10">{item.label}</span>

                              <span
                                aria-hidden="true"
                                className={clsx(
                                  "pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[#D4A447] to-transparent opacity-0 transition-all duration-300",
                                  !isActive &&
                                    "group-hover:w-full group-hover:opacity-100"
                                )}
                              />

                              {isActive && (
                                <>
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-x-2.5 -inset-y-1.5 rounded-xl"
                                    style={{
                                      background:
                                        "radial-gradient(circle at 50% 55%, rgba(212,164,71,0.18), transparent 72%)",
                                    }}
                                  />
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-1 bottom-0 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#A7D7C5]/45 to-transparent"
                                  />
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute bottom-[-1px] left-1/2 h-[2px] w-full max-w-[96px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#E7C66C] to-transparent"
                                  />
                                </>
                              )}
                            </Link>
                          );
                        }

                        const groupActive = item.items.some((x) =>
                          isActivePath(pathname, x.href)
                        );
                        const isOpen = openGroup === item.label;

                        return (
                          <div
                            key={item.label}
                            className="relative shrink-0"
                            onMouseEnter={() => openDesktopGroup(item.label)}
                            onMouseLeave={closeDesktopGroup}
                          >
                            <button
                              type="button"
                              data-key={item.label}
                              aria-expanded={isOpen}
                              onClick={() =>
                                setOpenGroup((prev) =>
                                  prev === item.label ? null : item.label
                                )
                              }
                              className={clsx(
                                "group relative inline-flex items-center gap-1.5 whitespace-nowrap px-1 py-2 leading-none transition-colors duration-200",
                                groupActive || isOpen
                                  ? "text-[#F6E7B0]"
                                  : "text-white hover:text-[#A7D7C5]"
                              )}
                            >
                              <span className="relative z-10">{item.label}</span>
                              <span className="relative z-10">
                                <GoldChevron open={isOpen} />
                              </span>

                              <span
                                aria-hidden="true"
                                className={clsx(
                                  "pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[#D4A447] to-transparent opacity-0 transition-all duration-300",
                                  !groupActive &&
                                    !isOpen &&
                                    "group-hover:w-full group-hover:opacity-100"
                                )}
                              />

                              {(groupActive || isOpen) && (
                                <>
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-x-2.5 -inset-y-1.5 rounded-xl"
                                    style={{
                                      background:
                                        "radial-gradient(circle at 50% 55%, rgba(212,164,71,0.20), transparent 72%)",
                                    }}
                                  />
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-1 bottom-0 h-[1px] rounded-full bg-gradient-to-r from-transparent via-[#A7D7C5]/45 to-transparent"
                                  />
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute bottom-[-1px] left-1/2 h-[2px] w-full max-w-[96px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#E7C66C] to-transparent"
                                  />
                                </>
                              )}
                            </button>

                            <div
                              className={clsx(
                                "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-[18px] transition-all duration-200 ease-out",
                                isOpen
                                  ? "pointer-events-auto translate-y-0 opacity-100"
                                  : "pointer-events-none -translate-y-1 opacity-0"
                              )}
                              onMouseEnter={() => openDesktopGroup(item.label)}
                              onMouseLeave={closeDesktopGroup}
                            >
                              <div className="relative min-w-[800px] rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(7,14,15,0.90)_0%,rgba(15,19,18,0.84)_40%,rgba(25,22,17,0.84)_100%)] p-[18px] shadow-[0_40px_100px_rgba(0,0,0,0.60)] backdrop-blur-[24px]">
                                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A447]/58 to-transparent" />
                                <div className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-white/5" />
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-x-[18%] top-0 h-20 rounded-full blur-3xl"
                                  style={{
                                    background:
                                      "radial-gradient(circle, rgba(212,164,71,0.10), transparent 72%)",
                                  }}
                                />
                                <div
                                  aria-hidden="true"
                                  className="pointer-events-none absolute inset-x-[20%] bottom-0 h-16 rounded-full blur-2xl"
                                  style={{
                                    background:
                                      "radial-gradient(circle, rgba(167,215,197,0.05), transparent 72%)",
                                  }}
                                />

                                <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                                  {item.items.map((it, index) => {
                                    const active = isActivePath(pathname, it.href);
                                    return (
                                      <Link
                                        key={it.href}
                                        href={it.href}
                                        onClick={() => setOpenGroup(null)}
                                        className={clsx(
                                          "group/item relative rounded-[20px] px-4 py-3.5 transition-all duration-300",
                                          active
                                            ? "bg-[linear-gradient(180deg,rgba(167,215,197,0.16),rgba(167,215,197,0.08))] text-[#E8FBF4] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                            : "text-white/90 hover:bg-white/[0.06] hover:text-white",
                                          isOpen
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-2 opacity-0"
                                        )}
                                        style={{
                                          transitionDelay: isOpen
                                            ? `${70 + index * 45}ms`
                                            : "0ms",
                                        }}
                                      >
                                        <span
                                          aria-hidden="true"
                                          className={clsx(
                                            "pointer-events-none absolute inset-y-3 left-0 w-[2px] rounded-full transition-opacity duration-200",
                                            active
                                              ? "bg-[#D4A447] opacity-100"
                                              : "bg-[#D4A447] opacity-0 group-hover/item:opacity-100"
                                          )}
                                        />

                                        <span
                                          aria-hidden="true"
                                          className={clsx(
                                            "pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-300",
                                            !active && "group-hover/item:opacity-100"
                                          )}
                                          style={{
                                            background:
                                              "radial-gradient(circle at 18% 50%, rgba(212,164,71,0.08), transparent 56%)",
                                          }}
                                        />

                                        <div className="relative z-10 text-[14px] font-semibold tracking-[0.01em]">
                                          {it.label}
                                        </div>

                                        {it.description ? (
                                          <div className="relative z-10 mt-1 text-[13px] leading-[1.45] text-white/68 transition-colors duration-200 group-hover/item:text-white/82">
                                            {it.description}
                                          </div>
                                        ) : null}
                                      </Link>
                                    );
                                  })}
                                </div>

                                <div
                                  className={clsx(
                                    "mt-4 h-px bg-gradient-to-r from-transparent via-[#A7D7C5]/20 to-transparent transition-all duration-300",
                                    isOpen
                                      ? "translate-y-0 opacity-100"
                                      : "translate-y-2 opacity-0"
                                  )}
                                  style={{
                                    transitionDelay: isOpen
                                      ? `${90 + item.items.length * 45}ms`
                                      : "0ms",
                                  }}
                                />

                                <div
                                  className={clsx(
                                    "mt-4 flex items-center justify-between transition-all duration-300",
                                    isOpen
                                      ? "translate-y-0 opacity-100"
                                      : "translate-y-2 opacity-0"
                                  )}
                                  style={{
                                    transitionDelay: isOpen
                                      ? `${120 + item.items.length * 45}ms`
                                      : "0ms",
                                  }}
                                >
                                  <a
                                    href={whatsappInvite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-10 items-center justify-center rounded-full border border-[#A7D7C5]/32 bg-white/[0.03] px-4 text-[12px] font-medium text-white transition hover:border-[#A7D7C5]/55 hover:bg-white/[0.05] hover:text-[#A7D7C5]"
                                  >
                                    WhatsApp
                                  </a>

                                  <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] tracking-[0.10em] text-white/58">
                                    Ballantyne Islamic Center
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </nav>
            </div>
          </div>

          <style jsx global>{`
            @keyframes sweep {
              0% {
                transform: translateX(0) skewX(12deg);
                opacity: 0;
              }
              25% {
                opacity: 1;
              }
              100% {
                transform: translateX(240%) skewX(12deg);
                opacity: 0;
              }
            }

            @keyframes logoShimmer {
              0% {
                transform: translateX(0) skewX(-18deg);
                opacity: 0;
              }
              18% {
                opacity: 0.55;
              }
              100% {
                transform: translateX(520%) skewX(-18deg);
                opacity: 0;
              }
            }

            @keyframes floatParticleA {
              0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.16;
              }
              25% {
                transform: translate3d(6px, -4px, 0) scale(1.08);
                opacity: 0.3;
              }
              50% {
                transform: translate3d(12px, -10px, 0) scale(0.96);
                opacity: 0.18;
              }
              75% {
                transform: translate3d(8px, -6px, 0) scale(1.04);
                opacity: 0.26;
              }
              100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.16;
              }
            }

            @keyframes floatParticleB {
              0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.12;
              }
              30% {
                transform: translate3d(-7px, 5px, 0) scale(1.05);
                opacity: 0.24;
              }
              55% {
                transform: translate3d(-12px, -3px, 0) scale(0.95);
                opacity: 0.14;
              }
              80% {
                transform: translate3d(-5px, -8px, 0) scale(1.02);
                opacity: 0.2;
              }
              100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.12;
              }
            }

            @keyframes floatParticleC {
              0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.14;
              }
              20% {
                transform: translate3d(4px, -6px, 0) scale(1.04);
                opacity: 0.24;
              }
              45% {
                transform: translate3d(10px, -12px, 0) scale(0.92);
                opacity: 0.13;
              }
              70% {
                transform: translate3d(7px, -4px, 0) scale(1.06);
                opacity: 0.22;
              }
              100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.14;
              }
            }

            @keyframes floatParticleD {
              0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.1;
              }
              28% {
                transform: translate3d(-5px, -5px, 0) scale(1.08);
                opacity: 0.2;
              }
              52% {
                transform: translate3d(-9px, -11px, 0) scale(0.94);
                opacity: 0.12;
              }
              78% {
                transform: translate3d(-4px, -3px, 0) scale(1.03);
                opacity: 0.18;
              }
              100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.1;
              }
            }

            @keyframes navGoldSweep {
              0% {
                transform: translateX(0);
                opacity: 0;
              }
              6% {
                opacity: 0.14;
              }
              14% {
                opacity: 0.18;
              }
              24% {
                transform: translateX(760%);
                opacity: 0;
              }
              100% {
                transform: translateX(760%);
                opacity: 0;
              }
            }
          `}</style>
        </header>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-label="Close overlay"
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto overscroll-contain border-l border-[#A7D7C5]/35 bg-[#0A3A34] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <div className="min-h-full">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#A7D7C5]/35 bg-[#0A3A34]/95 px-5 py-4 backdrop-blur-md">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-[13px] font-medium text-white transition hover:text-[#A7D7C5]"
                >
                  Home
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="px-5 py-5 pb-8">
                <a
                  href={whatsappInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center rounded-full border border-[#A7D7C5]/35 text-[11px] text-white transition hover:border-[#A7D7C5]/55 hover:text-[#A7D7C5]"
                >
                  WhatsApp
                </a>

                <a
                  href={whatsappInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-[24px] border border-[#A7D7C5]/24 bg-white/[0.04] px-4 py-3.5 transition hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A7D7C5]/28 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.07),transparent_62%)] text-[#A7D7C5]">
                      <span className="text-sm">✦</span>
                    </div>

                    <div>
                      <div className="text-[15px] font-medium tracking-[0.01em] text-white">
                        Join Our WhatsApp Community
                      </div>
                      <div className="mt-1 text-[12px] leading-relaxed text-white/65">
                        Get prayer updates, events, announcements, and community
                        reminders.
                      </div>
                    </div>
                  </div>
                </a>

                <div className="mt-5 h-px bg-[#A7D7C5]/30" />

                <nav className="mt-5 flex flex-col gap-2.5">
                  {topNav.map((item) => {
                    if (item.type === "link") {
                      const isActive = isActivePath(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={clsx(
                            "relative rounded-[22px] border border-white/10 px-4 py-3 text-[15px] font-medium tracking-[0.01em] transition-colors",
                            isActive
                              ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] text-[#F6E7B0]"
                              : "text-white hover:bg-white/[0.03] hover:text-[#A7D7C5]"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={clsx(
                              "absolute bottom-2 left-0 top-2 w-[2px] rounded-full transition-opacity",
                              isActive
                                ? "bg-gradient-to-b from-[#F3D789] via-[#D4A447] to-[#C8922E] opacity-100 shadow-[0_0_10px_rgba(212,164,71,0.28)]"
                                : "opacity-0"
                            )}
                          />
                          {isActive && (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 rounded-[22px]"
                              style={{
                                background:
                                  "radial-gradient(circle at 18% 50%, rgba(212,164,71,0.12), transparent 58%)",
                              }}
                            />
                          )}
                          <span className="relative z-10">{item.label}</span>
                        </Link>
                      );
                    }

                    const groupActive = item.items.some((x) =>
                      isActivePath(pathname, x.href)
                    );
                    const isOpen = !!mobileGroupsOpen[item.label] || groupActive;

                    return (
                      <div
                        key={item.label}
                        className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileGroupsOpen((p) => ({
                              ...p,
                              [item.label]: !p[item.label],
                            }))
                          }
                          className={clsx(
                            "relative flex w-full items-center justify-between px-4 py-3 text-[15px] font-medium tracking-[0.01em] transition-colors",
                            groupActive || isOpen
                              ? "text-[#F6E7B0]"
                              : "text-white"
                          )}
                          aria-expanded={isOpen}
                        >
                          <span className="relative z-10">{item.label}</span>

                          {(groupActive || isOpen) && (
                            <span
                              aria-hidden="true"
                              className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-gradient-to-b from-[#F3D789] via-[#D4A447] to-[#C8922E] shadow-[0_0_10px_rgba(212,164,71,0.28)]"
                            />
                          )}

                          <span
                            className={clsx(
                              "transition-transform duration-300",
                              isOpen ? "rotate-180" : "rotate-0"
                            )}
                          >
                            <GoldChevron open={isOpen} />
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-2 pb-2">
                            {item.items.map((it) => {
                              const active = isActivePath(pathname, it.href);
                              return (
                                <Link
                                  key={it.href}
                                  href={it.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={clsx(
                                    "relative block rounded-[18px] px-3.5 py-2.5 text-[14px] transition-colors",
                                    active
                                      ? "bg-white/[0.04] text-[#F6E7B0]"
                                      : "text-white/88 hover:bg-white/[0.03] hover:text-[#A7D7C5]"
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={clsx(
                                      "absolute bottom-2 left-0 top-2 w-[2px] rounded-full transition-opacity",
                                      active
                                        ? "bg-gradient-to-b from-[#F3D789] via-[#D4A447] to-[#C8922E] opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {active && (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute inset-0 rounded-[18px]"
                                      style={{
                                        background:
                                          "radial-gradient(circle at 18% 50%, rgba(212,164,71,0.11), transparent 58%)",
                                      }}
                                    />
                                  )}
                                  <span className="relative z-10 pl-2">
                                    {it.label}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}