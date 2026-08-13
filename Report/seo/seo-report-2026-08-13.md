# SEO Audit Report — 4wordtech
Date: 2026-08-13
Scope: Full site on `main` — all App Router routes (`/`, `/services`, `/work`, `/work/[slug]`, `/about`, `/contact`, `/process`, `/pricing`, `/blog`, `/blog/[slug]`, `/careers`, `/faq`, `/privacy`, `/terms`), plus `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `llms.txt`, security headers

## Summary
The 4wordtech Next.js 16 site already had solid foundations (SSR/SSG, unique titles on most pages, dynamic sitemap/robots). This session closed the biggest gaps: missing OG image, no canonicals on child routes, no structured data, no web manifest/apple icon, no `llms.txt`, and no security headers. Remaining risk is mostly content quality — blog posts and legal pages are still thin placeholders, which will limit ranking even with clean technical SEO.

## 1. Technical SEO
- robots.txt: Present via `src/app/robots.ts`. Allows `/` for `*` plus explicit AI bots (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`). Sitemap directive: `https://4wordtech.com/sitemap.xml`. Not blocked with `Disallow: /`.
- Sitemap: Present via `src/app/sitemap.ts`. Generated from static routes + `projects` + `posts`. Blog URLs use post `date` as `lastmod`; other routes use build time. No `priority`/`changefreq`. Includes only indexable public routes (API route excluded).
- Canonicals: Root and every public page now emit an absolute `rel="canonical"` via `metadataBase` + `pageMetadata()` / layout defaults. Verified on homepage (`https://4wordtech.com`) and FAQ (`https://4wordtech.com/faq`).
- URL structure: Clean, lowercase, hyphenated paths (`/blog/briefing-an-it-studio`, `/work/payflow`). Shallow hierarchy. No query-param content traps.
- Status codes / redirects: Custom `not-found.tsx` returns real HTTP 404 (verified locally). No redirect map yet — N/A until URL renames happen. Hosting must still enforce HTTP→HTTPS 301 at CDN/edge.
- Indexing (noindex audit): Production pages use `index, follow` (layout `robots`). No accidental sitewide `noindex`. Low-value pages not separated with noindex (acceptable at current small size).
- Pagination / infinite scroll: N/A — no paginated listings.
- Crawl budget / indexation hygiene: N/A for scale (~20 canonical URLs). No faceted URL traps.
- Raw HTML vs rendered HTML: Primary copy, H1s, nav `<a href>` links, and JSON-LD are present in prerendered HTML (static generation). Hero is a client component but still SSR’d with real text in the initial HTML.

## 2. Core Web Vitals & Performance
- LCP: Not measured with Lighthouse this session (lab tooling not run in CI). Hero is typography-led (no hero photograph), which usually helps LCP; fonts are preloaded via `next/font`.
- INP: Not measured. Motion library is used; `useReducedMotion` is respected in several components.
- CLS: Not measured. Decorative SVGs use CSS sizing; work “visual slot” has `min-h` reserved. No below-the-fold product photography yet.
- TTFB: Not measured against production origin. Static prerender should keep TTFB low once cached at the edge.
- Notes: Modern Next stack (code-splitting by route). No third-party analytics scripts yet. No performance budget gate in CI. Recommend PageSpeed Insights + CrUX after deploy. Prefer adding a real optimized OG/share image asset and compressing any future screenshots (WebP/AVIF).

