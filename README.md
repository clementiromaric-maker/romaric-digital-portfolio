# Romaric Clementi Digital Portfolio V6.7

Real-screenshot correction built from the V6.6 three-part-proof/custom-cursor branch.

## What changed
- The hero keeps the single `From rough input -> Clear first version` concept.
- The duplicated workflow block was removed completely from the Marzieh Selected Work presentation.
- Marzieh Selected Work now shows only a real archived desktop website capture and a real mobile website capture.
- The Marzieh case-study cover and visual gallery use captured website pixels rather than reconstructed interface cards.
- Reconstructed V6.6 proof assets were removed from the package so they cannot accidentally return.
- Clementi AI Workflow, FørsteMatch and HamdamBridge remain walkthrough-only.
- The custom desktop cursor remains enabled, with native behaviour on touch devices and text inputs.

## Screenshot provenance
The desktop proof is a crop of an archived screenshot of the actual Marzieh Nail Atelier homepage, using only the website area and excluding surrounding portfolio/browser presentation. The mobile proof images are actual mobile captures of the live Marzieh website with browser chrome cropped away for presentation. No website UI is redrawn in these proof assets.

## Cloudflare
Node 22.16.0 / pnpm 10.11.1.

```bash
pnpm install --frozen-lockfile && pnpm run build
```

Static output directory: `out`.


## V6.7.1
Corrected the Selected Work desktop screenshot framing: the fuller archived real screenshot is used, the old forced crop ratio is removed, and extra bottom breathing room prevents the lower part of the proof from looking cut off.
