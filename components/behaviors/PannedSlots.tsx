"use client";

import { useEffect } from "react";

/**
 * Panned image slots (main.js module 8). Re-runs the crop arithmetic for
 * img[data-view] on load and on every resize; data-view-m supplies a
 * phone-only pan below 900px. See the original for the geometry notes.
 */
export default function PannedSlots() {
  useEffect(() => {
    const panned = Array.from(document.querySelectorAll<HTMLImageElement>("img[data-view]"));
    if (!panned.length) return;

    function layout() {
      panned.forEach((img) => {
        const attr =
          (window.matchMedia &&
            window.matchMedia("(max-width:900px)").matches &&
            img.getAttribute("data-view-m")) ||
          img.getAttribute("data-view") ||
          "";
        const v = attr.split(",").map(Number);
        const frame = img.parentElement;
        if (!frame) return;
        const fw = frame.clientWidth,
          fh = frame.clientHeight;
        const iw = img.naturalWidth,
          ih = img.naturalHeight;
        if (!fw || !fh || !iw || !ih) return;

        const k = Math.max(fw / iw, fh / ih) * (v[0] || 1);
        const w = ((iw * k) / fw) * 100,
          h = ((ih * k) / fh) * 100;

        /* Clamp the pan: the range on each axis is half the overflow past the
           frame edge. */
        const mx = Math.max(0, (w / 100 - 1) * 50);
        const my = Math.max(0, (h / 100 - 1) * 50);
        const x = Math.max(-mx, Math.min(mx, v[1] || 0));
        const y = Math.max(-my, Math.min(my, v[2] || 0));

        img.style.objectFit = ""; /* the box IS the image now */
        img.style.width = w + "%";
        img.style.height = h + "%";
        img.style.left = 50 + x + "%";
        img.style.top = 50 + y + "%";
      });
    }

    const mq = window.matchMedia ? window.matchMedia("(max-width:900px)") : null;
    mq?.addEventListener?.("change", layout);

    let ro: ResizeObserver | undefined;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(layout);
      panned.forEach((img) => {
        if (img.parentElement) ro!.observe(img.parentElement);
      });
    }
    panned.forEach((img) => {
      if (img.complete) layout();
      else img.addEventListener("load", layout, { once: true });
    });
    window.addEventListener("resize", layout);
    window.addEventListener("load", layout);

    return () => {
      mq?.removeEventListener?.("change", layout);
      ro?.disconnect();
      window.removeEventListener("resize", layout);
      window.removeEventListener("load", layout);
    };
  }, []);

  return null;
}
