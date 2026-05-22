"use client";

import Link from "next/link";
import { SiteWordmark } from "@/components/site-wordmark";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/telemetry";
import {
  legalBusinessLocation,
  legalContactEmail,
  legalCopyrightLine,
} from "@/lib/legal";
import { navigationItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="border-b border-line">
        <div className="mx-auto grid max-w-content gap-2.5 px-5 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-12">
          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] uppercase tracking-editorial text-bronze">Continue the study</p>
            <h2 className="font-display text-4xl italic leading-tight text-ink sm:text-5xl">
              Move from the atelier into the journal.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted">
              Continue through surface studies, pattern logic, couture craft, and studio notes at
              a measured pace.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 lg:items-end">
            <Link
              href="/journal"
              className="inline-flex w-full items-center justify-center border border-bronze bg-bronze px-5 py-3 text-xs uppercase tracking-editorial text-paper transition hover:bg-accent lg:w-auto"
            >
              Read journal
            </Link>
            <Link
              href="/atelier"
              className="inline-flex w-full items-center justify-center border border-line bg-paper px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze lg:w-auto"
            >
              Enter atelier
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-content gap-2.5 px-5 py-10 text-sm text-muted lg:grid-cols-[1.3fr_0.85fr_0.85fr] lg:px-8">
        <div className="flex flex-col gap-2.5">
          <Link href="/" aria-label={"F\u1EB9LA\u00C1 Atelier home"} className="w-fit">
            <SiteWordmark className="w-[200px] sm:w-[220px]" />
          </Link>
          <p className="max-w-md leading-7">
            Editorial fashion site documenting textile relief, pattern engineering, and couture
            craftsmanship from {legalBusinessLocation}.
          </p>
          <a
            href={`mailto:${legalContactEmail}`}
            className="text-[11px] uppercase tracking-editorial text-bronze"
          >
            {legalContactEmail}
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[11px] uppercase tracking-editorial text-bronze">Routes</p>
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="leading-7 transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[11px] uppercase tracking-editorial text-bronze">Policies</p>
          <Link href="/privacy-policy" className="leading-7 transition hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="leading-7 transition hover:text-ink">
            Terms
          </Link>
          <Link href="/cookie-policy" className="leading-7 transition hover:text-ink">
            Cookie Policy
          </Link>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
            className="w-fit text-left leading-7 transition hover:text-ink"
          >
            Cookie settings
          </button>
          <p className="pt-3 text-[11px] uppercase tracking-editorial">{legalCopyrightLine}</p>
        </div>
      </div>
    </footer>
  );
}
