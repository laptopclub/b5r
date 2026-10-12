# b5r Foundation provisioning record

Last reviewed: 2026-10-12

## Site

- Repository: `laptopclub/b5r`
- Production URL: https://b5r.co.uk
- Vercel project: `laptopclub/b5r`
- Foundation packages: `@laptopclub/foundation-ui` and `@laptopclub/foundation-config` 0.1.32
- Content model: code-managed landing page. Sanity is intentionally deferred.

## Checklist status

### Repository and package access

- [x] Repository is independent from Foundation workspaces.
- [x] Foundation package registry is configured in `.npmrc` without a committed token.
- [x] Vercel has `NPM_TOKEN` for production, preview and development.
- [x] CI uses the `PACKAGES_TOKEN` repository secret.
- [x] Foundation package versions are pinned together.
- [x] Client-specific agent guidance is committed.

### Vercel and domains

- [x] Vercel project is linked to `laptopclub/b5r` and deploys `main` to production.
- [x] Node.js 24.x is configured in Vercel.
- [x] Production domains `b5r.co.uk` and `www.b5r.co.uk` are assigned.
- [x] Resend enquiry environment variables are configured in Vercel.

### Content and branding

- [x] Foundation `SiteShell` provides the shared header, footer and progressive viewport blurs.
- [x] A b5r-generated favicon and Apple touch icon are provided.
- [x] `robots.txt` and `sitemap.xml` are provided for the static homepage.
- [x] b5r brand tokens, Flexoki Dark palette and Atkinson Hyperlegible Mono remain site-owned.
- [x] Current content and the Resend enquiry form remain site-owned.

### Deferred intentionally

- [ ] Sanity project, dataset and hosted Studio.
- [ ] Draft Mode, visual editing and signed content revalidation.
- [ ] CMS-managed navigation, footer and page blocks.
- [ ] Foundation fleet inventory entry. Add this when b5r has a Foundation CMS consumer shape or the inventory supports static consumers.

## Validation

Run from the Foundation repository after Foundation package upgrades:

```bash
pnpm validate:site ../b5r --run-checks --url https://b5r.co.uk --smoke-paths /,/sitemap.xml,/robots.txt
```

The Foundation validator's default `/studio` smoke test does not apply while b5r is static.
