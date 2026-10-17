# b5r agent guide

## Project summary

- Site: b5r, independent work by Dan Brazier.
- Production URL: https://b5r.uk
- Foundation packages: `@laptopclub/foundation-ui` and `@laptopclub/foundation-config` 0.1.32.
- Content is currently code-managed. Do not introduce Sanity, a CMS or draft-mode infrastructure unless explicitly requested.

## Boundaries

- Keep b5r-specific content, styling and composition in this repository.
- Use the shared Foundation shell for common site chrome and upgrade all installed `@laptopclub/foundation-*` packages together.
- Put reusable framework fixes in `laptopclub/foundation`.
- Do not edit installed Foundation package code.
- Preserve the minimal, text-forward b5r design and Atkinson Hyperlegible Mono font.
- Never commit `.env` files, package tokens or API keys.
- Do not add dependencies without explicit approval.

## Required checks

```bash
pnpm check
pnpm build
```

## Definition of done

- Foundation package changes are validated in a Vercel preview.
- Client-specific changes stay in this repository.
- Relevant routes are smoke-tested after deployment.
- No secrets or generated temporary files are committed.
