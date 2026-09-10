import Link from "next/link";

const linkClass = "inline-flex min-h-11 items-center py-2 underline-offset-4 hover:text-[#F5DFA0] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5DFA0]";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#062F2A] text-[#BDD3C8]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-7 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className={`${linkClass} -mt-2 font-serif text-xl font-semibold text-[#FFFDF7]`}>Ballantyne Islamic Center</Link>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7DCFB8]">Masjid Ballantyne</p>
            <p className="mt-3 max-w-md text-[15px] leading-6">Gathering for Friday Jumu’ah today. Growing together toward our permanent masjid, In Sha Allah.</p>
            <Link href="/donate" className={`${linkClass} mt-1 text-[15px] font-semibold text-[#F5DFA0]`}>Support our community →</Link>
          </div>
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold uppercase tracking-widest text-[#F5DFA0]">Get in touch</h2>
            <address className="mt-2 text-[15px] leading-6 not-italic">
              <a href="mailto:info@ballantyneislamiccenter.org" className={`${linkClass} break-words [overflow-wrap:anywhere]`}>info@ballantyneislamiccenter.org</a>
              <div><a href="sms:+19802904711" className={linkClass}>(980) 290-4711</a><span className="mx-2" aria-hidden="true">·</span><a href="https://wa.me/19802904711" className={linkClass}>WhatsApp</a></div>
              <p className="text-[13px] leading-5">Text &amp; WhatsApp only; no voice calls, please.</p>
            </address>
            <Link href="/contact" className={`${linkClass} mt-1 text-[15px]`}>Contact our team →</Link>
          </section>
          <section aria-labelledby="footer-visit">
            <h2 id="footer-visit" className="text-sm font-semibold uppercase tracking-widest text-[#F5DFA0]">Join us for Jumu’ah</h2>
            <p className="mt-3 text-[13px] text-[#7DCFB8]">Current Friday prayer venue</p>
            <address className="mt-1 text-[15px] leading-7 not-italic">10562 Providence Rd W<br />Charlotte, NC 28277</address>
            <Link href="/jummah-prayer-ballantyne" className={`${linkClass} mt-1 text-[15px]`}>Prayer details &amp; directions →</Link>
          </section>
        </div>
        <div className="mt-6 border-t border-white/15 pt-5 text-[13px] leading-6 lg:mt-9">
          <p className="max-w-3xl">Carolina Muslim Development Fund receives donations for Ballantyne Islamic Center. This is the recipient name on PayPal and Zelle.</p>
          <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Ballantyne Islamic Center. All rights reserved.</p>
            <nav aria-label="Footer information" className="flex flex-wrap gap-x-6">
              <Link href="/privacy" className={linkClass}>Privacy notice</Link>
              <Link href="/contact" className={linkClass}>Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
