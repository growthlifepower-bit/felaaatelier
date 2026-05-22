import { legalBrandName } from "@/lib/legal";
import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { PrivacyPolicyView } from "@/views/privacy-policy-view";

const description = `Privacy information for the current ${legalBrandName} editorial site release.`;

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/privacy-policy",
          name: "Privacy Policy",
          description,
        })}
      />
    </>
  );
}
