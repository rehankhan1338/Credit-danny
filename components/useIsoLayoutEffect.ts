import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect on the client, useEffect during SSR (silences React's
 * server warning). Used by everything that must mutate the DOM before the
 * browser paints a client-side navigation: body class swaps and the
 * reveal cascades that hide content before animating it in.
 */
export const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
