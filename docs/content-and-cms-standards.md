# Content and Astro authoring standards

Use these standards when planning, writing, implementing or reviewing public RestaBee pages. Project status and verified implementation details belong in [STATUS.md](STATUS.md); these are working requirements, not status claims.

## Page brief and keyword research

- Read the relevant row in the supplied keyword workbook before starting a page. Record its search intent, one primary phrase, supporting phrases, evidence requirements and internal links in the page plan.
- Keep each route focused on one search intent. Check for overlap with the homepage and existing pages before writing.
- Cover the primary phrase in the title, H1 and opening copy where it reads naturally. Use supporting terms in relevant sections, FAQs and links. Do not repeat phrases where they add no meaning.
- Measure primary phrase density in visible `<main>` text, excluding navigation, footer, metadata, styles, scripts and structured data. The owner’s editorial floor is **0.5%**. Aim toward **1%** when natural; never add awkward repetitions to hit a number. This is an internal QA target, not a Google ranking formula.
- Write a useful page for the searcher’s task. For substantive new product pages, plan for more than 800 visible main-content words and aim for 1,200 or more when the intent and product evidence support that depth. These are editorial targets, not fixed gates: do not pad or repeat, and keep a page shorter when additional copy would be unhelpful or speculative.

## Copy and product claims

- Apply the installed `humanizer` skill whenever writing or revising public-page copy. Read the whole page before editing; preserve claims that have product evidence.
- Write in a confident, specific brand voice. Lead with the workflow and capabilities RestaBee supports. Keep product limits concise and place them beside the capability they qualify.
- Describe subscription inclusion in present-release scope: “Every subscription includes the released standard POS features.” Do not imply that future features are automatically included in current subscriptions.
- Treat pleas for trust, “real/not a demo” proof claims, reassurance badges, defensive comparisons and repeated caveats as **RED ALERT**. Notify the user with the exact signal and its likely effect. Fix it within the authorized scope. Preserve necessary facts and scope information in direct language.
- Never invent integrations, tax filing, customer results, testimonials, pricing, compatibility, availability or other product claims. Check current capability evidence and public pricing before publishing.
- For genuine product screenshots, name the RestaBee screen and label sample restaurant data separately. Do not call an actual software screenshot “illustrative,” since readers may infer the interface itself is a mockup. Mark synthetic UI, composed demonstrations and non-product imagery as illustrative where needed; labels must distinguish those visuals from actual app screens.
- Include at least one relevant supplied product screenshot on each new product page, presented in a suitable device frame. Use responsive desktop, tablet and phone captures when available, keep the full screen uncropped, and label sample data. A product screenshot illustrates the workflow; it is not pricing or customer-outcome evidence.

## SEO and performance release checks

- Give each indexable route a unique, concise title and description; one descriptive H1; a self-canonical; correct robots policy; Open Graph/Twitter metadata; descriptive image alt text; and internal links that resolve.
- Add structured data only when it describes visible, verified page content. Validate the JSON-LD and keep it in sync with editable page fields.
- Use semantic HTML and a single page-level `<main>`. Set intrinsic image dimensions, use responsive sources where available, and load below-fold media lazily. Reserve eager/high-priority loading for the actual hero asset.
- Keep static output and small client JavaScript by default. Add client-side hydration only for a real interaction. Avoid shipping large UI frameworks for static copy or layout.
- Run Astro type/content checks and the production build. Check routes, metadata, schema, keyword coverage/density, links and images. Review mobile and desktop renders for spacing, cropping, overflow, contrast and navigation/footer consistency. Record executed checks in [STATUS.md](STATUS.md).

## Accessibility and visual acceptance

- Check text against the rendered surface behind it, not a guessed page background. Meet WCAG AA contrast: **4.5:1 for normal text** and **3:1 for large text**. Include kickers, captions, fine print, prices, active states, buttons, image overlays and footer copy. If a checker cannot account for an image or gradient, inspect the final rendered pixels and add a solid or tinted surface only where needed.
- Inspect the accessibility tree for one page-level H1, correctly nested headings, named links and controls, semantic landmarks, useful image alternatives, native disclosure state, and form labels/errors. Test keyboard focus and navigation; do not treat a successful build as an accessibility pass.
- Check 320px, 390px, tablet and desktop widths for clipped text, horizontal overflow, frame/caption overlap and content that moves out of reading order. Check 200% zoom/reflow and reduced-motion behavior for interactive or animated sections.
- Capture the final state after the last edit. Do not claim a visual check from source inspection, a pre-edit screenshot or an HTTP 200 response.
- Keep SEO and accessibility in the same page release gate: SEO titles/descriptions, canonical and robots directives, visible H1/heading structure, structured data, sitemap, alt text and image dimensions must be checked alongside contrast and control names.

