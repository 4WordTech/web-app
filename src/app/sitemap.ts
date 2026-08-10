import type { MetadataRoute } from "next";
import { posts, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://4wordtech.com";
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
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
