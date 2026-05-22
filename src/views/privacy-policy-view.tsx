import { PageHero } from "@/components/page-hero";
import { legalBrandName, legalBusinessLocation, legalContactEmail, legalLastUpdated } from "@/lib/legal";
import { routeIllustrations } from "@/lib/content";

export function PrivacyPolicyView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Privacy Policy"
        title="How this site handles data"
        description={`${legalBrandName} is an editorial fashion website. This page explains what limited data is processed in the current release and how optional tracking is handled.`}
        caption={`Last updated: ${legalLastUpdated}`}
        imageSrc={routeIllustrations.legal}
        imageAlt="Legal placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">1. What we collect</h2>
          <p className="text-base leading-8 text-muted">
            In the current site release, {legalBrandName} does not provide public account creation or
            an on-site contact form. The main data processed is limited to basic technical request
            information needed to serve the site, and any cookie-consent choice stored in your
            browser.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">2. Optional analytics</h2>
          <p className="text-base leading-8 text-muted">
            Optional analytics is placeholder-only in this implementation. No non-essential analytics
            should be active unless you explicitly allow it and a real provider is configured later.
            The consent banner is designed so this future setup remains opt-in.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">3. Data retention</h2>
          <p className="text-base leading-8 text-muted">
            Cookie-consent preferences remain in your browser until you clear them or change them via
            the cookie settings control. Any hosting-level request logs are controlled by the hosting
            provider and retained according to that provider&apos;s operational policies.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">4. Your choices</h2>
          <p className="text-base leading-8 text-muted">
            You can choose necessary-only storage or allow analytics through the cookie banner and the
            cookie settings control in the footer. Because this release does not yet use a live
            analytics provider, these controls currently prepare the site for a later approved
            integration.
          </p>
        </article>

        <article className="border border-line bg-panel p-6">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">Contact</h2>
          <p className="mt-4 text-base leading-8 text-muted">
            For privacy questions related to this site, contact {legalBrandName} at {legalContactEmail}
            . Business location reference: {legalBusinessLocation}.
          </p>
        </article>
      </section>
    </div>
  );
}
