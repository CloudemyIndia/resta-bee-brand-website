# Privacy Policy and public contact details

## Context

The owner asked to make the Privacy Policy discoverable from the demo form and Helpful links footer. The existing form select arrow sat close to its right border. The owner also supplied a replacement public phone number and requested Cloudemy attribution in the footer and a Cloudemy link from Contact.

## Decision

- Add `/privacy-policy/` as an Astro static route with validated page content and Pages CMS field mappings.
- Link to the policy from the shared homepage/Contact demo form and Helpful links footer group, and include the route in the sitemap and `llms.txt`.
- State only the owner-confirmed retention terms: lead enquiries are used for restaurant follow-up and future outreach/support, kept 12 months and deletable on request; restaurant account data is kept three months after subscription expiry, with earlier deletion available on request; privacy questions go to `hello@restabee.com`.
- Describe service-provider categories without inventing provider names or storage regions. State that the current production provider list and processing locations still require verification.
- Replace the prior public number with `+91 8960915050` in current site pages and phone links. Leave the archived legacy source as historical material.
- Set the shared footer attribution to “RestaBee, A Cloudemy Product” and link the Contact company reference to `https://cloudemy.in/`.
- Give the shared outlet selector additional right-side padding and a positioned custom chevron.

## Rejected

- Linking to a nonexistent or placeholder privacy route.
- Guessing infrastructure vendors, data regions, backup purge timing or application cookie behavior.
- Keeping a number that the owner has replaced in public site source.

## Consequences

- The Privacy Policy is available in the local Astro build, with its unresolved production-provider details stated in the page and recorded in [BACKLOG](../BACKLOG.md).
- Its legal and operational accuracy still requires checking against the production systems before deployment.
- The form privacy notice is editor-controlled page content, and both form instances use the same shared component.
- Contact and footer number updates, company attribution and policy links are common across the relevant routes.

## Evidence

Dev verified 2026-11-04: `npm run check && npm run build && python3 scripts/report-contact-keywords.py && node scripts/report-contact-contrast.mjs && git diff --check` → 0 Astro errors, warnings or hints; 18 static routes; Pages CMS fields match 16 content entries; static verifier checks Privacy Policy canonical/indexability, owner-confirmed retention/contact terms, form/footer links, sitemap and `llms.txt`; Contact visible text reports 376 words and 3 exact primary phrase matches / 376 = 0.798%; selected Contact contrast pairs calculate to 6.39:1 minimum. Dev and preview servers exited before readiness, so browser rendering and Lighthouse were not checked. No production deployment was performed.

## Supersedes

This decision supersedes the “keep the Privacy Policy unpublished” gate in [decision 0053](0053-contact-form-and-navigation.md). It leaves the common form and navigation choices in 0053 intact.
