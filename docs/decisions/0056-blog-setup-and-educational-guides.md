# 0056 — Blog setup, blog index, article detail pages and initial P0 educational guides

Date: 2026-11-12. Authorized by the user's request to build Phase 1: blog setup, blog page, blog details page, using the humanizer skill and the SEO keyword sheet for targeted keywords.

## Context

The RestaBee marketing site had 16 canonical public routes. The master SEO workbook maps several high-volume educational guides under `/blog/` that capture top-of-funnel operational intent without cannibalizing commercial landing pages. The user requested implementing Phase 1, including blog setup, the blog directory page, the responsive article detail template, and initial articles following the humanizer writing standards and the RestaBee design system.

## Decision

1. **Content Collections & Pages CMS Architecture**:
   - Add a typed `blog` collection in `src/content.config.ts` using `glob({ base: './src/content/blog', pattern: '*.json' })` with strict Zod validation for SEO metadata, article structure, table of contents, sections, callouts, tables, checklists, FAQs, and related links.
   - Configure the `blog-articles` collection in `.pages.yml` with matching fields for Pages CMS compatibility.
   - Configure `src/content/pages/blog-index.json` under the existing `pages` collection for the blog directory metadata and copy.
2. **Initial P0 Educational Guides**:
   - `/blog/what-is-kot-in-restaurant/`: Targets primary keyword `kitchen order ticket` (50,000 monthly searches in workbook), covering KOT meaning, hotel full form, standard ticket fields, station routing, and printed versus digital KDS. Visible word count: 1,716 words; primary density: 0.874%.
   - `/blog/restaurant-pos-buying-checklist/`: Targets primary keyword `restaurant pos buying checklist` (P0 buying guide), providing a 10-point hands-on demonstration test framework for restaurant operators. Visible word count: 1,328 words; primary density: 0.678%.
   - `/blog/restaurant-pos-cost-india/`: Targets primary keyword `pos system price` (500 monthly searches), explaining software subscriptions, hardware terminals, thermal printers, hidden costs, and a 3-year TCO comparison. Visible word count: 1,098 words; primary density: 0.729%.
3. **Design System Consistency & Responsive Layouts**:
   - Use the established Open Kitchen palette (`#faf9f5` paper canvas, `#242820` ink, `#62665d` muted, `#963b18` dark orange for light surface text contrast ≥ 4.5:1, `#ffe7cf` orange tint, and `#f0caa8` conversion containers).
   - Enforce the Two Voices Rule: Bricolage Grotesque Display for headlines and Instrument Sans Body for prose, labels, and tables.
   - Implement responsive layouts:
     - `/blog/`: Featured guide card, responsive 3-column desktop / 2-column tablet / 1-column mobile article grid, and bottom conversion block.
     - `/blog/[slug]/`: 2-column desktop layout with a sticky Table of Contents sidebar, collapsible `<details>` TOC on mobile, rich section blocks, custom callouts, zebra-striped tables, checklists, interactive FAQ accordions with rotating `+` SVGs, in-content feature cards, and bottom demo CTA.
4. **Navigation, Sitemap & LLM Guide Integration**:
   - Add `<a href="/blog/">Blog & guides</a>` to `SiteFooter.astro` under Helpful links.
   - Register all 4 new routes (`/blog/`, `/blog/what-is-kot-in-restaurant/`, `/blog/restaurant-pos-buying-checklist/`, `/blog/restaurant-pos-cost-india/`) in `public/sitemap.xml` (total 20 canonical public routes) and `public/llms.txt`.
   - Update `scripts/verify-build.mjs` to validate multi-collection parity across both `marketing-pages` (17 entries) and `blog-articles` (3 entries), sitemap URLs, schema structures (`CollectionPage` and `BlogPosting`), and page integrity.
5. **Prose Standards & Humanizer**:
   - Write all article copy strictly following the 26 rules in the `humanizer` skill: no "not X but Y", no one-line dramatic fragments, no sayings that sound deep, no staged run-ups, no em dashes (—), and no overused AI vocabulary.

## Consequences

- RestaBee now has a fully functional, CMS-compatible static blog system generating 22 static routes (20 canonical public routes, 404, and historical prototype).
- All three initial P0 guides surpass 1,000 visible words and maintain primary keyword density within the required 0.5%–1.0% editorial range.
- Declared design system text/background color pairs pass WCAG AA standards (minimum 5.57:1).
- Automated build verification passes with zero Astro diagnostics and verified JSON-LD structured data.
