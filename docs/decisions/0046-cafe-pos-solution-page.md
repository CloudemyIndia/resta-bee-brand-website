# Cafe POS solution page

## Context
The SEO page map assigns `/solutions/cafe-pos/` to cafe POS transactional intent, with supporting terms for cafe POS software, cafe billing software, counter service, drink variants/modifiers, station handoff, payments, item/category reporting and FAQs. The product audit supports staff-entered dine-in/takeaway/delivery orders, variants, modifiers, configured preparation stations, cash/UPI/card collection records and selected-date item/category reports. The menu and Reports captures contain sample restaurant data.

## Decision
Build the cafe page as static Astro output at `/solutions/cafe-pos/`, using the shared site header, footer and layout. Store visible prose, title/description, alt text, service types, menu setup options, workflow steps and FAQs in validated Astro content with matching Pages CMS fields. Show the supplied desktop menu, tablet menu and phone menu at corresponding viewport widths; include the supplied Reports phone screen in the reporting section. Label the RestaBee interfaces and sample data separately. State that menu photos are optional.

Keep the page specific to counter/takeaway and table service, configurable drink choices, station handoff, billing and item/category sales by selected period. Do not claim item trend prediction, provider payments, cafe customer references, or a live cafe installation. Link the page through the feature directory, shared footer, sitemap and `llms.txt`. Use WebPage/BreadcrumbList schema, self-canonical, the page-specific workbook terms and the release gates in [decision 0033](0033-astro-page-release-gates.md).

## Rejected
- Reusing generic restaurant order copy without explaining drink variants, modifiers, counter service and station handoff.
- Treating item/category reports as forecasting or claiming integrations from payment tender records.
- Using invented cafe screenshots or presenting the sample menu as a cafe customer's data.
