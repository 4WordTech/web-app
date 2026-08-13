import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { about } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "4wordtech is a startup providing IT services to clients.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              About
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              A startup that provides IT services.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                The story
              </p>
              <PlaceholderBadge />
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink/90">
              {about.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="rounded-[28px] border border-line bg-surface p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Mission
              </p>
              <p className="mt-4 text-xl font-medium leading-snug">{about.mission}</p>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Vision
              </p>
              <p className="mt-4 text-muted">{about.vision}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {about.mindset.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="h-full rounded-[28px] border border-line p-8">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h2 className="mt-6 font-display text-2xl font-semibold">{m.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Skills & experience
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {about.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-4 py-2 text-sm text-ink/80"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Want us on your next IT project?" />
    </>
  );
}
