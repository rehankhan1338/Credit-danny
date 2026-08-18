import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [".next/**", "node_modules/**", "public/**", "scripts/**", "next-env.d.ts"],
  },
  {
    rules: {
      /* This migration is required to preserve the original site's markup and
         script semantics character-for-character, so the performance
         advisories that would rewrite them are disabled deliberately:
         - no-img-element: next/image would change markup, rendered dimensions
           and asset URLs (image-search equity depends on the current paths).
         - no-sync-scripts: the GoHighLevel form_embed.js tags are synchronous
           on the original site; adding async would change execution order.
         - no-css-tags: legacy-elementor.css is served byte-identical via
           <link> because its export-mangled selectors (which browsers
           error-recover through) cannot pass the bundler's CSS parser.
         - next-script-for-ga: the GA snippet is kept byte-identical to the
           original inline payload. */
      "@next/next/no-img-element": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-css-tags": "off",
      "@next/next/next-script-for-ga": "off",
    },
  },
];

export default eslintConfig;
