export type NavigationItem = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "F\u1EB9LA\u00C1 Atelier",
  title: "F\u1EB9LA\u00C1 Atelier",
  description:
    "Editorial fashion site documenting textile relief, pattern engineering, and couture craftsmanship.",
};

export const navigationItems: NavigationItem[] = [
  { href: "/couture-mastery", label: "Couture" },
  { href: "/textile-relief", label: "Textile" },
  { href: "/pattern-engineering", label: "Pattern" },
  { href: "/atelier", label: "Maker's Kit" },
  { href: "/journal", label: "Journal" },
  { href: "/store", label: "Collect" },
];

export const publicRoutePaths = [
  "/",
  "/atelier",
  "/textile-relief",
  "/pattern-engineering",
  "/couture-mastery",
  "/journal",
  "/store",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
] as const;
