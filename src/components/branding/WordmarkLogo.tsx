import { MasjidMark } from "@/components/branding/MasjidMark";

export function WordmarkLogo() {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {/* Logo Badge */}
      <div className="relative h-10 w-10 md:h-14 md:w-14 shrink-0">
        {/* Gold aura */}
        <div className="absolute -inset-2 md:-inset-2.5 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(212,164,71,0.22),transparent_65%)] blur-xl opacity-90" />

        <div className="relative h-10 w-10 md:h-14 md:w-14 rounded-2xl border border-[#A7D7C5]/35 bg-[linear-gradient(180deg,#0A3A34,#072F2A)] shadow-[0_0_22px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden">
          {/* Glass highlight (behind icon) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.08),transparent_60%)]" />

          {/* FORCE SVG visibility: override all inner strokes/fills */}
          <div className="relative z-10 text-[#D4A447] [&_svg]:block [&_svg]:h-7 [&_svg]:w-7 md:[&_svg]:h-9 md:[&_svg]:w-9 [&_svg_*]:!stroke-[#D4A447] [&_svg_*]:!fill-none">
            <MasjidMark />
          </div>
        </div>
      </div>

      {/* Text Block */}
      <div className="min-w-0 flex flex-col justify-center leading-tight">
        <span className="text-[18px] sm:text-[19px] md:text-[30px] font-semibold tracking-[0.02em] text-white whitespace-nowrap">
          Ballantyne Islamic Center
        </span>

        <div className="mt-0.5 md:mt-1 flex items-center gap-2 md:gap-3">
          <span className="h-px w-6 sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-[#A7D7C5]/60 to-transparent" />
          <span className="text-[9px] sm:text-[10px] md:text-[13px] tracking-[0.26em] uppercase text-white/80 whitespace-nowrap">
            Masjid Ballantyne
          </span>
          <span className="h-px w-6 sm:w-8 md:w-12 bg-gradient-to-r from-transparent via-[#A7D7C5]/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}