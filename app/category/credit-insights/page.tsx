import type { Metadata } from "next";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";
import MenuOverlay from "@/components/shared/MenuOverlay";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import {
  getCategoryBySlug,
  getCategoryPosts,
  stripHtml,
  readingMinutes,
  postPath,
  featuredImage,
  longDate,
  shortDate,
} from "@/lib/wp";
import "@/public/assets/css/pages/index.css";
import "./category.css";

/**
 * /category/credit-insights/ — the Credit Insights archive, now served by
 * Next.js. Post data is fetched from the WordPress REST API and revalidated
 * hourly, so posts published in wp-admin appear here automatically.
 * Head metadata + JSON-LD are ported verbatim from the live WP archive
 * (same URL, same canonical — no SEO change).
 */
export const revalidate = 3600;

const CANONICAL = "https://creditdanny.com/category/credit-insights/";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Credit Insights Archives | Credit Danny",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { canonical: CANONICAL },
    openGraph: {
      locale: "en_US",
      type: "article",
      title: "Credit Insights Archives | Credit Danny",
      url: CANONICAL,
      siteName: "Credit Danny",
      images: [
        {
          url: "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
          secureUrl: "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Credit Insights Archives | Credit Danny",
      images: ["https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg"],
    },
    icons: {
      icon: [
        { url: "/assets/img/heartfavicon-150x150.png", sizes: "32x32" },
        { url: "/assets/img/heartfavicon-300x300.png", sizes: "192x192" },
      ],
      apple: [{ url: "/assets/img/heartfavicon-300x300.png" }],
    },
  };
}

export const viewport = {
  themeColor: "#000000",
};

const JSON_LD =
  '{"@context":"https://schema.org","@graph":[{"@type":"Person","@id":"https://creditdanny.com/#person","name":"Credit Danny","sameAs":["https://www.instagram.com/creditdanny/","https://www.tiktok.com/@creditdanny"],"image":{"@type":"ImageObject","@id":"https://creditdanny.com/#logo","url":"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png","contentUrl":"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png","caption":"Credit Danny","inLanguage":"en-US","width":"1394","height":"261"}},{"@type":"WebSite","@id":"https://creditdanny.com/#website","url":"https://creditdanny.com","name":"Credit Danny","alternateName":"Elevate Financial Services","publisher":{"@id":"https://creditdanny.com/#person"},"inLanguage":"en-US"},{"@type":"BreadcrumbList","@id":"https://creditdanny.com/category/credit-insights/#breadcrumb","itemListElement":[{"@type":"ListItem","position":"1","item":{"@id":"https://creditdanny.com","name":"Home"}},{"@type":"ListItem","position":"2","item":{"@id":"https://creditdanny.com/category/credit-insights/","name":"Credit Insights"}}]},{"@type":"CollectionPage","@id":"https://creditdanny.com/category/credit-insights/#webpage","url":"https://creditdanny.com/category/credit-insights/","name":"Credit Insights Archives | Credit Danny","isPartOf":{"@id":"https://creditdanny.com/#website"},"inLanguage":"en-US","breadcrumb":{"@id":"https://creditdanny.com/category/credit-insights/#breadcrumb"}}]}';

const BODY_CLASS =
  "archive category category-credit-insights category-49 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-blog cd-blog-archive eio-default hello-elementor-default elementor-default elementor-kit-27255861";

const PILL_INACTIVE: React.CSSProperties = {
  textDecoration: "none",
  background: "rgb(242, 242, 242)",
  color: "rgb(0, 0, 0)",
  borderRadius: 999,
  padding: "9px 20px",
  fontSize: 13,
  fontWeight: 700,
};
const PILL_ACTIVE: React.CSSProperties = {
  ...PILL_INACTIVE,
  background: "rgb(12, 112, 195)",
  color: "rgb(255, 255, 255)",
};

