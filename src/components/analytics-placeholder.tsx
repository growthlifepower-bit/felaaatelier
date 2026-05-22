"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_STORAGE_KEY,
  captureError,
  readConsentValue,
  trackEvent,
} from "@/lib/telemetry";

export function AnalyticsPlaceholder() {
  const pathname = usePathname();

  useEffect(() => {
    const consentMode = readConsentValue(window.localStorage.getItem(CONSENT_STORAGE_KEY));

    if (consentMode !== "analytics") {
      return;
    }

    try {
      trackEvent("page_view", { pathname });

      const navigationEntry = performance.getEntriesByType("navigation")[0];
      if (navigationEntry) {
        trackEvent("navigation_timing", {
          pathname,
          duration: navigationEntry.duration,
        });
      }
    } catch (error) {
      captureError(error instanceof Error ? error : new Error("Analytics placeholder failed"), {
        pathname,
      });
    }
  }, [pathname]);

  return null;
}
