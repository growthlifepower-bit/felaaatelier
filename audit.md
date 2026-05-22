# FelaaAtelier Production Readiness Audit

Date: 2026-03-24

This audit reflects the current state of the `FelaaAtelier` repository before the production migration. It is scoped to the existing codebase in `repos/felaaatelier` and uses `mojistudio` and `taskcrafts` as the reference implementation pattern.

## Executive Summary

`FelaaAtelier` is currently a Figma-exported Vite prototype, not a production-ready application. The current project has a strong visual direction and a usable editorial route structure, but it is missing the runtime, deployment, asset, content, SEO, legal, accessibility, security, observability, and operational foundations required for a public launch on Cloudflare.

The most important blockers are:

- the app is not built on the Moji production stack yet
- the package and dependency graph still reflect export tooling rather than an owned production project
- external image and font loading are not launch-safe
- legal, SEO, analytics, and deployment baselines do not exist
- no Cloudflare/OpenNext configuration is present

## Current Repo Reality

- Framework: Vite + React export
- Routing: `react-router` browser router
- Current route intent: `/`, `/atelier`, `/textile-relief`, `/pattern-engineering`, `/couture-mastery`, `/journal`
- Styles: Tailwind export plus imported font CSS
- Media: remote Unsplash links embedded across views
- Deployment config: none
- CI/CD: none
- Root docs: minimal README only

## Architecture and Stack Gaps

- No Next.js App Router structure
- No `src/views`, `src/lib`, `public`, `tests`, or `scripts` production layout matching sibling repos
- No `tsconfig.json`, `next.config.js`, `open-next.config.ts`, `wrangler.jsonc`, `.env.example`, or CI workflow
- No Cloudflare deployment model documented or configured
- No runtime separation between shared layout concerns and route entry points
- No typed site configuration layer for navigation, SEO, legal constants, and journal content

## Dependency and Project Identity Gaps

- `package.json` still uses the generic export package name `@figma/my-make-file`
- The dependency graph includes export-era packages that are unlikely to be needed in the production site
- Vite-only dependencies and `react-router` are still present
- No Moji-standard scripts for linting, type-checking, edge build, preview, or deploy
- No project-level package manager declaration aligned with sibling repos

## Content and Brand Gaps

- Brand naming is inconsistent between `FeLAA Atelier`, `FELAA ATELIER`, and `Fashion Atelier Showcase`
- Copy includes encoding corruption such as broken copyright sequences and arrow characters
- Editorial content is scattered through components rather than centralized
- No approved legal business identity, contact details, or launch-ready footer data is defined
- No route-level content governance or structured content model exists for journal entries and editorial sections

## Media and Performance Gaps

- Primary pages load remote Unsplash images directly at runtime
- No local placeholder or approved production image set exists under `public/`
- Above-the-fold hero media is not optimized with `next/image`
- Fonts are loaded by CSS `@import` from Google Fonts instead of `next/font`
- No bundle analysis, runtime budget, or explicit LCP asset handling exists
- No image sizing policy, preload strategy, or asset ownership model is documented

## SEO and Discoverability Gaps

- No Next.js metadata system
- No per-route titles, descriptions, or canonicals
- No `robots.txt`
- No `sitemap.xml`
- No JSON-LD structured data
- No Open Graph or Twitter card baseline
- No search verification or site URL environment contract

## Legal and Compliance Gaps

- No privacy policy page
- No terms page
- No cookie policy page
- No consent model for analytics or marketing scripts
- No launch checklist for legal identity, business contact details, asset licensing, or policy review
- No reusable legal config layer

## Accessibility Gaps

- No skip link
- No audited heading hierarchy across routes
- No documented keyboard-navigation review for the mobile menu
- No reduced-motion handling
- No contrast audit
- No accessibility acceptance checklist
- No review of semantics for decorative versus informative media

## Security and Hardening Gaps

- No security headers
- No CSP policy
- No HSTS, Referrer-Policy, Permissions-Policy, or X-Frame-Options baseline
- No placeholder-safe environment variable contract
- Exported UI primitives include components that may never be used and may widen the attack surface unnecessarily
- The imported chart primitive includes `dangerouslySetInnerHTML` and should not remain in a lean production marketing site unless justified

## Observability and Analytics Gaps

- No analytics abstraction
- No error tracking abstraction
- No cookie-consent-aware telemetry wiring
- No web vitals capture
- No placeholder registry for production keys and endpoints

## Delivery and Operations Gaps

- No Cloudflare/OpenNext worker config
- No staging versus production environment model
- No preview command
- No deploy command
- No CI lint/build/typecheck flow
- No release checklist or phase commit boundary documentation

## Quality and Testing Gaps

- No lint configuration
- No typecheck configuration
- No test harness
- No smoke-test checklist
- No acceptance criteria recorded for route migration, metadata coverage, accessibility, or Cloudflare preview

## Launch Blockers To Resolve

The following are mandatory blockers before launch:

1. Replace Vite with Next.js App Router and Cloudflare deployment config.
2. Normalize package identity, scripts, and dependency graph.
3. Move all runtime imagery to owned local placeholder assets or approved production assets.
4. Replace CSS font imports with `next/font`.
5. Add route metadata, `robots`, `sitemap`, and structured data.
6. Add privacy, terms, and cookie policy pages plus footer links.
7. Add consent-aware analytics and error-tracking placeholders.
8. Add security headers and tighten the runtime to approved origins only.
9. Add README, architecture, implementation, placeholder, and checklist documentation.
10. Add lint, typecheck, build, edge build, and preview quality gates.

## Audit Conclusion

`FelaaAtelier` should not be launched from the current codebase. The design and route intent are worth preserving, but the implementation must be rebuilt onto the standard Moji production stack and then verified against the launch checklist before any public release.
