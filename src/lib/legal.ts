const currentYear = new Date().getFullYear();

export const legalBrandName = "F\u1EB9LA\u00C1 Atelier";
export const legalBusinessName =
  process.env.NEXT_PUBLIC_BUSINESS_NAME ?? legalBrandName;
export const legalContactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com";
export const legalBusinessLocation =
  process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? "London, United Kingdom";
export const legalLastUpdated = "March 24, 2026";
export const legalCopyrightLine = `${legalBrandName} ${currentYear}`;
