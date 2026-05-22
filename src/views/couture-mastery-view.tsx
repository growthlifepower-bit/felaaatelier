import { coutureTechniques, coutureValues, routeIllustrations } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { QuoteBlock } from "@/components/quote-block";
import { SectionHeading } from "@/components/section-heading";
import { TechniqueExplorer } from "@/components/technique-explorer";

export function CoutureMasteryView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Couture Mastery"
        title="Construction refined through repetition"
        description="Couture mastery is framed here as disciplined handling, internal order, and the kind of finishing that stays quiet until it is missing."
        imageSrc={routeIllustrations.coutureMastery}
        imageAlt="Couture mastery placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Technique"
          title="Methods that support the garment without announcing themselves"
          description="The route keeps handwork, machine logic, and material handling in dialogue rather than treating them as separate camps."
          centered
        />
        <TechniqueExplorer techniques={coutureTechniques} />
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
          <SectionHeading
            eyebrow="Values"
            title="What the route defends"
            description="These are the operating values behind the finishing logic, not marketing slogans."
            centered
          />
          <div className="flex flex-wrap gap-2.5">
            {coutureValues.map((value, index) => (
              <div
                key={value}
                className="min-w-[14rem] flex-1 border border-line bg-paper/85 p-5 shadow-card"
              >
                <p className="text-xs uppercase tracking-editorial text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-14 lg:px-8">
        <QuoteBlock quote="Mastery reveals itself in pressure, tension, and finish long before it needs a dramatic gesture." />
      </section>
    </div>
  );
}
