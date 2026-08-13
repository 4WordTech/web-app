# SEO optimization checklists

Use these while scanning. Not every item applies to every repo — skip only what does not apply, and say so in the report.

Work through **every section** before declaring SEO work done.

## 1. Technical SEO (crawlability & indexing)

### robots.txt

- [ ] File exists at site root (e.g. `/public/robots.txt`)
- [ ] Public content is allowed by default
- [ ] Only admin, internal search, cart/checkout, staging, and duplicate parameter URLs are disallowed
- [ ] `Sitemap:` directive points to the live sitemap URL
- [ ] Production is not blocked with `Disallow: /` (staging leftover)

### XML sitemap

- [ ] `/sitemap.xml` exists (or `sitemap-index.xml` + child sitemaps for large sites)
- [ ] Generated dynamically from actual routes/CMS content (not hand-maintained)
- [ ] Only canonical, indexable, 200-status URLs — no redirects, noindex pages, or duplicates
- [ ] `<lastmod>` included where known
- [ ] `<priority>` / `<changefreq>` omitted (Google ignores them)
- [ ] Recommend submit/verify in Google Search Console and Bing Webmaster Tools

### Canonical URLs

- [ ] Every page has exactly one `<link rel="canonical" href="...">` to an absolute preferred URL
- [ ] Tracking params (`?utm_...`, session IDs) stripped from the canonical
- [ ] Canonical version self-references
- [ ] One site-wide canonical form for `www` vs non-`www`, trailing slash, `http` vs `https`, paginated/filtered views
- [ ] Non-canonical forms 301-redirect to the canonical

### URL structure

- [ ] Human-readable, lowercase, hyphen-separated paths
- [ ] Shallow, logical hierarchy (`/category/product`)
- [ ] No unnecessary query params for content that should be a static path
- [ ] URL changes include a 301 from the old path

### HTTPS & security

- [ ] Fully HTTPS; no mixed-content warnings
- [ ] HTTP → HTTPS is a server/CDN 301 (not JS)
- [ ] `Strict-Transport-Security` (HSTS)
- [ ] `Content-Security-Policy`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors`)
- [ ] `Referrer-Policy`
- [ ] Certificate valid site-wide (not only homepage)

### Status codes & redirects

- [ ] Real 404s return HTTP 404 (not a soft 404 / 200 "not found")
- [ ] 301 for permanent moves; 302 only when genuinely temporary
- [ ] No redirect chains (A→B→C); point to the final destination

### Indexing control

- [ ] Low-value pages use `<meta name="robots" content="noindex, follow">` (not robots.txt)
- [ ] Production pages that should rank are not `noindex`ed (check after staging→prod)

### Pagination & infinite scroll

- [ ] Search-relevant paginated content is reachable via real crawlable links, or a `/page/2` fallback exists
- [ ] Not only a JS "load more" click with no corresponding URL

### Crawl budget & indexation hygiene (especially 10,000+ URLs)

- [ ] Faceted/filtered nav is not a crawl trap; low-value param URLs are `noindex`ed, canonicalized, or blocked in robots.txt
- [ ] Indexed URL count in Search Console roughly matches canonical URL count
- [ ] "Discovered – currently not indexed" and "Crawled – currently not indexed" reviewed as quality/budget signals, not assumed technical blocks
- [ ] Large sites: review server/CDN logs or a crawler (e.g. Screaming Frog) for Googlebot/Bingbot/AI bot spend on redirect chains, old staging URLs, duplicate filtered views

### Raw HTML vs. rendered HTML

- [ ] Primary content, headings, and internal links exist in view-source (raw HTML), not only the post-JS DOM
- [ ] Content is not hydration-only (invisible to crawlers that never execute JS)

---

## 2. Core Web Vitals & performance

- [ ] **LCP < 2.5s**: hero/LCP image optimized and preloaded; critical fonts preloaded; no render-blocking JS/CSS above the fold; CDN in use
- [ ] **INP < 200ms**: no long main-thread JS tasks; heavy work broken up; non-critical third-party scripts deferred
- [ ] **CLS < 0.1**: explicit `width`/`height` or `aspect-ratio` on images and embeds; space reserved for ads/dynamic content; no post-load injection above existing content
- [ ] WebP/AVIF with fallbacks; responsive `srcset`/`sizes`
- [ ] Below-the-fold images use `loading="lazy"`; LCP image is **not** lazy-loaded
- [ ] JS/CSS/HTML minified/compressed; gzip/brotli at server or CDN
- [ ] Code-split and tree-shake; route bundles ship only what that route needs
- [ ] Critical third-party origins self-hosted or preconnected (`preconnect` / `dns-prefetch`)
- [ ] Audited with Lighthouse / PageSpeed Insights / WebPageTest **and** Chrome UX Report field data (lab scores alone are not enough)
- [ ] **TTFB < 800ms** (slow origin / cold serverless caps LCP)
- [ ] Performance budgets treated as a release gate (fail CI on regression)

---

## 3. On-page SEO

### Title tag

- [ ] Unique per page, ~50–60 characters
- [ ] Primary keyword near the front; humans first; brand at the end (`Primary Keyword | Brand`)
- [ ] No duplicate titles across pages

### Meta description

- [ ] Unique per page, ~150–160 characters
- [ ] Compelling summary (not a keyword list)

### Heading hierarchy

- [ ] Exactly one `<h1>` describing the main topic
- [ ] `<h2>`–`<h6>` in logical nested order; no skipped levels; headings not used only for font size

### Content

- [ ] Primary topic/keyword appears naturally in H1, first ~100 words, at least one subheading, and body
- [ ] Written for the reader, not stuffed
- [ ] Depth actually answers the query; no thin/duplicate boilerplate
- [ ] Similar pages (e.g. city landings) differentiated substantively and canonicalized

### Images

- [ ] Descriptive, unique `alt` on every meaningful image (content/function, not "image of...")
- [ ] Decorative images use empty `alt=""`
- [ ] Descriptive filenames (`red-running-shoe.jpg`, not `IMG_2931.jpg`)

### Favicon & web app manifest

- [ ] `favicon.ico` plus modern icons (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`)
- [ ] Referenced via `<link rel="icon">` / `<link rel="apple-touch-icon">`
- [ ] `manifest.json` with name, icons, `theme_color`, `background_color` (even for non-PWA)

