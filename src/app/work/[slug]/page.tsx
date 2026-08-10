import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { Button, PlaceholderBadge, Reveal } from "@/components/ui";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.problem };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              {project.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <PlaceholderBadge />
              <span className="text-sm text-muted">Example engagement — replace with a real client project</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative mt-10 min-h-[280px] overflow-hidden rounded-[28px] border border-line md:min-h-[420px]"
              style={{
                background: `linear-gradient(145deg, ${project.color}55, #0a0a0a 60%)`,
              }}
            >
              <div className="absolute inset-0 bg-grid opacity-40" />
              <p className="absolute bottom-8 left-8 text-sm text-muted">
                Example visual slot — add a real screenshot later
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-display text-3xl font-semibold">{m.value}</p>
                <p className="mt-1 text-sm text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <Block title="Problem" body={project.problem} />
            <Block title="Solution" body={project.solution} />
            <Block title="Outcome" body={project.outcome} />
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-line px-4 py-2 text-sm text-muted">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line py-8">
            <Button href="/work" variant="secondary">
              All work
            </Button>
            <Link href={`/work/${next.slug}`} className="text-sm text-muted hover:text-ink">
              Next: {next.name} →
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{title}</p>
      <p className="mt-3 leading-relaxed text-muted">{body}</p>
    </div>
  );
}
