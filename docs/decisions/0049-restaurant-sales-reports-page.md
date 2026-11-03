# Decision 0049: Restaurant sales reports page

- Date: 2026-11-04
- Status: Accepted
- Scope: `/features/restaurant-sales-reports/`

## Context

The SEO workbook maps “restaurant sales reporting software” as the primary phrase and restaurant sales report, restaurant POS reports, restaurant analytics software and restaurant sales dashboard as supporting phrases. The supplied Reports phone screenshot is a real RestaBee screen containing sample restaurant data. The POS capability audit supports issued sales and credits, item/category sales, discounts, tax and tender reporting, collections/returns, date and outlet filters, shift variance and role-scoped visibility. Invoice/credit posting dates and payment/refund posting dates describe separate report events.

## Decision

Build the page as a static Astro route with the shared site header, footer and layout. Keep page copy, SEO metadata, screenshot alt text, report views, workflow steps and FAQs in a validated Astro Content Collection with matching Pages CMS fields. Use the supplied Reports phone capture in a device frame; label the actual RestaBee screen and sample data separately.

Explain the difference between issued sales and collected payments, item/category and discount/tax/tender views, each report’s business-date meaning, available outlet and role scope, and shift variance. Link to cash management and multi-outlet management. Use a self-canonical, indexable metadata, WebPage and BreadcrumbList JSON-LD, sitemap and `llms.txt` entry. Do not imply forecasting, profit/food-cost analysis, accounting or a universally live dashboard.

The copy targets at least 0.5% exact primary phrase density as editorial QA while remaining natural; this is not a ranking promise. The route remains unpublished until the normal GitHub Pages workflow deploys it.

## Rejected

- Treating sales issued and payments collected as interchangeable totals.
- Describing snapshot overview or historical report views as universally live.
- Presenting sample screenshot values as customer results or proof.
- Expanding the page into unsupported profit, food-cost, forecasting or accounting claims.

## Consequences

- Add the route to the Features directory, shared footer, sitemap and `llms.txt`.
- Restaurant management software becomes the next planned page; the plan no longer lists this shipped route as proposed work.
- Local build and content checks do not replace rendered browser review, Lighthouse testing or production verification.

## References

- [SEO keyword map, Page & Content Map row 12 and Keyword Assignments rows 59–63](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [POS capability audit F07, F10 and F15](../../../resta_bee_pos/docs/STATUS.md)
- [Astro page release gates](0033-astro-page-release-gates.md)
- [Cash management page](0048-restaurant-cash-management-page.md)
