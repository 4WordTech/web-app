"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Arrow,
  Button,
  Marquee,
  PlaceholderBadge,
  Reveal,
  SectionHeader,
} from "@/components/ui";
import {
  about,
  clientTypes,
  industries,
  processSteps,
  projects,
  services,
  stats,
  techStack,
  whyUs,
} from "@/lib/content";

export function TechMarquee() {
  return (
    <Marquee
      items={[
        "Product development",
        "Backend",
        "AI & automation",
        "Design & UX",
        "Data",
        "Integrations",
        "Support",
      ]}
    />
  );
}

export function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section id="services" className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Services, without the{" "}
              <em className="font-serif font-normal italic text-muted">brochure voice.</em>
            </>
          }
          body="Six IT services we offer clients — from first build to ongoing support."
          action={
            <Button href="/services" variant="secondary">
              View all services <Arrow />
            </Button>
          }
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {preview.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link
              href={`/services#${s.slug}`}
              className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40 hover:bg-elevated"
            >
              <div>
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{s.eyebrow}</span>
                  <span className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Arrow />
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.benefit}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Why 4wordtech"
            title="A startup IT studio — not a bloated agency."
          />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="bg-surface p-8 md:p-10">
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
      <div className="mb-6 flex items-center gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          How we work
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WorkPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Example work"
          title={
            <>
              The kind of IT work{" "}
              <em className="font-serif font-normal italic text-muted">we take on.</em>
            </>
          }
          body="Sample client engagements — not live case studies. Swap them when you have real projects."
          action={
            <Button href="/work" variant="secondary">
              All examples <Arrow />
            </Button>
          }
        />
      </Reveal>

      <div className="grid gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              href={`/work/${p.slug}`}
              className="group grid overflow-hidden rounded-[28px] border border-line bg-surface md:grid-cols-12"
            >
              <div
                className="relative min-h-[220px] md:col-span-5 md:min-h-[320px]"
                style={{
                  background: `linear-gradient(145deg, ${p.color}33, #111 55%, #0a0a0a)`,
                }}
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute bottom-6 left-6">
                  <PlaceholderBadge />
                </div>
                <p className="absolute right-6 top-6 font-display text-6xl font-semibold text-white/10 transition-colors group-hover:text-white/20">
                  0{i + 1}
                </p>
              </div>
              <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-12">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {p.category} · {p.year}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {p.problem}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-sm text-ink/80">{p.outcome}</p>
                  <span className="text-accent">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProcessStrip() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="How we work"
            title="Discovery → Build → Launch → Support"
            body="A simple loop. No mystery phase named after a Greek letter."
            action={
              <Button href="/process" variant="secondary">
                Full process <Arrow />
              </Button>
            }
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.08}>
              <div className="relative h-full border-t border-accent/40 pt-6">
                <p className="font-mono text-xs text-muted">0{i + 1}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.short}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutIntro() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-end gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {about.mission}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-5">
          <p className="text-muted leading-relaxed">{about.story[0]}</p>
          <Button href="/about" variant="secondary" className="mt-8">
            Our story <Arrow />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function WhoWeHelp() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Who we help"
            title="Clients who need IT work done — not another vendor to manage."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {clientTypes.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <article className="flex h-full flex-col justify-between rounded-3xl border border-line bg-bg p-8">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientsAndStack() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Industries we can serve
        </p>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-4">
        {industries.map((c) => (
          <span
            key={c}
            className="font-display text-xl font-semibold tracking-tight text-ink/35 md:text-2xl"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Tools we build with
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-4 py-2 text-sm text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[28px] border border-line bg-surface p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-6">
              <div className="mb-3 flex items-center gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Insights
                </p>
                <PlaceholderBadge />
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Occasional notes on IT services and shipping software. No spam.
              </h2>
              <p className="mt-3 text-sm text-muted">
                Wire this form to your email tool later. It only stores locally for now.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row md:col-span-6"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = new FormData(form).get("email");
        window.localStorage.setItem("4wordtech-newsletter", String(email));
        form.reset();
        alert("Saved locally — connect an email provider when you’re ready.");
      }}
    >
      <input
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="h-12 flex-1 rounded-full border border-line bg-bg px-5 text-sm outline-none ring-accent/40 placeholder:text-muted focus:ring-2"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}

export function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[90px]"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-[60%] h-80 w-80 rounded-full bg-[#E4C9A5]/10 blur-[100px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
