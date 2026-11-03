# 0036 — Kitchen display system feature page

Date: 2026-11-03

## Context

The SEO keyword map assigns `/features/kitchen-display-system/` the primary query “kitchen display system” and a restaurant kitchen display cluster. Product evidence covers station assignment and filtering, new/preparing/ready states, item-level partial readiness, amended/cancelled ticket acknowledgement, and a kitchen print queue. The supplied captures include desktop and phone versions of the live RestaBee Kitchen Queue interface, with sample restaurant data.

## Decision

Build the route as a static Astro page using the shared header and footer. Put SEO metadata, visible page copy, FAQs, image alternative text and workflow groups in the validated Pages CMS content collection. Keep page composition, responsive image source mapping, schema generation and styles in Astro. Show the desktop screenshot in a monitor frame and switch to the supplied phone screenshot at mobile widths. Caption the actual product screen and separately identify sample restaurant data.

Target the workbook’s primary and supporting phrases in visible copy naturally. Preserve a minimum 0.5% exact primary phrase density as an editorial QA check. Include self-canonical metadata, indexability, WebPage and BreadcrumbList schema, internal links, sitemap and llms.txt entries.

## Rejected

- A generic KDS article without product workflow detail: the assigned intent is commercial feature evaluation.
- Recreated or cropped screen artwork: supplied captures show the actual interface and should stay uncropped.
- Calling the real product capture “illustrative”: sample data is labelled separately from the real software screen.
- Combining this route with KOT management: the workbook assigns separate search intent and page ownership.

## Consequences

- The route is statically generated and copy-managed through the Astro content collection; the Pages CMS account still requires external authorization and workflow verification.
- Local checks are not production deployment or field-performance evidence. Current route status is recorded in [STATUS](../STATUS.md).
- Follow [content and Astro authoring standards](../content-and-cms-standards.md) and the page release gates in [decision 0033](0033-astro-page-release-gates.md).

## Links

- [SEO keyword and page map](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [Page expansion plan](../plans/seo-page-expansion.md)
