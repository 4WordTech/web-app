import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with 4wordtech for IT services — websites, apps, cloud, AI, and support.",
};

export default function ContactPage() {
  return (
    <section className="bg-radial-fade pt-32 md:pt-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-24 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Tell us what IT work you need.
          </h1>
          <p className="mt-5 max-w-md text-muted">
            A short note is enough. If it’s a fit, we’ll book a call. If it isn’t,
            we’ll say so.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <Row label="Email" value={site.email} href={`mailto:${site.email}`} />
            <Row label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} badge />
            <Row label="WhatsApp" value="Message us" href={site.whatsapp} badge />
            <Row label="Calendar" value="Book a slot" href={site.calendarUrl} badge />
            <Row label="Studio" value={site.location} badge />
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <div className="rounded-[28px] border border-line bg-surface p-6 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <h2 className="font-display text-2xl font-semibold">Write to us</h2>
              <PlaceholderBadge />
            </div>
            <ContactForm />
          </div>

          <div className="mt-6 rounded-[28px] border border-dashed border-line p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Calendar embed
              </p>
              <PlaceholderBadge />
            </div>
            <p className="text-sm text-muted">
              Drop a Calendly / SavvyCal iframe here later. For now, use the
              booking link above.
            </p>
            <a
              href={site.calendarUrl}
              className="mt-4 inline-block text-sm text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Open booking link →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  href,
  badge,
}: {
  label: string;
  value: string;
  href?: string;
  badge?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
      <dt className="text-muted">{label}</dt>
      <dd className="flex items-center gap-2 text-right">
        {href ? (
          <a href={href} className="hover:text-accent" target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )}
        {badge ? <PlaceholderBadge /> : null}
      </dd>
    </div>
  );
}
