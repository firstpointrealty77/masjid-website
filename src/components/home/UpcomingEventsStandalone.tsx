"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [paused, setPaused] = useState(false);

  const ITEMS = 3;

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/event-images", { cache: "no-store" });
        const data = await res.json();
        setImages(Array.isArray(data) ? data : []);
      } catch {
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

  useEffect(() => {
    if (!images.length || paused) return;

    const timer = window.setInterval(() => {
      if (isMobile) {
        setPage((prev) => (prev + 1) % images.length);
      } else {
        setPage((prev) => (prev + 1) % Math.max(pages, 1));
      }
    }, 7000);

    return () => window.clearInterval(timer);
  }, [images.length, isMobile, pages, paused]);

  const desktopVisible = useMemo(() => {
    return images.slice(page * ITEMS, page * ITEMS + ITEMS);
  }, [images, page]);

  const goPrev = () => {
    if (!images.length) return;

    if (isMobile) {
      setPage((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setPage((prev) => (prev - 1 + Math.max(pages, 1)) % Math.max(pages, 1));
    }
  };

  const goNext = () => {
    if (!images.length) return;

    if (isMobile) {
      setPage((prev) => (prev + 1) % images.length);
    } else {
      setPage((prev) => (prev + 1) % Math.max(pages, 1));
    }
  };

  if (!images.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#f8faf8_0%,#f4f6f2_42%,#f7f5ef_100%)] py-3 md:py-6 xl:py-8">
      <div className="relative mx-auto w-full max-w-[2500px] px-4 sm:px-5">
        {/* HEADER */}
        <div className="mb-2 text-center sm:mb-4">
          <div className="mx-auto mb-1 flex items-center justify-center gap-2">
            <span className="mini-line" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b8933f]">
              Masjid Life
            </p>
            <span className="mini-line" />
          </div>

          <h2 className="mx-auto text-[1.35rem] font-semibold leading-tight tracking-[-0.01em] text-[#123c31] sm:text-3xl lg:text-[2.4rem]">
            Community Events & Programs
          </h2>

          <div className="premium-divider mt-1.5">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>
        </div>

        {/* MOBILE */}
        <div
          className="relative mt-3 md:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[30px]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {images.map((item, index) => (
                <div key={`${item.filename}-${index}`} className="w-full flex-shrink-0 px-1">
                  <Link
                    href="/events"
                    className="event-card-mobile group relative block overflow-hidden rounded-[28px] border border-[#d9cfbf] bg-white/95 p-2 shadow-[0_18px_46px_rgba(18,60,49,0.12)]"
                  >
                    <div className="ribbon-mobile-center">
                      <span>Coming Soon</span>
                    </div>

                    <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98)_0%,rgba(241,238,230,0.92)_100%)]">
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        className="object-cover scale-110 blur-2xl opacity-28"
                      />

                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-contain p-0.5"
                      />

                      <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_22%,rgba(10,58,52,0.02)_100%)]" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous event"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc892] bg-white text-[#8a6a22] shadow-[0_8px_20px_rgba(122,91,24,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff9ea]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {images.map((_, index) => {
                const active = index === page;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPage(index)}
                    aria-label={`Go to event ${index + 1}`}
                    className={[
                      "h-2.5 rounded-full transition-all duration-300",
                      active
                        ? "w-7 bg-[#c89a43] shadow-[0_0_10px_rgba(200,154,67,0.28)]"
                        : "w-2.5 bg-[#d9c48d]/70 hover:bg-[#c89a43]/70",
                    ].join(" ")}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next event"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc892] bg-white text-[#8a6a22] shadow-[0_8px_20px_rgba(122,91,24,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff9ea]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* DESKTOP / TABLET */}
        <div className="mt-8 hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
          {desktopVisible.map((item, i) => {
            const isCenter = i === 1;

            return (
              <Link
                key={`${item.filename}-${i}`}
                href="/events"
                className={`event-card group relative block rounded-[18px] border bg-white p-2 ${
                  isCenter ? "xl:-translate-y-2" : ""
                }`}
              >
                <div className="ribbon">
                  <span>Coming Soon</span>
                </div>

                <div className="relative aspect-[3/4] overflow-hidden rounded-[14px]">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover scale-110 blur-xl opacity-30"
                  />

                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />

                  <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_20%,rgba(10,58,52,0.02)_100%)]" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CONTROLS */}
        {pages > 1 && (
          <div className="mt-6 hidden items-center justify-center gap-3 md:flex">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous events"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc892] bg-white text-[#8a6a22] shadow-[0_8px_20px_rgba(122,91,24,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff9ea]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, index) => {
                const active = index === page;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPage(index)}
                    aria-label={`Go to events page ${index + 1}`}
                    className={[
                      "h-2.5 rounded-full transition-all duration-300",
                      active
                        ? "w-8 bg-[#c89a43] shadow-[0_0_10px_rgba(200,154,67,0.28)]"
                        : "w-2.5 bg-[#d9c48d]/70 hover:bg-[#c89a43]/70",
                    ].join(" ")}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next events"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dcc892] bg-white text-[#8a6a22] shadow-[0_8px_20px_rgba(122,91,24,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff9ea]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .mini-line {
          width: 28px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(212, 169, 79, 0.15),
            #d4a94f,
            rgba(212, 169, 79, 0.15)
          );
        }

        .premium-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .divider-line {
          position: relative;
          height: 2px;
          width: 72px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            rgba(212, 169, 79, 0.16),
            #d4a94f,
            rgba(212, 169, 79, 0.16)
          );
        }

        .divider-dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: linear-gradient(180deg, #27815f 0%, #1f6a52 100%);
          box-shadow:
            0 0 0 3px rgba(31, 106, 82, 0.08),
            0 0 12px rgba(31, 106, 82, 0.16);
        }

        .event-card {
          transition: all 0.35s ease;
          box-shadow: 0 10px 24px rgba(18, 60, 49, 0.05);
        }

        .event-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 25px 60px rgba(18, 60, 49, 0.15),
            0 0 30px rgba(214, 179, 106, 0.2);
        }

        .event-card-mobile {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .event-card-mobile:hover {
          box-shadow:
            0 22px 54px rgba(18, 60, 49, 0.14),
            0 0 20px rgba(214, 179, 106, 0.12);
        }

        .ribbon {
          position: absolute;
          top: 14px;
          right: -20px;
          transform: rotate(41deg);
          z-index: 20;
        }

        .ribbon span {
          display: block;
          min-width: 140px;
          padding: 7px 20px;
          text-align: center;
          background: linear-gradient(135deg, #d6b36a, #c89a43);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          white-space: nowrap;
          box-shadow: 0 8px 22px rgba(200, 154, 67, 0.24);
        }

        .ribbon-mobile-center {
          position: absolute;
          top: 14px;
          right: -18px;
          transform: rotate(39deg);
          z-index: 20;
        }

        .ribbon-mobile-center span {
          display: block;
          min-width: 124px;
          padding: 6px 14px;
          font-size: 9px;
          font-weight: 800;
          text-align: center;
          background: linear-gradient(135deg, #d6b36a, #c89a43);
          color: #fff;
          white-space: nowrap;
          letter-spacing: 0.06em;
          box-shadow: 0 8px 22px rgba(200, 154, 67, 0.24);
        }
      `}</style>
    </section>
  );
}