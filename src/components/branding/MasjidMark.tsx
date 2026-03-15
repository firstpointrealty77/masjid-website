"use client";

import { useId } from "react";

export function MasjidMark({ className = "h-10 w-10" }: { className?: string }) {
  const gid = useId(); // unique per render tree
  const gold = `goldSeal-${gid}`;

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#F8E7A1" />
          <stop offset="50%" stopColor="#E4C66B" />
          <stop offset="100%" stopColor="#C39B2E" />
        </linearGradient>
      </defs>

      {/* Outer Arch Frame */}
      <path
        d="M20 95V55C20 32 38 18 60 18C82 18 100 32 100 55V95"
        stroke={`url(#${gold})`}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Inner Arch */}
      <path
        d="M32 95V60C32 42 46 30 60 30C74 30 88 42 88 60V95"
        stroke={`url(#${gold})`}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Dome */}
      <path
        d="M45 58C45 46 52 40 60 40C68 40 75 46 75 58"
        stroke={`url(#${gold})`}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Dome Base */}
      <path
        d="M42 60H78"
        stroke={`url(#${gold})`}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Minaret */}
      <path
        d="M92 95V45"
        stroke={`url(#${gold})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M88 45H96"
        stroke={`url(#${gold})`}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Crescent */}
      <path
        d="M60 28
           C64 22 71 20 75 22
           C71 25 69 29 69 33
           C69 37 72 40 77 42
           C69 42 62 36 60 28Z"
        fill={`url(#${gold})`}
      />

      {/* Arabic Calligraphy - الله */}
      <text
        x="60"
        y="75"
        textAnchor="middle"
        fontSize="18"
        fill={`url(#${gold})`}
        fontFamily="serif"
        fontWeight="bold"
      >
        الله
      </text>

      {/* Base line */}
      <path
        d="M38 95H82"
        stroke={`url(#${gold})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}