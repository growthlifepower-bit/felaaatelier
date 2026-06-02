"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { X } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { routeIllustrations, readyToCollectItems, storeCollections, storePieces } from "@/lib/content";
import { legalContactEmail } from "@/lib/legal";

const initialPiece = storePieces[0];

const getCtaText = (availability: string): string => {
  if (availability.toLowerCase().includes("available")) {
    return "Collect this Piece";
  } else if (availability.toLowerCase().includes("pre")) {
    return "Pre-Order";
  } else if (availability.toLowerCase().includes("commission")) {
    return "Check Availability";
  }
  return "Enquire About This Piece";
};

export function StoreView() {
  const [activePieceSlug, setActivePieceSlug] = useState(initialPiece?.slug ?? "");

  const activePiece = useMemo(
    () =>
      readyToCollectItems.find((piece) => piece.slug === activePieceSlug) ??
      storePieces.find((piece) => piece.slug === activePieceSlug) ??
      initialPiece,
    [activePieceSlug]
  );

  const closeModal = () => setActivePieceSlug("");

  // Prevent body scroll when modal is open on mobile
  if (typeof document !== "undefined") {
    const isModalOpen = activePieceSlug && typeof window !== "undefined" && window.innerWidth < 1024;
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  if (!activePiece) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Store"
        title="Curated works in gallery form"
        description="A shoppable editorial room for collectible pieces, capsule looks, and couture-led studies."
        caption="Select a piece to reveal its price, material notes, and acquisition details."
        imageSrc={routeIllustrations.store}
        imageAlt="Curated store study composition"
        priority
      />

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Ready to Collect"
          title="Curated pieces available now"
          description="Hand-selected works across all studio disciplines—from couture pieces to textiles and art."
          centered
        />

        {/* Ready to Collect Grid */}
        <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {readyToCollectItems.map((piece) => (
            <button
              key={piece.slug}
              type="button"
              onClick={() => setActivePieceSlug(piece.slug)}
              className="group border border-line bg-paper p-3 text-left shadow-card transition hover:border-bronze"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-blush">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2.5 px-1 pb-1 pt-3">
                <p className="text-[11px] uppercase tracking-editorial text-bronze">
                  {piece.collection}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl italic leading-tight text-ink">
                  {piece.title}
                </h3>
                <p className="text-[11px] uppercase tracking-editorial text-muted">
                  {piece.price}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Gallery Store"
          title="Made-to-order & commission pieces"
          description="Bespoke works crafted to your vision. Select a piece to explore customization options."
          centered
        />

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid gap-2.5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col gap-2.5">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {storePieces.map((piece) => {
                const isActive = piece.slug === activePiece.slug;

                return (
                  <button
                    key={piece.slug}
                    type="button"
                    onClick={() => setActivePieceSlug(piece.slug)}
                    aria-pressed={isActive}
                    className={clsx(
                      "group border bg-paper p-3 text-left shadow-card transition",
                      isActive
                        ? "border-bronze ring-1 ring-bronze/45"
                        : "border-line hover:border-bronze"
                    )}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-blush">
                      <Image
                        src={piece.image}
                        alt={piece.title}
                        fill
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        sizes="24vw"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 px-1 pb-1 pt-3">
                      <p className="text-[11px] uppercase tracking-editorial text-bronze">
                        {piece.collection}
                      </p>
                      <h3 className="font-display text-3xl italic leading-tight text-ink">
                        {piece.title}
                      </h3>
                      <p className="text-[11px] uppercase tracking-editorial text-muted">
                        {piece.price}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Detail Panel */}
          <aside className="flex flex-col gap-2.5 border border-line bg-paper/90 p-3 shadow-card sm:p-4 h-fit sticky top-24">
            <div className="relative aspect-[4/5] overflow-hidden bg-blush">
              <Image
                src={activePiece.image}
                alt={activePiece.title}
                fill
                className="object-cover object-top"
                sizes="36vw"
              />
            </div>

            <div className="flex flex-col gap-2.5 px-1 pb-1">
              <p className="text-[11px] uppercase tracking-editorial text-bronze">
                {activePiece.collection}
              </p>
              <h2 className="font-display text-4xl italic leading-tight text-ink">
                {activePiece.title}
              </h2>
              <p className="text-base leading-8 text-muted">{activePiece.details}</p>
            </div>

            <dl className="grid gap-2.5 border border-line bg-white/80 p-4 text-sm leading-7 text-muted">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                <dt className="text-[11px] uppercase tracking-editorial text-ink">Price</dt>
                <dd className="font-semibold text-ink">{activePiece.price}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                <dt className="text-[11px] uppercase tracking-editorial text-ink">Size</dt>
                <dd>{activePiece.size}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                <dt className="text-[11px] uppercase tracking-editorial text-ink">Medium</dt>
                <dd className="text-right">{activePiece.medium}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[11px] uppercase tracking-editorial text-ink">Availability</dt>
                <dd className="font-semibold text-bronze">{activePiece.availability}</dd>
              </div>
            </dl>

            <a
              href={`mailto:${legalContactEmail}?subject=${encodeURIComponent(`Store Enquiry: ${activePiece.title}`)}`}
              className="inline-flex items-center justify-center border border-line bg-paper px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze hover:bg-paper/50"
            >
              {getCtaText(activePiece.availability)}
            </a>
          </aside>
        </div>

        {/* Mobile: Gallery only (modal appears on click) */}
        <div className="lg:hidden grid gap-2.5 grid-cols-1 sm:grid-cols-2">
          {storePieces.map((piece) => (
            <button
              key={piece.slug}
              type="button"
              onClick={() => setActivePieceSlug(piece.slug)}
              className="group border border-line bg-paper p-3 text-left shadow-card transition hover:border-bronze"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-blush">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2.5 px-1 pb-1 pt-3">
                <p className="text-[11px] uppercase tracking-editorial text-bronze">
                  {piece.collection}
                </p>
                <h3 className="font-display text-2xl italic leading-tight text-ink">
                  {piece.title}
                </h3>
                <p className="text-[11px] uppercase tracking-editorial text-muted">
                  {piece.price}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Collections"
          title="Curated looks and collectible editions"
          description="Each collection is arranged like a gallery wall: edited, intentional, and built for close reading."
          centered
        />

        <div className="grid gap-2.5 lg:grid-cols-3">
          {storeCollections.map((collection) => (
            <article
              key={collection.slug}
              className="border border-line bg-paper/85 p-3 shadow-card transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-blush">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2.5 px-1 pb-1 pt-4">
                <p className="text-[11px] uppercase tracking-editorial text-bronze">
                  {collection.season}
                </p>
                <h2 className="font-display text-3xl italic leading-tight text-ink">
                  {collection.title}
                </h2>
                <p className="text-sm leading-7 text-muted">{collection.story}</p>
                <p className="text-[11px] uppercase tracking-editorial text-muted">
                  {collection.pieceCount}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mobile Modal - Only visible on mobile */}
      {activePieceSlug && (
        <div
          className="hidden max-lg:fixed max-lg:inset-0 max-lg:z-50 max-lg:flex max-lg:items-end max-lg:justify-center max-lg:bg-black/40 max-lg:backdrop-blur-sm max-lg:overflow-hidden"
          onClick={closeModal}
        >
          <div
            className="w-full h-[95vh] bg-paper border border-line shadow-lg rounded-t-2xl overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-paper/80 border border-line rounded-full transition hover:border-bronze"
              aria-label="Close modal"
            >
              <X size={20} className="text-ink" />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-blush flex-shrink-0">
              <Image
                src={activePiece.image}
                alt={activePiece.title}
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
            </div>

            {/* Details - Scrollable */}
            <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-2.5 px-5 py-6 sm:px-8">
              <div className="flex flex-col gap-2.5">
                <p className="text-[11px] uppercase tracking-editorial text-bronze">
                  {activePiece.collection}
                </p>
                <h2 className="font-display text-3xl italic leading-tight text-ink">
                  {activePiece.title}
                </h2>
                <p className="text-sm leading-8 text-muted">{activePiece.details}</p>
              </div>

              <dl className="grid gap-2.5 border border-line bg-white/80 p-4 text-sm leading-7 text-muted">
                <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-[11px] uppercase tracking-editorial text-ink">Price</dt>
                  <dd className="font-semibold text-ink">{activePiece.price}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-[11px] uppercase tracking-editorial text-ink">Size</dt>
                  <dd>{activePiece.size}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                  <dt className="text-[11px] uppercase tracking-editorial text-ink">Medium</dt>
                  <dd className="text-right">{activePiece.medium}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[11px] uppercase tracking-editorial text-ink">Availability</dt>
                  <dd className="font-semibold text-bronze">{activePiece.availability}</dd>
                </div>
              </dl>

              <a
                href={`mailto:${legalContactEmail}?subject=${encodeURIComponent(`Store Enquiry: ${activePiece.title}`)}`}
                className="inline-flex items-center justify-center border border-line bg-paper px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze hover:bg-paper/50 mt-auto"
              >
                {getCtaText(activePiece.availability)}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
