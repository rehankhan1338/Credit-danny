"use client";

import { useEffect } from "react";

type WistiaPlayerEl = HTMLElement & { muted: boolean; paused: boolean; play?: () => void };

/**
 * Hero video sound (main.js module 13). Unmuted autoplay cannot be forced, so
 * the video starts muted, tries for sound immediately, and otherwise unmutes
 * on the visitor's first gesture.
 */
export default function HeroSound() {
  useEffect(() => {
    const p = document.querySelector<WistiaPlayerEl>(
      "wistia-player[data-hero-sound], [data-hero-sound] wistia-player"
    );
    if (!p) return;
    const GESTURES = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"] as const;
    let torndown = false;

    function withSound(): boolean {
      try {
        p!.muted = false;
        if (p!.paused && typeof p!.play === "function") p!.play();
        return p!.muted === false;
      } catch {
        return false;
      }
    }
    function teardown() {
      torndown = true;
      GESTURES.forEach((ev) =>
        window.removeEventListener(ev, onGesture, { capture: true } as EventListenerOptions)
      );
    }
    function onGesture() {
      if (withSound()) teardown();
    }
    function arm() {
      if (withSound()) return;
      GESTURES.forEach((ev) =>
        window.addEventListener(ev, onGesture, { capture: true, passive: true })
      );
    }

    let timer: number | undefined;
    if (window.customElements && customElements.whenDefined) {
      customElements.whenDefined("wistia-player").then(() => {
        timer = window.setTimeout(arm, 400);
      });
    } else {
      timer = window.setTimeout(arm, 1200);
    }
    return () => {
      window.clearTimeout(timer);
      if (!torndown) teardown();
    };
  }, []);

  return null;
}
