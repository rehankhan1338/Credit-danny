import AnalyticsScripts from "@/components/AnalyticsScripts";
import Behaviors from "@/components/behaviors/Behaviors";
import "@/public/assets/css/google-fonts.css";
import "@/public/assets/css/style.css";

/**
 * Shared document shell. Each route group's root layout renders this with
 * that page's original WordPress <body> class string (CSS targets
 * .elementor-kit-27255861 on body, so it must be server-rendered).
 *
 * <html> attributes are identical across all 19 source pages.
 * charset + viewport metas are emitted by Next and match the originals.
 */
export default function Shell({
  bodyClassName,
  children,
}: {
  bodyClassName: string;
  children: React.ReactNode;
}) {
  /* suppressHydrationWarning: several pages ship a tiny pre-paint script that
     adds a JS-detection class (ca-js/pl-js/…) to <html> before hydration —
     legitimate, and the class must survive; React must not diff it away. */
  return (
    <html lang="en-US" prefix="og: https://ogp.me/ns#" suppressHydrationWarning>
      <body className={bodyClassName}>
        <AnalyticsScripts />
        {children}
        <Behaviors />
      </body>
    </html>
  );
}
