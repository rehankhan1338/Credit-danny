"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * Smooth scroll for same-page anchors (main.js module 4). Skips the menu
 * opener and bare "#" links. Honours reduced motion. Keeps the URL hash in
 * step so the link is still shareable.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = prefersReduce();
    function onClick(e: MouseEvent) {
      const t = e.target as Element | null;
      const a = t?.closest && (t.closest('a[href^="#"]') as HTMLAnchorElement | null);
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#" || href === "#menu") return;
      if (a.hasAttribute("data-menu-open")) return;

      let target: Element | null;
      try {
        target = document.querySelector(href);
      } catch {
        return;
      }
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      if (window.history && history.replaceState) history.replaceState(null, "", href);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
