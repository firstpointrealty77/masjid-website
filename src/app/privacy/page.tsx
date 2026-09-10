import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How the Ballantyne Islamic Center website uses analytics and links to contact and donation services.",
  alternates: { canonical: "https://www.ballantynemasjid.org/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAF8F3] px-6 py-14 text-slate-700 sm:py-20">
      <article className="mx-auto max-w-3xl space-y-8 text-base leading-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#062F2A] [&_a]:underline [&_a]:underline-offset-4">
        <header><p className="text-sm font-semibold uppercase tracking-widest text-[#41685B]">Ballantyne Islamic Center</p><h1 className="mt-3 font-serif text-4xl text-[#062F2A]">Privacy notice</h1></header>
        <section><h2>Website analytics</h2><p>Our production website uses Google Analytics 4 to understand page visits and how visitors use donation, contact, and directions links. Google Analytics uses cookies and collects information about website activity, browsers, and devices. Advertising personalization and Google Signals are disabled in our website integration.</p></section>
        <section><h2>What our interaction tracking records</h2><p>We record clicks to PayPal, email, text, WhatsApp, and Google Maps, along with successful copies of Zelle details. Our custom events include the page path and the type of action. We do not add names, email addresses, phone numbers, donation amounts, copied values, URL query strings, or fragments to those custom event parameters.</p><p className="mt-3">A donation-link click measures interest in donating; it does not confirm a payment. Copying Zelle details does not confirm a transfer.</p></section>
        <section><h2>Contact and donation services</h2><p>Email, text, WhatsApp, PayPal, Zelle, and Google Maps are handled through their respective services. Information you choose to send or submit through them is subject to those services’ privacy practices. Carolina Muslim Development Fund receives donations for the Ballantyne Islamic Center / Masjid Ballantyne project.</p></section>
        <section><h2>Your choices</h2><p>You can manage or block cookies through your browser settings. You can also contact our team directly using the email address or text number on our <Link href="/contact">contact page</Link>.</p></section>
        <section><h2>Privacy questions</h2><p>For questions about this website’s privacy practices, email <a className="break-all" href="mailto:info@ballantyneislamiccenter.org">info@ballantyneislamiccenter.org</a>.</p></section>
      </article>
    </main>
  );
}
