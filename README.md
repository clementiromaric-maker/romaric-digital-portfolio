# Romaric Clementi Digital Portfolio V6.5

Visual-proof polish built from V6.4. Content positioning, private-project guardrails and the restored V5.11.9 portfolio depth are unchanged.

## V6.5 visual fixes
- Hero proof panel is wider and vertically centred so it uses the previously empty right-hand space.
- `From rough input` module is larger, with roomier chips and a larger output block.
- `Clear first version` and its supporting line no longer feel cramped.
- Marzieh desktop proof was rebuilt with a cleaner crop and a taller Atelier Path card, removing text/tile overlap.
- Featured mobile proof is cropped before the sticky booking overlay.
- Mobile proof now sits in a light editorial device frame instead of a black fill area.
- Desktop proof uses a clean 16:9 presentation and the mobile proof keeps its natural aspect ratio.
- Clementi AI Workflow, FørsteMatch and HamdamBridge remain private walkthrough-only projects.

## Private commercial projects
Clementi AI Workflow, FørsteMatch and HamdamBridge do not expose public preview/pilot URLs from the portfolio. Visible treatment is walkthrough-on-request only.

## Cloudflare
Recommended:
- Node 22.16.0
- pnpm 10.11.1
- Build command: `pnpm install --frozen-lockfile && pnpm run build`
- Output directory: `out`

The prebuild route guard from earlier hardened releases remains in place.
