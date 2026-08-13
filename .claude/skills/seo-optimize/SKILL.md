---
name: seo-optimize
description: >-
  Comprehensive frontend SEO optimization — technical SEO (robots.txt, sitemap,
  canonicals, crawl budget, redirects), Core Web Vitals/performance (LCP/INP/CLS/TTFB),
  on-page SEO (titles, meta descriptions, headings, alt text, internal linking,
  E-E-A-T signals), semantic/accessible HTML, structured data (JSON-LD/Schema.org
  including Review/Video/Event/HowTo), Open Graph/Twitter Cards, AI
  crawler access and answer/generative engine optimization (AEO/GEO, llms.txt), mobile
  responsiveness, international hreflang, security headers, and generating a saved SEO
  audit report. Use this whenever building or editing any frontend page, layout,
  component, route, or public asset (Next.js, Nuxt, React, Vue, Svelte, plain HTML,
  etc.), whenever the user mentions SEO, search rankings, meta tags, sitemaps, page
  speed, Core Web Vitals, structured data, AI search visibility, or wanting the site
  to reach more people, and whenever asked to run an SEO audit or generate an SEO
  report — even if they do not use the word "SEO" explicitly.
---

# Frontend SEO Optimization

Use this whenever working on a frontend website's pages, components, layouts, routing, build config, or public assets — even if the user just says "improve SEO," "make this rank better," "add meta tags," or asks you to build/edit a page without mentioning SEO explicitly. Apply these practices proactively while writing new pages, not only when asked to "optimize." Also trigger on `/seo-optimize`.

Goal: maximize how many real users can discover, load, and use the site — via search engines, social shares, and assistive technology — without resorting to manipulative or spammy tactics (which get sites penalized and actively hurt reach).

Work through the relevant sections below. Not every project needs every item — judge by framework and page type — but scan the whole checklist before declaring SEO work "done." Use [checklists.md](checklists.md) while scanning. When producing an audit, use [report-template.md](report-template.md).

## When invoked

1. Map the project (framework, routing, `public/` assets, metadata/head management, CDN/headers).
2. Scan every section in [checklists.md](checklists.md). Skip only items that do not apply, and say so in the report.
3. If building or editing pages: apply the relevant practices in the same change — do not wait to be asked to "optimize."
4. If auditing, or after a batch of SEO fixes: write a report using [report-template.md](report-template.md) to `Report/seo/seo-report-<YYYY-MM-DD>.md` (create folders if needed). Fill every section with real findings — no leftover placeholders.
5. Verify using section 11 before declaring work done.

Do **not** invent issues. Every finding needs a file path (or live URL) and a short evidence note.

---

## 1. Technical SEO (crawlability & indexing)

**robots.txt** (at site root, e.g. `/public/robots.txt`)
- Allow crawling of all public content by default; only disallow admin panels, internal search results, cart/checkout, staging paths, and duplicate parameter URLs.
- Include a `Sitemap:` directive pointing to the sitemap URL.
- Never accidentally block the whole site (`Disallow: /`) in production — double-check this isn't a leftover from staging.

**XML sitemap** (`/sitemap.xml`, or split into `sitemap-index.xml` + child sitemaps for large sites)
- Generate dynamically from actual routes/CMS content, not hand-maintained, so it never drifts from reality.
- Include only canonical, indexable, 200-status URLs — no redirects, no noindex pages, no duplicates.
- Include `<lastmod>` dates where known; omit `<priority>`/`<changefreq>` (Google ignores them).
- Submit/verify in Google Search Console and Bing Webmaster Tools.

**Canonical URLs**
- Every page needs exactly one `<link rel="canonical" href="...">` pointing to the preferred absolute URL.
- Strip tracking params (`?utm_...`, session IDs) from the canonical, and self-reference on the canonical version.
- Watch for duplicate-content traps: `www` vs non-`www`, trailing slash vs none, `http` vs `https`, and paginated/filtered views — pick one canonical form site-wide and 301-redirect the rest.

