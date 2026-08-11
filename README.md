# Romaric Clementi Digital Portfolio V6.2

Depth-restored, Cloudflare-hardened portfolio for digital production, web content, CMS implementation support and QA roles.

## Positioning

**Digital Production · Web Content · QA**

**Clear digital structure from unclear needs.**

V6.2 keeps the human-language improvements from V6 while restoring the visual depth and proof density that were lost in the first rebuild.

## What V6.2 restores

- clear **EN / DA** switch in the main navigation
- EN / DA switch on the Marzieh case-study routes
- stronger above-the-fold right-side proof panel
- real Marzieh Nail Atelier mobile screenshot in the hero
- richer Marzieh live-case presentation with desktop and mobile proof
- public preview CTA for Clementi AI Workflow
- public pilot CTA for FørsteMatch
- HamdamBridge remains walkthrough-only
- six concrete team-fit capabilities
- Operations Backbone evidence
- real Source → Structure → Build → Handover sequence
- First 30 days section
- stronger contact details and live-proof link

The old repeated friction/framework language remains removed.

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

Next.js exports the static site to `out/`. `prebuild` clears generated files, removes any stale legacy `app/(en)` route tree and checks for duplicate public routes. `postbuild` validates key routes, language markers, required public assets and retired-copy guardrails.

## Cloudflare

Recommended build variables:

- `NODE_VERSION=22.16.0`
- `PNPM_VERSION=10.11.1`

Recommended build command:

```bash
pnpm run build
```

Build output directory:

```text
out
```

If dependency installation is explicitly skipped in Cloudflare, use:

```bash
pnpm install --no-frozen-lockfile && pnpm run build
```

## Boundaries

- No senior software-engineering claim.
- No invented project metrics.
- No public HamdamBridge URL.
- No stale review-count proof.
- AI use is disclosed once as production support, with final responsibility remaining human.
- Danish copy is written as Danish rather than translated line by line.

## QA completed locally

- EN/DA content-tree parity: passed
- route-collision guard: 4 routes / 4 unique paths
- local asset references: passed
- target=_blank rel protection: passed
- no visible retired friction copy
- no visible em dashes
- no public HamdamBridge URL
- TypeScript/JSX syntax parse: passed
- postbuild and prebuild scripts syntax: passed

Full Next.js production compilation still requires dependency installation and is therefore finally validated by Cloudflare.
