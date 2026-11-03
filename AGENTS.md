# RestaBee public website
Public product marketing and demo acquisition for restaurant operators.
## Documentation index
- Read [docs/STATUS.md](docs/STATUS.md) first on every task; it alone owns current implementation and verification state.
- [PRODUCT.md](PRODUCT.md): durable product context and evidence links.
- [DESIGN.md](DESIGN.md): visual system and performance constraints.
- [SEO page expansion plan](docs/plans/seo-page-expansion.md): page analysis, keyword ownership, build order and content strategy; not implementation status.
- [SEO keyword and page map](docs/master%20docs/RestaBee-SEO-Keyword-Page-Map.xlsx): supplied research workbook; retain as original input.
- [Public pricing](docs/master%20docs/RestaBee-Public-Pricing.docx): customer-facing pricing authority.
- [Internal sales pricing policy](docs/master%20docs/RestaBee-Internal-Sales-Pricing-Policy.docx): confidential; never publish.
- [Homepage sample order](docs/decisions/0009-t3-homepage-sample-order.md): use Table T3 and ₹200 Paneer Tikka across the related sample flow; retain distinct labels in the multi-table floor view.
- [Table QR Ordering section](docs/decisions/0007-table-qr-ordering-section.md): dedicated guest-to-staff-reviewed flow immediately before pricing; illustrative visual and verification boundary.
- [Supplied QR visuals](docs/decisions/0008-supplied-qr-ordering-visuals.md): user-provided QR and menu screenshot replace authored artwork.
- [Product screens and devices](docs/decisions/0010-product-screen-device-showcase.md): historical screenshot assignment; current sources and viewport mapping are in decision 0013.
- [Kitchen screen crop](docs/decisions/0011-focused-kitchen-ticket-crop.md): historical crop decision; superseded by the full screenshots in decision 0013.
- [Central menu screenshot update](docs/decisions/0012-updated-central-menu-screenshot.md): previous asset update; source selection is superseded by decision 0013.
- [Responsive POS screenshot map](docs/decisions/0013-responsive-pos-screenshot-map.md): maps the supplied uncropped desktop, tablet and phone captures to matching screens, shows both POS menu image preferences, and preserves the existing QR/menu visuals.
- [Screenshot filenames and tablet menu preference](docs/decisions/0014-seo-image-names-and-menu-preference-screens.md): records descriptive image filenames; its preference-card screenshot mapping is superseded by decision 0017.
- [Menu screens across devices](docs/decisions/0015-menu-screens-across-device-showcase.md): puts the POS menu in all three device frames, places My Shift beside cash-shift details; its horizontal phone carousel is superseded by decision 0020.
- [Two-click kitchen send copy](docs/decisions/0016-two-click-kitchen-send-copy.md): leads the kitchen feature with the user-approved order-send speed benefit.
- [Correct menu screenshot mapping](docs/decisions/0017-correct-menu-variant-screenshots.md): records photo preference and device screenshot selections; the current no-photo responsive mapping is in [0020](docs/decisions/0020-responsive-device-and-report-screens.md).
- [Tablet image for no-photo card](docs/decisions/0018-tablet-screen-for-no-photo-card.md): records an earlier all-width tablet mapping, superseded by responsive screenshot mapping in decision 0020.
- [Close-of-shift section](docs/decisions/0019-separate-close-of-shift-section.md): places My Shift and owner reporting on a separate light section after the dark operations section.
- [Responsive POS and report screens](docs/decisions/0020-responsive-device-and-report-screens.md): current no-photo responsive mapping, vertical phone device showcase and supplied Reports phone screenshot.
- [Equal close-of-shift cards](docs/decisions/0021-equal-close-of-shift-cards.md): gives Cash shifts and Reports equal widths on desktop.
- [Product screen labels](docs/decisions/0024-screen-labels-above-device-frames.md): places Floor, Kitchen and Central menu labels above their screenshot bezels, with the requested 16px mobile gap.
- [Screenshot frame spacing](docs/decisions/0025-screen-frame-spacing-and-panels.md): removes duplicate Floor/Kitchen panels and adds inset space around the other screen frames; supersedes 0024's framing details.
- [Primary keyword copy and image names](docs/decisions/0026-primary-keyword-copy-and-image-names.md): applies “restaurant POS” naturally to key homepage sections and descriptive filenames while preserving image mappings.
- [GitHub Pages hosting and SEO release](docs/decisions/0027-github-pages-hosting-and-seo-release.md): initial static-site publishing through GitHub Actions and the release SEO baseline.
- [llms.txt site guide](docs/decisions/0028-llms-txt-site-guide.md): concise public guide for agents, kept separate from crawler policy and sitemap.
- [SEO page expansion](docs/decisions/0030-seo-page-expansion.md): intent-specific page sequence and the continuing rule not to move or trim homepage sections before review; its temporary copy hold is superseded by decision 0032.
- [CMS-ready Astro content](docs/decisions/0031-cms-ready-astro-content.md): keep page composition in Astro and model editor-controlled content with validated collections.
- [Homepage copy and CMS migration](docs/decisions/0032-homepage-copy-and-cms-migration.md): current subscription wording, keyword-led homepage corrections, and the partial supersession of decision 0030’s copy hold.
- [Astro page release gates](docs/decisions/0033-astro-page-release-gates.md): page-first CMS modeling and the required SEO, contrast, accessibility and responsive checks before review.
- [Content and Astro authoring standards](docs/content-and-cms-standards.md): required keyword research, humanized brand copy, SEO/performance release checks, CMS-ready page modeling and shared visual patterns.
- [docs/decisions/](docs/decisions/): numbered decisions, immutable after use.
- [docs/BACKLOG.md](docs/BACKLOG.md): decided, unbuilt work.
- [docs/runbook.md](docs/runbook.md): local commands, deployment and recovery.
## Stack
Astro 7.4.1, TypeScript and static output; verified-on 2026-11-03 through `npm ls astro` and `npm run check && npm run build`. `src/pages` owns routes; `src/components` reusable UI; `src/styles` theme; `public` contains publishable assets only.
## Hard rules
Never run git add/commit/push or undo staging. Leave changes unstaged.
Never publish internal sales documents, invented proof, unsupported integrations or offline claims.
Label synthetic interface demonstrations. Keep marketing and POS deployment targets separate.
Read capability evidence before publishing claims. Do not silently resolve contradictory intent; ask and log in STATUS Unresolved.
Apply the content and Astro authoring standards to every new or revised public page; consult the matching keyword-map row, keep Astro Content Collections and Pages CMS fields aligned, and pass SEO, contrast, accessibility and responsive checks before review. Use the Humanizer skill for page copy. Treat trust-begging or defensive proof language as RED ALERT: notify the user and correct it within the authorized scope.
Only this file defines documentation authority. Date/scope/test every status claim. Link facts instead of duplicating them. Delete shipped plans after extracting durable decisions.
