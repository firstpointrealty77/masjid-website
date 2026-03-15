import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lora, Amiri } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  title: "Ballantyne Islamic Center",
  description: "Masjid Ballantyne — Ballantyne Islamic Center, Fort Mill, SC",
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

        {/* ✅ Push content exactly below fixed header */}
        <main className="min-h-[60vh] pt-[var(--header-h)]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}