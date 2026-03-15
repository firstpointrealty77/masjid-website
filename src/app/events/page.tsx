import { getEventImages } from "@/lib/getEventImages";
import EventsGalleryClient from "@/components/events/EventsGalleryClient";
import EventsHeroBackground from "@/components/events/EventsHeroBackground";
import { featuredEvent } from "@/data/featuredEvent";

export const metadata = {
  title: "Events & Community Programs | Ballantyne Islamic Center",
  description:
    "Explore the latest events, community programs, masjid gatherings, and special moments at Ballantyne Islamic Center.",
};

export default function EventsPage() {
  const images = getEventImages();

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#163324]">
      <section className="relative overflow-hidden border-b border-[#d8c59a]/30 bg-[#0d2a20]">
        <EventsHeroBackground />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,28,22,0.56)_0%,rgba(8,35,27,0.70)_42%,rgba(10,45,34,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(215,185,112,0.22),transparent_24%),radial-gradient(circle_at_50%_52%,rgba(215,185,112,0.10),transparent_34%)]" />
        <div className="absolute inset-0 backdrop-blur-[1.2px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#d7b970_1px,transparent_1px),linear-gradient(to_bottom,#d7b970_1px,transparent_1px)] bg-[size:44px_44px]" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          <div className="relative h-[82%] w-full max-w-[980px] opacity-[0.13]">
            <div className="absolute inset-x-0 bottom-0 top-14 rounded-t-[440px] border border-[#e7d3a0]/40" />
            <div className="absolute inset-x-10 bottom-8 top-24 rounded-t-[360px] border border-[#e7d3a0]/18" />
          </div>
        </div>

        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#d7b970]/10 blur-3xl" />
        <div className="absolute -right-20 top-12 h-72 w-72 rounded-full bg-[#d7b970]/10 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 rounded-full bg-[#d7b970]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 md:px-10 md:pb-16 md:pt-20 lg:pb-20 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-[#d7b970]/40 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f6ebcf] backdrop-blur md:text-[11px]">
              Events & Community Programs
            </div>

            <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.08] text-white sm:text-[3rem] md:text-5xl lg:text-6xl xl:text-[4.05rem]">
              Moments of Faith, Service, and Community
            </h1>

            <p className="mx-auto mt-5 max-w-[840px] px-2 text-[15px] leading-8 text-[#f5ecd9]/88 sm:text-base md:px-0">
              Explore our latest gatherings, family programs, educational
              events, and community moments in a refined archive designed to
              reflect the beauty, warmth, and spirit of Masjid Ballantyne.
            </p>

            <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#d7b970] to-transparent sm:w-36" />
          </div>

          <div className="mx-auto mt-10 max-w-6xl md:mt-12">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(247,240,223,0.98)_0%,rgba(239,228,199,0.94)_100%)] lg:border-b-0 lg:border-r lg:border-r-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,185,112,0.18),transparent_40%)]" />

                  <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-[#153629]/88 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f8edd2] backdrop-blur md:left-5 md:top-5">
                    Latest Community Highlight
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center p-5 pt-16 sm:min-h-[340px] sm:p-6 sm:pt-20 lg:min-h-[420px] lg:p-8 lg:pt-16">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="max-h-[300px] w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)] sm:max-h-[360px] lg:max-h-[410px]"
                    />
                  </div>
                </div>

                <div className="relative bg-[linear-gradient(135deg,rgba(23,54,41,0.84),rgba(38,70,56,0.78))] p-6 sm:p-7 md:p-8 lg:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,185,112,0.10),transparent_34%)]" />

                  <div className="relative">
                    <div className="mb-5 h-px w-14 bg-gradient-to-r from-[#d7b970] to-transparent" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.30em] text-[#e7d09a] sm:text-[11px]">
                      Featured Event Preview
                    </p>

                    <h2 className="mt-4 font-serif text-[2rem] leading-tight text-white sm:text-[2.2rem] lg:text-[2.45rem]">
                      {featuredEvent.title}
                    </h2>

                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b970] sm:text-sm">
                      {featuredEvent.dateLabel}
                    </p>

                    <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#f2e8d0]/84 sm:text-base">
                      {featuredEvent.description}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <a
                        href="#events-archive"
                        className="inline-flex items-center justify-center rounded-full border border-[#d7b970]/55 bg-[#d7b970] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#153629] transition hover:brightness-105"
                      >
                        View Archive
                      </a>

                      <a
                        href={featuredEvent.image}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                      >
                        Open Latest Image
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#f7f3ea]" />
      </section>

      <div id="events-archive">
        <EventsGalleryClient images={images} />
      </div>
    </main>
  );
}