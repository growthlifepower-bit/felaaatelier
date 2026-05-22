import type { MetadataRoute } from "next";
import { siteSEO } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
    host: siteSEO.baseUrl,
  };
}
