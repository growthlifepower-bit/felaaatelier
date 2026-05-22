export type ConsentMode = "unset" | "necessary" | "analytics";

export const CONSENT_STORAGE_KEY = "felaaatelier-consent-v1";
export const OPEN_COOKIE_SETTINGS_EVENT = "felaaatelier:open-cookie-settings";

function isPlaceholder(value?: string) {
  return !value || value.includes("placeholder") || value.includes("example.com");
}

export function readConsentValue(value: string | null): ConsentMode {
  if (value === "necessary" || value === "analytics") {
    return value;
  }

  return "unset";
}

export function getAnalyticsConfig() {
  return {
    key: process.env.NEXT_PUBLIC_ANALYTICS_KEY,
    endpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT,
  };
}

export function getErrorTrackingConfig() {
  return {
    dsn: process.env.NEXT_PUBLIC_ERROR_TRACKING_DSN,
  };
}

export function hasAnalyticsConfig() {
  const config = getAnalyticsConfig();
  return !isPlaceholder(config.key) && !isPlaceholder(config.endpoint);
}

export function hasErrorTrackingConfig() {
  const config = getErrorTrackingConfig();
  return !isPlaceholder(config.dsn);
}

export function trackEvent(name: string, payload: Record<string, unknown>) {
  if (!hasAnalyticsConfig()) {
    return;
  }

  void { name, payload };
}

export function captureError(error: Error, context: Record<string, unknown> = {}) {
  if (!hasErrorTrackingConfig()) {
    return;
  }

  void { error, context };
}
