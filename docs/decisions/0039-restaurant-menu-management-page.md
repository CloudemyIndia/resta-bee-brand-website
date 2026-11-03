# 0039 — Restaurant menu management page

- Date: 2026-11-03
- Status: Accepted
- Scope: `/features/restaurant-menu-management/`

## Context

The keyword map assigns this transactional feature route the primary query “restaurant menu management software” and five supporting phrases. The POS menu studio supports catalog items and categories, variants and prices, modifier groups, combos, kitchen station assignment, release review/publication, outlet-specific application, independent outlet menus, local customization, availability controls and menu history. The supplied central-menu desktop and phone screenshots show the catalog; the POS menu tablet and phone screenshots show an outlet order-entry menu.

## Decision

Build a dedicated page covering catalog setup, draft-to-release review, outlet application and the distinction between central and independent outlet menus. Use the supplied uncropped central-menu and POS-menu screenshots at responsive desktop/tablet/phone sizes, with accurate RestaBee screen labels and sample-data notes. Keep all editable page prose, FAQs, metadata and image alternatives in the validated Astro collection and `.pages.yml` fields. Use shared navigation/footer, WebPage and BreadcrumbList JSON-LD, sitemap, and `llms.txt`.

Apply the natural content-depth guidance in [decision 0037](0037-natural-content-depth-targets.md). Keep the homepage’s menu overview in place until the planned homepage review.

## Rejected

- A generic menu-management guide on this route: the workbook assigns this page transactional feature intent; the informational guide remains a separate unbuilt route.
- Implying every outlet must use the central menu: independent menus and local customizations are supported.
- Linking to unbuilt multi-outlet or order-management routes.
- Cropping or replacing the supplied product screens with synthetic UI.

## Consequences

- The feature page can explain menu publishing in more depth while the homepage keeps its current overview.
- Local keyword, build and Lighthouse lab measurements do not establish deployment or field Core Web Vitals; current implementation evidence belongs in [STATUS](../STATUS.md).

## References

- [Workbook map row 9 and keyword assignments rows 43–48](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [Page expansion sequence](../plans/seo-page-expansion.md)
