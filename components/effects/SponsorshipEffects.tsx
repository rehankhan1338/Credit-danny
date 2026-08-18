"use client";

import { useEffect } from "react";
import { setupRevealCarousel } from "./revealCarousel";

/** Port of assets/js/pages/sponsorship.js (byte-identical to accelerator.js). */
export default function SponsorshipEffects() {
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
