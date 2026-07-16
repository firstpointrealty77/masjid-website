import type { Metadata } from "next";
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

  title: "Masjid Ballantyne | Friday Jumu'ah Prayer",
  description:
    "Friday Jumu'ah prayer near Ballantyne, Fort Mill, Indian Land, and surrounding areas.",

  openGraph: {
    title: "Masjid Ballantyne | Friday Jumu'ah Prayer",
    description:
      "Friday Jumu'ah prayer near Ballantyne, Fort Mill, Indian Land, and surrounding areas.",
    url: "https://www.ballantynemasjid.org",
    siteName: "Masjid Ballantyne",
    images: [
      {
        url: "/og/whatsapp-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Masjid Ballantyne Friday Jumu'ah Prayer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Masjid Ballantyne | Friday Jumu'ah Prayer",
    description:
      "Friday Jumu'ah prayer near Ballantyne, Fort Mill, Indian Land, and surrounding areas.",
    images: ["/og/whatsapp-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} ${amiri.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <Header />

        {/* Push content exactly below fixed header */}
        <main className="min-h-[60vh] pt-[var(--header-h)]">{children}</main>
      </body>
    </html>
  );
}