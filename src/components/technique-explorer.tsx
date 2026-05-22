"use client";

import { useState } from "react";
import { clsx } from "clsx";
import type { Technique } from "@/lib/content";

type TechniqueExplorerProps = {
  techniques: Technique[];
};

export function TechniqueExplorer({ techniques }: TechniqueExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTechnique = techniques[activeIndex];

  return (
    <div className="flex flex-col gap-2.5 border border-line bg-white/70 p-5 shadow-card sm:p-8">
      <div className="flex flex-wrap gap-2">
        {techniques.map((technique, index) => (
          <button
            key={technique.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "border px-4 py-3 text-xs uppercase tracking-editorial transition",
              activeIndex === index
                ? "border-bronze bg-bronze text-paper"
                : "border-line text-muted hover:border-bronze hover:text-ink"
            )}
          >
            {technique.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-4xl italic text-ink">{activeTechnique.name}</h3>
        <p className="max-w-3xl text-base leading-8 text-muted">{activeTechnique.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {activeTechnique.details.map((detail) => (
          <div
            key={detail}
            className="min-w-[15rem] flex-1 border border-line bg-paper p-4 text-sm leading-7 text-muted"
          >
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}
