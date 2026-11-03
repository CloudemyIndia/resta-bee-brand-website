# 0032: Correct homepage pricing copy and use CMS-backed page content

Date: 2026-11-03. Authorized by the user after reviewing the homepage and restaurant billing page.

## Context

Decision 0030 asked to hold homepage copy and layout while new product pages were built. The user has now approved the targeted keyword and pricing-copy improvements, asked that the page remain CMS-compatible, and asked to preserve the existing design. Content and copy standards live in [content-and-CMS standards](../content-and-cms-standards.md); implementation state is in [STATUS](../STATUS.md).

## Decision

- Update homepage copy in its existing visual composition. Add the missing workbook phrases only where they answer useful operator questions.
- State current subscription scope as: “Every subscription includes the released standard POS features. Choose a 3-, 6- or 12-month term.” This describes released features and does not promise future features under current subscriptions.
- Keep page SEO fields, FAQs, copy, repeated editorial content and image alt text in validated Astro page entries editable through Pages CMS. Keep layout, navigation, footer, screenshot source mappings, interactions, schema generation and styling in reviewed Astro code.
- Use the supplied keyword map for each future page, apply the Humanizer skill, check exact primary phrase density against the owner’s 0.5% editorial floor, and aim toward 1% only when natural.
- Treat trust-seeking or defensive proof language as RED ALERT. Notify the user with the exact signal and its likely effect, then correct it within authorized scope.

## Rejected

- Changing the homepage visual design as part of this copy and CMS pass.
- Keeping editable page copy embedded in `.astro` markup.
- Implying future product features are included in currently released subscription features.
- Letting CMS editors change arbitrary markup, CSS, routes, product image mappings or structured-data code.

## Consequences

Homepage and billing page content data now use a schema-validated Astro Content Collection and a Pages CMS JSON editor schema. Pages CMS repository authorization and edit-to-deploy verification remain setup work. The next product page should use the same collection model before publication.

## Supersession

This decision partially supersedes [0030](0030-seo-page-expansion.md) only on its temporary homepage copy hold. Its page sequence, search-intent ownership and rule against moving or trimming homepage sections remain active. It also supersedes [0031](0031-cms-ready-astro-content.md) on CMS migration status and screenshot-source editing: page content and image descriptions are in CMS data, while screenshot source mappings remain protected in templates.
