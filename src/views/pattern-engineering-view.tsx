import { patternPrinciples, patternSteps, routeIllustrations } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { QuoteBlock } from "@/components/quote-block";
import { SectionHeading } from "@/components/section-heading";

export function PatternEngineeringView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Pattern Engineering"
        title="Where vision becomes accountable"
        description="Pattern engineering turns atmosphere into structure by defining how proportion, movement, and cloth behavior must align."
        imageSrc={routeIllustrations.patternEngineering}
        imageAlt="Pattern engineering placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Development"
          title="From line to structure"
          description="The route records the measured stages required before a garment earns its final silhouette."
          centered
        />
        <div className="flex flex-col gap-2.5">
          {patternSteps.map((step) => (
            <article
              key={step.number}
              className="border border-line bg-paper/85 p-6 shadow-card"
            >
              <div className="flex flex-col gap-2.5 lg:flex-row lg:items-start lg:gap-2.5">
                <p className="text-sm uppercase tracking-editorial text-bronze">{step.number}</p>
                <div className="flex max-w-3xl flex-col gap-2.5">
                  <h2 className="font-display text-3xl italic text-ink">{step.title}</h2>
                  <p className="text-sm leading-7 text-muted">{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
          <SectionHeading
            eyebrow="Principles"
            title="The logic underneath the silhouette"
            description="These principles keep the route technical without losing the atmosphere of the work."
            centered
          />
          <div className="flex flex-wrap gap-2.5">
            {patternPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="min-w-[15rem] flex-1 border border-line bg-paper/85 p-5 shadow-card"
              >
                <h3 className="font-display text-2xl italic text-ink">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-14 lg:px-8">
        <QuoteBlock quote="A pattern is the garment before the garment exists, so any vagueness here will echo through everything that follows." />
      </section>
    </div>
  );
}
