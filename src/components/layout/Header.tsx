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

function DonateButton({
  href = "/donate",
  className,
  compact,
  onClick,
}: {
  href?: string;
  className?: string;
  compact?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Donate"
      className={clsx(
        "group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300",
        "text-[#0A3A34] border border-[#F3D789]/55",
        "bg-[linear-gradient(180deg,#E1BA5A_0%,#D4A447_55%,#C8922E_100%)]",
        "shadow-[0_10px_24px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.22)]",
        "hover:brightness-[1.04] hover:shadow-[0_14px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.26)]",
        "active:brightness-[0.98]",
        compact ? "h-9 px-3 text-[11px]" : "h-10 px-7 text-[12px]",
        className
      )}
    >
      <span className="relative z-10">Donate</span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.30), transparent 62%)",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-[140%] w-[120%] bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_0.85s_ease-out_forwards]"
      />
    </Link>
  );
}

function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="h-9 w-9 rounded-full inline-flex items-center justify-center shrink-0 border border-[#A7D7C5]/45 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.07),transparent_62%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_26px_rgba(0,0,0,0.22)] hover:bg-white/5 transition-all duration-200"
      aria-label="Open menu"
    >
      <div className="flex flex-col gap-[3px]">
        <span className="h-[2px] w-[14px] bg-white rounded-full" />
        <span className="h-[2px] w-[14px] bg-white rounded-full" />
        <span className="h-[2px] w-[14px] bg-white rounded-full" />
      </div>
    </button>
  );
}

