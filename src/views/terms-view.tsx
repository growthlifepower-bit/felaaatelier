import { PageHero } from "@/components/page-hero";
import { legalBrandName, legalBusinessLocation, legalContactEmail, legalLastUpdated } from "@/lib/legal";
import { routeIllustrations } from "@/lib/content";

export function TermsView() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Terms"
        title="Website terms of use"
        description={`These terms govern access to the public ${legalBrandName} website in its current editorial release.`}
        caption={`Last updated: ${legalLastUpdated}`}
        imageSrc={routeIllustrations.legal}
        imageAlt="Legal placeholder composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">1. Site purpose</h2>
          <p className="text-base leading-8 text-muted">
            This site is an editorial and brand presence for {legalBrandName}. It is intended to
            present work, process, and written material about the atelier. It does not currently
            provide user accounts, transactions, or public submission workflows.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">2. Acceptable use</h2>
          <p className="text-base leading-8 text-muted">
            You may browse the site for lawful and informational purposes only. You must not attempt
            to interfere with the site&apos;s operation, probe it for vulnerabilities, or use any content
            in a way that misrepresents the atelier or its work.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">3. Intellectual property</h2>
          <p className="text-base leading-8 text-muted">
            Unless otherwise stated, the site design, copy, brand presentation, and editorial
            compositions are owned by or used with permission by {legalBrandName}. You should not copy
            or republish them without approval.
          </p>
        </article>

        <article className="flex flex-col gap-2.5">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">4. Accuracy and liability</h2>
          <p className="text-base leading-8 text-muted">
            The website content is provided for general information about the atelier. While care is
            taken over accuracy and presentation, the site is provided on an as-is basis and may
            change over time. Nothing here creates a contractual relationship on its own.
          </p>
        </article>

        <article className="border border-line bg-panel p-6">
          <h2 className="text-2xl uppercase tracking-[0.14em] text-ink">Contact</h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Questions about these terms can be sent to {legalContactEmail}. Location reference:
            {` ${legalBusinessLocation}.`}
          </p>
        </article>
      </section>
    </div>
  );
}
