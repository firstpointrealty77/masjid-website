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

  const visible = useMemo(() => {
    return images.slice(page * ITEMS, page * ITEMS + ITEMS);
  }, [images, page]);

  if (!images.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#f8faf8_0%,#f4f6f2_46%,#f7f5ef_100%)] py-8 md:py-10 xl:py-12">
      <div className="relative mx-auto w-full max-w-[2500px] px-4">

        {/* HEADER */}
        <div className="text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b8933f]">
            Masjid Life
          </p>

          <h2 className="text-[1.6rem] sm:text-4xl lg:text-[3rem] font-semibold text-[#123c31]">
            Events & Community Programs
          </h2>

          <div className="mt-3 flex justify-center gap-2">
            <span className="divider-line" />
            <span className="divider-dot" />
            <span className="divider-line" />
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5a6b64]">
            Stay connected with activities, classes, and gatherings at the Masjid.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visible.map((item, i) => {
            const isCenter = i === 1;

            return (
              <Link
                key={i}
                href="/events"
                className={`event-card group relative block rounded-[18px] border bg-white p-2 ${
                  isCenter ? "xl:-translate-y-2" : ""
                }`}
              >

                {/* DESKTOP RIBBON FIX */}
                <div className="ribbon">
                  <span>Coming Soon</span>
                </div>

                {/* MOBILE RIBBON FIX */}
                <div className="ribbon-mobile">
                  <span>Coming Soon</span>
                </div>

                {/* IMAGE */}
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
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .divider-line {
          height: 2px;
          width: 60px;
          background: linear-gradient(90deg, #d4a94f, #cfa34a);
        }

        .divider-dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: #1f6a52;
        }

        .event-card {
          transition: all 0.3s ease;
          box-shadow: 0 10px 24px rgba(18, 60, 49, 0.05);
        }

        .event-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 25px 60px rgba(18, 60, 49, 0.15),
            0 0 30px rgba(214, 179, 106, 0.2);
        }

        /* ===== DESKTOP RIBBON FIX ===== */
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
        }

        /* ===== MOBILE RIBBON FIX ===== */
        .ribbon-mobile {
          position: absolute;
          top: 12px;
          right: -18px;
          transform: rotate(38deg);
          z-index: 20;
        }

        .ribbon-mobile span {
          min-width: 120px;
          padding: 6px 16px;
          font-size: 9px;
          font-weight: 800;
          background: linear-gradient(135deg, #d6b36a, #c89a43);
          color: #fff;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .ribbon-mobile {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .ribbon {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}