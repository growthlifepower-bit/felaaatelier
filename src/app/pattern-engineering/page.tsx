import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { PatternEngineeringView } from "@/views/pattern-engineering-view";

const description =
  "Pattern engineering studies focused on technical drafting, geometry, and garment structure.";

export const metadata = buildPageMetadata({
  title: "Pattern Engineering",
  description,
  path: "/pattern-engineering",
});

export default function PatternEngineeringPage() {
  return (
    <>
      <PatternEngineeringView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/pattern-engineering",
          name: "Pattern Engineering",
          description,
          type: "CollectionPage",
        })}
      />
    </>
  );
}
