import { routeIllustrations, textilePrinciples, textileSteps } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { QuoteBlock } from "@/components/quote-block";
import { SectionHeading } from "@/components/section-heading";

export function TextileReliefView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Textile Relief"
        title="Surfaces shaped by touch, pressure, and shadow"
        description="Textile relief studies how a flat cloth can hold atmosphere through manipulation, density, and controlled light."
        imageSrc={routeIllustrations.textileRelief}
        imageAlt="Textile relief placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="Three stages of the surface study"
          description="The route keeps the making process visible rather than collapsing it into a final still image."
          centered
        />
        <div className="flex flex-wrap gap-2.5">
          {textileSteps.map((step) => (
            <article
              key={step.number}
              className="min-w-[17rem] flex-1 border border-line bg-paper/85 p-5 shadow-card"
            >
              <div className="flex flex-col gap-2.5">
                <p className="text-xs uppercase tracking-editorial text-bronze">{step.number}</p>
                <h2 className="font-display text-3xl italic text-ink">{step.title}</h2>
                <p className="text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
          <SectionHeading
            eyebrow="Principles"
            title="What keeps the surface elegant"
            description="Relief remains controlled only when it stays accountable to light, touch, and restraint."
            centered
          />
          <div className="flex flex-wrap gap-2.5">
            {textilePrinciples.map((principle) => (
              <div
                key={principle.title}
                className="min-w-[16rem] flex-1 border border-line bg-paper/85 p-5 shadow-card"
              >
                <h3 className="font-display text-2xl italic text-ink">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-14 lg:px-8">
        <QuoteBlock quote="Relief works only when the cloth still feels calm after the manipulation is complete." />
      </section>
    </div>
  );
}
