# 0055 — Queue the next SEO pages; defer implementation

Date: 2026-11-04. Authorized by the user's request to record the remaining page work and resume it later while a separate website project is started.

## Context

The current public-site batch has 16 canonical routes. The keyword workbook still maps additional solution, feature and educational intents. Decision [0030](0030-seo-page-expansion.md) keeps the homepage intact and rejects near-duplicate broad POS pages. The current page queue is in [BACKLOG](../BACKLOG.md), and the workbook remains the input for page-specific targeting.

## Decision

Defer the next RestaBee website pages until the user resumes this site. When resumed, evaluate/build in this order:

1. QSR and takeaway solution pages: `/solutions/qsr-pos/` and `/solutions/takeaway-pos/` (workbook P1), followed by `/solutions/cloud-kitchen-pos/` (P1), only where each page can describe a distinct, evidenced workflow.
2. `/features/split-billing/` (P1), after confirming the implementation and search intent add useful detail beyond the existing billing page.
3. `/features/restaurant-gst-billing/` (P1), after confirming the product's tax-configuration boundaries and reviewing all tax statements.
4. Educational pages after Pages CMS authorization and the blog collection/publishing workflow in L2–L3 are verified. Use the workbook's P0 buying checklist, KOT guide and restaurant POS cost guide as candidates.

The workbook's P0 `/solutions/restaurant-pos/` route stays gated on SERP-intent review because the homepage already targets the broad “restaurant POS” query. Do not create a near-duplicate route unless distinct search intent is evidenced. Keep a standalone QR ordering feature page gated on end-to-end product acceptance. Keep the homepage unchanged while these pages are developed and reviewed.

## Rejected

- Starting another RestaBee page in this session while the user is beginning a separate website project.
- Treating workbook priority alone as proof that a new route will have distinct intent or sufficient product evidence.
- Publishing tax, vertical or educational copy before its evidence and publication workflow are ready.

## Consequences

The routes above are queued, not implemented or deployment-ready. Each new page still requires its own keyword-map review, humanized copy, Astro Content Collection and Pages CMS fields, screenshot mapping where relevant, SEO/schema/accessibility/performance checks, and build verification under [content standards](../content-and-cms-standards.md).

## Supersession

Supplements decision [0030](0030-seo-page-expansion.md) with the future page queue. Decision 0030's homepage and anti-duplication rules remain active.
