# Romaric Clementi Web Digital Portfolio V5.11.2

Deployment Registry & Lockfile Portability Fix built directly from V5.11.1 QA, Metadata, Language Routing & Deployment Hardening.

## Purpose
Preserve the complete V5.11.1 portfolio while removing environment-specific package-registry URLs that prevented Cloudflare from installing dependencies.

## V5.11.2 deployment correction
- Removed every OpenAI-internal Artifactory tarball URL from `pnpm-lock.yaml`.
- Replaced every environment-specific `package-lock.json` resolved URL with the standard `registry.npmjs.org` URL.
- Added a portable `.npmrc` selecting the public npm registry with resilient retry and timeout values.
- Kept all application source, visual design, copy, routes, metadata and public-link behaviour unchanged from V5.11.1.

## Preserved V5.11.1 improvements
- Editorial systems storytelling and signature unclear-input to clear-system visual.
- Quick scan / Deep dive control.
- Dedicated English and Danish Marzieh case-study routes.
- Corrected Open Graph image, schema, sitemap, robots and 404 handling.
- Mobile language-switch and 44px control hardening.
- IP-safe public presentation: Marzieh is the only public external project link.
- Clementi AI Workflow, FørsteMatch and HamdamBridge remain walkthrough-on-request only.
- No Google Fonts, Tailwind CDN, fake metrics, senior-developer claim or AI-expert claim.

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

After changing the source package, clear the Cloudflare build cache before redeploying.

## Final live check
After deployment, verify Android Chrome, iPhone Safari, desktop Chrome/Edge, the EN/DA switch, case-study links and social sharing preview.
