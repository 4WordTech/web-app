"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center px-5 pt-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        Error
      </p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">
        Something broke.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        An unexpected error stopped this page. Try again, or head home.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Back home
        </Button>
      </div>
    </section>
  );
}
