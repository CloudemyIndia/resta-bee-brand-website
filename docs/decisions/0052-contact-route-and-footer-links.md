# Contact route and footer link groups

## Context

The site needed a dedicated contact destination and clearer footer discovery. The main navigation already links to the Features directory, so repeating that route in the footer Features group added little. The workbook assigns `/contact/` the primary query “RestaBee contact,” with “RestaBee support” and “RestaBee phone” as supporting terms.

## Decision

- Put Restaurant management software in the Product footer group.
- Keep feature detail routes in the Features footer group and remove “Explore all features” from that group.
- Rename the third footer group “Helpful links” and add Contact us at `/contact/`.
- Build Contact as a static Astro route backed by the validated `pages` collection and Pages CMS field map.
- Link sales and support through the existing RestaBee email and phone; direct demo requests to the existing homepage form.
- Publish Cloudemy Digital Technologies Pvt. Ltd. as RestaBee’s owner and use its public company address, following owner confirmation and the official company contact page.
- Do not add a Privacy Policy link until data retention, processors and locations, analytics/cookies, and privacy-request handling are confirmed. Track that work in [BACKLOG](../BACKLOG.md).

## Rejected

- Repeating `/features/` in the footer Features group, because Features is already a main-nav destination.
- Publishing guessed privacy terms, which could misstate how lead data is handled.
- Putting the product category page in Features, because it describes the overall product and links to feature details.

## Consequences

- The Contact page has its own canonical metadata, ContactPage and breadcrumb JSON-LD, workbook keywords, FAQ and shared site navigation/footer.
- `scripts/verify-build.mjs` checks route metadata/schema, footer grouping, sitemap, `llms.txt` and CMS field parity.
- Privacy Policy publication remains queued until the open data-handling facts are supplied.

## Evidence

Dev verified 2026-11-04: `npm run check && npm run build && python3 scripts/report-contact-keywords.py && node scripts/report-contact-contrast.mjs && git diff --check` → 0 Astro errors, warnings or hints; 17 generated routes; 15 CMS content entries; 378 visible main-copy words; 2 exact primary phrase matches / 371 = 0.529%; “RestaBee support” appears twice and “RestaBee phone” once. Build checks ContactPage schema, self-canonical/indexability, footer columns, sitemap, `llms.txt`, CMS fields, and the labelled product screenshot with alt text and reserved dimensions. Selected declared text/surface pairs calculate to at least 6.39:1. Browser visual review and Lighthouse were not run.

## Supersedes

The footer distribution in [decision 0047](0047-three-column-footer-navigation.md) is superseded by this decision. Decision 0047’s three-column layout remains in place.
