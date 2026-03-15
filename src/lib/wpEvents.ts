export type WpEvent = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
};

const CMS_BASE = "https://cms.ballantynemasjid.org";

export async function getEvents(limit = 50): Promise<WpEvent[]> {
  const url =
    `${CMS_BASE}/wp-json/wp/v2/event?per_page=${limit}` +
    `&orderby=date&order=desc&_embed=1`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Events fetch failed: ${res.status}`);
  return res.json();
}

export async function getEventBySlug(slug: string): Promise<WpEvent | null> {
  const url =
    `${CMS_BASE}/wp-json/wp/v2/event?slug=${encodeURIComponent(slug)}` +
    `&_embed=1`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) return null;

  const arr: WpEvent[] = await res.json();
  return arr[0] ?? null;
}