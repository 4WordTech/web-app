import type { MetadataRoute } from "next";
import { posts, projects } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
    "/process",
    "/pricing",
    "/blog",
    "/careers",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
    })),
  ];
}
