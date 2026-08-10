import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Button, PlaceholderBadge, Reveal } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT services for clients: product development, backend, AI, design, data, integrations, and support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Services
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              IT services for clients — and the outcome you walk away with.
            </h1>
            <p className="mt-5 max-w-xl text-muted md:text-lg">
              Each offering is framed as problem → solution → benefits. Tune the
              copy as you take on real client work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] space-y-6 px-5 pb-20 md:px-8">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.04}>
            <article
              id={s.slug}
              className="scroll-mt-28 overflow-hidden rounded-[28px] border border-line bg-surface"
            >
              <div className="grid md:grid-cols-12">
                <div className="border-b border-line p-8 md:col-span-4 md:border-b-0 md:border-r md:p-10">
                  <p className="font-mono text-xs text-accent">{s.eyebrow}</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted">{s.summary}</p>
                  <ul className="mt-8 space-y-2 text-sm text-ink/80">
                    {s.offerings.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="text-accent">▸</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-8 p-8 md:col-span-8 md:grid-cols-2 md:p-10">
                  <Block label="Problem" body={s.problem} />
                  <Block label="Our solution" body={s.solution} />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Key benefits
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink/85">
                      {s.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      Expected outcomes
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-ink/85">
                      {s.outcomes.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-8 py-5 md:px-10">
                <PlaceholderBadge />
                <Button href="/contact">Get started</Button>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBanner title="Not sure which service you need?" body="Tell us the problem. We’ll recommend the smallest thing that actually moves the needle." />
    </>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/85">{body}</p>
    </div>
  );
}
