"use client";

import { useEffect } from "react";
import { setupRevealCarousel } from "./revealCarousel";

/** Port of assets/js/pages/accelerator.js. */
export default function AcceleratorEffects() {
  useEffect(
    () =>
      setupRevealCarousel({
        revealSelector: 'h1,h2,h3,p,img,image-slot,a,button,div[style*="border-radius"]',
        floats: true,
        splitFlush: true,
        autoplayMs: 4200,
      }),
    []
  );
  return null;
}
