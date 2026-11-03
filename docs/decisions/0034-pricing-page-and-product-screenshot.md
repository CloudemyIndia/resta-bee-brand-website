# 0034 — Pricing page and product screenshot

## Context

The next planned public route is `/pricing/`, targeting transactional searches around restaurant POS software costs. The workbook identifies the page intent and keyword targets; the public pricing document is the publication authority for customer-facing amounts and terms. The internal sales policy remains confidential and is not a publishing source.

New product pages also need a concrete visual explanation of the product. Decorative device art would not accurately show the interface already supplied for the site.

## Decision

- Build `/pricing/` as an intent-specific, CMS-editable Astro page using the public pricing document for all customer-facing price and term claims. Keep single-outlet terms distinct from the annual multi-outlet subscription and state the minimum outlet count and price boundaries beside the relevant offer.
- Include at least one relevant supplied product screenshot on every new product page, shown in an appropriate device frame. Use matching desktop, tablet and phone captures when available; preserve the complete screenshots and label illustrative sample data. A screenshot explains the product interface and does not serve as evidence for price, customer outcomes or adoption.
- Keep the homepage’s existing pricing section until the remaining intent-specific pages have been built and reviewed.

## Rejected

- Using the internal sales policy as public pricing: it is confidential and is not the approved customer-facing source.
- Using a synthetic interface or cropping a screenshot to imply a product state that the supplied capture does not show: this would reduce product fidelity.
- Treating the screenshot as a testimonial or pricing proof: it only illustrates the interface.

## Consequences

The route’s content entry and Pages CMS fields must remain aligned with the Astro collection schema. Page metadata, FAQs, visible price terms, screenshot alternatives and copy are editable data; layout and responsive device framing remain in Astro components. Verify these mappings and rendered breakpoints before publication.

## Links

- [Public pricing document](../master%20docs/RestaBee-Public-Pricing.docx)
- [SEO keyword and page map](../master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx)
- [Content and Astro authoring standards](../content-and-cms-standards.md)
