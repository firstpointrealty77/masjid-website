import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] bg-[#F8F7F3] px-6 py-16 text-center text-[#113E36]">
      <p className="text-sm font-semibold uppercase tracking-widest">Page not found</p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Let’s help you find your way.</h1>
      <p className="mx-auto mt-5 max-w-lg leading-relaxed text-slate-600">This page is unavailable. Find current Jumu’ah details, explore our community, or contact our team.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-xl bg-[#D4AA50] px-6 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">Back to home</Link>
        <Link href="/contact" className="rounded-xl border border-[#113E36]/30 px-6 py-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">Contact us</Link>
      </div>
    </main>
  );
}
