# Romaric Clementi Web Digital Portfolio V5.10.3

Controlled IP-safe public portfolio micro-patch after V5.10.2.

Scope:
- Preserve V5.10.2 EN/DA route, Danish native polish, portrait trust detail, footer line fix and system-card CTA alignment.
- Keep Marzieh Nail Atelier as the only public project link.
- Change Clementi AI Workflow and FørsteMatch to walkthrough-on-request in public portfolio cards.
- Remove Clementi AI Workflow and FørsteMatch public URLs from visible source constants and JSON-LD work examples.
- Add a calm public note that deeper pilot walkthroughs are available on request.
- No redesign, no new major sections, no strategy change.

Build:
```bash
pnpm install --no-frozen-lockfile
pnpm run build
```

Deploy:
```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```
