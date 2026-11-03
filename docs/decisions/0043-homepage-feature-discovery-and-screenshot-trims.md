# Decision 0043: Homepage feature discovery and screenshot trims

- Date: 2026-11-04
- Status: Accepted
- Scope: Homepage service types, feature discovery and menu screenshot placement
- Supersedes: the temporary homepage-retention position in decision 0030 for the specific sections listed below; decision 0030's dedicated-page sequence remains in force

## Context

The homepage had several detailed product sections now covered by dedicated feature pages. The page still needs enough substance for search visitors and restaurant operators, while its main product showcases remain Table QR Ordering and One Restaurant Workspace.

## Decision

Keep Table QR Ordering and One Restaurant Workspace as the two main homepage showcases. Include Table QR Ordering in the service-types list. Keep the homepage feature glance at six concise, linked summaries and retain the order-to-bill narrative. Shorten the FAQ list.

Remove the central-menu showcase and menu photo preference cards from the homepage. Place the with-photo and compact no-photo POS menu screenshots on the restaurant menu management page, with responsive uncropped captures, device framing and CMS-editable headings, captions and alt text.

Reduce the billing card in Operations to a short summary with a link to the billing page. Remove shift and report screenshots from the homepage; link the relevant feature pages. Keep homepage content sufficient to explain the product and invite exploration without repeating the depth of dedicated pages.

All affected prose, labels and image alternatives remain in validated Astro content entries with corresponding Pages CMS fields. Keep layouts, responsive behavior and reusable components in Astro code.

## Rejected

- Keeping every detailed capability screenshot on the homepage, which duplicated the dedicated pages and made the page longer.
- Removing both protected showcase sections or replacing the feature glance with a bare link list.
- Using the homepage to present both versions of the POS menu when the menu management page owns that intent.

## Consequences

- The homepage stays focused on product overview and routes visitors to intent-specific feature pages.
- Menu operators can compare both POS menu display preferences on the menu management page.
- The homepage primary phrase and supporting terms remain present in visible copy; density is measured as editorial QA and not treated as a ranking guarantee.
- Fresh rendered browser review is still required after the edits; the build alone does not establish visual acceptance.

## Verification

Dev verified 2026-11-04: `npm run check && npm run build && python3 scripts/report-homepage-keyword-density.py && python3 scripts/report-menu-keywords.py && git diff --check` passes. Homepage exact phrase count is 13 / 1,210 visible words (1.074%); menu page is 8 / 1,404 words (0.570%). Browser capture could not start because the Chrome runner exited with `SIGABRT`; current responsive appearance remains unresolved in [STATUS](../STATUS.md).

## References

- [SEO page expansion](0030-seo-page-expansion.md)
- [Astro page release gates](0033-astro-page-release-gates.md)
- [Product screen labels](0024-screen-labels-above-device-frames.md)
- [Screenshot frame spacing](0025-screen-frame-spacing-and-panels.md)
- [SEO keyword and page map](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
