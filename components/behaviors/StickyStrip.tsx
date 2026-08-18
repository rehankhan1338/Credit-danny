"use client";

import { useEffect } from "react";

/**
 * Mid-page floating CTA bar (main.js module 11): visible only past the hero
 * and before the closing CTA. Same logic on four pages, different class
 * prefix, so it is parameterised exactly like the original calls.
 */
export default function StickyStrip({
  stripSel,
  startSel,
  endSel,
  onClass,
}: {
  stripSel: string;
  startSel: string;
  endSel: string;
  onClass: string;
}) {
  useEffect(() => {
    const strip = document.querySelector(stripSel);
    if (!strip) return;
    const start = document.querySelector(startSel);
    const end = document.querySelector(endSel);

    if (!("IntersectionObserver" in window) || !start || !end) {
      /* No way to know where we are, so fall back to always-on rather than
         leaving a CTA the reader can never reach. */
      strip.classList.add(onClass);
      return;
    }
    let startOn = true,
      endOn = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === start) startOn = e.isIntersecting;
          else if (e.target === end) endOn = e.isIntersecting;
        });
        strip.classList.toggle(onClass, !startOn && !endOn);
      },
      { threshold: 0 }
    );
    io.observe(start);
    io.observe(end);
    return () => io.disconnect();
  }, [stripSel, startSel, endSel, onClass]);

  return null;
}
