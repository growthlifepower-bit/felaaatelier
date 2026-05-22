import Link from "next/link";
import { legalBrandName } from "@/lib/legal";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-content flex-col items-start justify-center gap-6 px-6 py-20 lg:px-10">
      <p className="text-xs uppercase tracking-editorial text-bronze">404</p>
      <h1 className="text-5xl uppercase tracking-[0.18em] text-ink">Page not found</h1>
      <p className="max-w-xl text-lg leading-8 text-muted">
        The requested route does not exist in the current {legalBrandName} site map.
      </p>
      <Link
        href="/"
        className="rounded-full border border-line px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
      >
        Return home
      </Link>
    </section>
  );
}
