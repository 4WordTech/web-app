import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderBadge, Reveal } from "@/components/ui";
import { posts, site } from "@/lib/content";
import { absoluteUrl, pageMetadata, SITE_URL } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: site.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article className="pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-5 pb-16 md:px-8">
          <Reveal>
            <Link href="/blog" className="text-sm text-muted hover:text-ink">
              ← Insights
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {post.tag} · {formatDate(post.date)}
              </p>
              <PlaceholderBadge />
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted">{post.excerpt}</p>
          </Reveal>

          <div className="prose-invert mt-10 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
            <p>
              This is placeholder body copy. Replace it with the real article —
              or connect a CMS later (Sanity, Notion, MDX).
            </p>
            <p>
              Until then, this page exists so the Insights section has somewhere
              to land, and so search engines have a URL to index.
            </p>
            <p>
              Suggested structure: hook → a mistake clients make when buying IT
              work → how 4wordtech approaches it → a short example → a CTA.
            </p>
          </div>
        </div>
      </article>
      <CtaBanner title="Want this thinking on your IT project?" />
    </>
  );
}
