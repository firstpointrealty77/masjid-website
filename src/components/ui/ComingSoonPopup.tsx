"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function ComingSoonPopup() {
  const [open, setOpen] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 sm:px-6"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-[#02110e]/82 backdrop-blur-md" />

          {/* AMBIENT GLOW */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[10%] h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,179,106,0.16),transparent_68%)] blur-3xl" />
            <div className="absolute bottom-[10%] left-[8%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(16,90,76,0.18),transparent_70%)] blur-3xl" />
          </div>

          {/* POPUP CARD */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95, y: 18 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.34 }}
            className="relative w-full max-w-[720px] overflow-hidden rounded-[28px] border border-[#d6b36a]/30 bg-[linear-gradient(180deg,#06231d,#041814)] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          >
            {/* GOLD LINE */}
            <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />

            {/* MOSQUE SILHOUETTE */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center opacity-[0.14]">
              <div className="relative h-[200px] w-[420px] max-w-full">
                <div className="absolute bottom-0 left-1/2 h-[60px] w-[320px] -translate-x-1/2 rounded-t-[14px] border border-[#d6b36a]/20 bg-[#d6b36a]/[0.07]" />
                <div className="absolute bottom-[55px] left-1/2 h-[90px] w-[120px] -translate-x-1/2 rounded-t-full border border-[#d6b36a]/20 bg-[#d6b36a]/[0.07]" />
                <div className="absolute bottom-[60px] left-[70px] h-[60px] w-[70px] rounded-t-full border border-[#d6b36a]/18 bg-[#d6b36a]/[0.06]" />
                <div className="absolute bottom-[60px] right-[70px] h-[60px] w-[70px] rounded-t-full border border-[#d6b36a]/18 bg-[#d6b36a]/[0.06]" />
                <div className="absolute bottom-[40px] left-[10px] h-[140px] w-[28px] rounded-t-[10px] border border-[#d6b36a]/18 bg-[#d6b36a]/[0.06]" />
                <div className="absolute bottom-[40px] right-[10px] h-[140px] w-[28px] rounded-t-[10px] border border-[#d6b36a]/18 bg-[#d6b36a]/[0.06]" />
              </div>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-[#d6b36a]/35 hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            {/* CONTENT */}
            <div className="relative z-10 px-8 pb-10 pt-12 text-center">

              {/* BADGE */}
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/30 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-[#e8d3a0]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6b36a]" />
                New Masjid Project
              </div>

              {/* BISMILLAH */}
              <div className="mb-4 font-[var(--font-amiri)] text-4xl text-[#d6b36a] sm:text-5xl md:text-6xl">
                ﷽
              </div>

              <div className="mx-auto mb-5 h-px w-20 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />

              {/* TITLE */}
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[44px]">
                Masjid Ballantyne
                <span className="block bg-gradient-to-r from-[#f5e6bb] via-[#d6b36a] to-[#f3e1aa] bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h2>

              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d6b36a] to-transparent" />

              {/* MESSAGE */}
              <div className="mx-auto mt-6 max-w-[540px] space-y-4 text-[16px] leading-relaxed text-white/86">
                <p>
                  Construction is underway to establish a new house of Allah
                  near Ballantyne.
                </p>

                <p>
                  Soon this masjid will serve the community with daily prayers,
                  Jumu’ah, education, and family programs.
                </p>

                <p className="font-semibold text-[#e8d3a0]">
                  Opening soon, InshaAllah.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-col items-center gap-3">

                {/* ENTER WEBSITE */}
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#d6b36a] px-7 py-3 text-sm font-semibold text-[#06211b] shadow-[0_18px_50px_rgba(214,179,106,0.25)] hover:brightness-110 transition"
                >
                  Enter Website
                </button>

                {/* WHATSAPP */}
                <a
                  href="https://chat.whatsapp.com/DMKJvPNcQ4OD5mzXQ83Oea?mode=gi_t"
                  target="_blank"
                  className="rounded-full bg-[#25D366] px-6 py-2 text-sm font-semibold text-white shadow hover:brightness-110 transition"
                >
                  Join WhatsApp Group
                </a>

              </div>

            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}