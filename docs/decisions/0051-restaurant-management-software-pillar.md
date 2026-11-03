# Decision 0051: Restaurant management software pillar

- Date: 2026-11-04
- Status: Accepted
- Scope: `/restaurant-management-software/`

## Context

The supplied keyword workbook assigns the broad transactional query “restaurant management software” to a category pillar, with supporting searches for restaurant software, India-specific software, restaurant software solutions and restaurant management system software. The existing homepage already owns the restaurant POS order-to-bill overview. Dedicated pages cover order entry, table service, KOT, kitchen display, menu management, billing, cash shifts, reports, cafe POS and multi-outlet operations.

## Decision

Build the pillar as a static Astro page with the shared site shell. Store its copy, SEO fields, FAQs, screenshot alternatives, workflow steps and linked-workspace cards in the validated Pages collection with matching `.pages.yml` fields. Keep page layout and schema in reviewed Astro code.

Explain the path through order entry, preparation, billing and shift review; connect readers to focused workspace pages; state the role and outlet scope of team access; and describe the available work across web, Android, iPhone, Mac and Windows. Use the supplied POS menu, floor and kitchen desktop captures in suitable device frames with separate sample-data labels. Keep screenshot images full-screen and lazily load the below-fold screens.

Use a self-canonical, indexable page with a unique title and description, one H1, WebPage and BreadcrumbList JSON-LD, meaningful image alternatives, sitemap entry and `llms.txt` link. Keep the homepage content intact. Measure primary-keyword density on rendered main copy as an editorial check; use supporting query intent naturally and do not force awkward word order.

## Rejected

- Repeating the homepage’s order-to-bill hero and QR showcase as a second general homepage.
- Treating one screen as proof of customer outcomes or using sample data as sales evidence.
- Extending this broad overview into unsupported capabilities such as inventory, accounting, payroll, online delivery aggregation or tax filing.
- Forcing exact keyword strings into sentences where natural wording communicates the same search intent more clearly.

## Consequences

- Add the route to the Features directory, shared Features footer links, sitemap and `llms.txt`.
- Keep this route CMS-compatible through the Astro schema, content JSON and `.pages.yml` map; external Pages CMS authorization remains separate.
- Local build and source-level contrast checks do not replace rendered responsive review, keyboard/screen-reader testing, Lighthouse or production verification.

## References

- [Keyword workbook: Page & Content Map row 3 and Keyword Assignments row 8](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [Content and Astro authoring standards](../content-and-cms-standards.md)
- [Astro release gates](0033-astro-page-release-gates.md)
- [Features directory and navigation](0042-features-directory-and-main-navigation.md)
- [Restaurant sales reports page](0049-restaurant-sales-reports-page.md)
