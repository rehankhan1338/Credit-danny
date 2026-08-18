"use client";

import { useIsoLayoutEffect } from "@/components/useIsoLayoutEffect";

/**
 * Page-scoped JS-detection class on <html> (bp-js / ca-js / sp-js / pl-js /
 * hb-js). The original pages added these with tiny inline scripts; in a React
 * tree those don't execute on client-side navigation (and trigger the
 * "Encountered a script tag" dev error). Instead:
 *  - initial load, pre-paint: the JsDetect script in the root layout (which
 *    React never re-renders) adds the class during parse;
 *  - client navigation: this component adds it before paint and removes it
 *    on unmount, so page-scoped CSS (sticky CTA bars, reveal hiding) never
 *    leaks onto other pages.
 */
export default function HtmlClass({ className }: { className: string }) {
  useIsoLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return; // original hb-js fallback
    document.documentElement.classList.add(className);
    return () => document.documentElement.classList.remove(className);
  }, [className]);

  return null;
}
