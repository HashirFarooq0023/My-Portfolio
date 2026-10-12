import type { MetadataRoute } from "next";
import { projects } from "@/lib/content/projects";
import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.id}`,
      changeFrequency: "yearly" as const,
      priority: p.featured ? 0.8 : 0.6,
    })),
  ];
}