### Custom 404 page

- [ ] Helpful, on-brand 404 (search box, links to popular/related pages)
- [ ] Actually returns HTTP 404
- [ ] Recommend monitoring 404 spikes in Search Console/analytics after deploys

### E-E-A-T

- [ ] Visible author byline linking to an author bio with credentials
- [ ] `Person` / `author` structured data
- [ ] Accurate About and Contact pages (who runs this site)
- [ ] Visible "Last updated" on evergreen/cornerstone content, kept current
- [ ] Credible citations; original data / first-hand expertise / clear point of view

### Internal linking

- [ ] Descriptive anchor text (not "click here")
- [ ] Important pages reachable within a few clicks from the homepage
- [ ] No orphan pages (pages with no internal inbound links)

### Links generally

- [ ] Real `<a href>` for crawlable/navigable links — never `<div onClick>` or JS-only nav for indexable links
- [ ] `rel="nofollow"` / `rel="sponsored"` on paid/untrusted outbound links
- [ ] `rel="noopener"` on `target="_blank"` links

---

## 4. Semantic & accessible HTML

- [ ] Semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<button>`
- [ ] Not generic `<div>`/`<span>` with click handlers for interactive/structural content
- [ ] Text is real DOM text (not baked into images or canvas/video-only)
- [ ] Sufficient color contrast
- [ ] Visible focus states
- [ ] Keyboard navigable
- [ ] `lang` set correctly on `<html>`

---

## 5. Structured data (Schema.org / JSON-LD)

Implement only types that match visible page content:

- [ ] **Organization/WebSite** — homepage (name, logo, sameAs, `SearchAction`)
- [ ] **BreadcrumbList** — pages with a visible breadcrumb trail
- [ ] **Article/BlogPosting** — blog/news (headline, author, datePublished, image)
- [ ] **Product** + **Offer** + **AggregateRating** — ecommerce product pages
- [ ] **FAQPage** — genuine visible Q&A only (never hidden FAQ markup)
- [ ] **LocalBusiness** — location-based (address, hours, geo)
- [ ] **Person** — author bio pages
- [ ] **Review** / **AggregateRating** — genuine user or editorial reviews
- [ ] **VideoObject** — embedded video (thumbnail, duration, upload date)
- [ ] **Event** — event listings (date, location, offers)
- [ ] **HowTo** — genuine step-by-step tutorials
- [ ] **SoftwareApplication** — app/product download pages
- [ ] Markup describes only content the user can see
- [ ] Validated with Google's Rich Results Test / Schema.org validator
- [ ] Kept in sync with visible content (price, rating, etc.)

---

## 6. Social sharing metadata (Open Graph & Twitter Cards)

On every shareable page `<head>`:

- [ ] `og:title`
- [ ] `og:description`
- [ ] `og:image` — absolute URL, ideally 1200×630, publicly accessible (not robots.txt/auth blocked)
- [ ] `og:url` — canonical URL
- [ ] `og:type` — `website` / `article` / `product` / etc.
- [ ] `twitter:card` — `summary_large_image`
- [ ] `twitter:title`
- [ ] `twitter:description`
- [ ] `twitter:image`
- [ ] Test with Facebook Sharing Debugger / Twitter Card Validator / LinkedIn Post Inspector

---

## 7. AI crawler access (AEO/GEO)

- [ ] `robots.txt` explicitly allows intended AI bots: `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Bingbot`, etc. — or blocking is an intentional business choice, not a stale default (watch Cloudflare AI-bot-blocking defaults)
- [ ] Server/CDN logs confirm those user-agents actually reach the site
- [ ] Real content in raw HTML (AI crawlers often do not execute JS)
- [ ] Consider `llms.txt` at site root (nice-to-have on top of structured data, not a replacement)
- [ ] Sections lead with a direct, self-contained answer, then supporting detail
- [ ] Scannable formatting: short paragraphs, lists, one topic per section
- [ ] Article/FAQPage/HowTo/Product schema present where relevant (clean extraction source)
- [ ] Fundamentals not sacrificed: crawlability, fast/stable pages, semantic HTML

---

## 8. Mobile & responsive

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` on every page
- [ ] Mobile-first; nothing important hidden only on mobile (mobile-first indexing)
- [ ] Tap targets sized/spaced for touch
- [ ] No horizontal scroll
- [ ] Text readable without zooming

