"use client";

import { useIsoLayoutEffect } from "@/components/useIsoLayoutEffect";

/**
 * Applies the page's original WordPress <body> class string.
 *
 * The root layout server-renders only the classes shared by every page —
 * which are exactly the ones the stylesheets reference (verified:
 * elementor-kit-27255861 and the theme classes; every page-specific class
 * like page-id-N / page-template-* / cd-* is referenced by no CSS or JS).
 * This component restores the full original string before paint, both on
 * initial hydration and on every client-side navigation, so the live DOM
 * matches the original site exactly.
 */
export default function BodyClass({ className }: { className: string }) {
  useIsoLayoutEffect(() => {
    document.body.className = className;
  }, [className]);

  return null;
}
