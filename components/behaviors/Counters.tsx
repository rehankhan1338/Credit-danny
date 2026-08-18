"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * Count-up figures (main.js module 10). Counts up to [data-count] when the
 * figure scrolls into view; under reduced motion the final figure is printed
 * immediately. Starts from zero because the static capture froze the end
 * values into the markup.
 */
export default function Counters() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (!els.length) return;

    function print(el: HTMLElement, value: string | number) {
      el.textContent =
        Number(value).toLocaleString("en-US") + (el.getAttribute("data-suffix") || "");
    }

    if (prefersReduce() || !("IntersectionObserver" in window)) {
      els.forEach((el) => print(el, el.getAttribute("data-count") || 0));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          const target = parseFloat(el.getAttribute("data-count") || "") || 0;
          const dur = 1400;
          let t0: number | null = null;
          function frame(ts: number) {
            if (t0 === null) t0 = ts;
            const p = Math.min((ts - t0) / dur, 1);
            /* easeOutCubic — fast start, gentle settle. */
            print(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.4 }
    );

    els.forEach((el) => {
      print(el, 0);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
