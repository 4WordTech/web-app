# 4wordtech

Frontend marketing website for **4wordtech**, a startup that provides IT services to clients — websites, web and mobile apps, cloud, AI, integrations, and ongoing support.

This repo is the public site only (Next.js App Router). There is no database and no auth. Contact and newsletter forms are placeholders until you connect a backend or third-party tool.

## Frontend stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | TypeScript |
| UI | React 19 + [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animation | [Motion](https://motion.dev/) (`motion/react`) |
| Fonts | Geist, Syne, Instrument Serif via `next/font` |

Brand copy, services, example projects, pricing, and FAQs live in [`src/lib/content.ts`](src/lib/content.ts) so you can edit text without hunting through components.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (comes with Node)

## How to run

```bash
git clone https://github.com/4WordTech/web-app.git
cd web-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app hot-reloads when you change files.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Project layout

```
src/
  app/              # Routes (pages), layout, SEO, contact API stub
  components/       # Header, footer, hero, shared UI
  lib/
    content.ts      # All site copy — edit here first
    utils.ts        # Small helpers
public/             # Static assets (logo)
```

The 4wordtech mark is inlined in [`src/components/Logo.tsx`](src/components/Logo.tsx) (uses `currentColor`). A copy also sits at [`4wordtech.svg`](4wordtech.svg) / [`public/logo.svg`](public/logo.svg).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, services, why us, example work, process, about, who we help, CTAs |
| `/services` | Full IT offerings (problem → solution → benefits → outcomes) |
| `/work` · `/work/[slug]` | Example client engagements |
| `/about` | Story, mission, mindset, skills |
| `/contact` | Form + email / WhatsApp / calendar placeholders |
| `/process` | Discovery → build → launch → support |
| `/pricing` | Starter / Growth / Scale (starting-from prices) |
| `/blog` · `/blog/[slug]` | Insights (placeholder posts) |
| `/careers` | Open roles (placeholder) |
| `/faq` | Common questions |
| `/privacy` · `/terms` | Legal stubs |

Yellow **Placeholder** pills on the site mark copy you should replace before going live (contact details, socials, example work, legal, rates).

## What is not wired yet

This is frontend-first. Safe to ship as a static-looking site, but these still need a real integration:

- **Contact form** — `POST /api/contact` only logs the payload. Connect Resend, Formspree, or a CRM in [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).
- **Newsletter** — saves the email in `localStorage` only.
- **Calendar / WhatsApp / socials / phone / email** — dummy values in `site` inside [`src/lib/content.ts`](src/lib/content.ts).
- **Domain** — `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx) is set to `https://4wordtech.com`. Change it to your real domain before SEO / Open Graph matter.

## License

Private project for 4wordtech. Update this section if you publish it under a specific license.
