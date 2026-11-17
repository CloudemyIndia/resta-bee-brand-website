# Phase 2B: restaurant GST billing feature page

## Context

The SEO workbook maps `/features/restaurant-gst-billing/` to `restaurant gst billing software` and supporting invoice/bill phrases. The brief requires accurate differentiation of regular GST and composition treatment, CGST/SGST display, thermal bill printing and B2B GSTIN details. The page makes tax statements that depend on current law, so the copy links CBIC primary sources.

## Decision

- Publish an indexable feature page at `/features/restaurant-gst-billing/`, with visible explanations of configured tax profiles, document types, invoice details and compatible printing.
- Distinguish regular GST on the taxable supply from composition levy calculated on the eligible opted-in business's aggregate turnover. State that composition is not a separate GST amount collected from each customer and that the customer document is a bill of supply.
- Describe the CBIC's listed 5% restaurant-service rate as conditional on the relevant rate notification and supply. For intra-state cases where applicable, explain the 2.5% CGST and 2.5% SGST components. Ask the restaurant to confirm registration, eligibility, rates and document requirements with its tax professional.
- Explain B2B customer name, address, state and GSTIN entry, bill review and compatible printing, without claiming return filing, e-invoice generation, e-way bill generation or compliance certification.
- Keep copy, official source links, FAQs, invoice fields, regime cards and screenshot alternative editable in the validated Astro content collection and Pages CMS field map.
- Use WebPage and BreadcrumbList schema only. Link the official CBIC material on the page and add the route to the features directory, sitemap and `llms.txt`.

## Rejected

- Describing the 5% composition levy as tax added to a guest's bill.
- Treating a regular restaurant-service rate as universal across every premise, supply or restaurant.
- Claiming that the POS determines legal eligibility, automatically selects a regime, files returns, creates e-invoices/e-way bills, or certifies full compliance.
- Calling genuine RestaBee screenshots illustrative; the page identifies the product screen and separately labels sample restaurant data.

## Consequences

The page maintains its copy and editable references in `src/content/pages/restaurant-gst-billing.json`, its Astro route in `src/pages/features/restaurant-gst-billing/index.astro`, and shared design in `src/styles/commercial-feature.css`. Official source links are CBIC [invoice rules](https://cbic-gst.gov.in/gst-invoice-rules.html), [composition rules](https://cbic-gst.gov.in/composition-rules.html) and [service rate schedule](https://cbic-gst.gov.in/hindi/gst-goods-services-rates.html). Current implementation and verification are recorded in [STATUS](../STATUS.md). The keyword workbook remains the original research input.
