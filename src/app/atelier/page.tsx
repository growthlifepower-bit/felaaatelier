import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { AtelierView } from "@/views/atelier-view";

const description =
  "The atelier overview route connecting textile relief, pattern engineering, and couture construction.";

export const metadata = buildPageMetadata({
  title: "The Atelier",
  description,
  path: "/atelier",
});

export default function AtelierPage() {
  return (
    <>
      <AtelierView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/atelier",
          name: "The Atelier",
          description,
          type: "CollectionPage",
        })}
      />
    </>
  );
}
