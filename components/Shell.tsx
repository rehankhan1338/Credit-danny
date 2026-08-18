import AnalyticsScripts from "@/components/AnalyticsScripts";
import BehaviorsGate from "@/components/behaviors/BehaviorsGate";
import JsDetect from "@/components/JsDetect";
import "@/public/assets/css/google-fonts.css";
import "@/public/assets/css/style.css";

/**
 * The single document shell (one root layout — required for client-side
 * navigation; separate root layouts force a full page load on every link).
 *
 * <body> server-renders the class set shared by all 19 pages, which is
 * exactly the set the stylesheets target (verified — the page-specific
 * page-id-N / page-template-* / cd-* classes are referenced by no CSS/JS).
 * Each page's <BodyClass> then restores its full original string pre-paint.
 *
 * suppressHydrationWarning ×2: several pages run a pre-paint one-liner that
 * adds a JS-detection class to <html>, and BodyClass rewrites the body class
 * — both are deliberate pre-hydration mutations React must not diff away.
 */
const SHARED_BODY_CLASS =
  "wp-singular page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor eio-default hello-elementor-default elementor-default elementor-kit-27255861";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" prefix="og: https://ogp.me/ns#" suppressHydrationWarning>
      <body className={SHARED_BODY_CLASS} suppressHydrationWarning>
        <JsDetect />
        <AnalyticsScripts />
        {children}
        <BehaviorsGate />
      </body>
    </html>
  );
}
