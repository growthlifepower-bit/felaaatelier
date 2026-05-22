import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  caption?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  caption,
  imageSrc,
  imageAlt,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-14">
        <div className="flex max-w-3xl flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <p className="text-[11px] uppercase tracking-editorial text-bronze">{eyebrow}</p>
            <span className="h-px w-14 bg-bronze/40" />
          </div>
          <h1 className="font-display text-5xl italic leading-none text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">{description}</p>
          <div className="max-w-xl border border-line bg-paper/80 p-4 text-sm leading-7 text-muted shadow-card">
            {caption ??
              "A disciplined editorial route system built around process, material, and form."}
          </div>
        </div>
        {imageSrc ? (
          <div className="flex w-full max-w-sm flex-col gap-2.5 border border-line bg-white/70 p-3 shadow-card">
            <div className="relative aspect-[4/5] overflow-hidden bg-blush">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                priority={priority}
                className="object-cover"
                sizes="(min-width: 1024px) 24rem, 100vw"
              />
            </div>
            <p className="text-sm leading-7 text-muted">
              Study image for the {eyebrow.toLowerCase()} route.
            </p>
          </div>
        ) : (
          <div className="flex max-w-sm flex-col gap-2.5 border border-line bg-white/60 p-4 shadow-card">
            <div className="h-px w-16 bg-bronze" />
            <p className="text-sm leading-7 text-muted">
              {caption ??
                "A disciplined editorial route system built around process, material, and form."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
