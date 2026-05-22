import Image from "next/image";
import { journalEntries, routeIllustrations } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export function JournalView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Journal"
        title="Notes from the studio"
        description="A light editorial layer for reflections on draping, pattern decisions, and textile behavior."
        imageSrc={routeIllustrations.journal}
        imageAlt="Journal placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Journal"
          title="Notes from the studio"
          description="A light editorial layer for reflections on draping, pattern decisions, and textile behavior."
          centered
        />

        {journalEntries.map((entry) => (
          <article
            key={entry.slug}
            className="border border-line bg-paper/85 p-6 shadow-card"
          >
            <div className="flex flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex max-w-3xl flex-col gap-2.5">
                <div className="relative aspect-[5/3] overflow-hidden bg-panel">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42rem, 100vw"
                  />
                </div>
                <p className="text-xs uppercase tracking-editorial text-bronze">
                  {entry.date} / {entry.category}
                </p>
                <h2 className="font-display text-4xl italic leading-tight text-ink">
                  {entry.title}
                </h2>
                <p className="text-base leading-8 text-muted">{entry.excerpt}</p>
              </div>
              <div className="border border-line bg-white/75 px-4 py-3 text-xs uppercase tracking-editorial text-muted">
                Current entry
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
