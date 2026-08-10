# 4wordtech

Startup IT services website for **4wordtech** — Next.js, TypeScript, Tailwind CSS v4.

Positioning: **4wordtech is a startup that provides IT services to clients** — websites, apps, cloud, AI, and support.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the build
```

## What’s on the site

Follows the sales-funnel structure from the design guide:

| Page | Purpose |
| --- | --- |
| `/` | Hero, services preview, why us, example work, process, about, who we help, CTAs |
| `/services` | Full offerings: problem → solution → benefits → outcomes |
| `/work` + `/work/[slug]` | Example client engagements |
| `/about` | Story, mission, mindset, skills |
| `/contact` | Form, email, WhatsApp + calendar placeholders |
| `/process` | Detailed workflow + communication style |
| `/pricing` | Starter / Growth / Scale |
| `/blog` + `/blog/[slug]` | Insights (SEO / authority) |
| `/careers` | Open roles |
| `/faq` | Common questions |
| `/privacy` `/terms` | Legal stubs |

Yellow **Placeholder** pills mark copy, metrics, logos, socials, and legal text you should replace.

## Edit content

Almost all copy lives in one file:

- [`src/lib/content.ts`](src/lib/content.ts) — name, contact, services, projects, pricing, posts, FAQs, etc.

Logo: [`4wordtech.svg`](4wordtech.svg) is inlined via [`src/components/Logo.tsx`](src/components/Logo.tsx) (uses `currentColor` so it works on the dark UI).

## Wire up later

- Contact form → [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts) (logs only today)
- Newsletter → localStorage only; connect Resend / Loops / Buttondown
- Calendar → drop a Calendly iframe on `/contact`
- `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx) — change to your real domain
- Social / WhatsApp / phone / email in `site` inside `content.ts`

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Motion (`motion/react`) for scroll + hover animation
