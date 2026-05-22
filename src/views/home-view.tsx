import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import {
  atelierSections,
  homeHighlights,
  homeStudioNotes,
  journalEntries,
} from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

const heroSections = [
  {
    title: "Textile relief",
    body: "Material studies shaped by tactility, depth, and the quiet architecture of folded cloth.",
  },
  {
    title: "Pattern engineering",
    body: "Measured transitions from sketch to structure, where proportion and movement are resolved with intent.",
  },
  {
    title: "Couture mastery",
    body: "Refined finishing, disciplined handling, and garment logic built through repetition rather than spectacle.",
  },
];

const homeEventMeta = [
  {
    label: "What",
    value: (
      <>
        <span className="text-lg font-normal uppercase">GLP Presents</span>
        <br />
        <span className="block text-3xl font-semibold uppercase">Soulcial Art Exhibit</span>
      </>
    ),
  },
  { label: "When", value: "Fri, Jun 2026\n1pm-7pm" },
  { label: "Where", value: "Liverpool, Secret Location, UK" },
];

const homeEventTiles = [
  {
    title: "Lookbook",
    subtitle: "Spring 26",
    image: "/media/home-triptych-figure.svg",
    className: "lg:col-span-1",
    type: "image" as const,
  },
  {
    title: "T-shirt",
    subtitle: "Spring 26",
    image: "/media/couture-mastery.svg",
    className: "lg:col-span-1",
    type: "image" as const,
  },
  {
    title: "Art",
    className: "bg-ink text-paper lg:col-span-1",
    type: "label" as const,
  },
  {
    title: "Tote",
    subtitle: "Spring 26",
    image: "/media/pattern-engineering.svg",
    className: "lg:col-span-1",
    type: "image" as const,
  },
  {
    title: "Clothing",
    className: "bg-paper lg:col-span-1",
    type: "label" as const,
  },
  {
    title: "Live session",
    subtitle: "Archive room",
    image: "/media/home-hero.svg",
    className: "lg:col-span-1",
    type: "image" as const,
  },
  {
    title: "Zines",
    className: "bg-[#efe4d1] lg:col-span-1",
    type: "label" as const,
  },
  {
    title: "Mixtape",
    subtitle: "Spring 26",
    image: "/media/journal-entry.svg",
    className: "lg:col-span-1",
    type: "image" as const,
  },
  {
    title: "Live music",
    className: "bg-[#98a57d] lg:col-span-1",
    type: "label" as const,
  },
  {
    title: "Poster",
    subtitle: "Studio drop",
    image: "/media/textile-relief.svg",
    className: "lg:col-span-1",
    type: "image" as const,
  },
  {
    title: "Flavours",
    className: "bg-[#d8cfc0] lg:col-span-1",
    type: "label" as const,
  },
  {
    title: "From the Instagram",
    subtitle: "Open feed",
    className: "bg-ink text-paper lg:col-span-1",
    type: "label" as const,
  },
  {
    title: "Artefacts",
    className: "bg-[#efe4d1] lg:col-span-2",
    type: "label" as const,
  },
  {
    title: "Text",
    subtitle: "Spring 26",
    image: "/media/home-triptych-fashion.svg",
    className: "lg:col-span-2",
    type: "image" as const,
  },
];

