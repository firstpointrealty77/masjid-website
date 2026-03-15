"use client";

export default function EventsHeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 hero-zoom bg-cover bg-center"
        style={{
          backgroundImage: "url('/events/events-hero-bg.png')",
        }}
      />

      <style jsx>{`
        .hero-zoom {
          animation: heroZoom 18s ease-in-out infinite alternate;
          transform-origin: center center;
          will-change: transform;
        }

        @keyframes heroZoom {
          0% {
            transform: scale(1.03) translateY(0px);
          }
          100% {
            transform: scale(1.08) translateY(-6px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-zoom {
            animation: none;
            transform: scale(1.04);
          }
        }
      `}</style>
    </>
  );
}