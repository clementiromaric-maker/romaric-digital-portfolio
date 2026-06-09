# Romaric Clementi Web Digital Portfolio V5.11.4

Case Simplification, CTA Clarity & Editorial Separation Patch built directly from V5.11.3.

## Purpose
Respond to concrete agency feedback without solving a hierarchy problem by adding more labels. This patch simplifies the Marzieh presentation, makes the dedicated case page visually and structurally distinct, and replaces awkward proof-oriented link wording with plain human actions.

## V5.11.4 changes
- Replaced the over-labelled featured case with one simple project identity, one screenshot, three concise project facts and two clear actions.
- Removed `Featured live case`, `Close/self-owned project`, `Live website preview`, `Strongest proof`, duplicate project headings, duplicate CTA rows and Google-rating/review metrics from the portfolio presentation.
- Reframed the relationship naturally as a real implemented project for the founder’s wife’s independent business, not a paid external client engagement.
- Rebuilt the EN/DA case pages as cleaner editorial case studies with a distinct visual theme, a project-at-a-glance row, clear personal contribution, interface evidence, production/handover evidence and one calm AI-production disclosure.
- Standardised CTAs to direct language such as `Read case study`, `Visit live website`, `View project details`, `Back to portfolio` and their natural Danish equivalents.
- Replaced contact label `Live proof` with `Live website` and changed `Open deep dive` to `View detailed experience`.
- Preserved routes, assets, language parity, metadata, static Next.js export and Cloudflare deployment architecture.

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
