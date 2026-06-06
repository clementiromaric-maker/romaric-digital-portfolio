# Romaric Clementi Web Digital Portfolio V5.9.1

Tiny language clarity polish on top of V5.9. Keeps the deeper systems-builder layer without redesigning the portfolio.

Core changes:
- Reframes selected pilots as controlled first-version systems.
- Renames the hidden-friction language into clearer friction-mapping wording where helpful.
- Keeps the hero and metadata around unclear human/business needs becoming useful first systems.
- Preserves Marzieh as strongest live proof and HamdamBridge as walkthrough-on-request only.

Build:
```bash
pnpm install --no-frozen-lockfile
pnpm run build
```

Deploy:
```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```
