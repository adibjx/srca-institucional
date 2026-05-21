import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/constants";
import { getAllArticles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/servicos", priority: 0.9, freq: "monthly" as const },
    { path: "/sobre", priority: 0.7, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "weekly" as const },
    { path: "/contato", priority: 0.6, freq: "yearly" as const },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    path: `/servicos/${s.slug}`,
    priority: 0.85,
    freq: "monthly" as const,
    lastModified: now,
  }));

  const articleRoutes = getAllArticles().map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.75,
    freq: "monthly" as const,
    lastModified: new Date(a.date),
  }));

  return [
    ...routes.map((r) => ({
      url: new URL(r.path, SITE.url).toString(),
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...serviceRoutes.map((r) => ({
      url: new URL(r.path, SITE.url).toString(),
      lastModified: r.lastModified,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...articleRoutes.map((r) => ({
      url: new URL(r.path, SITE.url).toString(),
      lastModified: r.lastModified,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
  ];
}
