import type { Metadata } from "next";
import Link from "next/link";
import { CopyDetail } from "@/components/CopyDetail";
import { HeartHandshake, ArrowUpRight, Wallet, Landmark, Info } from "lucide-react";
import styles from "./donate.module.css";

export const metadata: Metadata = {
  title: { absolute: "Donate | Ballantyne Islamic Center" },
  description: "Support Friday Jumu’ah prayer and Ballantyne Islamic Center’s journey toward a permanent masjid. Give through PayPal or Zelle.",
  alternates: { canonical: "https://www.ballantynemasjid.org/donate" },
  openGraph: {
    title: { absolute: "Donate | Ballantyne Islamic Center" },
    description: "Support Friday Jumu’ah prayer and our journey toward a permanent masjid.",
    url: "https://www.ballantynemasjid.org/donate",
  },
};

const PAYPAL_URL = "https://www.paypal.com/donate/?hosted_button_id=XTBPXKLENK5H8";

export default function DonatePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroIcon}><HeartHandshake aria-hidden="true" size={26} /></span>
        <p className={styles.eyebrow}>Together for our community</p>
        <h1>Support our Jumu’ah.<br /> <span>Help build our future.</span></h1>
        <p className={styles.intro}>Your gift helps sustain Friday Jumu’ah and supports our journey toward a permanent masjid in Ballantyne, In Sha Allah. Every contribution is appreciated.</p>
        <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer" className={`${styles.primary} ${styles.mobileGive}`}>Give through PayPal <ArrowUpRight aria-hidden="true" size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
      </section>

      <section aria-labelledby="giving-heading" className={styles.content}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>Every contribution matters</p><h2 id="giving-heading">Choose your way to give</h2></div>
          <p>Two simple ways to support our community.</p>
        </div>
        <div id="giving-options" className={styles.cards}>
          <section aria-labelledby="paypal-heading" className={`${styles.card} ${styles.paypal}`}>
            <div className={styles.cardTop}><span className={styles.icon}><Wallet aria-hidden="true" size={24} /></span><span className={styles.method}>Online giving</span></div>
            <h3 id="paypal-heading">Give with PayPal</h3>
            <p className={styles.description}>Make a one-time gift or become a monthly supporter. Choose your amount and purpose on PayPal.</p>
            <ol className={styles.steps}>
              <li><span>1</span>Select One-Time, Monthly, or Yearly on PayPal.</li>
              <li><span>2</span>Choose $30, $50, or $100. For $20 or another amount, select Other.</li>
              <li><span>3</span>Choose your cause, then review the amount and frequency before confirming.</li>
            </ol>
            <div className={styles.action}>
              <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer" className={styles.primary}>Give through PayPal <ArrowUpRight aria-hidden="true" size={18} /><span className="sr-only"> (opens in a new tab)</span></a>
              <p>Complete your donation on PayPal’s website.</p>
            </div>
          </section>

          <section aria-labelledby="zelle-heading" className={styles.card}>
            <div className={styles.cardTop}><span className={styles.icon}><Landmark aria-hidden="true" size={24} /></span><span className={styles.method}>Through your bank</span></div>
            <h3 id="zelle-heading">Give with Zelle</h3>
            <p className={styles.description}>Prefer to give through your bank? Use the details below in Zelle.</p>
            <dl className={styles.details}>
              <div><dt>Recipient</dt><dd>Carolina Muslim Development Fund</dd></div>
              <div><dt>Zelle tag</dt><dd><CopyDetail value="bicc10935" label="Zelle tag" /></dd></div>
              <div><dt>General giving memo</dt><dd><CopyDetail value="Masjid Support" label="memo" /></dd></div>
            </dl>
            <p className={styles.bankNote}>For a specific purpose, replace “Masjid Support” with the memo from your chosen cause below. Verify the recipient name matches before sending.</p>
          </section>
        </div>

        <aside className={styles.recipient} aria-labelledby="recipient-heading">
          <Info aria-hidden="true" size={21} />
          <div><h2 id="recipient-heading">Your donation supports BIC</h2><p><strong>Carolina Muslim Development Fund</strong> receives donations for the Ballantyne Islamic Center / Masjid Ballantyne project. This is the recipient name you’ll see on PayPal and Zelle. Questions? <Link href="/contact" className="underline underline-offset-4">Contact our team.</Link></p></div>
        </aside>

        <section aria-labelledby="purpose-heading" className={styles.purposes}>
          <p className={styles.eyebrow}>Ways to support</p>
          <h2 id="purpose-heading">What would you like to support?</h2>
          <p className={styles.purposeIntro}>Choose your cause on PayPal, or copy its memo below and include it with your Zelle transfer.</p>
          <div className={styles.purposeGrid}>
            {[
              { title: "Regular Expenses", description: "Help cover the ongoing costs of holding Friday Jumu’ah and serving our congregation.", memo: "Regular Expenses" },
              { title: "Sadaqah", description: "Give voluntary charity in support of Ballantyne Islamic Center and its community.", memo: "Sadaqah" },
              { title: "Our Future Masjid", description: "Contribute toward our goal of a permanent home for worship and community.", memo: "Future Masjid" },
            ].map((purpose) => (
              <article key={purpose.memo} className={styles.purposeCard}>
                <h3>{purpose.title}</h3>
                <p>{purpose.description}</p>
                <div className={styles.purposeMemo}><span>Zelle memo</span><CopyDetail value={purpose.memo} label={`${purpose.title} Zelle memo`} /></div>
              </article>
            ))}
          </div>
          <p className={styles.purposeNote}>On PayPal, use “Use this donation for” to choose Regular Expenses, Sadaqah, or Our Future Masjid. Regular Expenses is the default.</p>
        </section>
        <aside className={styles.monthly} aria-labelledby="monthly-heading">
          <p className={styles.eyebrow}>Monthly support</p>
          <h2 id="monthly-heading">Be part of our community’s future—every month.</h2>
          <p>A recurring gift helps sustain Jumu’ah and supports planning for our permanent masjid. Whether you choose $20, $30, $50, $100, or another amount, choose what works for you.</p>
          <p className={styles.monthlyHint}>Select Monthly on PayPal to start recurring giving. You’ll review and authorize your gift there.</p>
          <a href="#giving-options" className={styles.returnToGiving}>Back to giving options <span aria-hidden="true">↑</span></a>
        </aside>
        <div className={styles.closing}><HeartHandshake aria-hidden="true" size={24} /><h2>Thank you for supporting our community.</h2><p>Gathering for Jumu’ah today. Working toward a permanent masjid for tomorrow.</p><Link href="/jummah-prayer-ballantyne">Jumu’ah prayer information <ArrowUpRight aria-hidden="true" size={16} /></Link></div>
      </section>
    </main>
  );
}
