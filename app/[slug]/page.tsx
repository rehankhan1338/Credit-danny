import { notFound } from "next/navigation";
import { createElement } from "react";
import BodyClass from "@/components/BodyClass";
import MenuOverlay from "@/components/shared/MenuOverlay";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import { getAllPostSlugs, getScrapedPost } from "@/lib/wp-post";

/**
 * Blog post detail pages — same URLs as WordPress (/{slug}/), now served by
 * Next. Head SEO (Rank Math titles/descriptions/JSON-LD) and the article
 * design are taken verbatim from the WP-rendered page (see lib/wp-post.ts);
 * chrome and analytics come from our shell.
 *
 * ISR: content refreshes hourly; a post published in wp-admin renders on its
 * first visit (dynamicParams) with no redeploy. Non-post single-segment URLs
 * that belong to WordPress (/blog/, /feed/, root sitemaps) are rewritten to
 * WP in proxy.ts BEFORE this route can match them.
 */
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // file-ish or traversal-looking segments are never posts
  if (/[.%]/.test(slug)) notFound();

  const post = await getScrapedPost(slug);
  if (!post) notFound();

  return (
    <>
      <BodyClass className={post.bodyClass} />
      {post.headTags.map((t, i) =>
        t.tag === "title" ? (
          <title key={i}>{t.text}</title>
        ) : (
          createElement(t.tag, { key: i, ...t.attrs })
        )
      )}
      {post.jsonLd.map((ld, i) => (
        <script key={`ld${i}`} type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: ld }} />
      ))}
      {post.styleCss && <style dangerouslySetInnerHTML={{ __html: post.styleCss }} />}

      <MenuOverlay />
      <SharedHeaderTop />

      <div dangerouslySetInnerHTML={{ __html: post.regionHtml }} />

      <SharedFooterCdPad />
    </>
  );
}
