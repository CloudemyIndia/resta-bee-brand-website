# Decision 0044: Restaurant POS ordering system page

- Date: 2026-11-04
- Status: Accepted
- Scope: `/features/restaurant-order-management/`

## Context

The SEO expansion plan described this route as “restaurant order management software,” but the supplied workbook assigns the primary phrase “restaurant POS ordering system.” The same workbook maps “restaurant order management system” as a supporting phrase. Product evidence covers dine-in, staff-entered takeaway and delivery orders; configurable menu variants/add-ons, combos and preparation notes; sending orders to assigned kitchen stations; ticket amendments/cancellations; and progression to bill preparation.

## Decision

Use “restaurant POS ordering system” as the page primary phrase. Cover the staff workflow for dine-in, takeaway and delivery, order details, review/send, station handoff, amendments and bill progression. State directly that restaurant staff enter delivery orders; do not claim aggregator ingestion or courier dispatch. Do not assign a separate bill-preparation scope beyond the existing billing page.

Use the supplied POS menu desktop, tablet and phone screenshots in a device frame. Identify the RestaBee POS order-entry screen and label sample restaurant data separately. Keep page prose, metadata, screenshot alternative text, service types, steps and FAQs in the validated Astro Content Collection with matching `.pages.yml` fields. Link the page from the features directory and shared footer. Include WebPage/BreadcrumbList schema, self-canonical, sitemap and `llms.txt` entry. Keep primary navigation limited as specified in decision 0042.

Apply the page release gates in decision 0033 and content depth guidance in decision 0037. The density floor is editorial QA, not a ranking formula.

## Rejected

- Using “restaurant order management software” as the primary phrase; it conflicts with the supplied workbook assignment.
- Claiming integrations with delivery platforms or courier dispatch.
- Duplicating the billing page’s detailed check, tax and collection workflow.
- Linking to the unbuilt takeaway POS route in the workbook’s suggested internal links.

## Consequences

- The exact primary and supporting terms are available for tracking against the workbook.
- Order-entry intent has a dedicated page distinct from billing, kitchen tickets and the kitchen display.
- Local build/keyword checks do not establish rendered visual acceptance, production deployment, field performance or an authenticated Pages CMS editing workflow. Current checks are recorded in [STATUS](../STATUS.md).

## References

- [Workbook map row 8 and keyword assignment rows 38–42](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [SEO page expansion plan](../plans/seo-page-expansion.md)
- [Astro page release gates](0033-astro-page-release-gates.md)
- [Humanized content and CMS standards](../content-and-cms-standards.md)
