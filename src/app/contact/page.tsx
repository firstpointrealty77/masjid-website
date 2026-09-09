import type { Metadata } from "next";
import Link from "next/link";
import { CopyDetail } from "@/components/CopyDetail";
import { ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact | Ballantyne Islamic Center" },
  description: "Contact Ballantyne Islamic Center by email, text, or WhatsApp. Find information about Friday Jumu’ah prayer and visiting our community.",
  alternates: { canonical: "https://www.ballantynemasjid.org/contact" },
  openGraph: {
    title: "Contact | Ballantyne Islamic Center",
    description: "Get in touch by email, text, or WhatsApp.",
    url: "https://www.ballantynemasjid.org/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Ballantyne Islamic Center</p>
        <h1>We’re here to <span>connect.</span></h1>
        <p>Questions about Jumu’ah, donations, or our future masjid? Get in touch with our team.</p>
      </section>

      <section aria-label="Contact options" className={styles.content}>
        <div className={styles.cards}>
          <section className={styles.card} aria-labelledby="email-heading">
            <span className={styles.icon}><Mail aria-hidden="true" size={25} /></span>
            <h2 id="email-heading">Send us an email</h2>
            <p>For general questions, donation support, and community inquiries.</p>
            <div className={styles.email}><CopyDetail value="info@ballantyneislamiccenter.org" label="email address" /></div>
            <a className={styles.primary} href="mailto:info@ballantyneislamiccenter.org">Email our team <ArrowUpRight aria-hidden="true" size={18} /></a>
          </section>

          <section className={styles.card} aria-labelledby="message-heading">
            <span className={styles.icon}><MessageCircle aria-hidden="true" size={25} /></span>
            <h2 id="message-heading">Send us a message</h2>
            <p>Reach our team by text message or WhatsApp.</p>
            <div className={styles.number}><CopyDetail value="(980) 290-4711" label="phone number" /></div>
            <p className={styles.notice}>Text &amp; WhatsApp only — no voice calls, please.</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="https://wa.me/19802904711" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
              <a className={styles.secondary} href="sms:+19802904711">Send a text</a>
            </div>
          </section>
        </div>

        <aside className={styles.visit}>
          <MapPin aria-hidden="true" size={24} />
          <div><h2>Planning to join us for Jumu’ah?</h2><p>We currently gather for Friday Jumu’ah prayer. Find the prayer schedule, venue, and directions before your visit.</p><Link href="/jummah-prayer-ballantyne">View Jumu’ah prayer details <ArrowUpRight aria-hidden="true" size={16} /></Link></div>
        </aside>
      </section>
    </main>
  );
}
