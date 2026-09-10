export type AnalyticsEvent = "donation_checkout" | "contact_click" | "directions_click" | "donation_details_copy";
type EventParameters = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    bicAnalyticsReady?: boolean;
  }
}

export function classifyLink(href: string, origin: string): { name: AnalyticsEvent; params: EventParameters } | null {
  let url: URL;
  try { url = new URL(href, origin); } catch { return null; }
  if (url.protocol === "mailto:") return { name: "contact_click", params: { method: "email" } };
  if (url.protocol === "sms:") return { name: "contact_click", params: { method: "sms" } };
  if (url.protocol !== "https:") return null;
  if (["www.paypal.com", "paypal.com"].includes(url.hostname) && url.pathname.startsWith("/donate")) {
    return { name: "donation_checkout", params: { provider: "paypal" } };
  }
  if (["wa.me", "chat.whatsapp.com"].includes(url.hostname)) {
    return { name: "contact_click", params: { method: url.hostname === "wa.me" ? "whatsapp" : "whatsapp_community" } };
  }
  if (["www.google.com", "google.com"].includes(url.hostname) && url.pathname.startsWith("/maps")) {
    return { name: "directions_click", params: { provider: "google_maps" } };
  }
  return null;
}

export function trackEvent(name: AnalyticsEvent, params: EventParameters = {}) {
  if (typeof window === "undefined" || !window.bicAnalyticsReady) return;
  window.gtag?.("event", name, { ...params, page_path: window.location.pathname, transport_type: "beacon" });
}
