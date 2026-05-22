
# FelaaAtelier

FelaaAtelier is a production-oriented editorial fashion site built with Next.js App Router and prepared for Cloudflare deployment via OpenNext.

It presents the atelier through five public routes focused on textile relief, pattern engineering, couture craft, and studio notes.

Original design source: https://www.figma.com/design/l4gikohzRiP9DMCCuNeOgL/Fashion-Atelier-Showcase

## Implemented Surface

Public routes:

- `/`
- `/atelier`
- `/textile-relief`
- `/pattern-engineering`
- `/couture-mastery`
- `/journal`
- `/privacy-policy`
- `/terms`
- `/cookie-policy`

Metadata routes:

- `/robots.txt`
- `/sitemap.xml`

## Stack

- Next.js App Router
- React 18
- Tailwind CSS
- Cloudflare Workers deployment via OpenNext + Wrangler
- Local placeholder asset set under `public/media`
- Consent-aware analytics and error-tracking placeholders

## Project Structure

- `src/app` route wrappers, metadata routes, and error boundary
- `src/views` page composition
- `src/components` shared navigation, footer, consent, telemetry, and page primitives
- `src/lib` site config, content, legal constants, SEO helpers, structured data, and telemetry helpers
- `public` branding and media placeholders

## Local Development

Recommended runtime:

- Node.js `20.19+`
- WSL preferred for the most reliable OpenNext preview and runtime behavior on Windows hosts

Install and run:

```bash
npm install
npm run dev
```

## Quality Gates

```bash
npm run lint
npm run typecheck
npm run build
npm run build:edge
npm run preview
```

## Deployment

Cloudflare commands:

```bash
npm run build:edge
npm run preview
npm run deploy:staging
npm run deploy:prod
```

Worker configuration lives in `wrangler.jsonc`.

## Environment Variables

Copy `.env.example` to your local env file and replace placeholders when approved:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ENVIRONMENT`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_BUSINESS_NAME`
- `NEXT_PUBLIC_BUSINESS_LOCATION`
- `NEXT_PUBLIC_ANALYTICS_KEY`
- `NEXT_PUBLIC_ANALYTICS_ENDPOINT`
- `NEXT_PUBLIC_ERROR_TRACKING_DSN`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## Production Notes

- All current third-party and production values remain placeholders until final setup.
- Legal pages are present and use placeholder-safe business details from env values or fallbacks.
- The active app no longer relies on runtime Unsplash or Figma-hosted media.
- The archived export remains local-only under `src/imports/` and is excluded from the active app.

## Documentation

- `audit.md`
- `BACKEND_ARCHITECTURE_PLAN.md`
- `IMPLEMENTATION_PHASES.md`
- `finalizeplan.md`
- `PLACEHOLDERS.md`
- `IMPLEMENTATION_CHECKLIST.md`
- `LEGAL_LAUNCH_CHECKLIST.md`
  
