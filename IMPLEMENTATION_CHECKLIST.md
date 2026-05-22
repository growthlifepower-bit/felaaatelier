# FelaaAtelier Implementation Checklist

## Phase 0 - Documentation

- [x] Audit the current export
- [x] Write architecture, finalize, placeholders, and checklist docs
- [x] Write local-only `agentsplans/*` prompt docs inside this project
- [x] Commit production-relevant documentation only
- [ ] Pause for confirmation before code migration

## Phase 1 - Foundation

- [ ] Replace Vite with Next.js App Router
- [ ] Add TypeScript, ESLint, OpenNext, Wrangler, and `.env.example`
- [ ] Normalize `package.json` identity and scripts
- [ ] Add CI workflow
- [ ] Establish the Moji folder structure

## Phase 2 - Route Port

- [ ] Port all public routes to App Router
- [ ] Rebuild shared layout, navigation, and footer
- [ ] Move page composition into `src/views/*`
- [ ] Centralize site content and route metadata inputs
- [ ] Remove `react-router`

## Phase 3 - Production Hardening

- [ ] Replace runtime remote media with owned local placeholders
- [ ] Move fonts to `next/font`
- [ ] Add route metadata, JSON-LD, `robots`, and `sitemap`
- [ ] Add privacy, terms, and cookie policy pages
- [ ] Add consent-aware analytics and error-tracking placeholders
- [ ] Add accessibility and security baseline
- [ ] Remove or justify unused risky export components

## Phase 4 - Cloudflare Launch

- [ ] Add edge build and preview flow
- [ ] Finalize `wrangler.jsonc` staging and production model
- [ ] Expand README deployment and quality-gate sections
- [ ] Verify placeholder registry completeness
- [ ] Run launch checklist

## Verification

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] `npm run build:edge`
- [ ] `npm run preview`
- [ ] Route smoke test complete
- [ ] Metadata and legal route review complete
