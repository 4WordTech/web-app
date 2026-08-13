import type { Metadata } from "next";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of use",
  description: `Terms for using the ${site.name} website and engaging our IT services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Legal
            </p>
            <PlaceholderBadge />
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Terms of use
          </h1>
          <p className="mt-4 text-sm text-muted">
            Placeholder copy. Have a lawyer review before launch.
          </p>
        </Reveal>
        <div className="mt-10 space-y-5 leading-relaxed text-ink/85">
          <p>
            This website is provided by {site.name} for informational purposes.
            Engagements are governed by a separate statement of work.
          </p>
          <p>
            Content, branding, and case studies (including placeholders) remain
            the property of {site.name} or their respective owners.
          </p>
          <p>
            Questions: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
