import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PlaceholderBadge } from "@/components/ui";
import { footerNav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block text-ink">
              <Logo className="h-8" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A startup providing IT services to clients — web, mobile, cloud, AI,
              and support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-2">
                {site.location}
                <PlaceholderBadge />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <FooterCol title="Explore" links={footerNav.explore} />
            <FooterCol title="Company" links={footerNav.company} extraBadge />
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Social
              </p>
              <ul className="space-y-2.5 text-sm">
                {Object.entries(site.socials).map(([name, href]) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="capitalize text-ink/85 hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                <PlaceholderBadge />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footerNav.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  extraBadge,
}: {
  title: string;
  links: { href: string; label: string }[];
  extraBadge?: boolean;
}) {
  return (
    <div>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {title}
      </p>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink/85 hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {extraBadge ? (
        <p className="mt-3">
          <PlaceholderBadge />
        </p>
      ) : null}
    </div>
  );
}
