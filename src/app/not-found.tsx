import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center px-5 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">
        This page didn’t ship.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The URL is a dead end. Try one of these instead — or head home and start over.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back home</Button>
        <Button href="/services" variant="secondary">
          Services
        </Button>
        <Button href="/work" variant="secondary">
          Work
        </Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </section>
  );
}