## 3. On-Page SEO
- Title tags: Unique per route via App Router `metadata` / `generateMetadata`. Pattern: page title · `4wordtech` (homepage default includes tagline). Lengths are generally within SERP-friendly range.
- Meta descriptions: Present on all public pages after this session (privacy/terms previously title-only). Unique and readable.
- Heading structure: One H1 per page (verified pattern across routes). Sections use H2 for service cards / mindset blocks. Logical nesting overall.
- Content quality/duplication: Marketing pages have substantive copy. Blog posts still use placeholder body text (`src/app/blog/[slug]/page.tsx`) — thin content risk if indexed. Work case studies marked as examples/placeholders. Privacy/terms are stub legal copy.
- Image alt text / filenames: Site is mostly SVG/brand graphics (`Logo` has `aria-label`; decorative hero logo parent is `aria-hidden`). Few content images; no poorly named photo assets yet. When screenshots are added, use descriptive filenames + alt.
- Favicon & web app manifest: `src/app/icon.svg`, generated `apple-icon` (180×180), and `src/app/manifest.ts` → `/manifest.webmanifest` (name, icons, theme/background colors). No classic `favicon.ico` / PNG 192/512 — SVG + apple-touch cover modern browsers; optional PNG set remains a polish item.
- Custom 404 page: `src/app/not-found.tsx` — on-brand copy, links to Home / Services / Work / Contact. Returns HTTP 404.
- E-E-A-T signals: About + Contact exist. No individual author bylines/Person schema (org-authored blog). Contact details still marked PLACEHOLDER in `src/lib/content.ts`. No “last updated” on evergreen pages.
- Internal linking: Header + footer cover primary/secondary routes with descriptive labels. Blog ↔ work cross-links present. No obvious orphans among sitemap URLs.
- Link markup: Real Next `<Link>` / `<a href>` navigation. External links updated to `rel="noopener noreferrer"`. No paid-link patterns requiring `nofollow`/`sponsored` yet.

## 4. Semantic & Accessible HTML
`lang="en"` on `<html>`. Landmark structure: header / nav / main / footer. Interactive controls use `<button>` / links. Focus/contrast not fully audited visually this session; custom cursor may affect perceived pointer UX but keyboard paths remain. Text is real DOM text (not image-baked headlines).

## 5. Structured Data
- Schemas implemented: Organization + WebSite (homepage), FAQPage (`/faq`, matches visible Q&A), BlogPosting (each `/blog/[slug]`).
- Validation status: Not submitted to Google Rich Results Test this session (requires public deploy). Local HTML contains valid JSON-LD shapes.
- Gaps/opportunities: BreadcrumbList if breadcrumbs are added; ProfessionalService/Service for `/services`; omit SearchAction until a real site search exists. Do not mark fake AggregateRating on example work.
- Visible-content parity: FAQ/Blog/Org markup mirrors on-page content. BlogPosting body is still thin placeholder — keep schema honest; replace article body before pushing for rich results.

## 6. Social Metadata (OG/Twitter)
Homepage and child pages set `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`, `twitter:card=summary_large_image`, title/description. Generated `opengraph-image` at 1200×630 with absolute URL via `metadataBase`. Child routes explicitly re-include the default OG image so page-level `openGraph` does not drop it. Debugger tests (Facebook/LinkedIn/X) still need a live public URL.

## 7. AI Crawler Access (AEO/GEO)
- robots.txt AI bot access: Explicitly allowed (not a stale block).
- Server/CDN log confirmation: Not available in this repo/session — confirm post-deploy.
- llms.txt present: Yes — `public/llms.txt` summarizing the site and key URLs.
- Raw vs rendered HTML parity: Strong due to static generation.
- Extraction-friendly content structure: Service pages use problem/solution/benefits lists; FAQ is Q&A. Blog needs real article structure (direct answer → detail) once placeholders are replaced.

## 8. Mobile & Responsive
Viewport meta present (`width=device-width, initial-scale=1`). Layouts use responsive Tailwind breakpoints; mobile nav exists. Tap targets / horizontal scroll not device-tested this session; recommend a quick mobile pass after deploy.

## 9. International SEO
N/A — single locale (`en` / `en_IN` OG locale). No hreflang.

## 10. Framework
Next.js 16 App Router with static generation for marketing pages and SSG for blog/work slugs. Native Metadata API used sitewide (`layout.tsx`, per-page `metadata` / `generateMetadata`). `robots.ts` + `sitemap.ts` generated from route data. Not a client-only SPA — good for SEO.

