# Romaric Clementi Web Digital Portfolio V5.11.1

Controlled QA, metadata, language-routing and deployment-hardening patch built directly from V5.11.0 Editorial Systems Storytelling.

## Purpose
Preserve the V5.11 visual storytelling upgrade while correcting real QA findings before deployment.

## Main corrections
- Added a reproducible `pnpm-lock.yaml` and a pnpm-specific PostCSS override.
- Verified the actual Cloudflare build path with pnpm 10.11.1 and Node 22.16.0.
- Rebuilt the Open Graph image so text and proof imagery no longer overlap or clip.
- Corrected Danish Marzieh links to the real `/da/` route.
- Added runtime Danish document-language correction while retaining `lang="da"` on Danish content wrappers.
- Corrected Person and case-study JSON-LD URLs and added Danish case schema parity.
- Added static `robots.txt`, `sitemap.xml` and a custom noindex 404 page.
- Strengthened mobile language-switch behaviour and 44px portfolio-view controls.
- Kept quick-scan section numbering sequential.
- Added explicit image dimensions and lazy-loading/decoding where appropriate.
- Corrected wording from “npm-served fonts” to locally bundled fonts.

## Preserved guardrails
- Marzieh Nail Atelier remains the only publicly linked external project.
- Clementi AI Workflow, FørsteMatch and HamdamBridge remain walkthrough-on-request only.
- No protected pilot URLs in source constants, rendered HTML or JSON-LD.
- No Google Fonts, Tailwind CDN, fake metrics, senior-developer claim or AI-expert claim.
- V5.11 editorial hero, Quick scan / Deep dive, evidence board and bilingual case-study routes are preserved.

## Build
```bash
pnpm install --frozen-lockfile
pnpm run build
```

## Deploy
```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```

## Final live check
After deployment, verify Android Chrome, iPhone Safari, desktop Chrome/Edge, the EN/DA switch, case-study links and social sharing preview.
