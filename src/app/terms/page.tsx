import { legalBrandName } from "@/lib/legal";
import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { TermsView } from "@/views/terms-view";

const description = `Terms of use for the ${legalBrandName} editorial website.`;

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <TermsView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/terms",
          name: "Terms of Use",
          description,
        })}
      />
    </>
  );
}
