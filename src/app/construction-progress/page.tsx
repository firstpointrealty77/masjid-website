import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, BookOpen, HeartHandshake, UsersRound } from "lucide-react";
import styles from "./future.module.css";

export const metadata: Metadata = {
  title: { absolute: "Our Future Masjid | Ballantyne Islamic Center" },
  description: "Our vision for a permanent home for worship and community in Ballantyne. Learn about the goal and how to support our future masjid.",
  alternates: { canonical: "https://www.ballantynemasjid.org/construction-progress" },
  openGraph: {
    title: "Our Future Masjid | Ballantyne Islamic Center",
    description: "Together toward a permanent home for worship and community.",
    url: "https://www.ballantynemasjid.org/construction-progress",
  },
};

export default function FutureMasjidPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroIcon}><Building2 aria-hidden="true" size={28} /></span>
        <p className={styles.eyebrow}>Our Future Masjid</p>
        <h1>A place to worship.<br /><span>A community to call home.</span></h1>
        <p className={styles.intro}>Together, we are working toward a permanent masjid for Ballantyne and our neighboring communities, In Sha Allah.</p>
        <Link href="/donate" className={styles.primary}>Support our future masjid <ArrowUpRight aria-hidden="true" size={18} /></Link>
      </section>

      <div className={styles.content}>
        <section className={styles.today} aria-labelledby="today-heading">
          <div><p className={styles.eyebrow}>Our community today</p><h2 id="today-heading">Gathering for Jumu’ah.<br />Growing together.</h2></div>
          <div><p>Ballantyne Islamic Center currently gathers for Friday Jumu’ah prayer at our interim venue. These gatherings are the foundation of our community as we work toward a permanent home.</p><Link href="/jummah-prayer-ballantyne" className={styles.textLink}>Current Jumu’ah times &amp; location <ArrowUpRight aria-hidden="true" size={16} /></Link></div>
        </section>

        <section className={styles.vision} aria-labelledby="vision-heading">
          <p className={styles.eyebrow}>The vision we share</p>
          <h2 id="vision-heading">More than a building. A place to belong.</h2>
          <p className={styles.sectionIntro}>Our hope is to create a lasting home where faith, learning, and community can flourish. These are aspirations for our future masjid.</p>
          <div className={styles.grid}>
            {[
              { Icon: Building2, title: "A home for worship", text: "A dedicated place to gather in prayer and strengthen our connection to Allah." },
              { Icon: BookOpen, title: "A place to learn", text: "Space for Qur’anic learning and Islamic education for future generations." },
              { Icon: UsersRound, title: "A welcoming community", text: "A place where families, youth, neighbors, and new Muslims can find connection and support." },
            ].map(({ Icon, title, text }) => <article className={styles.card} key={title}><Icon aria-hidden="true" size={26} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className={styles.support} aria-labelledby="support-heading">
          <HeartHandshake aria-hidden="true" size={30} />
          <div><p className={styles.eyebrow}>Help move the vision forward</p><h2 id="support-heading">Be part of our next chapter.</h2><p>Contribute toward our permanent masjid goal with a one-time or monthly gift. On PayPal, choose <strong>Our Future Masjid</strong> under “Use this donation for.” For Zelle, include <strong>Future Masjid</strong> as your memo.</p><Link href="/donate" className={styles.primary}>View ways to give <ArrowUpRight aria-hidden="true" size={18} /></Link></div>
        </section>

        <section className={styles.questions} aria-labelledby="questions-heading"><h2 id="questions-heading">Want to learn more about the project?</h2><p>Contact our team for current project information or to discuss how you can help.</p><Link href="/contact" className={styles.textLink}>Get in touch <ArrowUpRight aria-hidden="true" size={16} /></Link></section>
      </div>
    </main>
  );
}