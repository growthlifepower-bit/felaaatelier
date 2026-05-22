import type { Metadata } from "next";
import { legalBrandName } from "@/lib/legal";

function normalizeBaseUrl(input?: string) {
  const fallback = "https://felaaatelier.example.com";
  const value = input && input.trim().length > 0 ? input : fallback;
  return value.replace(/\/+$/, "");
}

export const siteSEO = {
  siteName: legalBrandName,
  baseUrl: normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL),
  defaultTitle: `${legalBrandName} | Editorial Fashion Atelier`,
  defaultDescription:
    "An editorial fashion atelier documenting textile relief, pattern engineering, and couture craftsmanship.",
  ogImage: "/branding/og-image-1200x630.svg",
  locale: "en_GB",
  keywords: [
    "fashion atelier",
    "couture",
    "textile relief",
    "pattern engineering",
    "editorial fashion",
  ],
};

export function buildAbsoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteSEO.baseUrl}${normalizedPath}`;
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: BuildPageMetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const image = buildAbsoluteUrl(siteSEO.ogImage);

  return {
    title,
    description,
    keywords: siteSEO.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteSEO.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
