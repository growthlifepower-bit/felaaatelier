import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex max-w-3xl flex-col gap-2.5",
        centered ? "mx-auto items-center text-center" : ""
      )}
    >
      <p className="text-[11px] uppercase tracking-editorial text-bronze">{eyebrow}</p>
      <h2 className="font-display text-4xl italic leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
