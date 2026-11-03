# RestaBee public website
Public product marketing and demo acquisition for restaurant operators.
## Documentation index
- Read [docs/STATUS.md](docs/STATUS.md) first on every task; it alone owns current implementation and verification state.
- [PRODUCT.md](PRODUCT.md): durable product context and evidence links.
- [DESIGN.md](DESIGN.md): visual system and performance constraints.
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
- [Contact route and footer links](docs/decisions/0052-contact-route-and-footer-links.md): Contact page SEO/CMS implementation, footer groups, verified owner details and privacy-policy publication gate.
- [Contact form and navigation](docs/decisions/0053-contact-form-and-navigation.md): shared homepage/contact lead form, Contact main navigation, and owner-confirmed privacy-policy scope and retention terms.
- [Privacy Policy and public contact details](docs/decisions/0054-privacy-policy-and-public-contact-details.md): CMS-backed policy page, form/footer links, owner-updated phone number, Cloudemy attribution and selector spacing.
- [SEO page expansion](docs/decisions/0030-seo-page-expansion.md): intent-specific page sequence and the continuing rule not to move or trim homepage sections before review; its temporary copy hold is superseded by decision 0032.
- [CMS-ready Astro content](docs/decisions/0031-cms-ready-astro-content.md): keep page composition in Astro and model editor-controlled content with validated collections.
- [Homepage copy and CMS migration](docs/decisions/0032-homepage-copy-and-cms-migration.md): current subscription wording, keyword-led homepage corrections, and the partial supersession of decision 0030’s copy hold.
- [Astro page release gates](docs/decisions/0033-astro-page-release-gates.md): page-first CMS modeling and the required SEO, contrast, accessibility and responsive checks before review.
- [Pricing page and product screenshot](docs/decisions/0034-pricing-page-and-product-screenshot.md): uses the public pricing document and requires at least one relevant device-framed product screenshot on new product pages.
- [Kitchen display system page](docs/decisions/0036-kitchen-display-system-page.md): maps the KDS keyword cluster, validated CMS content, supported workflow and responsive real product captures.
- [Natural content depth targets](docs/decisions/0037-natural-content-depth-targets.md): use 800+ visible words as a planning target and aim for 1,200+ when the page warrants it; never pad to hit a count.
- [Kitchen order ticket page](docs/decisions/0038-kitchen-order-ticket-page.md): KOT keyword intent, printed/digital workflow boundaries and supported station/ticket details.
- [Restaurant menu management page](docs/decisions/0039-restaurant-menu-management-page.md): mapped keyword intent, verified catalog workflow, outlet modes and responsive product screenshots.
- [KOT sample caption removal](docs/decisions/0040-remove-kot-sample-caption.md): removes the redundant visible sample-ticket transcription while retaining screenshot disclosure and alt text.
- [Multi-outlet POS page](docs/decisions/0041-multi-outlet-pos-page.md): maps the multi-outlet keyword target to verified menu, access and report workflows with real product screenshots.
- [Features directory and main navigation](docs/decisions/0042-features-directory-and-main-navigation.md): directory links for current capabilities and a three-page main navigation; preserves the separate management-pillar keyword target.
- [Homepage feature discovery and screenshot trims](docs/decisions/0043-homepage-feature-discovery-and-screenshot-trims.md): preserves the QR and restaurant-workspace showcases, moves menu-view options to the menu page, trims duplicated homepage content and links concise feature summaries to their detail pages.
- [Restaurant POS ordering system page](docs/decisions/0044-restaurant-pos-ordering-system-page.md): assigns the exact workbook primary phrase, supported dine-in/takeaway/delivery flow, CMS content structure, screenshot mapping and SEO release details.
- [Restaurant table management page](docs/decisions/0045-restaurant-table-management-page.md): assigns the workbook floor-management query, verified staff workflows, responsive floor captures, CMS fields and SEO release details.
- [Cafe POS solution page](docs/decisions/0046-cafe-pos-solution-page.md): assigns the cafe POS keyword cluster, supported counter/table/drink workflow, screenshot mapping and CMS structure.
- [Three-column footer navigation](docs/decisions/0047-three-column-footer-navigation.md): keeps Product, Features and Get started footer link groups distinct from the brand/contact block.
- [Restaurant cash management page](docs/decisions/0048-restaurant-cash-management-page.md): maps cashier-shift keywords to opening float, drawer activity, recorded collections, closing variance and the supplied My Shift screenshot.
- [Restaurant sales reports page](docs/decisions/0049-restaurant-sales-reports-page.md): maps the reports keyword cluster to verified sales/collection views, date semantics, outlet and role scope, and the supplied Reports phone capture.
- [Reports catalog and audit history](docs/decisions/0050-reports-catalog-and-audit-history.md): preserves the ten product report types and groups, and describes Audit as separate read-only history with its own timestamp and role scope.
- [Restaurant management software pillar](docs/decisions/0051-restaurant-management-software-pillar.md): targets the workbook’s broad category query and links the verified daily restaurant workspaces through editable Astro content.
- [Real product screenshot labels](docs/decisions/0035-real-product-screenshot-labels.md): identify genuine RestaBee screens directly and state sample data separately; reserve “illustrative” for synthetic or non-product visuals.
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
