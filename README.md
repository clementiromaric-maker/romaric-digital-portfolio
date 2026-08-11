# Romaric Clementi Digital Portfolio V6.4

Private-walkthrough and professional-proof update built from the restored V6.3 / uploaded V5.11.9 production baseline.

## What changed in V6.4
- Clementi AI Workflow: no public preview URL; walkthrough available on request only.
- FørsteMatch: no public pilot URL; walkthrough available on request only.
- HamdamBridge remains walkthrough-only.
- Supporting-project proof now says `3 supporting projects` instead of `3 built pilots`.
- Replaced the raw phone/browser presentation with a cropped real mobile capture that removes browser and device chrome.
- Replaced the older Marzieh desktop proof with a cleaner current interface preview built from verified live-site copy and existing site imagery.
- Updated service and visit interface previews to current service/visit information.
- Rebuilt the selected-work preview at higher resolution with a consistent editorial treatment.
- Replaced the tiny hero screenshot with a clean Pearl Satin Glaze proof image.
- Retired the older raw/stale proof assets so they cannot accidentally return later.
- Updated OG image to the new proof treatment.
- EN/DA routes and language switch remain intact.
- V6.3 Cloudflare route guards remain intact.

## Proof-image terminology
The portfolio intentionally distinguishes between:
- **Interface preview**: a curated portfolio visual using verified live-site copy and genuine project imagery. It is not presented as a literal browser screenshot.
- **Real mobile capture**: an actual mobile capture of the Marzieh website, cropped only to remove browser/device chrome.

This avoids presenting reconstructed interface visuals as literal screenshots.

## Cloudflare
Use Node 22.16.0 and pnpm 10.11.1.

Build command:
```bash
pnpm install --frozen-lockfile && pnpm run build
```

Output directory: `out`
