# Romaric Clementi Web Digital Portfolio V5.11.3

Case Clarity, AI Disclosure & Agency Trust Patch built directly from V5.11.2 Deployment Registry & Lockfile Portability Fix.

## Purpose
Correct the concrete agency feedback received after a Kvalifik outreach:
- the Marzieh case-study entry point did not feel visually aligned enough;
- the dedicated case-study route looked too similar to the main portfolio and was not immediately recognisable as a separate case;
- AI-assisted production and the division of responsibility were not explicit enough;
- Webflow, Shopify and GitLab-style wording needed tighter, more defensible calibration.

## V5.11.3 changes
- Rebuilt the featured Marzieh entry as a clear **Featured live case** with a stronger case title, aligned actions and a separate live-site action.
- Added a visible **Live website preview** label to distinguish the client-site screenshot from the portfolio interface.
- Added explicit project relationship and personal responsibility language for the real close/self-owned Marzieh case.
- Added project-level and portfolio-level **AI-assisted production disclosures** in English and Danish.
- Replaced `Hand-built` wording with accurate direction, review and delivery ownership language.
- Recalibrated Webflow and Shopify wording from support claims to familiarity/readiness.
- Replaced GitLab-style claims with verified GitHub-based workflow and structured handover wording.
- Added dedicated EN/DA case-study breadcrumbs, case-study identity, project context panel and clearer read-case/live-site action hierarchy.
- Strengthened the visual separation between the main portfolio and the Marzieh case-study route.
- Preserved the existing static Next.js / Cloudflare architecture, routes, assets, metadata, language parity and IP-safe public-link strategy.

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

After replacing the source package, clear the Cloudflare build cache before redeploying.

## Final live check
After deployment, verify:
- EN and DA homepages;
- the featured Marzieh case actions;
- `/work/marzieh-nail-atelier/` and `/da/arbejde/marzieh-nail-atelier/`;
- Android Chrome, iPhone Safari and desktop Chrome/Edge;
- all screenshots and local assets;
- the AI disclosure blocks;
- social sharing preview and language switching.
