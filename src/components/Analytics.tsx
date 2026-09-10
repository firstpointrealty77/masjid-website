"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { classifyLink, trackEvent } from "@/lib/analytics";

const measurementId = "G-PHXVQSG37S";
const hostname = process.env.NEXT_PUBLIC_ANALYTICS_HOSTNAME ?? "www.ballantynemasjid.org";

export function Analytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.location.hostname !== hostname) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // Google expects the function's Arguments object in the data layer.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    window.bicAnalyticsReady = true;
    // Load only after checking the hostname: local/staging visits stay out of production reports.
    const timer = window.setTimeout(() => setReady(true), 0);
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!anchor) return;
      const classified = classifyLink(anchor.getAttribute("href") ?? "", window.location.origin);
      if (classified) trackEvent(classified.name, classified.params);
    };
    document.addEventListener("click", handleClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
      window.bicAnalyticsReady = false;
    };
  }, []);

  return ready ? <Script id="bic-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" /> : null;
}
