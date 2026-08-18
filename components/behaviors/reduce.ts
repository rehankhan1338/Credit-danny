/**
 * Shared motion preference (main.js module 1).
 * Also exposed as window.CD.reduce for the per-page reveal cascades,
 * exactly as the original did.
 */
export function prefersReduce(): boolean {
  if (typeof window === "undefined") return false;
  return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

declare global {
  interface Window {
    CD?: { reduce?: boolean };
    CD_LOTTIE?: Record<string, unknown>;
    lottie?: {
      loadAnimation(opts: Record<string, unknown>): {
        addEventListener(name: string, cb: () => void): void;
      };
    };
  }
}

export function exposeReduce(): boolean {
  const reduce = prefersReduce();
  window.CD = window.CD || {};
  window.CD.reduce = reduce;
  return reduce;
}
