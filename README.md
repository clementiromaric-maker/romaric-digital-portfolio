# Romaric Clementi Web Digital Portfolio V5.9.3

Final deployment QA polish on top of V5.9.2.

Scope:
- Fixed the contact anchor / sticky-header overlap risk by adding stronger contact scroll margin, top padding and bottom scroll room.
- Reduced the maximum hero headline size slightly so the first screen feels powerful but less heavy.
- Replaced the remaining heavier systems wording with clearer "working first-version systems" language.
- Preserved the V5.9 systems positioning, Marzieh proof, proof dashboard, self-hosted fonts and visual hierarchy polish.

Build:
```bash
pnpm install --no-frozen-lockfile
pnpm run build
```

Deploy:
```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```