---

## 9. International SEO

Only if the site serves multiple languages/regions; otherwise mark N/A.

- [ ] `hreflang` in `<head>` or sitemap linking every language/region variant to every other variant
- [ ] Self-referencing `hreflang` tag
- [ ] `x-default` fallback
- [ ] Locale-specific URLs (`/en/`, `/fr/`, subdomains, or ccTLDs) — not cookie- or IP-based content swap on a single URL

---

## 10. Framework-specific notes

### Next.js / Nuxt / SvelteKit / Remix (SSR/SSG)

- [ ] Indexed routes use SSR or static generation (not client-only)
- [ ] Native head management (`next/head`, `<Head>`, `useSeoMeta`, etc.) for per-route title/meta/canonical/OG
- [ ] `sitemap.xml` / `robots.txt` generated from route data at build time (e.g. `next-sitemap`)

### Pure client-rendered SPA (CRA/Vite without SSR)

- [ ] Flagged as an SEO risk if organic visibility matters
- [ ] Recommend SSR/SSG or prerender critical routes
- [ ] Critical meta tags present in initial server-delivered HTML, not only after hydration

### Static HTML sites

- [ ] Every HTML file has unique title/description/canonical/OG (no stale copy-pasted `<head>`)

---

## 11. Measurement & verification (do this last, every time)

- [ ] View rendered page source (delivered HTML, not only the template) — tags are present
- [ ] Lighthouse Performance + SEO run; flagged issues fixed
- [ ] Structured data validated with Google's Rich Results Test
- [ ] Live `robots.txt` and sitemap reachable and correctly formed
- [ ] Page is not accidentally `noindex`ed
- [ ] Recommend Google Search Console / Bing Webmaster Tools verification if not done; monitor Core Web Vitals + coverage

---

## Anti-patterns (never)

- [ ] No keyword stuffing
- [ ] No hidden/invisible text or links
- [ ] No cloaking (different content to crawlers vs users)
- [ ] No doorway pages
- [ ] No buying links
- [ ] No duplicate/thin content at scale
- [ ] No auto-generated low-value content
- [ ] No structured data for content the user cannot see
- [ ] Not blocking crawlers in robots.txt while also trying to rank the page
