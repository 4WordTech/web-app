import { Button, PlaceholderBadge, Reveal } from "@/components/ui";

export function CtaBanner({
  title = "Let’s talk about your IT needs.",
  body = "Book a free consultation. Tell us what you need built or supported — we’ll say if we’re a fit.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] border border-line bg-elevated px-8 py-14 md:px-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Ready when you are
                </p>
                <PlaceholderBadge />
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {title}
              </h2>
              <p className="mt-4 max-w-lg text-muted md:text-lg">{body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a free consultation</Button>
              <Button href="/work" variant="secondary">
                See example work
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
