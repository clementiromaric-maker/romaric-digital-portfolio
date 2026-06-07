# Romaric Clementi Web Digital Portfolio V5.11.7

Companion Portfolio Positioning & Cross-Link Polish, built directly from V5.11.6 Final QA Hardening.

## Purpose
Preserve the V5.11.5 editorial portfolio while correcting the remaining issues found in a fresh source, build, static-export, rendered-layout, accessibility and package audit.

## V5.11.7 changes
- Prevented long Danish evidence-board labels from overflowing their cards around tablet/laptop widths.
- Increased the real clickable area of the EN/DA language links while preserving the compact phone header.
- Preserved responsive visibility rules so mobile navigation items remain correctly hidden.
- Reinforced 24px minimum pointer areas for relevant text links and 44px-high mobile language controls.
- Added an automatic post-build step that writes `lang="da"` into the exported Danish HTML, rather than relying only on client-side JavaScript.
- Applied a focused native-Danish polish to visible technical and portfolio wording.
- Replaced stale package documentation with an accurate current-version record.

## Preserved
- Editorial systems storytelling and the unclear-input to clear-system visual signature.
- Quick scan / Deep dive control.
- Dedicated English and Danish Marzieh case-study routes.
- V5.11.3 desktop hero zoom containment.
- V5.11.4 case typography, chapter-marker spacing and flagship mockup polish.
- V5.11.5 case-study rhythm compression.
- IP-safe public presentation: Marzieh is the only publicly linked external project.
- Clementi AI Workflow, FørsteMatch and HamdamBridge remain walkthrough-on-request only.
- No Google Fonts, Tailwind CDN, fake metrics, senior-developer claim or AI-expert claim.

## Verified static routes
- `/`
- `/da/`
- `/work/marzieh-nail-atelier/`
- `/da/arbejde/marzieh-nail-atelier/`
- `/_not-found`
- `/icon.png`
- `/robots.txt`
- `/sitemap.xml`

## Cloudflare build settings
Build variables:

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

The `postbuild` lifecycle script runs automatically after `next build` and patches the exported Danish pages to use the correct static HTML language attribute.

Clear the Cloudflare build cache before redeploying a replaced source package.

## Final live check
After deployment, verify Android Chrome, iPhone Safari and desktop Chrome/Edge, including the sticky header, EN/DA switch, Quick scan / Deep dive control, case-study links, Danish HTML language and social-sharing preview.

## V5.11.7 companion-portfolio changes
- Added a discreet EN/DA companion link to the Operations, ERP & Workflow Portfolio in the contact area and Marzieh case footer.
- Added the approved operations-trained QA, ownership and handover positioning line.
- Preserved IP-safe project presentation, route structure and existing deployment settings.
