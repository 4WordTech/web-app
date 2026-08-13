# SEO audit report template

Save to:

```
<project-root>/Report/seo/seo-report-<YYYY-MM-DD>.md
```

Create `Report/seo/` if it does not exist. Use today's actual date. Fill every section with real findings — do not leave placeholder text. If a section does not apply, state that explicitly rather than omitting it.

If a report already exists for today's date, append a new dated entry or overwrite with updated findings, whichever the user prefers — ask if ambiguous.

Copy this structure into the saved file:

```markdown
# SEO Audit Report — <site/project name>
Date: <YYYY-MM-DD>
Scope: <pages/routes audited>

## Summary
<2-4 sentence overview: overall health, biggest wins available, biggest risks found>

## 1. Technical SEO
- robots.txt: <status/findings>
- Sitemap: <status/findings>
- Canonicals: <status/findings>
- URL structure: <status/findings>
- Status codes / redirects: <status/findings>
- Indexing (noindex audit): <status/findings>
- Pagination / infinite scroll: <status/findings>
- Crawl budget / indexation hygiene: <status/findings, if applicable>
- Raw HTML vs rendered HTML: <status/findings>

## 2. Core Web Vitals & Performance
- LCP: <value/status> (target < 2.5s)
- INP: <value/status> (target < 200ms)
- CLS: <value/status> (target < 0.1)
- TTFB: <value/status> (target < 800ms)
- Notes: <image formats, bundle size, third-party scripts, preload/lazy-load, compression, code-splitting, performance budgets, lab vs field data>

## 3. On-Page SEO
- Title tags: <findings>
- Meta descriptions: <findings>
- Heading structure: <findings>
- Content quality/duplication: <findings>
- Image alt text / filenames: <findings>
- Favicon & web app manifest: <findings>
- Custom 404 page: <findings>
- E-E-A-T signals: <findings>
- Internal linking: <findings>
- Link markup (`<a href>`, nofollow/sponsored, noopener): <findings>

## 4. Semantic & Accessible HTML
<findings: semantic elements, real DOM text, contrast/focus/keyboard, html lang>

## 5. Structured Data
- Schemas implemented: <list — Organization/WebSite, BreadcrumbList, Article/BlogPosting, Product/Offer/AggregateRating, FAQPage, LocalBusiness, Person, Review, VideoObject, Event, HowTo, SoftwareApplication>
- Validation status: <pass/fail + errors>
- Gaps/opportunities: <findings>
- Visible-content parity: <markup matches what users see>

## 6. Social Metadata (OG/Twitter)
<findings: og:title/description/image/url/type, twitter:card/title/description/image, image absolute URL and 1200×630, debugger tests>

## 7. AI Crawler Access (AEO/GEO)
- robots.txt AI bot access: <GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot — allowed vs intentional block vs stale default>
- Server/CDN log confirmation: <findings, or not available>
- llms.txt present: <yes/no>
- Raw vs rendered HTML parity: <findings>
- Extraction-friendly content structure: <findings>

## 8. Mobile & Responsive
<findings: viewport, mobile-first indexing, tap targets, horizontal scroll, readable text>

## 9. International SEO
<findings, or "N/A — single locale">

## 10. Framework
<SSR/SSG vs SPA risk, native head management, generated sitemap/robots, unique per-page head tags>

## 11. Security
- HTTPS/mixed content: <findings>
- Security headers: <HSTS, CSP, X-Content-Type-Options, X-Frame-Options or frame-ancestors, Referrer-Policy>
- Certificate: <findings>

## 12. Measurement & verification
- Rendered source tags confirmed: <yes/no + notes>
- Lighthouse Performance + SEO: <status>
- Rich Results Test: <status>
- Live robots.txt + sitemap: <status>
- Accidental noindex: <yes/no>
- Search Console / Bing Webmaster Tools: <verified / recommend verify>

## Issues found (prioritized)
| Priority | Issue | Page(s)/Scope | Recommended fix |
|---|---|---|---|
| High | ... | ... | ... |
| Medium | ... | ... | ... |
| Low | ... | ... | ... |

## Anti-patterns checked
<none found, or list any keyword stuffing, cloaking, hidden text, doorway pages, bought links, thin/duplicate content at scale, auto-generated low-value content, invisible structured data, robots.txt blocking pages you are trying to rank>

## Changes made this session
- <list any fixes already applied as part of this task>

## Next steps
- <remaining recommended actions, roughly prioritized>
```

Priority labels in the issues table must be exactly: `High`, `Medium`, `Low`.
