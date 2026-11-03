# 0038 — Kitchen order ticket management page

- Date: 2026-11-03
- Status: Accepted
- Scope: `/features/kot-management/`

## Context

The workbook assigns the route the transactional primary phrase “kitchen order ticket system” and supporting terms for a kitchen order ticket app, restaurant kitchen order system, kitchen order management system and kitchen order ticket printer. Product evidence includes station-associated kitchen tickets, order references and instructions, amendments/cancellations, ticket progress in the kitchen queue, plus a print queue with job-state review and duplicate reprint handling. The KOT print document presents preparation details without customer item prices.

## Decision

Give KOT management a distinct route from the digital-first KDS page. Explain what a KOT contains and how it moves from POS order entry to an assigned station. Cover order context, quantities, variants/add-ons, preparation notes, amendments, cancellations, print jobs and the relationship between KOT, KDS and the customer bill.

Use the supplied real desktop and phone Kitchen Queue screenshots in a suitable monitor/phone frame. Identify the RestaBee screen and label the sample restaurant data separately. Preserve the visible T3 example from the screenshot; a kitchen ticket does not show menu prices.

Keep prose, headings, FAQs, screenshot alternative text and workflow groups in validated Astro Content Collection data with matching `.pages.yml` fields. Generate WebPage and BreadcrumbList schema from the page data. Add shared navigation/footer links, sitemap and `llms.txt` entries, and cross-link to the KDS and billing pages. Do not link to pages that have not been built.

Apply [decision 0037](0037-natural-content-depth-targets.md): plan over 800 visible words and aim for 1,200+ where useful and supported, without treating either count as a hard gate or adding filler.

## Rejected

- Combining KOT and KDS into one page: they describe different product tasks and the workbook maps separate transactional targets.
- Presenting a KOT as a customer bill or displaying item prices on the ticket.
- Claiming a physical printer output is confirmed merely because a print job was queued or sent to a device.
- Linking to planned but unbuilt order-management and informational KOT guide routes.

## Consequences

- The page covers digital tickets and the print queue while keeping job status distinct from food-preparation state.
- The current screenshot demonstrates the Kitchen Queue and sample T3 ticket, not a paper printout.
- Local SEO/build/Lighthouse checks do not establish deployment, Pages CMS account authorization, physical printer output or field Core Web Vitals. Current measurements belong only in [STATUS](../STATUS.md).

## References

- [Workbook map row 5 and keyword assignment rows 20–24](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [SEO page expansion plan](../plans/seo-page-expansion.md)
