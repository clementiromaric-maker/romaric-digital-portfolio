# Romaric Clementi Web Digital Portfolio V5.11.7

Fresh Live Homepage Capture built directly from V5.11.6.

## Purpose
Replace the older composited Marzieh homepage preview with a fresh capture from the current live website, removing the half-covered CTA issue while preserving the simplified case-study hierarchy and visual balance.

## V5.11.7 changes
- Replaced `marzieh-homepage-ui-snapshot.webp` with a fresh 2048 × 1119 capture from the current live English Marzieh Nail Atelier homepage.
- The new capture shows the current navigation, complete hero copy, both CTA buttons, current proof row and nail image without the previous overlapping card treatment.
- Updated image dimensions and English/Danish alt text on the homepage and dedicated case-study routes.
- Preserved the supporting services and booking previews introduced in V5.11.6.
- Preserved all V5.11.6 routes, copy, CTA wording, AI-production disclosure, EN/DA parity, metadata and Cloudflare deployment architecture.

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

Clear the Cloudflare build cache before redeploying.


## Verification
- Production build passed with Next.js 16.2.7.
- Seven exported HTML files checked.
- Internal routes, anchors, local assets, alt text, H1 structure and JSON-LD passed static QA.
- The `#work` anchor and Quick scan / Deep dive controls were confirmed in source.
