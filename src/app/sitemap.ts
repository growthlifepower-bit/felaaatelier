import type { MetadataRoute } from "next";
import { buildAbsoluteUrl } from "@/lib/seo";
import { publicRoutePaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutePaths.map((path) => ({
    url: buildAbsoluteUrl(path),
    lastModified: new Date().toISOString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
