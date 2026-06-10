# Romaric Clementi Web Digital Portfolio V5.11.9

Final Language, Metadata & Capability-Density QA Patch built directly from V5.11.8.

## Purpose
Preserve the new structured-content, CMS and Jira evidence while correcting static Danish language metadata and keeping the capability section concise and recruiter-readable.

## V5.11.9 changes
- Added a deterministic postbuild step that writes `lang="da"` into every exported Danish HTML page.
- Removed the runtime-only Danish language mutation from the nested layout.
- Shortened the English meta description to a cleaner search-result length.
- Tightened the Sanity/Jira evidence wording and retained honest working-exposure boundaries.
- Consolidated the capability chips from a long tool inventory into 13 clearer evidence groups.
- Preserved all routes, case content, live links, Quick scan / Deep dive behaviour, AI-production disclosure and Cloudflare deployment architecture.

## Cloudflare build settings

```text
NODE_VERSION = 22.16.0
PNPM_VERSION = 10.11.1
SKIP_DEPENDENCY_INSTALL = 1
```

Build command:

```bash
pnpm install --frozen-lockfile && pnpm run build
```

Deploy command:

```bash
pnpm dlx wrangler deploy --assets ./out --compatibility-date 2026-06-06
```

Clear the Cloudflare build cache before redeploying.
