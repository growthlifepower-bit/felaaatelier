# FelaaAtelier Finalization Plan

This file translates the audit into the sequence required to take `FelaaAtelier` from design export to production-ready Cloudflare launch.

## Step 1 - Replace the Export Stack

Goal: remove prototype tooling and establish the Moji production baseline.

- swap Vite out for Next.js App Router
- add TypeScript, ESLint, OpenNext, and Wrangler configuration
- normalize `package.json` name, scripts, and dependency graph
- add `.env.example`, CI, and basic quality gates

Launch gate:

- the repo builds and type-checks on the production stack

## Step 2 - Rebuild the Route Surface

Goal: preserve the existing site structure while moving it to App Router and shared layout composition.

- create route wrappers for all public routes
- move page composition into `src/views/*`
- replace browser-router navigation with Next.js navigation
- establish shared navigation, footer, and route metadata patterns

Launch gate:

- all public routes render correctly and navigation state is accurate

## Step 3 - Centralize Content and Media

Goal: remove export-era content sprawl and runtime media risk.

- move navigation labels, page copy, journal entries, legal constants, and SEO defaults into typed `src/lib/*`
- replace remote Unsplash image URLs with owned local placeholder assets
- move fonts to `next/font`
- clean encoding corruption and inconsistent brand naming

Launch gate:

- no primary route depends on runtime-hosted third-party media

## Step 4 - Add Production Hardening

Goal: make the public site safe, discoverable, and legally presentable.

- add metadata, canonical URLs, `robots`, `sitemap`, and JSON-LD
- add privacy, terms, and cookie policy pages
- add consent-aware analytics and error-tracking placeholders
- add accessibility fixes, skip link, keyboard review, and reduced-motion support
- add security headers and remove unneeded risky export components

Launch gate:

- SEO, legal, accessibility, and security baselines are complete

## Step 5 - Complete Cloudflare Deployment Readiness

Goal: make deployment reproducible and previewable on the target platform.

- add OpenNext Cloudflare config and Wrangler environment sections
- ensure edge preview works locally
- document deploy commands and release workflow in `README.md`
- verify placeholder values required for staging and production

Launch gate:

- `build:edge` and preview succeed and all environment requirements are documented

## Step 6 - Run Final Launch Review

Goal: confirm the repo is actually ready to ship.

- re-read `audit.md`, `PLACEHOLDERS.md`, `IMPLEMENTATION_CHECKLIST.md`, and `LEGAL_LAUNCH_CHECKLIST.md`
- confirm every blocker is either resolved or explicitly deferred with a reason
- smoke-test each public route, legal route, metadata route, and mobile nav flow
- confirm tracking remains placeholder-only until the final setup conversation

Launch gate:

- the audit no longer contains unresolved launch blockers
- the placeholder list is known and reviewable
- the final implementation pass is approved
