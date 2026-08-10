import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Button, PlaceholderBadge, Reveal } from "@/components/ui";
import { pricing } from "@/lib/content";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Starter, Growth, and Scale IT service packages for clients.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Pricing
              </p>
              <PlaceholderBadge />
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Packages you can actually say out loud.
            </h1>
            <p className="mt-5 max-w-xl text-muted md:text-lg">
              Numbers are starting-from placeholders. Replace with your real
              rates before you go live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <article
                className={cx(
                  "flex h-full flex-col rounded-[28px] border p-8",
                  plan.highlight
                    ? "border-accent/50 bg-elevated"
                    : "border-line bg-surface",
                )}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {plan.intent}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold">{plan.name}</h2>
                <p className="mt-4 text-sm text-muted">{plan.description}</p>
                <p className="mt-8 font-display text-4xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                  {plan.period}
                </p>
                <ul className="mt-8 flex-1 space-y-2.5 text-sm text-ink/85">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-10 w-full" variant={plan.highlight ? "primary" : "secondary"}>
                  Get started
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Need something in between?" body="Most work is scoped after a 30-minute call. Packages are a starting point, not a cage." />
    </>
  );
}
