"use client";

import Link from "next/link";

type EventImage = {
  src: string;
  filename: string;
  title: string;
  dateLabel: string;
};

export default function EventsGalleryClient({
  images,
}: {
  images: EventImage[];
}) {
  if (!images?.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="flex flex-col gap-4 border-b border-[#e8dcc0] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl text-[#163324] sm:text-3xl">
            Recent Events & Programs
          </h2>

          <p className="mt-2 text-sm text-[#66756d]">
            Automatically arranged newest first from your uploaded images.
          </p>
        </div>

        <div className="inline-flex w-fit rounded-full border border-[#d7c89e] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a7440] shadow-sm">
          {images.length} {images.length === 1 ? "Event" : "Events"}
        </div>
      </div>

      {/* 2-column premium grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {images.map((img) => (
          <Link
            key={img.filename}
            href={`/events/${img.filename.replace(/\.[^/.]+$/, "")}`}
            className="group block overflow-hidden rounded-[26px] border border-[#e6dac0] bg-white shadow-[0_10px_30px_rgba(16,47,36,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,47,36,0.10)]"
          >
            {/* Flyer area */}
            <div className="relative bg-[linear-gradient(180deg,#f6f0e2_0%,#efe5cd_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,185,112,0.10),transparent_42%)]" />

              <div className="flex min-h-[420px] items-center justify-center p-5 sm:min-h-[520px] sm:p-6 lg:min-h-[640px] lg:p-8">
                <img
                  src={img.src}
                  alt={img.title}
                  className="max-h-[380px] w-full object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.10)] transition duration-500 group-hover:scale-[1.015] sm:max-h-[470px] lg:max-h-[580px]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="border-t border-[#eee3c8] px-5 py-5 sm:px-6 sm:py-6">
              <div className="mb-3 h-px w-12 bg-gradient-to-r from-[#d7b970] to-transparent" />

              <h3 className="font-serif text-[1.55rem] leading-tight text-[#163324] transition group-hover:text-[#1c4b3a] sm:text-[1.75rem]">
                {img.title}
              </h3>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.20em] text-[#9c8447] sm:text-[13px]">
                {img.dateLabel}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}