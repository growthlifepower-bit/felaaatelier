import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { StoreView } from "@/views/store-view";

const description =
  "A curated store presenting collectible fashion pieces and editorial capsule looks with pricing and acquisition details.";

export const metadata = buildPageMetadata({
  title: "Store",
  description,
  path: "/store",
});

export default function StorePage() {
  return (
    <>
      <StoreView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/store",
          name: "Store",
          description,
          type: "CollectionPage",
        })}
      />
    </>
  );
}
