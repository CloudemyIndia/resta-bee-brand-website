# Development, deployment and recovery

## Local development

Use Node 22.12+ and `npm ci`. Run `npm run dev` for local development, `npm run check` for Astro/TypeScript validation, `npm run build` for production static files and `npm run preview` to serve that output.

### Demo request API

The form posts JSON to `/api/public/leads` on `PUBLIC_API_BASE_URL` (production default: `https://api.restabee.com`). For local backend integration, create `.env` from `.env.example` and restart Astro; the example targets `http://127.0.0.1:3007`. Add the Astro origin in use (for example `http://localhost:4321` or `http://127.0.0.1:4321`) to the backend `CORS_ORIGINS` allowlist. The frontend reads the API body's `success` field because HTTP 200 can contain either success or failure. Validation `errors` are attached to matching form controls; other failures preserve values and provide the email fallback. Keep production builds on `https://api.restabee.com` and never put backend credentials in this static site. Backend rollout and CRM delivery are tracked separately in [BACKLOG](BACKLOG.md).

## GitHub Pages (current initial host)

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main`. It checks out the repository, runs `npm run check && npm run build`, then publishes Astro's `dist` artifact. It does not publish the source tree or commit generated files.

### Repository settings and first publication

1. On GitHub, open the repository's **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
2. Under **Custom domain**, confirm `restabee.com` is present. Enable **Enforce HTTPS** after GitHub confirms the certificate is ready.
3. Leave DNS unchanged if `restabee.com` already resolves correctly. A live lookup on 2026-11-03 returned Cloudflare authoritative nameservers (`nadia.ns.cloudflare.com`, `keenan.ns.cloudflare.com`); verify which account controls the active zone before any record edits. If DNS must change, compare the current apex records to GitHub's Pages instructions first.
4. Review the working tree, then commit and push the site and workflow changes to `main`. The `main` push starts the workflow. Do not deploy from branch-based publishing; it would serve source files rather than Astro's compiled site.
5. In **Actions**, confirm the build and deploy jobs both pass. Open `https://restabee.com/` and check the home page, images, canonical domain, HTTPS and `/404.html` response.

The existing root `CNAME` file may remain, but when a custom Actions workflow is used, the configured domain in **Settings → Pages** controls the custom domain. No repository subpath is configured because `restabee.com` is the production root.

### SEO checks after publication

- Open `https://restabee.com/robots.txt` and `https://restabee.com/sitemap.xml`; confirm the sitemap lists the 16 canonical, indexable public routes and excludes the 404 and visual prototype.
- Open `https://restabee.com/llms.txt` and confirm it serves the product overview, feature-route guide, current public links and capability boundaries.
- In Google Search Console, verify the `restabee.com` Domain property using a DNS TXT record at the active authoritative DNS provider (currently Cloudflare by public NS lookup), submit `https://restabee.com/sitemap.xml`, then inspect the homepage URL for indexability and the selected canonical.
- Optionally verify the site in Bing Webmaster Tools and submit the same sitemap.
- Check social previews with the current Open Graph/Twitter image at `https://restabee.com/og-restaurant-pos.png` after the deployment is live.

### Recovery

If the deployed site fails, inspect the failed GitHub Actions run and preserve the last known good deployment. Fix the cause and push a reviewed revert commit to `main` to redeploy the previous source. Do not use `git reset`, force-push or alter the POS deployment as a marketing-site recovery action.

## Firebase fallback

The configured Firebase Hosting target remains available as a fallback. Verify the intended project with Firebase CLI before association. Run `firebase target:apply hosting marketing restabee --project YOUR_PROJECT_ID`, then deploy with `firebase deploy --only hosting:marketing --project YOUR_PROJECT_ID` after checks and preview review. Do not use an unscoped hosting deployment. No SPA catch-all rewrite: Astro generates real routes and a 404 page. Use Firebase Hosting release history to roll back the marketing site only. Never roll back the POS target as a marketing recovery action.

## Homepage review

The Astro CLI can reuse an existing daemon and print its current port. Use that printed URL for every check.

- Run `npm run check && npm run build` before production-preview checks.
- Run `node scripts/check-station.mjs` to preserve the separate historical prototype's publication boundary.
- Run `node /Users/akashverma/.agents/skills/anatomy/scripts/drive.mjs http://127.0.0.1:4322/ --actions scripts/home-smoke-actions.json --width 320 --height 800 --scale 1 --reduced` for the local browser interaction suite. The driver is a local skill dependency; replace its absolute path if the skill installation differs. The form's API response is mocked in this suite; it does not create a CRM lead.
- Run `node scripts/capture-home.mjs` for the viewport matrix and section crops. This local review helper expects the same driver and preview URL; update those constants if needed. It loads lazy images for capture and checks image loads and horizontal overflow.
- Run `npm exec --yes --package lighthouse -- lighthouse http://127.0.0.1:4322/ --output=json --output-path=.impeccable/review/lighthouse-mobile.json --chrome-flags='--headless --no-sandbox' --only-categories=performance,accessibility,best-practices,seo --quiet` for a mobile lab report. Repeatability requires the same browser, Lighthouse version and machine conditions. Lab results do not establish production Core Web Vitals.
