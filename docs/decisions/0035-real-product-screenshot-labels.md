# Decision 0035: Real product screenshot labels

- Date: 2026-11-03
- Status: Accepted
- Scope: Product screenshot captions on all public RestaBee website pages and future product pages
- Supersedes: [Decision 0034](0034-pricing-page-and-product-screenshot.md), screenshot-label wording only. Its pricing authority, screenshot presence/device framing and homepage-pricing retention remain in force.

## Context

The website uses captures from the working RestaBee product. Calling those captures “illustrative product screens” can lead visitors to think the interface is a mockup. The screen is real; some restaurant names, menu values and activity shown are sample data.

## Decision

- Name the actual RestaBee screen or product area in the caption.
- State “sample restaurant data,” “sample menu data,” or the applicable sample-data label separately.
- Do not describe a real software screenshot as “illustrative.” Reserve that label for synthetic UI, composed demonstrations, concept art or non-product imagery where that distinction helps the reader.
- Keep captions in validated Astro content data and expose them through the CMS field map.

## Rejected

- “Illustrative product screen · sample restaurant data”: it can make a genuine application capture sound synthetic.
- Omitting the sample-data qualification: readers could mistake demonstration values for a live restaurant’s data.

## Consequences

Homepage, billing and pricing screenshots identify the RestaBee screen and separately note sample data. The custom bill preview, restaurant photography and historical workflow prototype remain labelled as illustrative because those are not genuine product screenshots.

## References

- [Content and Astro authoring standards](../content-and-cms-standards.md)
- [Pricing page and product screenshot](0034-pricing-page-and-product-screenshot.md)
