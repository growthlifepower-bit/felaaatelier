import { StructuredDataScripts } from "@/components/structured-data-scripts";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageStructuredData } from "@/lib/structured-data";
import { JournalView } from "@/views/journal-view";

const description =
  "Studio notes and editorial reflections on draping, pattern logic, and textile behavior.";

export const metadata = buildPageMetadata({
  title: "Journal",
  description,
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <JournalView />
      <StructuredDataScripts
        data={buildPageStructuredData({
          path: "/journal",
          name: "Journal",
          description,
          type: "Blog",
        })}
      />
    </>
  );
}
