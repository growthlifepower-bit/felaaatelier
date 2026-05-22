import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { CoutureMasteryView } from "@/views/couture-mastery-view";

const description =
  "Couture mastery studies focused on finishing discipline, garment handling, and construction craft.";

export const metadata = buildPageMetadata({
  title: "Couture Mastery",
  description,
  path: "/couture-mastery",
});

export default function CoutureMasteryPage() {
  return (
    <>
      <CoutureMasteryView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/couture-mastery",
          name: "Couture Mastery",
          description,
          type: "CollectionPage",
        })}
      />
    </>
  );
}
