"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function push(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

function locationOf(anchor: HTMLAnchorElement): string {
  if (anchor.closest("[data-track-location]")) {
    return anchor.closest("[data-track-location]")!.getAttribute("data-track-location") || "unknown";
  }
  if (anchor.classList.contains("whatsapp-float") || anchor.closest(".whatsapp-float")) return "float";
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  if (anchor.closest('[data-section="hero"]')) return "hero";
  if (anchor.closest('[data-section="cta"]')) return "cta";
  if (anchor.closest('[data-section="contact"]')) return "contact";
  return "body";
}

export function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest("a,button");
      if (!target) return;

      const cta = target.getAttribute("data-cta-label");
      if (cta) {
        push("cta_click", {
          cta_label: cta,
          cta_location: locationOf(target as HTMLAnchorElement),
        });
      }

      if (!(target instanceof HTMLAnchorElement)) return;
      const href = target.getAttribute("href") || "";

      if (/wa\.me|api\.whatsapp\.com/.test(href)) {
        push("whatsapp_click", { whatsapp_location: locationOf(target) });
        return;
      }
      if (href.startsWith("mailto:")) {
        push("email_click", { email_to: href.replace(/^mailto:/, "") });
        return;
      }
      if (/instagram\.com/.test(href)) {
        push("social_click", { social_network: "instagram" });
        return;
      }
      if (/linkedin\.com/.test(href)) {
        push("social_click", { social_network: "linkedin" });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
