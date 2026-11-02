# 0027: Use GitHub Pages as the initial marketing host

Date: 2026-11-03

## Context

The public Astro site is currently built as static output. The repository already publishes its existing website from `main` through GitHub Pages; the Astro project needs a build step before the static files can be published.

## Decision

- Use GitHub Pages with GitHub Actions as the initial host for the marketing site.
- Build the Astro project from the repository root when `main` changes, then deploy the generated `dist` artifact.
- Keep `astro.config.mjs` on the root domain `https://restabee.com`; no repository subpath is used for the production URL.
- Keep the configured Firebase Hosting target as a fallback. The POS site and Cloud Run API remain separate from marketing hosting. Public DNS lookup on 2026-11-03 returned Cloudflare authoritative nameservers; this is an observation, not authorization to change DNS.
- Configure `restabee.com` in GitHub Pages settings. Keep existing DNS records if they already point to the current site and pass live checks.
- Keep the SEO release baseline in the generated HTML: canonical URL, index directive, Open Graph/Twitter metadata, JSON-LD entities, robots.txt and the canonical sitemap. Keep the historical prototype noindex and outside the sitemap.

## Rejected

- Branch-only publishing from the repository root or `/docs`: neither folder contains the built Astro output, and GitHub Pages does not run Astro's build step for branch publishing.
- Committing generated `dist` files to `main`: the Actions artifact keeps generated output out of the source history.
- Changing DNS before confirming the repository's current Pages configuration and custom domain.

## Consequences

Repository settings must use **Settings → Pages → Source → GitHub Actions**. A push to `main` starts deployment after this workflow is present. The GitHub Actions run and live domain still require external verification after publication.

Astro static output, separate POS/API targets and the CRM boundary remain unchanged. The earlier decision described DNS as Hostinger-managed; verify the active DNS account before record changes.

## Supersedes

Supersedes the Firebase Hosting target for initial deployment in [0001](0001-astro-marketing.md). The Astro static-output, separate POS/API targets and CRM-boundary choices in 0001 remain in effect.
