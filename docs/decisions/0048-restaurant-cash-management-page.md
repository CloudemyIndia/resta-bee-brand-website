# Decision 0048: Restaurant cash management page

- Date: 2026-11-04
- Status: Accepted
- Scope: `/features/restaurant-cash-management/`

## Context

The SEO workbook assigns this route the primary phrase “restaurant cashier software,” with cashier software, restaurant cash management, cash shift management and restaurant cash register software as supporting terms. The product capability audit documents opening floats, drawer movements, cash counts and close, variance reporting, tender records, customer dues and role/outlet permissions. The supplied My Shift phone capture shows an open shift and drawer activity with sample data.

## Decision

Build the route as a static Astro page using the shared header, footer and layout. Keep all page prose, metadata, screenshot alt text, controls, steps and FAQs in the validated Astro content entry with matching Pages CMS fields. Use the supplied uncropped My Shift phone screenshot in a phone frame and label its sample data.

Explain the cashier flow from opening float through recorded collections and drawer movements to closing count and variance review. Distinguish cash from UPI/card tenders and unpaid customer dues. Describe role/outlet permissions directly. Keep the page within cash-shift and collection workflows; do not imply payroll or full expense accounting. Use WebPage and BreadcrumbList JSON-LD, a self-canonical, sitemap and `llms.txt` entry. Link the feature directory and shared footer to the route.

## Rejected

- Treating the page as a generic restaurant POS overview rather than the cashier’s shift workflow.
- Implying automatic bank, payment-provider or EDC reconciliation from tender records.
- Presenting sample My Shift values as a customer installation or financial result.

## Consequences

- The existing Features directory card for cash shifts links to this page; it remains an 11-card directory until the separate sales-report page is built.
- Restaurant sales reporting is next in the expansion sequence. Implementation and verification evidence for this route lives in [STATUS](../STATUS.md).

## References

- [SEO keyword map, Page & Content Map row 13 and Keyword Assignments rows 64–68](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [POS capability audit F07, F08, F10 and F15](../../../resta_bee_pos/docs/STATUS.md)
- [Astro page release gates](0033-astro-page-release-gates.md)
