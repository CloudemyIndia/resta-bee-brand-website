# Solution pages expansion: QSR, Takeaway, Cloud Kitchen and Bakery

Date: 2026-11-16. Authorized by user request to build Phase 2A vertical solution pages with full SEO optimization, humanized copy and CMS parity.

## Context
The keyword workbook maps specific industry vertical solution queries:
- `/solutions/qsr-pos/`: Primary `qsr pos` (Volume: 50, Difficulty: 8), supporting: `qsr pos software`, `qsr pos system`, `quick service restaurant software`, `fast food restaurant software`. Intent: fast counter order entry, combos, modifiers, station KOT queues and rapid tender recording.
- `/solutions/takeaway-pos/`: Primary `takeaway pos` (Volume: 50, Difficulty: 4), supporting: `takeaway pos system`, `takeaway billing software`, `takeaway restaurant pos`, `restaurant billing app`. Intent: parcel and counter desk billing, customer token numbers, automated packaging charges and kitchen ticket dispatch.
- `/solutions/cloud-kitchen-pos/`: Primary `cloud kitchen pos` (Volume: 50, Difficulty: 7), supporting: `pos for cloud kitchen`, `cloud kitchen pos system`, `cloud kitchen billing software`, `cloud kitchen management software`, `cloud kitchen software`. Intent: staff-entered multi-brand delivery orders, central catalog management, station-based food preparation routing and brand sales reporting.
- `/solutions/bakery-pos/`: Primary `bakery pos software` (Volume: 50, Difficulty: 5), supporting: `bakery pos`, `bakery pos system`, `bakery billing software`, `pos for bakery`. Intent: counter billing for packaged sweets and cakes, size and weight variants, custom celebration cake inscriptions, advance order deposits and cashier shift reconciliation.

Decision [0055](0055-deferred-seo-page-batch.md) queued vertical solution pages under evidenced product boundaries:
- Product evidence supports staff-entered orders across counter, parcel, dine-in and phone delivery.
- RestaBee does NOT support 2-way automated online aggregator order injection (Zomato/Swiggy API sync), delivery dispatch fleet tracking, or factory raw ingredient bill-of-materials manufacturing.
- Numerical speed claims (such as "3-second order punch") are prohibited. Trust-begging language ("transparent", "real price") is prohibited.

## Decision
1. Implement four static Astro routes:
   - `src/pages/solutions/qsr-pos/index.astro`
   - `src/pages/solutions/takeaway-pos/index.astro`
   - `src/pages/solutions/cloud-kitchen-pos/index.astro`
   - `src/pages/solutions/bakery-pos/index.astro`
2. Maintain 100% bidirectional CMS parity in `.pages.yml` and `src/content.config.ts`, storing all editorial content in typed JSON files under `src/content/pages/`:
   - `qsr-pos.json` (1,145 words, 12 exact primary matches, 1.048% density)
   - `takeaway-pos.json` (1,127 words, 8 exact primary matches, 0.710% density)
   - `cloud-kitchen-pos.json` (1,107 words, 8 exact primary matches, 0.723% density)
   - `bakery-pos.json` (1,158 words, 9 exact primary matches, 0.777% density)
3. Reuse verified product screenshots with explicit dual labeling (product interface name + sample restaurant data label):
   - QSR, Takeaway, Bakery: responsive POS menu captures (desktop, tablet, mobile) and Reports phone capture.
   - Cloud Kitchen: responsive Central Menu captures (desktop, mobile) and Reports phone capture.
4. Update `public/sitemap.xml` (20 -> 24 canonical routes) and `public/llms.txt`.
5. Update `scripts/verify-build.mjs` with comprehensive assertions for each route, verifying single H1, title and meta description length limits, canonical URLs, robots meta tags, structured data (`WebPage`, `BreadcrumbList`, `SoftwareApplication`), semantic landmarks, image alternatives with reserved dimensions, and site header/footer consistency.
6. Verify WCAG AA color contrast across all design system color pairs on all four pages via `scripts/report-solutions-contrast.mjs`.

## Rejected
- Numerical speed claims or unsupported performance guarantees.
- Claiming automated 2-way Swiggy/Zomato direct POS sync or delivery fleet tracking.
- Claiming industrial raw-material recipe BOM costing or bakery factory manufacturing.
- Trust-begging or defensive copy ("transparent", "unhidden costs").
- Omitting real product screenshots or failing Pages CMS bidirectional field parity.
