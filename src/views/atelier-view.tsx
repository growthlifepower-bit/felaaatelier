import Image from "next/image";
import Link from "next/link";
import { atelierSections, routeIllustrations } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { QuoteBlock } from "@/components/quote-block";
import { SectionHeading } from "@/components/section-heading";

export function AtelierView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="The Atelier"
        title="A studio built on quiet decisions"
        description="The atelier route gathers the three working disciplines into one editorial frame: surface, pattern, and construction."
        caption="Every route here is a different way of documenting how shape is earned."
        imageSrc={routeIllustrations.atelier}
        imageAlt="Placeholder atelier composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Approach"
          title="The work is edited before it is displayed"
          description="The atelier is less interested in quantity than in making each decision legible, from cloth choice to internal finish."
          centered
        />

        <div className="flex flex-col gap-2.5">
          {atelierSections.map((section) => (
            <article
              key={section.href}
              className="flex flex-col border border-line bg-paper/85 p-6 shadow-card sm:p-8"
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex max-w-2xl flex-col gap-2.5">
                  <div className="relative aspect-[5/3] overflow-hidden bg-panel">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 42rem, 100vw"
                    />
                  </div>
                  <h2 className="font-display text-4xl italic leading-tight text-ink">
                    {section.title}
                  </h2>
                  <p className="text-base leading-8 text-muted">{section.summary}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {section.notes.map((note) => (
                  <div
                    key={note}
                    className="min-w-[16rem] flex-1 border border-line bg-white/75 p-4 text-sm leading-7 text-muted"
                  >
                    {note}
                  </div>
                ))}
              </div>
              <Link
                href={section.href}
                className="mt-auto inline-flex items-center justify-center self-start border border-line bg-white/80 px-4 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
              >
                Open route
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 pb-14 lg:px-8">
        <QuoteBlock quote="The atelier is documented as a sequence of technical judgments, not just as a gallery of finished impressions." />
      </section>
    </div>
  );
}
