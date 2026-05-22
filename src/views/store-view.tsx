"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { routeIllustrations, storeCollections, storePieces } from "@/lib/content";
import { legalContactEmail } from "@/lib/legal";

const initialPiece = storePieces[0];

export function StoreView() {
  const [activePieceSlug, setActivePieceSlug] = useState(initialPiece?.slug ?? "");

  const activePiece = useMemo(
    () => storePieces.find((piece) => piece.slug === activePieceSlug) ?? initialPiece,
    [activePieceSlug]
  );

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

      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-content gap-2.5 px-5 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="flex flex-col gap-2.5">
            <SectionHeading
              eyebrow="Gallery Store"
              title="Select pieces to view pricing and details"
              description="Each card opens a focused detail panel so every work reads as an individual exhibit."
            />

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
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 24vw, 100vw"
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

          <aside className="flex flex-col gap-2.5 border border-line bg-paper/90 p-3 shadow-card sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-blush">
              <Image
                src={activePiece.image}
                alt={activePiece.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>

            <div className="flex flex-col gap-2.5 px-1 pb-1">
              <p className="text-[11px] uppercase tracking-editorial text-bronze">Active piece</p>
              <h2 className="font-display text-4xl italic leading-tight text-ink">
                {activePiece.title}
              </h2>
              <p className="text-base leading-8 text-muted">{activePiece.details}</p>
            </div>

            <dl className="grid gap-2.5 border border-line bg-white/80 p-4 text-sm leading-7 text-muted">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-2">
                <dt className="text-[11px] uppercase tracking-editorial text-ink">Price</dt>
                <dd>{activePiece.price}</dd>
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
                <dd>{activePiece.availability}</dd>
              </div>
            </dl>

            <a
              href={`mailto:${legalContactEmail}?subject=${encodeURIComponent(`Store Enquiry: ${activePiece.title}`)}`}
              className="inline-flex items-center justify-center border border-line bg-paper px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
            >
              Enquire about this piece
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
