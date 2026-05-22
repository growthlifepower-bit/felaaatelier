# FelaaAtelier Runtime and Architecture Plan

Scope: production migration of the current Figma-exported editorial site into a Cloudflare-deployed Next.js App Router application. This phase ships a backend-free public marketing site with placeholder-ready integration boundaries only. No auth, database, CMS, or live submission APIs are included in v1.

Stack (confirmed):

- Runtime: Cloudflare Workers via OpenNext
- App framework: Next.js App Router
- UI: React 18 + Tailwind CSS
- Storage: none in v1
- Auth: none in v1
- API: none in v1 beyond metadata routes

## 1. Architecture Overview

Request flow:

Browser -> Cloudflare edge -> OpenNext worker -> Next.js App Router -> static/editorial page render

The app will remain a content-driven public site:

- route wrappers live under `src/app/*`
- page composition lives under `src/views/*`
- shared navigation, footer, consent, and utility components live under `src/components/*`
- site metadata, navigation, legal constants, structured data builders, and editorial content live under `src/lib/*`
- owned placeholder imagery and branding assets live under `public/*`

Non-goals in this phase:

- CMS
- contact form backend
- auth
- database
- admin dashboard

## 2. Public App Surface

Launch routes:

1. `/`
2. `/atelier`
3. `/textile-relief`
4. `/pattern-engineering`
5. `/couture-mastery`
6. `/journal`
7. `/privacy-policy`
8. `/terms`
9. `/cookie-policy`

Required metadata routes:

- `/robots.txt`
- `/sitemap.xml`

Operational routes deferred:

- `/api/*`
- any contact submission endpoint
- any content-management surface

## 3. Configuration Contract

The implementation must add `.env.example` with placeholder values for:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ENVIRONMENT`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_BUSINESS_NAME`
- `NEXT_PUBLIC_BUSINESS_LOCATION`
- `NEXT_PUBLIC_ANALYTICS_KEY`
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT`
- `NEXT_PUBLIC_ERROR_TRACKING_DSN`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

The implementation must also define a typed config layer for:

- navigation links
- route metadata
- journal/editorial entries
- legal business details
- placeholder registry entries

## 4. Third-Party Boundaries

Third-party services are placeholder-only in this phase. The app may expose provider-agnostic component or utility boundaries for:

- analytics
- error tracking
- optional future contact routing

Rules:

- no provider secrets in committed code
- no hardcoded production IDs
- every unresolved value must be recorded in `PLACEHOLDERS.md`
- consent must gate any non-essential tracking

## 5. Security and Cost Controls

Security baseline for v1:

- add CSP and related security headers in `next.config.js`
- keep allowed origins limited to approved site and third-party endpoints only
- avoid shipping unused or risky export components
- remove runtime dependency on remote images where possible
- do not introduce server actions or API routes without a documented need

Cost baseline for v1:

- Cloudflare-first deployment
- no database
- no queue
- no paid third-party dependency required to run the public site locally

## 6. Implementation Steps

1. Replace the export tooling with Next.js App Router and the Cloudflare/OpenNext runtime files.
2. Reorganize the codebase into the standard Moji project structure.
3. Port the existing public routes and shared layout from `react-router` to App Router.
4. Centralize site content, legal constants, and SEO configuration.
5. Replace external imagery and CSS font imports with production-safe local assets and `next/font`.
6. Add legal routes, metadata routes, structured data, security headers, telemetry placeholders, and launch documentation.
7. Validate local build, edge build, preview, and route smoke tests.

Stop/Go:

- all public routes render in Next.js
- no runtime Unsplash/Figma dependencies remain on primary pages
- placeholder contract is documented
- Cloudflare preview works

## 7. Future Hooks

Possible Phase 2 extensions:

- contact form route and worker-backed submission flow
- CMS-backed journal system
- managed media pipeline
- appointment or enquiry workflow

These must be handled through a separate architecture revision rather than folded into the v1 migration without review.

## 8. Decisions Recorded

- This project is a marketing/editorial site first, not an application product.
- The standard deployment target is Cloudflare Workers via OpenNext.
- No custom backend is added in v1.
- Third-party integrations are placeholder-only until the final setup conversation.
- Production-relevant markdown stays in the repo; prompt-only implementation docs stay local under `agentsplans/`.
