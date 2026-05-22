import { PageHero } from "@/components/page-hero";
import { legalBrandName, legalLastUpdated } from "@/lib/legal";
import { routeIllustrations } from "@/lib/content";

export function CookiePolicyView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Cookie Policy"
        title="How cookie preferences work here"
        description={`${legalBrandName} currently uses only a minimal local consent preference unless optional analytics is approved and configured later.`}
        caption={`Last updated: ${legalLastUpdated}`}
        imageSrc={routeIllustrations.legal}
        imageAlt="Legal placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">1. Necessary storage</h2>
          <p className="text-base leading-8 text-muted">
            This site stores a small local preference so your cookie choice can be remembered. This is
            used to respect your decision about optional analytics and to avoid showing the banner on
            every visit.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">2. Optional analytics</h2>
          <p className="text-base leading-8 text-muted">
            Optional analytics is not fully configured in this release. The site includes a
            placeholder-safe analytics layer that remains dormant unless a real provider is later
            approved and consent has been granted.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">3. Managing settings</h2>
          <p className="text-base leading-8 text-muted">
            You can reopen cookie settings at any time through the footer control. You can also clear
            your browser storage if you want to remove the saved preference directly.
          </p>
        </article>
      </section>
    </div>
  );
}
