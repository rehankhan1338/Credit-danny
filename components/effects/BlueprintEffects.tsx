"use client";

import { useEffect } from "react";
import { setupRevealCarousel } from "./revealCarousel";

/** Port of assets/js/pages/blueprint.js. */
export default function BlueprintEffects() {
  useEffect(
    () =>
      setupRevealCarousel({
        revealSelector:
          'h1,h2,h3,p,img,wistia-player,image-slot,a,button,div[style*="border-radius"]',
        floats: false,
        splitFlush: false,
        autoplayMs: 3800,
      }),
    []
  );
  return null;
}
