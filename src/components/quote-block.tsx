type QuoteBlockProps = {
  quote: string;
};

export function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <blockquote className="border border-line bg-paper/85 p-6 shadow-card sm:p-8">
      <p className="text-[11px] uppercase tracking-editorial text-bronze">Studio note</p>
      <p className="mt-5 font-display text-3xl italic leading-[1.15] text-ink sm:text-4xl">
        {quote}
      </p>
    </blockquote>
  );
}
