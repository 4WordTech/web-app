import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PlaceholderBadge, Reveal } from "@/components/ui";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on IT services, delivery, and shipping software for clients.",
};

export default function BlogPage() {
  return (
    <section className="bg-radial-fade pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Insights
            </p>
            <PlaceholderBadge />
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Notes on IT services — before the sales call.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            Placeholder posts for SEO and authority. Replace with real articles
            when you have them.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-12 md:items-center"
              >
                <p className="font-mono text-xs text-muted md:col-span-2">
                  {formatDate(post.date)}
                </p>
                <div className="md:col-span-8">
                  <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {post.tag}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight group-hover:text-accent md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                </div>
                <span className="text-accent md:col-span-2 md:justify-self-end">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
