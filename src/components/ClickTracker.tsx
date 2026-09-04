"use client";

import { useEffect } from "react";
import { events } from "@/lib/analytics";

// クリック計測（document 全体を capture して該当リンクを検知）
export default function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const ctaEl = target.closest("[data-cta]") as HTMLElement | null;
      if (ctaEl) {
        events.ctaClick(
          ctaEl.dataset.cta || "unknown",
          ctaEl.dataset.ctaLocation || "unknown"
        );
        return;
      }

      const phoneLink = target.closest('a[href^="tel:"]');
      if (phoneLink) {
        events.phoneClick();
        return;
      }

      const mailLink = target.closest('a[href^="mailto:"]');
      if (mailLink) {
        // mailto:foo@example.com?subject=... から件名パラメータを除去
        const email = (mailLink.getAttribute("href") || "")
          .replace("mailto:", "")
          .split("?")[0];
        events.emailClick(email);
        return;
      }

      const contactLink = target.closest(
        'a[href*="/contact"], a[href$="#contact"], a[href="#contact"]'
      );
      if (contactLink) {
        events.contactLinkClick(
          contactLink.getAttribute("href") || "",
          (contactLink.textContent || "").slice(0, 50).trim()
        );
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () =>
      document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
