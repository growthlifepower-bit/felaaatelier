"use client";

import { useEffect } from "react";
import { captureError } from "@/lib/telemetry";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    captureError(error, { digest: error.digest ?? "no-digest" });
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col justify-center gap-6 px-6 py-20 lg:px-10">
      <p className="text-xs uppercase tracking-editorial text-bronze">Application error</p>
      <h1 className="text-4xl uppercase tracking-[0.16em] text-ink">Something went wrong</h1>
      <p className="max-w-xl text-base leading-8 text-muted">
        The page failed to render correctly. Error tracking is placeholder-only until final
        provider setup, but the boundary is now in place.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="w-fit rounded-full border border-line px-5 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
      >
        Retry
      </button>
    </div>
  );
}
