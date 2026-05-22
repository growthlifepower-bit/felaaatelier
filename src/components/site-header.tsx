"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { navigationItems, siteConfig } from "@/lib/site";
import { SiteWordmark } from "@/components/site-wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-line bg-panel">
      <div className="border-b border-line bg-clay text-paper">
        <div className="mx-auto max-w-content px-5 py-2 text-center text-[10px] uppercase tracking-editorial lg:px-8">
          Textile relief, pattern engineering, and couture mastery in a quiet editorial frame
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 py-4 lg:px-8 lg:py-5">
        <div className="flex items-center justify-between lg:hidden">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <SiteWordmark className="w-[180px]" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center border border-line bg-paper p-2 text-ink"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="transition-colors hover:text-bronze"
          >
            <SiteWordmark className="w-[330px]" />
          </Link>

          <nav className="mt-2.5 w-full max-w-[58rem]" aria-label="Primary">
            <div className="flex items-center justify-between">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "border-b border-transparent pb-1 text-[11px] uppercase tracking-editorial text-muted transition-colors",
                    pathname === item.href ? "border-bronze text-ink" : "hover:text-ink"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-panel px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-2.5">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "text-sm uppercase tracking-editorial text-muted transition-colors",
                  pathname === item.href ? "text-ink" : "hover:text-ink"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
