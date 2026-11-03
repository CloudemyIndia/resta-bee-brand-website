# 0041 — Multi-outlet POS page

- Date: 2026-11-03
- Status: Accepted
- Scope: `/features/multi-outlet-restaurant-management/`

## Context

Workbook row 14 assigns the transactional primary query “multi outlet restaurant pos” and supporting terms for franchise POS, multiple outlet POS system, restaurant chain POS, multi-location restaurant POS and central menu management. The POS supports central menu release review and outlet application, independent/local outlet menu modes, outlet-scoped capabilities and outlet/date reporting. The supplied Central Menu desktop/mobile and Reports phone screenshots show the matching workflows.

## Decision

Build a CMS-editable multi-outlet page around menu publishing, outlet roles and access, reporting scope, and a clearly identified three-location example. Use the supplied Central Menu and Reports screenshots, label them as real product screens with sample data, and keep screenshots uncropped. Use the shared header/footer and include WebPage/BreadcrumbList JSON-LD, canonical metadata, sitemap and `llms.txt` entries. Make the related menu-management page link to this route.

## Rejected

- A claim that every outlet must use the same menu; independent menus and local customizations are supported.
- A claim that every employee can see every outlet; report and action scope follows assigned access.
- Claims of accounting, bank reconciliation, franchise-specific behavior, customer outcomes or integrations without product evidence.
- Reusing the historical generic “multi-outlet management” wording without the workbook’s exact primary query.

## Consequences

- The route explains shared and outlet-level workflows while the homepage remains unchanged.
- Keyword, build, screenshot and local Lighthouse results are recorded in [STATUS](../STATUS.md); local lab scores do not establish production field metrics.

## References

- [Workbook map row 14 and keyword assignment rows 69–74](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [Page expansion sequence](../plans/seo-page-expansion.md)
- [Astro page release gates](0033-astro-page-release-gates.md)
