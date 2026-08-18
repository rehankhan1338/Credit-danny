import Script from "next/script";

/**
 * GA4 + Clicky + Meta Pixel — payloads byte-identical to the original site's
 * head, loaded via next/script (afterInteractive). They execute immediately
 * after hydration instead of during parse: the Meta Pixel loader inserts a
 * script element into the live DOM, and doing that mid-hydration caused
 * intermittent React #418 hydration failures. Queue seeding (dataLayer/fbq)
 * still precedes the async library fetches, so no events are lost.
 */
export default function AnalyticsScripts() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-D191NWX75L" strategy="afterInteractive" />
      <Script id="cd-gtag" strategy="afterInteractive">
        {"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-D191NWX75L');\n"}
      </Script>
      <Script data-id="101501312" src="https://static.getclicky.com/js" strategy="afterInteractive" />
      <Script id="cd-fbq" strategy="afterInteractive">
        {"\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '937342555296844');\nfbq('track', 'PageView');\n"}
      </Script>
    </>
  );
}
