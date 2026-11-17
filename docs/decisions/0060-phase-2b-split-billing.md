# Phase 2B: split billing feature page

## Context

The SEO workbook maps `/features/split-billing/` to `split bills` (monthly search volume 5,000) and calls for a clear distinction between item/quantity allocation and multiple tenders on one bill. Product evidence in the POS/backend split-check workflow confirms eligible unissued items can be allocated to draft checks and individually issued. Billing records also support Cash, UPI and card collections.

## Decision

- Publish an indexable feature page at `/features/split-billing/` using the workbook's primary and supporting intent.
- Explain item-wise and quantity splits into separate draft guest checks independently from mixed tender collection against one issued bill.
- Describe staff review, eligibility and issue boundaries. Keep the original order/check relationship and the separate correction workflow clear.
- Use the site's existing validated Astro page collection, CMS mapping, shared shell and responsive real POS order-entry captures. Keep screenshot/sample-data labels distinct.
- Cross-link the restaurant billing and restaurant GST billing pages; include the route in the feature directory, sitemap and `llms.txt`.
- Use only WebPage and BreadcrumbList structured data, which correspond to the visible page.

## Rejected

- Equating multi-tender payment with item-wise split checks.
- Claiming automatic bank, UPI-network or card-terminal reconciliation.
- Claiming every order is eligible for splitting or that issued bills can be split through the draft-check flow.
- Repeating an exact workbook phrase where a natural editorial variant is clearer; report those variants transparently in keyword QA.

## Consequences

The page maintains its content in `src/content/pages/split-billing.json`, its route composition in `src/pages/features/split-billing/index.astro`, and its shared styling in `src/styles/commercial-feature.css`. Current implementation and verification are recorded in [STATUS](../STATUS.md). The keyword workbook remains the original research input.
