# Development and operations
Use Node 22.12+ and `npm ci`. Run `npm run dev` for local development; `npm run check` for Astro/TypeScript validation; `npm run build` for production static files and `npm run preview` to serve that output.
## Firebase setup
Verify the intended project with Firebase CLI before association. Run `firebase target:apply hosting marketing restabee --project YOUR_PROJECT_ID`, then deploy with `firebase deploy --only hosting:marketing --project YOUR_PROJECT_ID` after checks and preview review. Do not use an unscoped hosting deployment. No SPA catch-all rewrite: Astro generates real routes and a 404 page.
## Recovery
Use Firebase Hosting release history to roll back the marketing site only. Preserve the previous release until live checks pass. Never roll back the POS target as a marketing recovery action.

## Homepage review
The Astro CLI can reuse an existing daemon and print its current port. Use that printed URL for every check.

- Run `npm run check && npm run build` before production-preview checks.
- Run `node scripts/check-station.mjs` to preserve the separate historical prototype's publication boundary.
- Run `node /Users/akashverma/.agents/skills/anatomy/scripts/drive.mjs http://127.0.0.1:4322/ --actions scripts/home-smoke-actions.json --width 320 --height 800 --scale 1 --reduced` for the local browser interaction suite. The driver is a local skill dependency; replace its absolute path if the skill installation differs. It prepares sample email drafts without sending them.
- Run `node scripts/capture-home.mjs` for the viewport matrix and section crops. This local review helper expects the same driver and preview URL; update those constants if needed. It loads lazy images for capture and checks image loads and horizontal overflow.
- Run `npm exec --yes --package lighthouse -- lighthouse http://127.0.0.1:4322/ --output=json --output-path=.impeccable/review/lighthouse-mobile.json --chrome-flags='--headless --no-sandbox' --only-categories=performance,accessibility,best-practices,seo --quiet` for a mobile lab report. Repeatability requires the same browser, Lighthouse version and machine conditions. Lab results do not establish production Core Web Vitals.
