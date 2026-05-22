# FelaaAtelier Placeholder Tracker

This file tracks all third-party and production values that must remain placeholders until the final setup conversation.

## Current Planned Placeholders

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ENVIRONMENT`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_BUSINESS_NAME`
- `NEXT_PUBLIC_BUSINESS_LOCATION`
- `NEXT_PUBLIC_ANALYTICS_KEY`
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT`
- `NEXT_PUBLIC_ERROR_TRACKING_DSN`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- production Cloudflare route/domain values in `wrangler.jsonc`

## Asset and Content Placeholders

These are not third-party secrets, but they still need final approval before launch:

- approved logo or wordmark asset
- approved hero and editorial imagery
- final footer copyright line
- final legal business identity text
- final social/contact destination URLs

## Rules

- Every new placeholder introduced during implementation must be added here immediately.
- No live provider key, DSN, token, or final domain value should be committed until the final setup conversation.
- If a placeholder is required for local preview, keep it obviously synthetic.