export function HomeView() {
  return (
    <div className="flex flex-col">
      <section className="relative border-b border-line bg-panel">
        <div className="mx-auto max-w-content px-5 py-2.5 lg:px-8">
          <div className="relative xl:pl-[56px]">
            <div className="absolute left-0 top-2.5 hidden xl:flex xl:flex-col xl:gap-2.5">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center bg-ink text-paper"
              >
                <Instagram size={18} />
              </div>
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center bg-ink text-xs uppercase tracking-editorial text-paper"
              >
                P
              </div>
            </div>

            <div className="grid gap-2.5 lg:grid-cols-[0.495fr_0.505fr]">
              <div className="bg-[#d79c79] px-6 py-8 text-center text-paper sm:px-8 lg:min-h-[39rem] lg:px-10 lg:py-10">
                <div className="mx-auto flex h-full max-w-[31rem] flex-col items-center justify-center gap-2.5">
                  <h1 className="font-display text-5xl italic leading-none text-paper sm:text-6xl">
                    Atelier
                  </h1>
                  <p className="text-lg leading-8">
                    A quiet editorial record of how garments are shaped through material study,
                    technical patterning, and precise finishing.
                  </p>

                  <div className="mt-2.5 flex flex-col gap-2.5">
                    {heroSections.map((section) => (
                      <div key={section.title} className="flex flex-col gap-2.5">
                        <h2 className="text-3xl font-semibold leading-tight text-paper">
                          {section.title}
                        </h2>
                        <p className="text-lg leading-8">{section.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[28rem] bg-paper lg:min-h-[39rem]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Studio hero film"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/media/felaa-hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-2.5 px-5 py-14 text-center lg:px-8">
          <p className="text-[11px] uppercase tracking-editorial text-bronze">Approach</p>
          <h2 className="font-display text-4xl italic leading-tight text-ink sm:text-5xl">
            The atelier reads garments through surface, precision, and craft.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-muted">
            Each route focuses on a different responsibility in the making process, but they remain
            tightly interdependent.
          </p>
          <Link
            href="/atelier"
            className="inline-flex items-center justify-center text-[11px] uppercase tracking-editorial text-bronze transition hover:text-ink"
          >
            Read the studio framework
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 pb-6 lg:px-8">
        <div className="grid gap-2.5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden border border-line bg-paper p-3 shadow-card">
            <div className="relative aspect-[5/4] overflow-hidden bg-blush">
              <Image
                src="/media/indigo-sun-collection-mood.jpeg"
                alt="Indigo Sun collection mood board with geometric sun motifs and textile studies"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>

          <div className="flex h-full flex-col border border-line bg-paper/90 p-6 shadow-card sm:p-8">
            <p className="text-[11px] uppercase tracking-editorial text-bronze">Atelier</p>
            <h2 className="mt-4 font-display text-4xl italic leading-tight text-ink sm:text-5xl">
              A studio built on quiet decisions
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              The atelier route gathers the three working disciplines into one editorial frame:
              surface, pattern, and construction.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {homeStudioNotes.map((note) => (
                <p key={note} className="text-sm leading-7 text-muted">
                  {note}
                </p>
              ))}
            </div>

            <Link
              href="/atelier"
              className="mt-auto inline-flex items-center justify-center self-start border border-line bg-paper px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
            >
              Open atelier route
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-content flex-col gap-2.5 px-5 pb-6 lg:px-8">
        <div className="grid gap-2.5 border-b border-line pb-2.5 lg:grid-cols-3">
          {homeEventMeta.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center gap-2.5 px-4 py-2.5 text-center ${
                index < homeEventMeta.length - 1 ? "lg:border-r lg:border-line" : ""
              }`}
            >
              <p className="text-[10px] uppercase tracking-editorial text-muted">{item.label}</p>
              <p className="whitespace-pre-line text-3xl font-semibold uppercase leading-tight text-ink">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-2.5 lg:grid-cols-4">
          {homeEventTiles.map((tile) => (
            <article
              key={`${tile.title}-${tile.subtitle ?? "tile"}`}
              className={`relative min-h-[11rem] border border-line ${tile.className}`}
            >
              {tile.type === "image" ? (
                <>
                  <div className="absolute inset-0">
                    <Image
                      src={tile.image}
                      alt={tile.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/72 px-2.5 py-2 text-[10px] uppercase tracking-editorial text-paper">
                    <span>{tile.title}</span>
                    <span>{tile.subtitle}</span>
                  </div>
                </>
              ) : (
                <div className="flex h-full items-center justify-center p-3 text-center">
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-semibold uppercase leading-tight">{tile.title}</p>
                    {tile.subtitle ? (
                      <p className="text-[10px] uppercase tracking-editorial">{tile.subtitle}</p>
                    ) : null}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Disciplines"
          title="Three ways the atelier reads a garment"
          description="Surface, pattern, and construction are studied separately here, but they remain tightly interdependent."
          centered
        />

        <div className="grid gap-2.5 lg:grid-cols-3">
          {homeHighlights.map((highlight) => (
            <Link
              key={highlight.href}
              href={highlight.href}
              className="group border border-line bg-paper/85 p-3 shadow-card transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/4.8] overflow-hidden bg-blush">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
              </div>
              <div className="flex h-full flex-col gap-2.5 px-1 pb-1 pt-4">
                <p className="text-[11px] uppercase tracking-editorial text-bronze">
                  {highlight.label}
                </p>
                <h3 className="font-display text-3xl italic leading-tight text-ink">
                  {highlight.title}
                </h3>
                <p className="text-base leading-8 text-muted">{highlight.description}</p>
                <span className="mt-auto text-[11px] uppercase tracking-editorial text-ink">
                  Explore route
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-content gap-2.5 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="border border-line bg-paper/90 p-6 shadow-card sm:p-8">
            <p className="text-[11px] uppercase tracking-editorial text-bronze">Studio rhythm</p>
            <h2 className="mt-4 font-display text-4xl italic leading-tight text-ink sm:text-5xl">
              The work is edited before it is displayed.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              The atelier is less interested in quantity than in making each decision legible, from
              cloth choice to internal finish.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {atelierSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="border border-line bg-white/75 p-4 transition hover:border-bronze"
                >
                  <p className="text-[11px] uppercase tracking-editorial text-bronze">
                    {section.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">{section.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-line bg-paper p-3 shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden bg-blush">
              <Image
                src="/media/home-triptych-studio.svg"
                alt="Faceless back-view studio silhouette working with a mannequin"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-14 lg:px-8">
          <SectionHeading
            eyebrow="Journal"
            title="Studio notes"
            description="The journal route captures observations about draping, pattern decisions, and surface behavior without turning the work into noise."
            centered
          />

          <div className="grid gap-2.5 lg:grid-cols-3">
            {journalEntries.map((entry) => (
              <article
                key={entry.slug}
                className="overflow-hidden border border-line bg-paper shadow-card"
              >
                <div className="relative aspect-[4/3] bg-blush">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
                <div className="flex flex-col gap-2.5 p-5">
                  <p className="text-[11px] uppercase tracking-editorial text-bronze">
                    {entry.date} / {entry.category}
                  </p>
                  <h3 className="font-display text-3xl italic leading-tight text-ink">
                    {entry.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted">{entry.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/journal"
              className="inline-flex items-center justify-center border border-line bg-paper px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
            >
              Go to journal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
