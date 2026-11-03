# Shared contact form and Contact navigation

## Context

The Contact route previously sent visitors to the homepage to submit a demo request, and the route was discoverable from the footer only. The page needed a direct enquiry form and a place in the common desktop and mobile navigation.

## Decision

- Render the same `DemoLeadForm` component on the homepage and `/contact/`, using the same lead API endpoint, field names, timeout and success/error response handling.
- Put Contact in the shared desktop and mobile main navigation and retain the footer Contact link.
- Keep page copy, FAQ entries, screenshot alternative text and SEO metadata in the validated Astro page collection exposed by Pages CMS; keep layout, responsive styling and form behavior in Astro components.
- Keep the privacy policy unpublished until the remaining data-flow and request-handling details are verified.
- Record the owner-confirmed policy terms for the eventual full-platform policy: demo enquiries are used for restaurant follow-up and future outreach/support, retained for 12 months and deletable on request; restaurant account data is retained for 3 months after subscription expiry, with earlier deletion available on request; the privacy contact is `hello@restabee.com`.

## Rejected

- Maintaining separate homepage and Contact form implementations, because the same lead workflow would then risk diverging field validation, response handling and API behavior.
- Publishing a privacy policy with guessed cloud vendors, storage regions, backup deletion timing, cookie behavior or rights-handling procedures.

## Consequences

- Contact gives visitors a direct demo request path while preserving the homepage form and shared feedback behavior.
- The unresolved privacy-policy facts remain queued in [BACKLOG](../BACKLOG.md).
- Contact uses the supplied real RestaBee phone screenshot with distinct product and sample-data labels.

## Evidence

Dev verified 2026-11-04: `npm run check && npm run build && python3 scripts/report-contact-keywords.py && node scripts/report-contact-contrast.mjs && git diff --check` → Astro check reports 0 errors, warnings or hints; build generates 17 routes and verifies CMS field parity across 15 entries, shared desktop/mobile navigation, Contact schema/meta/canonical, screenshot labels, homepage/contact shared form fields and API feedback states. Contact visible body contains 369 words and 3 exact “RestaBee contact” matches (0.813%); supporting phrases “RestaBee support” and “RestaBee phone” appear two and one times. Selected declared contrast pairs pass at 6.39:1 minimum. Local browser process exited before readiness, so rendered visual review, browser accessibility tooling and Lighthouse remain unverified.

## Supersedes

This decision extends [decision 0052](0052-contact-route-and-footer-links.md) with the shared form and main-navigation placement. It does not change its footer grouping.
