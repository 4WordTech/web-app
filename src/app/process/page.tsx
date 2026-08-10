import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { communicationStyle, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description: "How 4wordtech works: discovery, build, launch, support.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Process
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              A calm path from idea to live product.
            </h1>
            <p className="mt-5 max-w-xl text-muted md:text-lg">
              Timelines below are placeholders. Tune them once you know your real
              delivery cadence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-16 md:px-8">
        <ol className="space-y-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.06}>
              <li className="grid gap-6 rounded-[28px] border border-line bg-surface p-8 md:grid-cols-12 md:p-10">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold">{step.title}</h2>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {step.duration}
                    </span>
                    <PlaceholderBadge />
                  </div>
                </div>
                <p className="text-muted leading-relaxed md:col-span-8 md:text-lg">
                  {step.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Communication
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              How we talk while we build.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {communicationStyle.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-[28px] border border-line p-8">
                  <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want this process on your IT project?" />
    </>
  );
}
