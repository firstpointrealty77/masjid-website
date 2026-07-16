import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Playfair_Display, Lora, Amiri } from "next/font/google";
import { Header } from "@/components/layout/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lora",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ballantynemasjid.org"),

  title: {
    default: "Ballantyne Islamic Center | Friday Jumu'ah Prayer",
    template: "%s | Ballantyne Islamic Center",
  },

  description:
    "Ballantyne Islamic Center currently serves Friday Jumu'ah prayer and is growing together toward a permanent masjid, In Sha Allah.",

  alternates: {
    canonical: "https://www.ballantynemasjid.org",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Ballantyne Islamic Center | Friday Jumu'ah Prayer",
    description:
      "Currently serving Friday Jumu'ah prayer and growing together toward our permanent masjid, In Sha Allah.",
    url: "https://www.ballantynemasjid.org",
    siteName: "Ballantyne Islamic Center",
    images: [
      {
        url: "/og/whatsapp-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ballantyne Islamic Center Friday Jumu'ah Prayer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ballantyne Islamic Center | Friday Jumu'ah Prayer",
    description:
      "Currently serving Friday Jumu'ah prayer and growing together toward our permanent masjid, In Sha Allah.",
    images: ["/og/whatsapp-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} ${amiri.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <Header />

        {/* Keeps page content below the fixed header */}
        <div className="min-h-[60vh] pt-[var(--header-h)]">{children}</div>
      </body>
    </html>
  );
}