## CMS compatibility gate for Astro pages

- Before writing the page template, define the page’s typed Astro Content Collection schema, its JSON entry, and corresponding `.pages.yml` fields together. Every editable heading, paragraph, CTA label, FAQ, repeated card/step, pricing value and image alternative belongs in validated content data. The Astro template owns semantic markup, shared components and presentation.
- Reuse the shared header, footer, design tokens and established responsive patterns. Do not create page-specific navigation/footer, invent alternate theme colors, hardcode copy in the template, or let the CMS change route identity, arbitrary layout, schema logic or unreviewed CTA destinations.
- Run `npm run check && npm run build`. The build verifier compares every page-content key against `.pages.yml` and fails on missing or unused CMS fields. Extend the typed schema, CMS fields and content entry in the same change whenever a new field is needed.
- External Pages CMS authorization is separate from local compatibility: a page is CMS-compatible when its Astro schema, content entry and editor fields validate together. Do not block page construction on account setup, and do not claim the external editor workflow works until an authenticated edit has been previewed and published through its real workflow.

## Rework to prevent

Recent homepage and billing revisions exposed these failure modes; catch them before asking for review:

- **Thin feature page:** A title and a few cards did not answer enough of the selected search intent. Start with the workbook row, searcher task, supported workflow, section outline and internal links; write the complete page before styling it.
- **Inconsistent page shell:** A new page had a different navigation and footer. Import the shared Astro components from the first template pass.
- **Hidden intro copy:** Billing description text sat far to the right and used a pale dark-section color on a light background. Check the full line at actual desktop width and put the mobile version below its heading; measure its contrast.
- **Weak accent color:** Pale orange labels looked washed out and failed small-text contrast. Use the established dark orange accent on light surfaces and calculate the actual ratio before review.
- **Late CMS conversion:** Copy was not mapped to editor fields early, creating another migration pass. Build from a typed content entry and require the build-time CMS field-map check from the first implementation.
- **Repeated visual patching:** Small unreviewed changes produced uneven spacing and screen framing. Compare against the existing design, map each supplied screenshot to its correct page/device, then inspect final desktop, tablet and phone captures after all changes.
- **SEO/a11y checks left to the end:** Verify metadata, schema, keywords, alt text, heading hierarchy, focus, control names and contrast before presenting a page as review-ready.
- **Trust-seeking copy:** Remove reassurance-only claims and defensive proof language; describe supported capabilities directly and factually. Treat any trust-pleading signal as RED ALERT and notify the user.

## Astro and CMS authoring

- Keep layout and interaction in reusable Astro components; keep editable copy and page data separate from visual markup.
- For repeated page types and blog posts, use Astro Content Collections with explicit schemas and build-time rendering. Prefer build-time content for this static marketing site; use live data only when freshness requirements justify runtime fetching.
- Model page content with a small, typed set of sections (for example: text, feature list, screenshot, FAQ and CTA). Keep component order and supported fields deliberate; do not expose arbitrary Astro code or unrestricted layout editing to the CMS.
- Keep SEO fields, canonical paths, image alt text, feature claims and CTA labels editable through validated fields. Keep CTA destinations within a controlled set of reviewed routes and anchors. Protect route identity, shared navigation/footer, schema generation and design tokens in code.
- For Pages CMS, configure structured Markdown, YAML or JSON content in `.pages.yml` and connect it to the Astro collection schema. Git CMS edits still require a successful preview/build before publication.
- Images uploaded by a CMS need a defined media path, descriptive names, required alt text, dimensions and a resize/format plan. Do not let editor uploads bypass the site’s image-performance requirements.
- Keep the header, footer, color/type/spacing tokens and responsive patterns centralized. Verify every new page against those shared components at phone and desktop widths.

Astro references: [CMS integrations](https://docs.astro.build/en/guides/cms/), [Pages CMS](https://docs.astro.build/en/guides/cms/pages-cms/), [Content Collections](https://docs.astro.build/en/guides/content-collections/). Google references: [people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [title links](https://developers.google.com/search/docs/appearance/title-link), and [structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).
