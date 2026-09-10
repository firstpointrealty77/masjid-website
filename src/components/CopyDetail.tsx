"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function CopyDetail({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copy() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(value);
      if (window.location.pathname === "/donate") {
        trackEvent("donation_details_copy", { method: "zelle", detail: label === "Zelle tag" ? "recipient_tag" : "memo" });
      }
      setStatus("Copied!");
      resetTimer.current = setTimeout(() => setStatus(""), 2500);
    } catch {
      setStatus("Please select and copy the text manually.");
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="select-all font-semibold">{value}</span>
        <button type="button" onClick={copy} aria-label={`Copy ${label}`} className="min-h-11 min-w-20 shrink-0 rounded-lg border border-[#0A3A34]/20 px-3 py-2 text-sm font-medium hover:bg-[#F8F6F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A3A34]">{status === "Copied!" ? "Copied!" : "Copy"}</button>
      </div>
      <span role="status" className={status === "Copied!" ? "sr-only" : "block text-sm font-normal text-slate-600"}>{status}</span>
    </div>
  );
}
