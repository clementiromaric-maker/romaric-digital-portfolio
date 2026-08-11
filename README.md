# Romaric Clementi Digital Portfolio V6.1.1

Research-backed human-delivery rewrite for digital production, web content, CMS implementation support and QA roles.

## Positioning

**Digital Production · Web Content · QA**

**Clear digital structure from unclear needs.**

V6 keeps structure where the work is genuinely sequential, while removing repeated branded frameworks and consultant-style language from personal working principles. Live work is placed before supporting pilots.

## Routes

- `/` English portfolio
- `/da/` Danish portfolio
- `/work/marzieh-nail-atelier/` English case study
- `/da/work/marzieh-nail-atelier/` Danish case study

## Build

```bash
pnpm install --no-frozen-lockfile
pnpm run build
```

Next.js exports the static site to `out/`. `postbuild` then validates key routes, required public assets and retired-copy guardrails.

## Cloudflare

Cloudflare-safe deployment:

```bash
pnpm install --no-frozen-lockfile && pnpm run build
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```

Recommended build variables:

- `NODE_VERSION=22.16.0`
- `PNPM_VERSION=10.11.1`

`public/_headers` adds Cloudflare-compatible response hardening and immutable caching for hashed Next static assets.

## Boundaries

- No claim of senior software-engineering depth.
- No invented project metrics.
- No public HamdamBridge link.
- No stale review-count proof.
- AI use has one main disclosure plus a factual project-specific note in the Marzieh case.
- Danish copy is independently written rather than mechanically translated.

## QA / decision record

- `RESEARCH_BENCHMARK_V6_0.txt`
- `BACKTEST_V6_0.txt`
- `SECURITY_AND_PLATFORM_QA_V6_0.txt`
- `BUILD_VERIFICATION_V6_0.txt`
- `PROVENANCE_V6_0.txt`
- `CHANGELOG_V6_0.txt`

## Source provenance

The project notes reference V5.10.1 as the previous intended source package, but that exact ZIP was unavailable in this workspace. V6.1.1 is therefore a clean successor based on the live portfolio, current project notes, accessible earlier source styling and current project assets. See `PROVENANCE_V6_0.txt` for the precise boundary.

## V6.1.1 Cloudflare hardening

V6.1.1 uses one top-level `app/layout.jsx` and conventional top-level English routes. This deliberately overwrites any stale `app/layout.jsx` left in an older GitHub repository and removes the multiple-root-layout dependency from the deployment path. Danish remains under `/da/`; postbuild patches exported Danish HTML to `lang="da"`.

When updating GitHub, replace the repository contents rather than only adding files. Old route files can otherwise remain and still be compiled by Next.js.

Do not set `SKIP_DEPENDENCY_INSTALL=1` unless your build command explicitly runs `pnpm install` first.


## V6.1.1 stale-route protection
The prebuild step removes the retired `app/(en)` route group if an older GitHub checkout still contains it, then verifies that every Next.js page resolves to a unique public route before the production build starts.