**URL structure**
- Human-readable, lowercase, hyphen-separated (`/blog/best-running-shoes`, not `/blog?id=8214` or `/blog/Best_Running_Shoes`).
- Keep hierarchy shallow and logical (`/category/product`); avoid deep nesting or unnecessary query params for content that should be a static path.
- Never change URLs without a 301 redirect from the old path to the new one — broken links are an SEO and UX loss.

**HTTPS & security**
- Site must be fully HTTPS with no mixed-content warnings; redirect all HTTP → HTTPS at the server/CDN level (301, not JS).
- Set security headers: `Strict-Transport-Security` (HSTS), `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors`), and `Referrer-Policy`. HTTPS itself is a confirmed ranking signal, and insecure/misconfigured sites are deprioritized by both search and AI crawlers as untrustworthy sources.
- Verify the certificate is valid site-wide (`curl -I https://yoursite.com` or a browser padlock check on every template, not just the homepage).

**Status codes & redirects**
- Real 404s return HTTP 404 (not 200 with a "not found" message — a "soft 404").
- Use 301 for permanent moves, 302 only for genuinely temporary redirects.
- Avoid redirect chains (A→B→C); point directly to the final destination.

**Indexing control**
- Use `<meta name="robots" content="noindex, follow">` (not robots.txt) to keep low-value pages (thin tag pages, internal search results, duplicate filtered views) out of the index while still crawlable for link equity.
- Never leave a `noindex` tag on production pages that should rank — check this explicitly after any staging→prod deploy.

**Pagination & infinite scroll**
- If content also matters for search engines, ensure paginated content is reachable via real crawlable links (not only a "load more" button that requires JS click events with no corresponding URL), or provide a paginated fallback (`/page/2`).

**Crawl budget & indexation hygiene** (matters most on large/e-commerce sites, 10,000+ URLs)
- Avoid crawl traps: faceted/filtered navigation that generates near-infinite parameter URL combinations (`?color=red&size=m&sort=price...`) — `noindex` or canonicalize these, or block low-value parameter patterns in robots.txt.
- Reconcile counts: the number of URLs indexed in Search Console should roughly match your canonical URL count; a large gap signals a crawl-budget or quality problem.
- Watch Search Console's "Discovered – currently not indexed" and "Crawled – currently not indexed" reports — these usually mean Google is deprioritizing pages due to crawl budget or perceived low quality, not a technical block.
- On large sites, periodically review server/CDN access logs (or a crawler tool like Screaming Frog) to see what Googlebot/Bingbot/AI bots are actually spending their crawl budget on — redirect chains, old staging URLs, and duplicate filtered views are common silent leaks.

**Raw HTML vs. rendered HTML**
- For any JS-heavy page, compare view-source (raw HTML) against the post-JS rendered DOM. Primary content, headings, and internal links should exist in both wherever possible — many crawlers (especially AI crawlers) read raw HTML only and never execute JavaScript, so content that only appears after hydration can be invisible to them.

---

## 2. Core Web Vitals & performance

Page speed and stability are direct ranking factors and directly affect how many visitors stay long enough to convert.

- **LCP (Largest Contentful Paint) — target < 2.5s**: optimize/preload the hero image or largest above-the-fold element; use `<link rel="preload">` for critical fonts/hero images; avoid render-blocking JS/CSS above the fold; use a CDN.
- **INP (Interaction to Next Paint) — target < 200ms**: avoid long JS tasks on the main thread; break up heavy computation; defer non-critical third-party scripts.
- **CLS (Cumulative Layout Shift) — target < 0.1**: always set explicit `width`/`height` (or `aspect-ratio`) on images and embeds so layout doesn't jump; reserve space for ads/dynamic content; avoid injecting content above existing content after load.
- Serve modern image formats (WebP/AVIF) with fallbacks, responsive `srcset`/`sizes`, and lazy-load below-the-fold images (`loading="lazy"`) — but do NOT lazy-load the LCP image.
- Minify/compress JS, CSS, and HTML; enable gzip/brotli at the server or CDN.
- Code-split and tree-shake so route bundles only ship what that route needs.
- Self-host or preconnect to critical third-party origins (fonts, analytics) with `<link rel="preconnect">`/`dns-prefetch`.
- Audit with Lighthouse / PageSpeed Insights / WebPageTest and Chrome UX Report (real-user field data) — synthetic lab scores alone can be misleading.
- Keep an eye on **TTFB (Time to First Byte, target < 800ms)** too — it's the server-response foundation every other metric builds on; slow origin servers or cold serverless functions will cap LCP no matter how optimized the frontend is.
- Treat performance budgets as a release gate (fail CI on regression), not a one-time cleanup — Core Web Vitals silently regress as new components/scripts get added.

