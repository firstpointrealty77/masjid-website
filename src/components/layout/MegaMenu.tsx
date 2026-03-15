// src/components/layout/MegaMenu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import type { NavGroup } from "@/config/siteNav";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MegaMenuDesktop({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = React.useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {groups.map((g) => {
        const isOpen = openLabel === g.label;

        return (
          <div
            key={g.label}
            className="relative"
            onMouseEnter={() => setOpenLabel(g.label)}
            onMouseLeave={() => setOpenLabel(null)}
          >
            <button
              type="button"
              className={cx(
                "px-3 py-2 rounded-xl text-sm transition",
                "text-white/85 hover:text-white",
                "hover:bg-white/5"
              )}
              aria-expanded={isOpen}
            >
              {g.label}
            </button>

            <div
              className={cx(
                "absolute left-0 top-full pt-3 z-50",
                isOpen ? "block" : "hidden"
              )}
            >
              <div
                className={cx(
                  "min-w-[360px] max-w-[520px] rounded-2xl border",
                  "border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl",
                  "p-3"
                )}
              >
                <div className="grid grid-cols-2 gap-1">
                  {g.items.map((it) => {
                    const active = pathname === it.href;
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        className={cx(
                          "rounded-xl px-3 py-2 text-sm transition",
                          active
                            ? "bg-emerald-400/15 text-emerald-100"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <div className="font-medium">{it.label}</div>
                        {it.description ? (
                          <div className="text-xs text-white/50 mt-0.5">
                            {it.description}
                          </div>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function MegaMenuMobile({
  groups,
  onNavigate,
}: {
  groups: NavGroup[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState<Record<string, boolean>>({});

  return (
    <div className="lg:hidden">
      <div className="space-y-2">
        {groups.map((g) => {
          const isOpen = !!open[g.label];
          return (
            <div key={g.label} className="rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                className="w-full flex items-center justify-between px-4 py-3 text-left"
                onClick={() => setOpen((p) => ({ ...p, [g.label]: !p[g.label] }))}
                aria-expanded={isOpen}
              >
                <span className="text-sm text-white/90">{g.label}</span>
                <span className="text-white/60">{isOpen ? "–" : "+"}</span>
              </button>

              {isOpen ? (
                <div className="px-2 pb-2">
                  {g.items.map((it) => {
                    const active = pathname === it.href;
                    return (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={onNavigate}
                        className={cx(
                          "block rounded-xl px-3 py-2 text-sm transition",
                          active
                            ? "bg-emerald-400/15 text-emerald-100"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {it.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}