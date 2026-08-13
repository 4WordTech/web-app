export const site = {
  name: "4wordtech",
  shortName: "4word",
  tagline: "IT services for businesses that need to ship",
  description:
    "4wordtech is a startup providing IT services to clients — websites, web and mobile apps, cloud, AI, integrations, and ongoing support.",
  email: "hello@4wordtech.com", // PLACEHOLDER
  phone: "+91 00000 00000", // PLACEHOLDER
  whatsapp: "https://wa.me/910000000000", // PLACEHOLDER
  calendarUrl: "https://calendly.com/4wordtech/intro", // PLACEHOLDER
  location: "India · Remote-first", // PLACEHOLDER
  founded: "2026", // PLACEHOLDER
  socials: {
    linkedin: "https://linkedin.com/company/4wordtech", // PLACEHOLDER
    twitter: "https://x.com/4wordtech", // PLACEHOLDER
    github: "https://github.com/4wordtech", // PLACEHOLDER
    instagram: "https://instagram.com/4wordtech", // PLACEHOLDER
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = {
  explore: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Insights" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export const services = [
  {
    slug: "product-development",
    title: "Product Development",
    eyebrow: "01",
    benefit: "Websites and apps for your business — built to launch, then grow.",
    summary:
      "Full-stack web and mobile products for clients who need something live, not another slide deck.",
    problem:
      "Businesses lose months to unclear scope, bloated agencies, or freelancers who disappear after the first invoice.",
    solution:
      "We take a client brief from idea to ship: websites, MVPs, full-stack web apps, and React Native / Flutter mobile — with architecture that can grow with you.",
    benefits: [
      "Launch in weeks, not quarters",
      "Clean codebase your team can own",
      "Web + mobile from one studio",
      "Direct, plain-language updates",
    ],
    outcomes: [
      "A live product or site your users can use",
      "A clear path from v1 → next version",
      "Handover docs, not a black box",
    ],
    offerings: [
      "MVP development",
      "Full-stack web apps",
      "Mobile apps (React Native / Flutter)",
    ],
  },
  {
    slug: "backend-infrastructure",
    title: "Backend & Infrastructure",
    eyebrow: "02",
    benefit: "APIs and cloud that stay fast when your traffic shows up.",
    summary:
      "Scalable backends, APIs, cloud deployment, and CI/CD — so a client product does not buckle on a good day.",
    problem:
      "Early backends are often glued together. They work until the first real spike — then everything is on fire.",
    solution:
      "We design APIs, data models, and cloud infrastructure that are simple now and ready later. AWS / GCP, CI/CD, observability included.",
    benefits: [
      "Reliable APIs & integrations",
      "Cloud that matches your stage",
      "Automated deploys, fewer 2am pages",
      "Security basics done properly",
    ],
    outcomes: [
      "Stable production environments",
      "Faster release cycles",
      "Room to grow users without a rewrite",
    ],
    offerings: [
      "API development & integrations",
      "Scalable backend architecture",
      "Cloud deployment (AWS, GCP)",
      "DevOps setup (CI/CD)",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    eyebrow: "03",
    benefit: "See what is working — then decide with numbers, not guesswork.",
    summary:
      "Dashboards, reporting pipelines, and BI so client teams stop guessing and start steering.",
    problem:
      "Growth conversations happen in spreadsheets, chat screenshots, and gut feel. Nobody trusts the numbers.",
    solution:
      "We wire up the data you already have into dashboards and pipelines your team will actually open every Monday.",
    benefits: [
      "One source of truth",
      "Business-ready dashboards",
      "Automated reporting",
      "Insights, not just charts",
    ],
    outcomes: [
      "Clear product & revenue metrics",
      "Less time wrangling CSVs",
      "Decisions you can defend",
    ],
    offerings: [
      "Dashboard development",
      "Business intelligence systems",
      "Data pipelines & reporting",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    eyebrow: "04",
    benefit: "Automate the busywork. Put AI where it actually earns its keep.",
    summary:
      "Chatbots, workflow automation, and custom LLM integrations — practical AI for client operations, not slide-deck AI.",
    problem:
      "Teams drown in repetitive ops, or bolt on a chatbot that nobody uses because it was never tied to a real workflow.",
    solution:
      "We map the work that should not be manual, then ship automations and AI features that save hours and feel native to your product.",
    benefits: [
      "Hours back every week",
      "AI inside your product, not beside it",
      "Zapier / n8n / custom — right tool, not hype",
      "Human-in-the-loop where it matters",
    ],
    outcomes: [
      "Fewer manual ops",
      "Faster customer response",
      "Features that feel useful to users",
    ],
    offerings: [
      "AI chatbots",
      "Workflow automation (Zapier, n8n)",
      "Custom AI integrations (LLMs)",
    ],
  },
  {
    slug: "design-ux",
    title: "Design & UX",
    eyebrow: "05",
    benefit: "Interfaces that look sharp and convert — not just pretty Figma files.",
    summary:
      "UI/UX systems, landing pages, and product redesigns built to ship for clients, not to sit in a deck.",
    problem:
      "Businesses either look generic, or they over-design and never launch. Users bounce before they understand the value.",
    solution:
      "We design for clarity and conversion: systems engineers can use, landing pages that sell, and redesigns that respect what already works.",
    benefits: [
      "Consistent design system",
      "Landing pages that convert",
      "Product UX that reduces drop-off",
      "Design + build in one loop",
    ],
    outcomes: [
      "A brand that feels intentional",
      "Higher signup / enquiry rates",
      "A UI your team can extend",
    ],
    offerings: [
      "UI/UX design systems",
      "Landing page design",
      "Product redesign",
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    eyebrow: "06",
    benefit: "Payments, CRM, WhatsApp — connected without the duct tape.",
    summary:
      "Payment gateways, WhatsApp automation, and CRM wiring that just works in production.",
    problem:
      "Every tool your team loves becomes another brittle integration. Customers feel the cracks at checkout and in support.",
    solution:
      "We integrate the stack you already chose — Razorpay, Stripe, WhatsApp, CRMs — with error handling, webhooks, and monitoring.",
    benefits: [
      "Checkout you can trust",
      "Support that actually replies",
      "CRM that stays in sync",
      "Fewer ‘it works on staging’ bugs",
    ],
    outcomes: [
      "Payments collected reliably",
      "Ops running in one place",
      "Integrations you can hand to a new hire",
    ],
    offerings: [
      "Payment gateways (Razorpay, Stripe)",
      "WhatsApp automation",
      "CRM integrations",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    eyebrow: "07",
    benefit: "Keep the product fast, fixed, and evolving after launch.",
    summary:
      "Ongoing IT maintenance, bug fixes, and performance work so launch day is not the last day anyone cares.",
    problem:
      "Most vendors vanish after the invoice. Bugs pile up, performance slips, and the client becomes accidental on-call.",
    solution:
      "We stay on as your IT services partner: retainers for fixes, performance, small features, and peace of mind.",
    benefits: [
      "Someone accountable after launch",
      "Performance watched, not hoped for",
      "Small asks don’t become new projects",
      "Predictable monthly cost",
    ],
    outcomes: [
      "Uptime you can sell against",
      "A product that keeps getting better",
      "Your team back on customers, not tickets",
    ],
    offerings: [
      "Website / app maintenance",
      "Bug fixes",
      "Performance optimization",
    ],
  },
];

export const whyUs = [
  {
    title: "Client-first",
    body: "We are a startup ourselves. You work with the people building — not a ticket queue or a sales layer.",
  },
  {
    title: "Fast delivery",
    body: "Tight loops. Weekly demos. You see progress, not a big reveal after three silent months.",
  },
  {
    title: "Scalable architecture",
    body: "Launch now, grow later — without throwing the first version in the bin the day you get traction.",
  },
  {
    title: "End-to-end IT",
    body: "Design, build, ship, support. One studio for your IT work. No finger-pointing between five vendors.",
  },
];

export const processSteps = [
  {
    key: "discovery",
    title: "Discovery",
    short: "We learn the real problem, the constraints, and what ‘done’ looks like.",
    detail:
      "Kickoff, stakeholder interviews, audit of what exists, and a sharp written brief. You leave this phase with scope, timeline, and a yes/no on feasibility — not a vague deck.",
    duration: "1–2 weeks", // PLACEHOLDER
  },
  {
    key: "build",
    title: "Build",
    short: "We design and ship in weekly increments you can click.",
    detail:
      "Design + engineering in one loop. Weekly demos, a shared board, and production-quality code from day one. No ‘we’ll clean it up later.’",
    duration: "4–12 weeks", // PLACEHOLDER
  },
  {
    key: "launch",
    title: "Launch",
    short: "We get you live: infra, QA, analytics, and a calm go-live.",
    detail:
      "Staging → production, monitoring, analytics, and a launch checklist. We sit with you on go-live day so surprises have a human attached.",
    duration: "1 week", // PLACEHOLDER
  },
  {
    key: "support",
    title: "Support",
    short: "We stay. Fix, tune, and grow the product after launch.",
    detail:
      "Retainer or milestone support: bugs, performance, small features, and an IT partner on call when the next request hits.",
    duration: "Ongoing",
  },
];

export const projects = [
  {
    slug: "payflow",
    name: "Payments dashboard",
    category: "Example · Fintech",
    year: "Sample",
    problem:
      "A client needs a B2B payouts dashboard — something their team can demo quickly, without a six-month build.",
    solution:
      "We would scope a focused MVP: onboarding, payouts, and a live ops admin. Stripe + a clean Next.js dashboard, shipped in weekly increments.",
    outcome:
      "A live tool the client can put in front of customers — with a codebase that can grow after v1.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    metrics: [
      { label: "Typical MVP", value: "6–8 wks" },
      { label: "Team", value: "Small pod" },
      { label: "Handover", value: "Full" },
    ],
    color: "#C8F542",
  },
  {
    slug: "careloop",
    name: "Care ops platform",
    category: "Example · Health",
    year: "Sample",
    problem:
      "A clinic client is juggling WhatsApp, spreadsheets, and an old app to manage follow-ups.",
    solution:
      "We would replace the mess with a simple care-ops product: patient timeline, automated WhatsApp nudges, and a role-based dashboard.",
    outcome:
      "One system for staff instead of four tools — and follow-ups that actually happen.",
    tech: ["React", "Node.js", "WhatsApp API", "GCP"],
    metrics: [
      { label: "Tools replaced", value: "4 → 1" },
      { label: "Typical build", value: "8–10 wks" },
      { label: "Support", value: "Retainer" },
    ],
    color: "#E4C9A5",
  },
  {
    slug: "stackly",
    name: "Marketplace core",
    category: "Example · Commerce",
    year: "Sample",
    problem:
      "A client has a landing page and no reliable way to match supply with demand or take payment.",
    solution:
      "We would build matching, payments, and a lightweight admin. Focus on the transaction loop first — discover, book, pay, review.",
    outcome:
      "A working marketplace core the client can run without a daily ops fire drill.",
    tech: ["Next.js", "Prisma", "Razorpay", "Redis"],
    metrics: [
      { label: "Focus", value: "Txn loop" },
      { label: "Typical build", value: "10–12 wks" },
      { label: "Payments", value: "Live" },
    ],
    color: "#8AB4FF",
  },
];

export const clientTypes = [
  {
    title: "Startups & new products",
    body: "Need a website, MVP, or first app version — and a small team to get it live.",
  },
  {
    title: "Small & mid-size businesses",
    body: "Need to modernize tools, automate ops, or put a proper digital product in front of customers.",
  },
  {
    title: "Teams that need extra IT",
    body: "Have something running, but need backend, integrations, AI, or a maintenance retainer.",
  },
];

export const stats = [
  { value: "7", label: "IT service lines" },
  { value: "4", label: "Delivery phases" },
  { value: "Weekly", label: "Client demos" },
  { value: "1 studio", label: "Design + build + support" },
];

export const industries = [
  "SaaS",
  "E-commerce",
  "Healthcare",
  "Internal tools",
  "Marketplaces",
  "Professional services",
  "Education",
  "Operations",
];

export const techStack = [
  "Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "AWS",
  "GCP",
  "Stripe",
  "Razorpay",
  "OpenAI",
  "n8n",
];

export const pricing = [
  {
    name: "Starter",
    intent: "Get online / validate",
    price: "₹1.5L+", // PLACEHOLDER
    period: "starting from",
    description:
      "A focused website, landing flow, or small MVP. Enough for a client to launch and learn.",
    features: [
      "Discovery workshop",
      "Scope & architecture",
      "Core build",
      "Launch support",
      "2 weeks post-launch fixes",
    ],
  },
  {
    name: "Growth",
    intent: "Run the business on it",
    price: "₹4L+", // PLACEHOLDER
    period: "starting from",
    highlight: true,
    description:
      "Full product surface, integrations, and an IT team that stays through launch.",
    features: [
      "Everything in Starter",
      "Design system + UX",
      "Payments / CRM / WhatsApp",
      "Analytics dashboards",
      "CI/CD + cloud setup",
      "8 weeks retainer option",
    ],
  },
  {
    name: "Scale",
    intent: "Embedded IT partner",
    price: "Let’s talk", // PLACEHOLDER
    period: "custom",
    description:
      "Multi-surface products, AI, data, and ongoing IT services for a growing client.",
    features: [
      "Everything in Growth",
      "Mobile apps",
      "AI & automation",
      "Performance & security pass",
      "Dedicated pod",
      "Quarterly roadmap",
    ],
  },
];

export const posts = [
  {
    slug: "briefing-an-it-studio",
    title: "How to brief an IT services studio (and get what you actually need)",
    excerpt:
      "The one-pager that saves both sides weeks: problem, users, constraints, and what ‘done’ means.",
    date: "2026-06-12", // PLACEHOLDER
    tag: "Clients",
  },
  {
    slug: "first-two-weeks",
    title: "What the first two weeks with 4wordtech look like",
    excerpt:
      "Discovery, a written scope, and a yes/no on feasibility — before anyone writes a lot of code.",
    date: "2026-05-28", // PLACEHOLDER
    tag: "Process",
  },
  {
    slug: "ai-that-pays-for-itself",
    title: "AI that pays for itself (and AI that doesn’t)",
    excerpt:
      "A simple test for client projects: would you still want this if the model got 20% worse tomorrow?",
    date: "2026-04-09", // PLACEHOLDER
    tag: "AI",
  },
];

export const faqs = [
  {
    q: "Are you a new company?",
    a: "Yes. 4wordtech is a startup offering IT services. You work directly with the people building — not a large agency account team.", // PLACEHOLDER
  },
  {
    q: "Who do you work with?",
    a: "Clients who need IT work done: startups, small and mid-size businesses, and teams that need extra engineering, design, or support.", // PLACEHOLDER
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Yes. We can inherit a half-finished site, an agency handoff, or a no-code stack that has hit a wall — after a short audit.", // PLACEHOLDER
  },
  {
    q: "What does a typical engagement look like?",
    a: "Discovery → scoped build or monthly pod → launch → optional retainer. You always know what’s in, what’s out, and what’s next.", // PLACEHOLDER
  },
  {
    q: "Where are you based?",
    a: "Remote-first, India timezone. We overlap on working hours that actually work for the client.", // PLACEHOLDER
  },
];

export const careers = [
  {
    title: "Founding Full-stack Engineer",
    type: "Full-time · Remote",
    blurb: "Build IT products for clients. High ownership, small team, low politics.", // PLACEHOLDER
  },
  {
    title: "Product Designer",
    type: "Contract · Remote",
    blurb: "Design systems and client landing pages that get built the same week.", // PLACEHOLDER
  },
];

export const about = {
  mission:
    "Provide clear, high-quality IT services to clients — from first brief to launch and support.",
  vision:
    "Become the IT studio businesses trust when they need software built and looked after.", // PLACEHOLDER
  story: [
    "4wordtech is a startup. We started it to offer IT services the way we’d want them: a small team, plain language, and work that actually goes live.",
    "We help clients with websites, apps, cloud, AI, integrations, and maintenance. You talk to the people building — not a sales layer.",
    "If you need an IT services partner that will move with you — not a giant agency — that’s us.",
  ], // PLACEHOLDER — replace with real founder story
  mindset: [
    { title: "Builders, not a black box", body: "We take taste and tradeoffs personally. Your project is not a ticket." },
    { title: "Clarity over theatre", body: "Plain language, written scopes, and demos you can click. No fog." },
    { title: "Ship, then sharpen", body: "Live beats perfect. We get to production, then we make it excellent." },
  ],
  skills: [
    "Product strategy",
    "UI / UX",
    "Full-stack engineering",
    "Mobile",
    "Cloud & DevOps",
    "AI integrations",
    "Data & analytics",
    "Payments & CRM",
  ],
};

export const communicationStyle = [
  {
    title: "One channel",
    body: "Slack or WhatsApp for day-to-day. Email for decisions. No mystery portals.", // PLACEHOLDER
  },
  {
    title: "Weekly demos",
    body: "Every week you click the real product. If we can’t demo it, it doesn’t count.",
  },
  {
    title: "Written > verbal",
    body: "Scopes, change requests, and launch checklists live in a shared doc — not in someone’s memory.",
  },
];
