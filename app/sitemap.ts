import type { MetadataRoute } from "next";

import { jobs } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/jobs",
    "/consejos",
    "/consejos/empleo",
    "/consejos/entrevista",
    "/consejos/cv",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/notice",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const jobEntries = jobs.map((job) => ({
    url: `${siteConfig.url}/jobs/${job.slug}`,
    lastModified: new Date(job.updatedAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...jobEntries];
}
