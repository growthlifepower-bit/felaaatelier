import { buildAbsoluteUrl, siteSEO } from "@/lib/seo";
import { legalBusinessLocation, legalBrandName, legalContactEmail } from "@/lib/legal";

type StructuredData = Record<string, unknown>;

export function buildGlobalStructuredData(): StructuredData[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: legalBrandName,
      url: siteSEO.baseUrl,
      email: legalContactEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: legalBusinessLocation,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: legalBrandName,
      url: siteSEO.baseUrl,
    },
  ];
}

type PageStructuredDataInput = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "Blog";
};

export function buildPageStructuredData({
  path,
  name,
  description,
  type = "WebPage",
}: PageStructuredDataInput): StructuredData[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": type,
      name,
      description,
      url: buildAbsoluteUrl(path),
      isPartOf: {
        "@type": "WebSite",
        name: legalBrandName,
        url: siteSEO.baseUrl,
      },
    },
  ];
}