export default async function CreditInsightsArchive() {
  const category = await getCategoryBySlug("credit-insights");
  const posts = await getCategoryPosts(category.id);
  const [featured, ...rest] = posts;

  return (
    <>
      <BodyClass className={BODY_CLASS} />
      <meta name="twitter:label1" content="Posts" />
      <meta name="twitter:data1" content={String(category.count)} />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: JSON_LD }} />

      <MenuOverlay />

      <SharedHeaderTop />

      <div id="cdb">
        <div id="archive" style={{ position: "relative" }}>
          {/* hero — verbatim from the live archive */}
          <div style={{ background: "linear-gradient(220deg, rgb(0, 0, 0) 28%, rgb(12, 112, 195) 98%)", position: "relative" }}>
            <div className="cdb-hero-pad" style={{ position: "relative", padding: "64px 60px 150px", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 3, color: "rgb(0, 173, 238)", textTransform: "uppercase" }}>
                {"Credit education from Danny"}
              </div>
              <h1 style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 82, lineHeight: 1.02, textTransform: "uppercase", color: "rgb(255, 255, 255)", marginTop: 14, fontWeight: 400 }}>
                {"The Credit Danny Blog"}
              </h1>
              <div style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.8)", maxWidth: 640, margin: "18px auto 0px" }}>
                {"Straight answers on credit repair, mortgage prep, and buying a home in Arizona. Written by the team that removed 6,000+ late payments."}
              </div>
            </div>
          </div>

          {/* featured post (newest) */}
          {featured && (
            <div className="cdb-cards-pad" style={{ padding: "0px 60px", marginTop: -110, position: "relative" }}>
              <div className="cdb-feat-wrap" style={{ background: "rgb(255, 255, 255)", borderRadius: 25, boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px", display: "grid", gridTemplateColumns: "minmax(300px, 1.05fr) minmax(380px, 1fr)", overflow: "hidden" }}>
                <Link className="cdb-feat-link" href={postPath(featured)} style={{ display: "block", textDecoration: "none" }} aria-label={stripHtml(featured.title.rendered)}>
                  <div className="cdb-feat-img" style={{ background: `url(${featuredImage(featured, "large") ?? ""}), linear-gradient(160deg, rgb(0, 6, 58), rgb(0, 173, 238)) 0% 0% / cover`, backgroundSize: "cover", backgroundPosition: "center", minHeight: 320 }} />
                </Link>
                <div style={{ padding: "44px 44px 40px" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: "rgb(12, 112, 195)", color: "rgb(255, 255, 255)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 0.6 }}>FEATURED</span>
                    <span style={{ background: "rgb(234, 245, 255)", color: "rgb(12, 112, 195)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 0.6 }}>{category.name.toUpperCase()}</span>
                  </div>
                  <div style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 44, lineHeight: 1.06, textTransform: "uppercase", color: "rgb(0, 0, 0)", marginTop: 20, textWrap: "pretty" }}>
                    <Link href={postPath(featured)} style={{ color: "inherit", textDecoration: "none" }}>{stripHtml(featured.title.rendered)}</Link>
                  </div>
                  <div style={{ fontSize: 16, lineHeight: 1.65, color: "rgb(90, 90, 90)", marginTop: 16 }}>
                    {stripHtml(featured.excerpt.rendered)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 26, fontSize: 13, fontWeight: 600, color: "rgb(90, 90, 90)" }}>
                    <span>Credit Danny</span>
                    <span style={{ color: "rgb(217, 217, 217)" }}>•</span>
                    <span>{longDate(featured.date)}</span>
                    <span style={{ color: "rgb(217, 217, 217)" }}>•</span>
                    <span>{readingMinutes(featured.content.rendered)} min read</span>
                  </div>
                  <div style={{ display: "flex", marginTop: 26 }}>
                    <Link href={postPath(featured)} style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontWeight: 400, textTransform: "uppercase", letterSpacing: 0.2, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16, padding: "9px 18px", borderRadius: 8, background: "rgb(12, 112, 195)", color: "rgb(255, 255, 255)", boxShadow: "0 0 24px rgba(12,112,195,.55)" }}>
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* category pills — /blog/ and the other two categories are served
              by WordPress through the proxy, not by Next routes, so they are
              plain <a> full navigations by design */}
          <div className="cdb-cards-pad" style={{ padding: "40px 60px 0px", display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/blog/" style={PILL_INACTIVE}>All Posts</a>
            <Link href="/category/credit-insights/" style={PILL_ACTIVE}>Credit Insights</Link>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/category/mortgage-insights/" style={PILL_INACTIVE}>Mortgage Insights</a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/category/mortgage-repair-and-prep/" style={PILL_INACTIVE}>Mortgage Repair and Prep</a>
          </div>

          {/* post grid — everything after the featured post */}
          <div id="cdb-grid" style={{ padding: "24px 60px 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {rest.map((post) => (
              <Link key={post.id} href={postPath(post)} style={{ textDecoration: "none", color: "inherit", display: "block" }} className="cdb-card cdb-post-card">
                <div style={{ background: "rgb(255, 255, 255)", borderRadius: 25, boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px", overflow: "hidden" }}>
                  <div style={{ height: 190, backgroundImage: `url(${featuredImage(post, "medium_large") ?? ""}), linear-gradient(160deg, rgb(0, 6, 58), rgb(0, 173, 238))`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{ padding: "24px 24px 28px" }}>
                    <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, color: "rgb(12, 112, 195)" }}>{category.name.toUpperCase()}</div>
                    <div style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 25, lineHeight: 1.1, textTransform: "uppercase", color: "rgb(0, 0, 0)", marginTop: 10, textWrap: "pretty" }}>
                      {stripHtml(post.title.rendered)}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "rgb(90, 90, 90)", marginTop: 14 }}>
                      <span className="cdb-long">{longDate(post.date)} • {readingMinutes(post.content.rendered)} min read</span>
                      <span className="cdb-short">{shortDate(post.date)} • {readingMinutes(post.content.rendered)} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SharedFooterCdPad />
    </>
  );
}
