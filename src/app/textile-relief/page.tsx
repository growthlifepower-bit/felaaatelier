import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { TextileReliefView } from "@/views/textile-relief-view";

const description =
  "Textile relief studies focused on texture, surface manipulation, and the quiet architecture of cloth.";

export const metadata = buildPageMetadata({
  title: "Textile Relief",
  description,
  path: "/textile-relief",
});

export default function TextileReliefPage() {
  return (
    <>
      <TextileReliefView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/textile-relief",
          name: "Textile Relief",
          description,
          type: "CollectionPage",
        })}
      />
    </>
  );
}
