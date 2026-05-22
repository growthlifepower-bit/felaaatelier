import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { AnalyticsPlaceholder } from "@/components/analytics-placeholder";
import { ConsentBanner } from "@/components/consent-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildGlobalStructuredData } from "@/lib/structured-data";
import { buildAbsoluteUrl, siteSEO } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteSEO.baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteSEO.keywords,
  applicationName: siteSEO.siteName,
  creator: siteSEO.siteName,
  publisher: siteSEO.siteName,
  alternates: {
    canonical: buildAbsoluteUrl("/"),
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    url: buildAbsoluteUrl("/"),
    siteName: siteSEO.siteName,
    locale: siteSEO.locale,
    type: "website",
    images: [
      {
        url: buildAbsoluteUrl(siteSEO.ogImage),
        width: 1200,
        height: 630,
        alt: siteSEO.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    images: [buildAbsoluteUrl(siteSEO.ogImage)],
  },
  icons: {
    icon: [
      {
        url: "/branding/favicon-16x16.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
      {
        url: "/branding/favicon-32x32.svg",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        url: "/branding/favicon-48x48.svg",
        sizes: "48x48",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/branding/apple-touch-icon-180x180.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/branding/favicon-32x32.svg"],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#d39874",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = buildGlobalStructuredData();

  return (
    <html lang="en-GB">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-canvas text-ink antialiased`}
      >
        <StructuredDataScripts data={structuredData} />
        <AnalyticsPlaceholder />
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-full bg-ink px-4 py-2 text-xs uppercase tracking-editorial text-canvas transition focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <ConsentBanner />
      </body>
    </html>
  );
}
