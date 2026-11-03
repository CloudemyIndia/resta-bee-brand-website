# 0030 — Build intent-specific product pages before revising the homepage

Date: 2026-11-03. Authorized by the user’s request to keep the homepage as-is, build new pages first, then decide what homepage content to move or trim.

## Context

The homepage is complete for the current release. The supplied SEO workbook maps multiple feature, pricing, solution and resource intents. Product screenshots and claims must follow current implementation evidence. The active page sequence and per-page SEO/content strategy are in [the SEO page expansion plan](../plans/seo-page-expansion.md).

## Decision

Keep homepage content and layout unchanged while building new pages. Build `/features/restaurant-billing-software/` first, followed by the sequence in the plan. Reuse a screenshot only when it shows the workflow described. Review the new pages with the user before making homepage moves or cuts; My Shift/cash-close content is a candidate for a cash-management page.

## Rejected

- Moving or trimming homepage material before the user has reviewed the new destinations.
- Creating near-duplicate pages for overlapping broad POS queries.
- Using unsupported product claims or unrelated screenshots to fill page layouts.
- Publishing thin vertical pages without distinct workflows.

## Consequences

New routes need unique SEO metadata, internal links, sitemap and `llms.txt` entries, and verification. The current homepage stays the broad product overview. Candidate destinations and conditional pages are tracked in the plan and [BACKLOG](../BACKLOG.md).

## Supersession

None.
