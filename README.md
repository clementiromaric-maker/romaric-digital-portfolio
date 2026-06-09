# Romaric Clementi Web Digital Portfolio V5.11.5

Featured Case Copy & Proportion Polish built directly from V5.11.4.

## Purpose
Apply the final copy and visual refinements to the Marzieh feature without adding labels or redesigning the portfolio again.

## V5.11.5 changes
- Replaced generic “real local business” wording with the more specific “independent nail atelier in Valby” in English and natural Danish equivalent.
- Replaced plural “Clients needed” wording with singular atelier-focused language on the homepage and case pages.
- Reduced the Marzieh feature title size and widened its usable line length so the name reads more naturally.
- Rebalanced the feature columns and reduced screenshot padding so the live-site image is larger and sits higher.
- Shortened the homepage AI-production disclosure while preserving clear ownership and transparency.
- Preserved the simplified CTA wording from V5.11.4, including Read case study / Læs casen and Visit live website / Besøg live website.
- Preserved EN/DA parity, routes, assets, metadata, static export and Cloudflare deployment architecture.

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
