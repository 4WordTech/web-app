import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Arrow, PlaceholderBadge, Reveal } from "@/components/ui";
import { projects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: "Example IT projects 4wordtech can take on for clients.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Work
              </p>
              <PlaceholderBadge />
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Example projects — the IT work we take on.
            </h1>
            <p className="mt-5 max-w-xl text-muted md:text-lg">
              These are sample client engagements, not live case studies. Each
              card follows problem → solution → outcome. Replace them when you
              have real work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] space-y-5 px-5 pb-20 md:px-8">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              className="group grid overflow-hidden rounded-[28px] border border-line bg-surface md:grid-cols-12"
            >
              <div
                className="relative min-h-[240px] md:col-span-5 md:min-h-[360px]"
                style={{
                  background: `linear-gradient(145deg, ${p.color}40, #111 55%, #070707)`,
                }}
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <p className="absolute left-8 top-8 font-display text-7xl font-semibold text-white/15">
                  0{i + 1}
                </p>
                <div className="absolute bottom-8 left-8">
                  <PlaceholderBadge />
                  <p className="mt-3 text-xs text-muted">Screenshot slot</p>
                </div>
              </div>
              <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-12">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {p.category} · {p.year}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-muted">{p.problem}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-8 inline-flex items-center gap-2 text-sm text-accent">
                  View example <Arrow />
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <CtaBanner title="Have an IT project in mind?" />
    </>
  );
}
