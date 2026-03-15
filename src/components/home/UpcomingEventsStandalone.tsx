"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type EventImage = {
  src: string;
  filename: string;
  title: string;
  dateLabel: string;
  timestamp: number;
};

export default function UpcomingEventsStandalone() {
  const [images, setImages] = useState<EventImage[]>([]);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const ITEMS = 3;

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/event-images", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load events: ${res.status}`);

        const data = await res.json();
        setImages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load events:", error);
        setImages([]);
      }
    }

    load();
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pages = Math.ceil(images.length / ITEMS);

  const visible = useMemo(() => {
    return images.slice(page * ITEMS, page * ITEMS + ITEMS);
  }, [images, page]);

  const next = () => {
    if (pages <= 1) return;
    setPage((p) => (p + 1) % pages);
  };

  const prev = () => {
    if (pages <= 1) return;
    setPage((p) => (p - 1 + pages) % pages);
  };

  useEffect(() => {
    if (pages <= 1 || isMobile) return;

    const timer = setInterval(() => {
      setPage((p) => (p + 1) % pages);
    }, 12000);

    return () => clearInterval(timer);
  }, [pages, isMobile]);

  if (!images.length) return null;

  return (
    <section className="w-full bg-[linear-gradient(180deg,#f8faf8_0%,#f4f6f2_100%)] py-6 md:py-10 xl:py-12">
      <div className="mx-auto w-full max-w-[2500px] px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7">
        <div className="text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8933f] sm:text-xs">
            Masjid Life
          </p>

          <h2 className="mx-auto max-w-[320px] text-[1.55rem] font-semibold leading-[1.15] tracking-tight text-[#123c31] sm:max-w-none sm:text-4xl lg:text-5xl">
            Events &amp; Community Programs
          </h2>

          <div className="mt-2.5 flex items-center justify-center gap-2 sm:mt-3">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>

          <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-6 text-[#5a6b64] sm:max-w-3xl sm:text-base sm:leading-7">
            Stay connected with activities, classes, and gatherings at the Masjid.
          </p>
        </div>

        {isMobile ? (
          <div className="mt-5 grid grid-cols-1 gap-4">
            {images.slice(0, 3).map((item, i) => (
              <Link
                key={`mobile-${i}-${item.filename}`}
                href="/events"
                className="group block rounded-[16px] border border-[#d7ddd6] bg-white p-2 shadow-[0_8px_22px_rgba(18,60,49,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(18,60,49,0.09)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] bg-[#f4f6f1]">
                  {/* Background fill so no empty space */}
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover scale-110 blur-xl opacity-35"
                    sizes="100vw"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(244,246,241,0.55)_100%)]" />

                  {/* Main full flyer */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain p-1.5"
                    sizes="100vw"
                    priority={i === 0}
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-inset ring-[#efe4c8]/45" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <>
            <div className="relative mt-6 xl:mt-7">
              {pages > 1 && (
                <button
                  onClick={prev}
                  aria-label="Previous events"
                  className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-[#d8c59a]/60 bg-white/95 p-3.5 shadow-md transition hover:scale-105 hover:bg-white lg:flex"
                >
                  <span className="text-2xl leading-none text-[#123c31]">‹</span>
                </button>
              )}

              {pages > 1 && (
                <button
                  onClick={next}
                  aria-label="Next events"
                  className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-[#d8c59a]/60 bg-white/95 p-3.5 shadow-md transition hover:scale-105 hover:bg-white lg:flex"
                >
                  <span className="text-2xl leading-none text-[#123c31]">›</span>
                </button>
              )}

              <div className="grid items-end grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 xl:gap-3 2xl:gap-4">
                {visible.map((item, i) => {
                  const isCenter = i === 1;

                  return (
                    <Link
                      key={`${page}-${i}-${item.filename}`}
                      href="/events"
                      className={`group block rounded-[16px] border border-[#d7ddd6] bg-white p-2 shadow-[0_10px_24px_rgba(18,60,49,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(18,60,49,0.10)] ${
                        isCenter ? "xl:-translate-y-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[12px] bg-[linear-gradient(180deg,#f7f8f4_0%,#f1f4ef_100%)]">
                        {/* Background fill so no empty space */}
                        <Image
                          src={item.src}
                          alt=""
                          fill
                          className="object-cover scale-110 blur-xl opacity-35 transition duration-700 group-hover:scale-[1.12]"
                          sizes="(max-width: 1279px) 50vw, 33vw"
                          aria-hidden="true"
                        />

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(241,244,239,0.55)_100%)]" />

                        {/* Main full flyer */}
                        <div
                          className={`absolute inset-0 ${
                            isCenter ? "p-1.5 xl:p-1.5" : "p-2"
                          }`}
                        >
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-contain transition duration-700 group-hover:scale-[1.01]"
                            sizes="(max-width: 1279px) 50vw, 33vw"
                            priority={i === 0}
                          />
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-inset ring-[#efe4c8]/45" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {pages > 1 && (
              <div className="mt-5 flex justify-center gap-2.5">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to events page ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      page === i
                        ? "scale-110 bg-[#1f6a52]"
                        : "bg-[#d8c59a] hover:bg-[#c7aa63]"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-full border border-[#d7c89e] bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#123c31] shadow-sm transition hover:border-[#caa24d] hover:bg-[#fcfaf4]"
          >
            View All Events
          </Link>
        </div>
      </div>

      <style jsx>{`
        .divider-line {
          height: 2px;
          width: 56px;
          background: linear-gradient(90deg, #d4a94f 0%, #cfa34a 100%);
        }

        .divider-dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: #1f6a52;
        }

        @media (min-width: 640px) {
          .divider-line {
            width: 72px;
          }
        }
      `}</style>
    </section>
  );
}