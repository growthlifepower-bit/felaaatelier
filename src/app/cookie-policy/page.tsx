import { legalBrandName } from "@/lib/legal";
import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { CookiePolicyView } from "@/views/cookie-policy-view";

const description = `Cookie and consent information for the ${legalBrandName} editorial site.`;

export const metadata = buildPageMetadata({
  title: "Cookie Policy",
  description,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <CookiePolicyView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/cookie-policy",
          name: "Cookie Policy",
          description,
        })}
      />
    </>
  );
}
