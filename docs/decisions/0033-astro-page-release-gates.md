# Decision 0033: Astro page release gates and CMS-first authoring

- Date: 2026-11-03
- Status: Accepted
- Scope: New and revised public pages in `resta-bee-brand-website-main`
- Supersedes: None

## Context

The homepage and restaurant billing page needed repeated rounds of correction. Billing revisions exposed hidden low-contrast copy, weak page structure for search intent, a separate page shell, late CMS field mapping, and checks that happened after review instead of before it. The billing page was refined six or more times before its structure and visual treatment were review-ready.

## Decision

Every new Astro page starts with its keyword-map row, intent, supported-claim evidence, complete section outline, approved screenshots and typed CMS model. The page template then renders from validated Astro Content Collection data.

The Astro content schema, JSON entry and Pages CMS `.pages.yml` fields are built together. The production build compares their field paths and fails if editor fields are missing or unused. Connecting Pages CMS to GitHub and validating its real editor/publish workflow remains a separate operational task; it does not block construction of the next page.

No page is presented as review-ready until it passes the page SEO, WCAG contrast, accessibility-tree, responsive layout, screenshot, shared navigation/footer and Astro build gates in [content-and-cms-standards.md](../content-and-cms-standards.md). Contrast must be checked against the actual rendered background. A valid build alone does not establish accessibility or visual quality.

## Rejected approaches

- Styling a short placeholder page and adding SEO sections after review; this led to thin content and repeated structural edits.
- Moving copy into CMS data after the page template was already built; this created a second modeling pass.
- Treating light/dark palette choices as visual taste without calculating small-text contrast against the section’s actual surface.
- Building a separate header/footer or moving existing homepage content while a new page is being added.
- Waiting for external CMS authentication before authoring another page; local schema and field compatibility can be validated in CI first.

## Consequences

- `npm run build` now verifies that all Astro page-content keys have matching Pages CMS fields and that configured CMS fields are used.
- New pages use shared layout and design tokens, retain page-specific intent, and go through the complete release checklist before user review.
- Status records only checks that were executed; visual inspection, keyboard/screen-reader testing, and deployment remain separate evidence.

## References

- [Content and Astro authoring standards](../content-and-cms-standards.md)
- [SEO page expansion plan](../plans/seo-page-expansion.md)
- [CMS-ready Astro content decision](0031-cms-ready-astro-content.md)
