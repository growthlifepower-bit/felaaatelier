import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { legalBrandName } from "@/lib/legal";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { HomeView } from "@/views/home-view";

const description =
  "An editorial fashion atelier documenting textile relief, pattern engineering, and couture craftsmanship.";

export const metadata = buildPageMetadata({
  title: legalBrandName,
  description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/",
          name: legalBrandName,
          description,
          type: "CollectionPage",
        })}
      />
    </>
  );
}
