# Romaric Clementi — Web & Digital Workflow Portfolio V5.1

Verified Next.js static-export portfolio.

## Build status

This package was tested with:

```bash
npm install
NEXT_TELEMETRY_DISABLED=1 npm run build
npm audit --omit=dev
```

Result: build passed and `npm audit --omit=dev` returned 0 vulnerabilities.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static export is generated in:

```bash
out/
```

## Cloudflare Pages settings

- Framework preset: Next.js, or None/static if deploying the prebuilt `out/` folder
- Build command: `npm run build`
- Output directory: `out`
- Node version: 22 recommended

## Site URL metadata

Before final public deployment, set this environment variable in Cloudflare Pages:

```bash
NEXT_PUBLIC_SITE_URL=https://your-final-portfolio-domain
```

If not set, the portfolio uses `https://romaric-clementi-portfolio.pages.dev` as a placeholder metadata base.

## Notes

- Images are local in `public/assets/` and export to `out/assets/`.
- No private API keys or backend secrets are included.
- The portfolio is static and safe for Cloudflare Pages.
