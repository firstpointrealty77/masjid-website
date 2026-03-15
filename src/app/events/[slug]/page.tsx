import Link from "next/link";
import Image from "next/image";
import { getEventBySlug } from "@/lib/wpEvents";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const ev = await getEventBySlug(slug);

  if (!ev) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Event not found</h1>

        <Link href="/events" className="mt-6 inline-block underline">
          Back to Events
        </Link>
      </main>
    );
  }

  const img = ev._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/events"
        className="text-sm text-neutral-600 hover:text-neutral-900"
      >
        ← Back to Events
      </Link>

      <h1
        className="mt-6 text-3xl font-semibold"
        dangerouslySetInnerHTML={{ __html: ev.title.rendered }}
      />

      {img ? (
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={img}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      ) : null}

      <article
        className="prose prose-neutral mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: ev.content.rendered }}
      />
    </main>
  );
}