# Romaric Clementi Web Digital Portfolio V5.10.1

Final micro-fix after Danish trust layer.

Scope:
- Keep V5.10 EN/DA route, portrait trust detail and footer line fix.
- Align system-card bottom actions so `Open preview`, `Open pilot` and walkthrough note sit on the same baseline.
- No copy strategy changes, no new sections, no redesign.

Build:
```bash
pnpm install --no-frozen-lockfile
pnpm run build
```

Deploy:
```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```