---

## 3. On-page SEO (per-page content signals)

**Title tag** — `<title>`
- Unique per page, ~50–60 characters (so it doesn't truncate in SERPs).
- Primary keyword near the front, but written for humans first; brand name at the end (`Primary Keyword | Brand`).
- Never duplicate titles across pages.

**Meta description**
- Unique per page, ~150–160 characters, a genuine compelling summary (not a keyword list) — it's the ad copy for the click, even though it's not a ranking factor itself.

**Heading hierarchy**
- Exactly one `<h1>` per page, describing the page's main topic.
- `<h2>`–`<h6>` used in logical nested order for structure, not just for font size — never skip levels or pick headings for visual styling alone (use CSS for that).

**Content**
- Primary topic/keyword should appear naturally in the H1, first ~100 words, at least one subheading, and body copy — written for the reader, not stuffed.
- Aim for depth that actually answers the query; thin/duplicate boilerplate pages hurt the whole site's authority.
- Avoid duplicate content across pages; if similar content must exist (e.g., city landing pages), differentiate substantively and canonicalize appropriately.

**Images**
- Descriptive, unique `alt` text on every meaningful image (describes content/function, not "image of..."); empty `alt=""` for purely decorative images.
- Descriptive filenames (`red-running-shoe.jpg`, not `IMG_2931.jpg`).

**Favicon & web app manifest**
- Include `favicon.ico` plus modern sized icons (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) referenced via `<link rel="icon">`/`<link rel="apple-touch-icon">`.
- Add a `manifest.json` (name, icons, `theme_color`, `background_color`) even for non-PWA sites — it's a small trust/UX signal and required if the site should be installable.
- A missing favicon is a common, easy-to-miss polish issue that shows up as a broken tab icon and in some SERP/social surfaces.

**Custom 404 page**
- Provide a helpful, on-brand 404 page (search box, links to popular/related pages) rather than a bare server error — it recovers otherwise-lost visitors from broken/typo'd or outdated links.
- Confirm it actually returns HTTP 404 (see "Status codes" above), and monitor 404 spikes in Search Console/analytics after deploys to catch newly broken links early.

**E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust)**
- Give content real authorship: visible author byline linking to an author bio page with credentials, and `Person`/`author` structured data.
- Maintain an accurate About and Contact page — thin or missing "who runs this site" info is a known trust red flag for both Google's quality raters and AI systems evaluating citation-worthiness.
- Show a visible "Last updated" date on evergreen/cornerstone content and actually keep it current — both traditional search and AI answer engines weight recency when choosing what to rank or cite.
- Cite sources/data credibly in content; original data, first-hand expertise, and a clear point of view are what make a page worth citing rather than paraphrasing.

**Internal linking**
- Link to related pages using descriptive anchor text (not "click here"); every important page should be reachable within a few clicks from the homepage.
- Fix orphan pages (pages with no internal links pointing to them).

**Links generally**
- Use real `<a href>` elements for anything crawlable/navigable — never `<div onClick>` or JS-only navigation for links that should be indexed and followed.
- Use `rel="nofollow"` / `rel="sponsored"` on paid/untrusted outbound links; `rel="noopener"` on `target="_blank"` links.

---

## 4. Semantic & accessible HTML

Search engines and assistive tech both rely on real structure — this section is SEO and accessibility at once.

- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<button>` — not generic `<div>`/`<span>` with click handlers for interactive/structural content.
- Ensure text is real DOM text, not baked into images or rendered only via canvas/video, so it's crawlable and readable.
- Sufficient color contrast, visible focus states, keyboard navigability — accessibility issues correlate with bounce rate and are themselves a soft ranking signal.
- `lang` attribute set correctly on `<html>`.

---

## 5. Structured data (Schema.org / JSON-LD)

Add `<script type="application/ld+json">` structured data matching the page's actual content type, so search engines can render rich results:

- **Organization/WebSite** — sitewide, on the homepage (name, logo, sameAs social links, `SearchAction` for sitelinks search box).
- **BreadcrumbList** — on any page with a visible breadcrumb trail.
- **Article/BlogPosting** — blog/news content (headline, author, datePublished, image).
- **Product** + **Offer** + **AggregateRating** — ecommerce product pages.
- **FAQPage** — pages with genuine visible Q&A content (don't add invisible/hidden FAQ markup that isn't shown to users — this violates guidelines and risks a manual penalty).
- **LocalBusiness** — for location-based businesses (address, hours, geo).
- **Person** — author bio pages.
- **Review** / **AggregateRating** — anywhere genuine user or editorial reviews are shown (drives star ratings in search).
- **VideoObject** — pages with embedded video (thumbnail, duration, upload date) so video can appear in video/rich results.
- **Event** — event listing pages (date, location, offers).
- **HowTo** — step-by-step tutorial content, where genuinely step-structured.
- **SoftwareApplication** — app/product download pages.

Rules:
- Structured data must describe content that is actually visible on the page — never mark up content the user can't see.
- Validate every schema with Google's Rich Results Test / Schema.org validator before shipping.
- Keep it in sync with visible content when content changes (e.g., price, rating) — stale structured data is a common source of Search Console errors.

---

## 6. Social sharing metadata (Open Graph & Twitter Cards)

On every shareable page's `<head>`:

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://.../absolute-image-url.jpg" />
<meta property="og:url" content="https://.../canonical-url" />
<meta property="og:type" content="website" /> <!-- or "article", "product", etc. -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

- `og:image` must be an absolute URL, ideally 1200×630, and actually accessible (not blocked by robots.txt or auth).
- Test with Facebook Sharing Debugger / Twitter Card Validator / LinkedIn Post Inspector.

---

## 7. AI crawler access & answer/generative engine optimization (AEO/GEO)

As of 2026, a meaningful and growing share of discovery traffic comes from AI answer engines (Google AI Overviews, ChatGPT Search, Perplexity, Copilot, Claude) that cite/quote sources rather than just linking to them. This layer builds on everything above rather than replacing it — a page invisible to AI crawlers is usually also weak for traditional search.

- **Don't accidentally block AI crawlers.** Check `robots.txt` explicitly allows the bots you want citing you: `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`, etc. (Block them deliberately if the business wants to opt out of AI training/citation — that's a legitimate choice — but confirm it's an intentional decision, not a stale default. Cloudflare in particular has shipped AI-bot-blocking defaults that can silently cut off this traffic.)
- **Check server/CDN logs** for these user-agents to confirm AI bots are actually reaching the site, not just permitted to in theory.
- **Serve real content in raw HTML.** Most AI crawlers do not execute JavaScript the way Googlebot eventually does — content that only renders after client-side hydration is frequently invisible to them (reinforces the SSR/SSG guidance in section 9).
- **Consider an `llms.txt`** file at the site root — a plain-language, markdown-style summary of what the site is and links to its most important pages/docs, written for LLMs the way `robots.txt` is written for crawlers. This is an emerging, not-yet-universal convention; treat it as a nice-to-have layer on top of solid structured data, not a replacement for it.
- **Structure content for extraction, not just for skimming.** Lead each section with a direct, self-contained answer to the question implied by its heading, before supporting detail — this is what gets pulled as a standalone quotable passage. Use scannable formatting (short paragraphs, bullet/numbered lists, one clear topic per section).
- **Structured data matters even more here** — Article/FAQPage/HowTo/Product schema gives AI systems a clean, unambiguous fact source to extract from, rather than having to parse prose.
- Don't chase this at the expense of the fundamentals above: crawlability, fast/stable pages, and clean semantic HTML are what let both traditional and AI crawlers reach the content in the first place.

---

## 8. Mobile & responsive

- `<meta name="viewport" content="width=device-width, initial-scale=1">` on every page.
- Design mobile-first; Google indexes the mobile version of the page (mobile-first indexing) — anything hidden on mobile is effectively invisible to Google.
- Tap targets sized/spaced for touch; no horizontal scroll; text readable without zooming.

---

## 9. International SEO (only if the site serves multiple languages/regions)

- `hreflang` annotations (in `<head>` or sitemap) linking each language/region variant to every other variant, including a self-referencing tag and an `x-default` fallback.
- Locale-specific URLs (`/en/`, `/fr/`, or subdomains/ccTLDs) rather than cookie- or IP-based content swapping with a single URL — crawlers need distinct URLs to index each variant.

---

## 10. Framework-specific notes

**Next.js / Nuxt / SvelteKit / Remix (SSR/SSG frameworks)**
- Prefer SSR or static generation for any route that should be indexed — client-side-only rendering delays or risks content not being seen by crawlers.
- Use the framework's native head-management (`next/head`, `<Head>`, `useSeoMeta`, etc.) for per-route title/meta/canonical/OG tags rather than a single static `index.html` `<head>`.
- Generate `sitemap.xml`/`robots.txt` from route data at build time (e.g. `next-sitemap`) so they never go stale.

**Pure client-rendered SPA (CRA/Vite without SSR)**
- Flag this as an SEO risk if organic search visibility matters — recommend migrating to SSR/SSG (or prerendering critical routes) rather than relying on client-side rendering + hoping crawlers execute JS correctly.
- At minimum, ensure critical meta tags are present in the initial server-delivered HTML, not injected only after JS hydration.

**Static HTML sites**
- Since there's no per-route templating engine, still ensure every individual HTML file has unique title/description/canonical/OG tags — check for copy-pasted `<head>` blocks that weren't updated per page.

---

## 11. Measurement & verification (do this last, every time)

After making changes, verify rather than assume:
1. View rendered page source (not just the source template) to confirm tags actually appear in the delivered HTML.
2. Run Lighthouse (Performance + SEO categories) and fix flagged issues.
3. Validate structured data with Google's Rich Results Test.
4. Check `robots.txt` and sitemap are reachable and correctly formed at their live URLs.
5. Confirm the page isn't accidentally `noindex`ed.
6. Recommend the user verify the domain in Google Search Console / Bing Webmaster Tools if not already done, and monitor Core Web Vitals + coverage reports there going forward.

---

## Anti-patterns — never do these

Keyword stuffing; hidden/invisible text or links; cloaking (showing different content to crawlers vs. users); doorway pages; buying links; duplicate/thin content at scale; auto-generated low-value content; structured data describing content not visible on the page; blocking crawlers via robots.txt while also trying to rank the page. These trigger manual actions or algorithmic penalties and actively reduce reach — the opposite of the goal.

---

## 12. Generating an SEO report

Whenever asked to "audit," "run an SEO check," "generate an SEO report," or similar — or after completing a batch of SEO fixes — produce a written report and save it to disk instead of only summarizing in chat.

Use the structure in [report-template.md](report-template.md). Fill in every section with real findings from the actual audit just performed — don't leave placeholder text in the saved file. If a section doesn't apply to the project (e.g. no international variants), state that explicitly rather than omitting the section. If a report already exists for today's date, append a new dated entry or overwrite with updated findings, whichever the user prefers — ask if ambiguous.

**Location convention (create folders if they don't exist):**
```
<project-root>/Report/seo/seo-report-<YYYY-MM-DD>.md
```

Write the file with the editor/Write tool (preferred on Windows). Equivalent shell setup:

```bash
# From the project root
mkdir -p Report/seo

# Then write the report (use today's actual date)
# Report body: copy from report-template.md and fill every section
```

```
echo "Report written to Report/seo/seo-report-$(date +%F).md"
```

On Windows PowerShell, create the folder with `New-Item -ItemType Directory -Force -Path Report/seo` if needed; still use today's actual date in the filename.

## Additional resources

- Full scan checklists: [checklists.md](checklists.md)
- Saved audit report structure: [report-template.md](report-template.md)

## Claude Code & Cursor

This skill is identical under:

- `.cursor/skills/seo-optimize/` (Cursor)
- `.claude/skills/seo-optimize/` (Claude Code)

Keep both copies in sync when editing. Commit them; do not gitignore these folders.
