# Romaric Clementi Web & Digital Portfolio V5.11.8

Text Density & Danish Language Consistency patch, built directly from V5.11.7 Companion Portfolio Positioning & Cross-Link Polish.

## V5.11.8 changes

- Tightens only genuinely repetitive explanatory copy on the EN/DA homepages and both Marzieh case-study routes.
- Reduces selected long explanatory blocks by roughly 10–15%; total page-copy reduction is smaller because proof, navigation, metrics and case evidence remain intact.
- Preserves the Quick scan / Deep dive architecture instead of deleting useful deep proof.
- Replaces translated-sounding Danish wording with `Driftsorienteret tænkning` and more natural supporting copy.
- Uses Danish number formatting `2.000+` on the Danish route.
- Shortens repeated case explanations where the heading, diagram or interface image already communicates the point.
- Enlarges the companion Operations Portfolio footer link to a 44px minimum target height.

## Preserved

- Editorial systems storytelling and unclear-input to clear-system visual signature.
- Dedicated English and Danish Marzieh case-study routes.
- Real Marzieh interface proof and live-site link.
- IP-safe public presentation: Clementi AI Workflow, FørsteMatch and HamdamBridge remain walkthrough-on-request only.
- Operations-trained QA, ownership and handover positioning.
- Companion Operations, ERP & Workflow Portfolio links.
- Self-hosted fonts, static Next.js export and Cloudflare deployment.
- No Google Fonts, Tailwind CDN, fake metrics, senior-developer claim or AI-expert claim.

## Verified routes

- `/`
- `/da/`
- `/work/marzieh-nail-atelier/`
- `/da/arbejde/marzieh-nail-atelier/`
- `/_not-found`
- `/icon.png`
- `/robots.txt`
- `/sitemap.xml`

## Cloudflare build settings

```text
NODE_VERSION = 22.16.0
PNPM_VERSION = 10.11.1
SKIP_DEPENDENCY_INSTALL = 1
```

Build command:

```bash
pnpm install --frozen-lockfile && pnpm run build
```

Deploy command:

```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```

The `postbuild` lifecycle script writes `lang="da"` into the exported Danish pages.