function isActivePath(pathname: string, href: string) {
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
          { label: "About", href: "/about", description: "Who we are" },
          {
            label: "Mission & Vision",
            href: "/about/mission",
            description: "Our purpose and direction",
          },
          {
            label: "Leadership",
            href: "/about/leadership",
            description: "Meet our leadership",
          },
          {
            label: "Policies",
            href: "/about/policies",
            description: "Guidelines and policies",
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
            description: "All educational programs",
          },
          {
            label: "Weekend Islamic School",
            href: "/programs/weekend-school",
            description: "Weekend learning for children",
          },
          {
            label: "Classes & Halaqas",
            href: "/programs/classes",
            description: "Regular classes and study circles",
          },
          {
            label: "Youth Programs",
            href: "/programs/youth",
            description: "Programs for youth",
          },
          {
            label: "Sisters Programs",
            href: "/programs/sisters",
            description: "Programs for sisters",
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

  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
    show: boolean;
  }>({ left: 0, width: 0, show: false });

  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState<Record<string, boolean>>(
    {}
  );

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

    const width = 34;
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
      if (e.key === "Escape") setOpenGroup(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openGroup]);

  const whatsappInvite =
    "https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t";

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <header
          ref={headerRef}
          className={clsx(
            "relative border-b border-[#A7D7C5]/28",
            scrolled ? "bg-[#0A3A34]/92 backdrop-blur-md" : "bg-[#0A3A34]"
          )}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,164,71,0.18),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_55%,rgba(0,0,0,0.26),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_55%,rgba(0,0,0,0.26),transparent_60%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A7D7C5]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#A7D7C5]/22 to-transparent" />
          </div>

          <div className="max-w-[1720px] mx-auto px-4 xl:px-6 relative">
            {/* MOBILE */}
            <div
              className={clsx(
                "md:hidden flex items-center justify-between",
                scrolled ? "py-2.5" : "py-3"
              )}
            >
              <div className="min-w-0 pr-2">
                <WordmarkLogo />
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <DonateButton compact />
                <MenuButton
                  onClick={() => {
                    setMobileOpen(true);
                    setMobileGroupsOpen((prev) => ({ ...prev }));
                  }}
                />
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div
                className={clsx(
                  "flex justify-center",
                  scrolled ? "pt-3 pb-1.5" : "pt-4 pb-2"
                )}
              >
                <div className="scale-[1.05] xl:scale-[1.08] origin-center">
                  <WordmarkLogo />
                </div>
              </div>

              <nav className="flex items-center pb-4">
                <div className="flex-[1.15]" />

                <div
                  ref={navWrapRef}
                  className="relative flex items-center justify-center flex-nowrap gap-4 lg:gap-5 xl:gap-6 text-[14px] xl:text-[15px] tracking-[0.02em] font-medium max-w-[980px]"
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "absolute top-0 h-[2px] rounded-full bg-[#A7D7C5] transition-[transform,opacity] duration-300 ease-out",
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
                            "relative px-1 py-2 shrink-0 whitespace-nowrap leading-none transition-colors duration-200",
                            isActive
                              ? "text-[#A7D7C5]"
                              : "text-white hover:text-[#A7D7C5]"
                          )}
                        >
                          {item.label}
                          {isActive && (
                            <span
                              aria-hidden="true"
                              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-7 pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(circle, rgba(212,164,71,0.22), transparent 70%)",
                              }}
                            />
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
                        onMouseEnter={() => setOpenGroup(item.label)}
                      >
                        <button
                          type="button"
                          data-key={item.label}
                          aria-expanded={isOpen}
                          className={clsx(
                            "relative px-1 py-2 whitespace-nowrap leading-none transition-colors duration-200",
                            groupActive
                              ? "text-[#A7D7C5]"
                              : "text-white hover:text-[#A7D7C5]"
                          )}
                        >
                          {item.label}
                          {groupActive && (
                            <span
                              aria-hidden="true"
                              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-7 pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(circle, rgba(212,164,71,0.22), transparent 70%)",
                              }}
                            />
                          )}
                        </button>

                        <div
                          className={clsx(
                            "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50",
                            isOpen ? "block" : "hidden"
                          )}
                        >
                          <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.55)] p-3 min-w-[520px]">
                            <div className="grid grid-cols-2 gap-1">
                              {item.items.map((it) => {
                                const active = isActivePath(pathname, it.href);
                                return (
                                  <Link
                                    key={it.href}
                                    href={it.href}
                                    className={clsx(
                                      "rounded-xl px-3 py-2 transition",
                                      active
                                        ? "bg-[#A7D7C5]/15 text-[#DFF5EC]"
                                        : "text-white/80 hover:text-white hover:bg-white/5"
                                    )}
                                  >
                                    <div className="text-[12px] tracking-[0.02em] font-semibold">
                                      {it.label}
                                    </div>
                                    {it.description ? (
                                      <div className="text-xs text-white/50 mt-0.5 font-normal">
                                        {it.description}
                                      </div>
                                    ) : null}
                                  </Link>
                                );
                              })}
                            </div>

                            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-[#A7D7C5]/22 to-transparent" />
                            <div className="mt-3 flex items-center justify-between">
                              <a
                                href={whatsappInvite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-[#A7D7C5]/35 text-white text-[11px] px-4 h-9 hover:text-[#A7D7C5] hover:border-[#A7D7C5]/55 transition"
                              >
                                WhatsApp
                              </a>
                              <span className="text-[10px] tracking-[0.08em] text-white/55">
                                Ballantyne Islamic Center
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex-[1.15] flex justify-end pl-8">
                  <DonateButton />
                </div>
              </nav>
            </div>
          </div>

          <style jsx global>{`
            @keyframes sweep {
              0% { transform: translateX(0) skewX(12deg); opacity: 0; }
              25% { opacity: 1; }
              100% { transform: translateX(240%) skewX(12deg); opacity: 0; }
            }
          `}</style>
        </header>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-label="Close overlay"
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[#0A3A34] border-l border-[#A7D7C5]/35 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between px-5 py-5 border-b border-[#A7D7C5]/35">
              <span className="text-xs font-medium text-white">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white text-lg"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="px-5 py-6">
              <div className="flex items-center gap-3">
                <DonateButton
                  className="flex-1 justify-center h-10"
                  onClick={() => setMobileOpen(false)}
                />
                <a
                  href={whatsappInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-10 inline-flex items-center justify-center rounded-full border border-[#A7D7C5]/35 text-white text-[11px] hover:text-[#A7D7C5] hover:border-[#A7D7C5]/55 transition"
                >
                  WhatsApp
                </a>
              </div>

              {/* WhatsApp Community Card */}
              <a
                href={whatsappInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl border border-[#A7D7C5]/28 bg-white/[0.04] px-4 py-4 transition hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 shrink-0 rounded-full border border-[#A7D7C5]/30 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.07),transparent_62%)] flex items-center justify-center text-[#A7D7C5]">
                    <span className="text-sm">✦</span>
                  </div>

                  <div>
                    <div className="text-white font-medium text-[15px] tracking-[0.01em]">
                      Join Our WhatsApp Community
                    </div>
                    <div className="mt-1 text-white/65 text-[12px] leading-relaxed">
                      Get prayer updates, events, announcements, and community reminders.
                    </div>
                  </div>
                </div>
              </a>

              <div className="mt-6 h-px bg-[#A7D7C5]/35" />

              <nav className="mt-6 flex flex-col gap-2">
                {topNav.map((item) => {
                  if (item.type === "link") {
                    const isActive = isActivePath(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={clsx(
                          "relative rounded-2xl px-4 py-3 text-[15px] font-medium tracking-[0.01em] transition-colors border border-white/10",
                          isActive
                            ? "text-[#A7D7C5] bg-white/[0.04]"
                            : "text-white hover:text-[#A7D7C5] hover:bg-white/[0.03]"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={clsx(
                            "absolute left-0 top-2 bottom-2 w-[2px] rounded-full transition-opacity",
                            isActive ? "opacity-100 bg-[#A7D7C5]" : "opacity-0"
                          )}
                        />
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            style={{
                              background:
                                "radial-gradient(circle at 30% 50%, rgba(212,164,71,0.10), transparent 60%)",
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
                  const isOpen = !!mobileGroupsOpen[item.label];

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03]"
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
                          "w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium tracking-[0.01em] transition-colors",
                          groupActive ? "text-[#A7D7C5]" : "text-white"
                        )}
                        aria-expanded={isOpen}
                      >
                        <span className="relative z-10">{item.label}</span>

                        {groupActive && (
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-[#A7D7C5]"
                          />
                        )}

                        <span className="text-white/70">{isOpen ? "–" : "+"}</span>
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
                                  "block relative rounded-xl px-3 py-2 text-sm transition-colors",
                                  active
                                    ? "text-[#A7D7C5] bg-white/[0.04]"
                                    : "text-white/85 hover:text-[#A7D7C5] hover:bg-white/[0.03]"
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={clsx(
                                    "absolute left-0 top-2 bottom-2 w-[2px] rounded-full transition-opacity",
                                    active ? "opacity-100 bg-[#A7D7C5]" : "opacity-0"
                                  )}
                                />
                                {active && (
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-xl pointer-events-none"
                                    style={{
                                      background:
                                        "radial-gradient(circle at 30% 50%, rgba(212,164,71,0.10), transparent 60%)",
                                    }}
                                  />
                                )}
                                <span className="relative z-10 pl-2">{it.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-6 h-px bg-[#A7D7C5]/35" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}