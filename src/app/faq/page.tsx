import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about 4wordtech’s IT services.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[900px] px-5 pb-12 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                FAQ
              </p>
              <PlaceholderBadge />
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Straight answers.
            </h1>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <details className="group py-6">
                  <summary className="cursor-pointer list-none font-display text-xl font-semibold tracking-tight marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-muted leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Still wondering?" />
    </>
  );
}
