import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Button, PlaceholderBadge, Reveal } from "@/components/ui";
import { careers, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join 4wordtech — a startup providing IT services to clients.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-radial-fade pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Careers
              </p>
              <PlaceholderBadge />
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Help us deliver IT services to clients.
            </h1>
            <p className="mt-5 max-w-xl text-muted md:text-lg">
              Roles below are placeholders. Update titles, or leave the page as a
              speculative applications inbox.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8">
        <div className="divide-y divide-line overflow-hidden rounded-[28px] border border-line">
          {careers.map((role) => (
            <div key={role.title} className="flex flex-col gap-4 bg-surface p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold">{role.title}</h2>
                <p className="mt-1 text-sm text-muted">{role.type}</p>
                <p className="mt-3 max-w-xl text-sm text-ink/80">{role.blurb}</p>
              </div>
              <Button href={`mailto:${site.email}?subject=${encodeURIComponent(role.title)}`}>
                Apply
              </Button>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="No role that fits?"
        body={`Send a note to ${site.email} anyway. We hire people, not job titles.`}
      />
    </>
  );
}
