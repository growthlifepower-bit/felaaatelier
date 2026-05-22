# FelaaAtelier Implementation Phases

This execution plan follows the same Moji delivery pattern used in sibling projects, adapted for a public editorial/marketing site rather than an application backend.

## Phase 0 - Documentation and Audit

Goal: lock the production standard, audit the current export, and create the implementation artifact set before code migration begins.

Deliverables:

- `audit.md`
- `BACKEND_ARCHITECTURE_PLAN.md`
- `IMPLEMENTATION_PHASES.md`
- `finalizeplan.md`
- `PLACEHOLDERS.md`
- `IMPLEMENTATION_CHECKLIST.md`
- `LEGAL_LAUNCH_CHECKLIST.md`
- `agentsplans/*` prompt playbooks
- refreshed `README.md`

Stop/Go:

- audit clearly states current blockers
- architecture and finalize plan are decision-complete
- prompt-only docs exist inside the project but are excluded from the phase commit

Commit:

- `chore: add migration audit and architecture docs`

## Phase 1 - Foundation Migration

Goal: replace the export tooling with the Moji production stack.

Build:

- install Next.js App Router baseline
- add `tsconfig.json`, `next.config.js`, `open-next.config.ts`, `wrangler.jsonc`, `.env.example`, `.github/workflows/ci.yml`, and `next-env.d.ts`
- normalize `package.json` identity, scripts, and dependencies
- adopt the standard `src/app`, `src/views`, `src/components`, `src/lib`, `src/styles`, `public`, `scripts`, and `tests` structure

Stop/Go:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Commit:

- `chore: migrate foundation to next app router`

## Phase 2 - Route and Content Port

Goal: move the current editorial experience into App Router without losing the design direction.

Build:

- port `/`, `/atelier`, `/textile-relief`, `/pattern-engineering`, `/couture-mastery`, and `/journal`
- replace `react-router` navigation with shared Next.js layout patterns
- move page composition into `src/views/*`
- centralize editorial content and navigation in typed `src/lib/*`
- replace export-era media with owned local placeholders

Stop/Go:

- all public routes render correctly in Next.js
- navigation and footer work on desktop and mobile
- no runtime remote image dependency remains on core pages

Commit:

- `feat: port felaa atelier routes`

## Phase 3 - Production Hardening

Goal: make the site launch-safe.

Build:

- route metadata, canonical URLs, Open Graph, and JSON-LD
- `robots.ts` and `sitemap.ts`
- privacy, terms, and cookie policy pages
- consent-aware analytics and error-tracking placeholders
- `next/font`, `next/image`, accessibility pass, and security headers
- remove or justify risky unused UI primitives

Stop/Go:

- legal routes exist and are linked
- metadata coverage is complete
- security and accessibility checks pass

Commit:

- `feat: add production seo and legal baseline`

## Phase 4 - Cloudflare Launch Setup

Goal: finish deployment, operations, and release readiness.

Build:

- OpenNext Cloudflare preview and deploy workflow
- staging and production sections in `wrangler.jsonc`
- final README deployment section
- release checklist validation
- placeholder reconciliation review

Stop/Go:

- `npm run build:edge`
- `npm run preview`
- all launch blockers in `finalizeplan.md` are cleared or explicitly deferred

Commit:

- `chore: add cloudflare launch setup`

## Execution Rules

- Keep the scope backend-free for v1.
- Do not add `/api/*` routes unless separately approved.
- Track every unresolved production value in `PLACEHOLDERS.md`.
- Keep prompt-only markdown inside `agentsplans/` but out of commits.
- Pause after Phase 0 for explicit confirmation before running the master implementation prompt.