## 11. Security
- HTTPS/mixed content: Assumed at production host; local verify was HTTP. Ensure CDN forces HTTPS. No third-party mixed assets in core pages.
- Security headers: Added in `next.config.ts` — HSTS, CSP, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`. Verified on local production server responses.
- Certificate: Must be validated on the live `4wordtech.com` host (not checkable from this local audit).

## 12. Measurement & verification
- Rendered source tags confirmed: Yes (local `next start`) — title, description, canonical, robots, OG/Twitter, icons, manifest, JSON-LD.
- Lighthouse Performance + SEO: Not run this session — recommend after deploy.
- Rich Results Test: Pending public URL.
- Live robots.txt + sitemap: Implemented and verified locally at `/robots.txt` and `/sitemap.xml`; confirm on production domain after deploy.
- Accidental noindex: No.
- Search Console / Bing Webmaster Tools: Recommend verify `4wordtech.com`, submit sitemap, monitor Coverage + Core Web Vitals.

## Issues found (prioritized)
| Priority | Issue | Page(s)/Scope | Recommended fix |
|---|---|---|---|
| High | Blog post bodies are placeholder/thin content | `/blog/[slug]` | Replace with real articles before expecting organic ranking; keep schema in sync |
| High | Contact/social/phone placeholders in content | Sitewide trust signals | Replace PLACEHOLDER values in `src/lib/content.ts` with real details |
| Medium | No Lighthouse/CrUX measurement yet | Whole site | Run PSI + Search Console CWV after deploy; add a performance budget if regressions matter |
| Medium | Classic PNG favicon set (192/512) missing | Global | Optional: add `icon-192.png` / `icon-512.png` to manifest for install/PWA polish |
| Medium | Privacy/terms are stub copy | `/privacy`, `/terms` | Lawyer-reviewed content; still noindex only if you must, otherwise keep indexable once real |
| Low | No BreadcrumbList / Service schema | Interior pages | Add when UI breadcrumbs or richer service entities exist |
| Low | Example work marked as samples | `/work/*` | Replace with real case studies + accurate metrics before promoting AggregateRating |
| Low | CSP allows `unsafe-inline` / `unsafe-eval` | Global headers | Tighten when nonce-based CSP is feasible with Next |

## Anti-patterns checked
None found for keyword stuffing, cloaking, hidden text, doorway pages, bought links, invisible structured data, or robots.txt blocking pages intended to rank. Thin/placeholder blog and legal copy is the main quality risk (not a manipulative anti-pattern, but it can still suppress indexing quality).

## Changes made this session
- Added `src/lib/seo.ts` (`SITE_URL`, `absoluteUrl`, `pageMetadata` with canonical + OG/Twitter including default image)
- Added `src/components/JsonLd.tsx`
- Added `src/app/opengraph-image.tsx` (1200×630) and `src/app/apple-icon.tsx`
- Added `src/app/manifest.ts`
- Added `public/llms.txt`
- Expanded root `layout.tsx` metadata (robots, authors, canonical, OG locale)
- Homepage Organization + WebSite JSON-LD
- FAQPage JSON-LD on `/faq`; BlogPosting JSON-LD on blog posts
- Wired `pageMetadata` across all public pages; privacy/terms gained descriptions
- Improved `robots.ts` (explicit AI bots) and `sitemap.ts` (post `lastmod` from dates)
- Security headers in `next.config.ts`
- Richer 404 with internal links; `noopener noreferrer` on external footer/contact links

## Next steps
1. Deploy and confirm live `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/opengraph-image`, and security headers over HTTPS.
2. Verify domain in Google Search Console + Bing Webmaster Tools; submit the sitemap.
3. Replace blog placeholders and contact PLACEHOLDER fields — highest ranking/trust leverage left.
4. Run Lighthouse (Performance + SEO) and Rich Results Test on homepage, FAQ, and one blog URL.
5. Optionally add PNG icons (192/512) and tighten CSP with nonces when ready.
