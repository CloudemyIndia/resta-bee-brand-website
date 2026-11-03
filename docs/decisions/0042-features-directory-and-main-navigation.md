# Decision 0042: Features directory and main-page navigation

- Date: 2026-11-03
- Status: Accepted
- Scope: `/features/` and shared public navigation

## Context

The website now has several dedicated product feature pages, plus homepage sections for floor/table work, Table QR Ordering, cash shifts, reports and team access. The workbook assigns no primary or supporting keyword cluster to `/features/`; row 3 assigns “restaurant management software” to a separate pillar route. The public site needs one place to discover current capabilities without assigning that pillar’s intent to a navigation page.

## Decision

Build `/features/` as a CMS-editable directory of nine current capability links, grouped by orders and service, kitchen and menu, and business operations. Link dedicated pages where they exist; link to matching homepage sections for capabilities that do not yet have a dedicated page. Show a real uncropped POS order-entry screenshot and identify sample data separately.

Limit the shared desktop and mobile main navigation to POS overview, Features, and Pricing. Keep demo and login as actions. Keep detailed product links in the footer and on relevant feature pages.

Use WebPage and BreadcrumbList schema, a self-canonical, sitemap and `llms.txt` entry. Do not assign a primary keyword or density target to `/features/`; preserve the workbook’s restaurant-management-software target for its planned pillar. Keep all page prose, SEO metadata, screenshot alternative text and directory card fields in the validated Astro content collection with matching Pages CMS fields.

## Rejected

- Repeating every dedicated feature link in the main navigation, which made it harder to scan.
- Claiming a workbook primary keyword for this directory when no row assigns one.
- Linking cards to unbuilt routes; use existing relevant homepage sections until dedicated pages ship.

## Consequences

- The navigation stays focused on the site’s main pages while the footer retains product-level links.
- The directory lists existing product capabilities only and can be edited through the configured Astro content model.
- Build and verification evidence is recorded in [STATUS](../STATUS.md).

## References

- [Keyword and page map, rows 3–14](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [Astro page release gates](0033-astro-page-release-gates.md)
- [Content and Astro authoring standards](../content-and-cms-standards.md)
