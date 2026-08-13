import type { Metadata } from "next";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: `How ${site.name} collects and uses contact information on this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
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
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-muted">
            Placeholder copy. Have a lawyer review before launch.
          </p>
        </Reveal>
        <div className="mt-10 space-y-5 leading-relaxed text-ink/85">
          <p>
            {site.name} (“we”) collects only what we need to reply to you: name,
            email, company, and message when you use the contact form.
          </p>
          <p>
            We do not sell personal data. Analytics, if added later, should be
            documented here (e.g. Plausible / GA).
          </p>
          <p>
            Contact: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
