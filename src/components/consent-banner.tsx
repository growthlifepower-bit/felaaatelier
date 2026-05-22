"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CONSENT_STORAGE_KEY,
  OPEN_COOKIE_SETTINGS_EVENT,
  readConsentValue,
  type ConsentMode,
} from "@/lib/telemetry";
import { legalBrandName } from "@/lib/legal";

export function ConsentBanner() {
  const [consentMode, setConsentMode] = useState<ConsentMode>("unset");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const savedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    setConsentMode(readConsentValue(savedValue));

    const openSettings = () => setSettingsOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const visible = useMemo(
    () => consentMode === "unset" || settingsOpen,
    [consentMode, settingsOpen]
  );

  if (!visible) {
    return null;
  }

  const saveConsent = (value: ConsentMode) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    setConsentMode(value);
    setSettingsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-panel/95 backdrop-blur">
      <div className="mx-auto flex max-w-content flex-col gap-2.5 px-5 py-4 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <p className="text-xs uppercase tracking-editorial text-bronze">Cookie settings</p>
          <h2 className="text-xl uppercase tracking-[0.14em] text-ink">Control optional tracking</h2>
          <p className="text-sm leading-7 text-muted">
            {legalBrandName} only enables optional analytics after consent. Error tracking and
            analytics providers remain placeholders until final setup.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:ml-auto lg:justify-end">
          <button
            type="button"
            onClick={() => saveConsent("necessary")}
            className="border border-line px-4 py-3 text-xs uppercase tracking-editorial text-ink transition hover:border-bronze hover:text-bronze"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => saveConsent("analytics")}
            className="border border-bronze bg-bronze px-4 py-3 text-xs uppercase tracking-editorial text-canvas transition hover:bg-accent"
          >
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  );
}
