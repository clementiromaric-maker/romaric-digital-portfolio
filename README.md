# Romaric Clementi | Web and Digital Workflow Portfolio V5.3.2

Next.js static portfolio for web agencies, digital teams, CMS shops and startups.

## What changed in V5.3.2

- Added a compact Operations Backbone section inside the approach area.
- Added the working rhythm: Friction → Source → Owner → Review → Reuse.
- Added operations proof metrics from the CV and workflow portfolio: 2,000+ ERP item structures, 200+ multi-level parts, 30+ EU/US suppliers and 5 / 40+ production lines and variants.
- Strengthened the Marzieh Nail Atelier case with a Before / After / What it proves block.
- Kept the site focused on web and digital production, not as another CV.
- Preserved the V5.3 copy-confidence polish: tighter hero, stronger Target Fit and less self-undermining language.
- Preserved the V5.2/V5.2.1 deployment-safe architecture: no Google Fonts, no Tailwind CDN and no unsupported performance or commercial metrics.

## V5.3 foundation preserved

- Marzieh Nail Atelier leads with a UI-focused homepage snapshot plus smaller UI proof panels for services, work/gallery and visit/booking flow.
- HamdamBridge remains selective proof with walkthrough available on request, not a public agency-facing link.
- External Google Fonts requests remain removed. The design uses a system font stack for cleaner EU-facing deployment and fewer third-party requests.
- Public copy avoids em dash punctuation.
- Open Graph metadata defaults to the live Workers portfolio URL if NEXT_PUBLIC_SITE_URL is not set.
- packageManager is set to pnpm@10.11.1 to reduce Cloudflare package-manager ambiguity.

## Deploy on Cloudflare Workers and Pages

Use the Cloudflare build setup that worked for this project:

Build variables:

```txt
NODE_VERSION=22.16.0
PNPM_VERSION=10.11.1
SKIP_DEPENDENCY_INSTALL=1
```

Build command:

```txt
pnpm install --no-frozen-lockfile && pnpm run build
```

Deploy command:

```txt
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```

Root directory:

```txt
/
```

## Local development

```bash
pnpm install --no-frozen-lockfile
pnpm run dev
```

## Local static build

```bash
pnpm run build
```

The static output is generated in `out/`.


## V5.3.2 final micro-polish

- Compressed hero, approach, fit, Marzieh proof and process copy by roughly 10 to 15 percent.
- Restored distinctive typography through npm-installed self-hosted font packages, with no Google Fonts or external font requests.
- Strengthened CTA hierarchy and section spacing.
- Kept HamdamBridge as walkthrough-on-request only.
- Removed unused nail product image assets from the source package.
- Preserved the V5.3.1 proof architecture and no unsupported metrics.
