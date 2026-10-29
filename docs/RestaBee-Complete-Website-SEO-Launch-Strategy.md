# RestaBee — Complete Website, Keyword Architecture, SEO & Commercial Launch Plan

Implementation choices: see [decision 0001](decisions/0001-astro-marketing.md) for the architecture and pricing selected after this proposal.

**Prepared:** 25 October 2026  |  **Domain:** https://restabee.com  |  **Audience:** India-first restaurant operators
**Source basis:** Six uploaded Google Keyword Planner TSV-format CSV exports (period 1 October 2025–30 September 2026), uploaded `landing-page-features.md` (25 October 2026), current publicly accessible restabee.com, competitor official pages, Google Search Central and Rank Math documentation. This is a strategy and proposed marketing plan, not an implementation audit or approved offer sheet.

## Executive decision
**Launch RestaBee as a restaurant operations POS, anchored in order → kitchen → service → bill; make multi-outlet controlled menu publishing the secondary differentiator.** Target independent restaurants, cafés, QSRs, takeaway businesses and small growing groups. Lead with an actual product video/screenshots, precise feature status, transparent pricing and a booked demo. Never present planned QR ordering, inventory or workforce/roster management as shipped.
**Build recommendation:** WordPress for the public marketing site (Rank Math, structured content, authorship, landing pages, CMS); keep authenticated RestaBee application isolated under `app.restabee.com` if technically feasible. Optimize a lightweight theme, avoid page-builder bloat. WordPress is a recommendation, not an assumption that existing software is built in WordPress.

## A. What the keyword research actually shows
- **6 files; 6,977 keyword rows; 5,146 unique exact lowercase strings.** These are mostly keyword *ideas*, not 5,146 commercially qualified targets. 157 of 214 mapped keyword assignments match the exports (some words repeat across briefs and some are editorial variants).
- Keyword Planner uses coarse average-volume buckets such as **50, 500, 5,000 and 50,000**. These are estimates/rounded buckets, not exact searches, guaranteed clicks or a forecast. Several exports contain semantically duplicated variations; do not sum keyword volumes across a cluster as though demand is independent.
- **“Competition” and “Competition (indexed value)” mean Google Ads advertiser competition, NOT organic SEO difficulty.** Actual organic competitiveness must be checked separately using SERP analysis, site authority and intent. Bid figures are paid-search indicators, not expected customer acquisition costs.
- Many biggest terms are misleading: `generate qr` (5,000,000), `petpooja dashboard` (500,000), `pos full form` (50,000), `kitchen order ticket` (50,000), `gst billing software` (50,000), `split bills` (5,000). Their apparent volume reflects broad or navigational intent; prioritize the restaurant-specific variant and do not treat them as high-conversion POS searches.

### Highest-value validated exact search phrases (illustrative set)
| Keyword from exports | Average monthly searches | Ads competition | RestaBee destination / intent |
|---|---:|---|---|
| restaurant pos | 5,000 | Medium | `/` |
| restaurant billing software | 5,000 | Medium | `/features/restaurant-billing-software/` |
| restaurant pos software | 500 | Medium | `/` |
| restaurant pos software india | 500 | Low | `/` |
| restaurant pos systems | 500 | Medium | `/solutions/restaurant-pos/` |
| restaurant management software | 500 | Low | `/restaurant-management-software/` |
| restaurant software | 500 | Medium | `/restaurant-management-software/` |
| restaurant billing software india | 500 | Low | `/features/restaurant-billing-software/` |
| cafe pos | 500 | High | `/solutions/cafe-pos/` |
| cafe billing software | 500 | Medium | `/solutions/cafe-pos/` |
| pos for cafe | 500 | High | `/solutions/cafe-pos/` |
| kitchen display system | 500 | Low | `/features/kitchen-display-system/` |
| kitchen display system for restaurant | 500 | Low | `/features/kitchen-display-system/` |
| kitchen order ticket system | 50 | Low | `/features/kot-management/` |
| restaurant table management software | 50 | Low | `/features/restaurant-table-management/` |
| restaurant menu management software | 50 | Low | `/features/restaurant-menu-management/` |
| cloud kitchen pos | 50 | Low | `/solutions/cloud-kitchen-pos/` |
| qsr pos | 50 | Low | `/solutions/qsr-pos/` |
| bakery pos software | 50 | Low | `/solutions/bakery-pos/` |
| restaurant inventory management software | 500 | Low | `HOLD — after inventory release` |
| restaurant qr code ordering system | 500 | Low | `HOLD — after QR release` |
| petpooja alternative | 500 | Medium | `/blog/petpooja-alternative/ (after fact-check)` |
| restaurant pos software price | 50 | Medium | `/pricing/` |
| best restaurant pos systems | 500 | Medium | `/blog/restaurant-pos-buying-checklist/` |

### Keyword qualification and exclusion
- **Transactional (highest):** restaurant POS / billing / relevant system/pricing terms; use conversion-ready landing pages, demonstrations and plan details.
- **Feature-specific (strong early-win candidates):** KOT system, kitchen display, table management, menu publishing, cash shifts, multi-outlet control. Some have lower volume but closer alignment with differentiating product workflows.
- **Vertical-specific:** café POS and café billing have more direct purchase intent than generic café or QR terms. QSR and cloud kitchen have smaller measured volumes but merit distinct pages if the feature fit is demonstrated.
- **Informational:** KOT meaning, POS explained, price guides, billing formats, POS purchasing checklists. Use blog content to earn visibility and funnel to a matching feature, not to replace feature pages.
- **Hold:** QR ordering, ingredient inventory, staff scheduling/payroll queries for future product pages until features are accepted. Educational articles may discuss the concepts without misrepresenting RestaBee.
- **Exclude from target pages:** Petpooja dashboard/login/support, generic QR generation and scanning, pizza delivery, job/software download, `pos machine` hardware-only queries without hardware offering, retail POS, generic accounting/e-invoicing, non-India geography and unrelated expanded suggestions.

## B. Competitor positioning and how to win
| Competitor | Verified public positioning / page pattern | Implication for RestaBee |
|---|---|---|
| Petpooja | Broad POS; dedicated billing, inventory, online ordering, reporting and extensive add-ons with demo-first UX | Do not imply parity. Win with narrower, demonstrable workflows and clear price/feature boundaries |
| Restroworks (formerly Posist) | Multi-page enterprise ecosystem: front of house, inventory, central kitchen, KDS, forecasting and marketplace | Avoid pretending to be an enterprise ERP. Make menu control and multi-outlet role boundaries simple to understand |
| Gofrugal | Detailed recipe/inventory, kitchen integration and offline billing messaging | Be transparent about lack of offline operations claims until tested |
| SlickPOS | Business-type pages for restaurant, QSR, café, bakery, cloud kitchen and hardware/device navigation | Use vertical-specific pages with actual restaurant-format examples, not superficial keyword swaps |
| Restrofi and DineOpen | Publicly advertised low-entry SaaS prices and QR/KDS propositions | A new brand cannot rely on “cheap POS” alone; win through demonstrated workflow, onboarding trust and multi-outlet governance |
**Opportunity:** Position as `a serious operational POS without enterprise complexity`: show a genuine order journey, real screenshots, clear limitations and onboarding processes. No unverifiable speed or savings claims. The public prices/features of competitors can change; preserve an “as checked” date for comparisons.

## C. Sitemap, URL conventions and navigation
**Recommended menu:** Product (overview + Billing + KOT + Kitchen Display + Tables + Menu + Multi-outlet + Reports); Solutions (Restaurants, Cafés, QSR, Takeaway, Cloud Kitchens); Pricing; Resources (Guides and comparison articles); About; **Book Demo** CTA. Footer: Contact, Privacy, Terms, Refund Policy, support information when approved.
**Important:** Homepage owns `restaurant POS / restaurant POS software`. `/restaurant-management-software/` owns the broader connected-operations query. `/solutions/restaurant-pos/` must target specifically full-service dine-in workflow with unique examples, or be folded into the homepage if rankings overlap. No one-page-per-synonym doorway pages.
**Content publishing quantities:** HOLD: 3, P0: 17, P1: 13, P2: 9. **HOLD items are not part of the initial indexable product sitemap.** P2 pages are only published when product proof, editorial resources and user intent support them.

## D. Page-by-page SEO/content briefs (all proposed URLs)
**How to read:** P0 = publish for launch, P1 = first 30–60 days, P2 = expand after evidence and priority, HOLD = future feature only. Suggested word ranges are editorial planning ranges—not ranking rules. Keyword volume shown is from uploaded Planner files; `not in exports` = editorial target, not zero demand.
### `/` — Homepage · P0
- **Primary target:** restaurant pos (Planner avg. **5,000**). **Supporting cluster:** `restaurant pos software` (500), `restaurant pos software india` (500), `pos software for restaurant` (500), `restaurant pos systems` (500), `restaurant pos system` (500).
- **SEO title:** Restaurant POS Software India | RestaBee  |  **H1:** Restaurant POS that keeps orders, kitchen and billing in sync
- **Intent/angle:** One complete order → KOT → serve → bill workflow; India-first. Not a laundry list.. **Depth:** 900–1,400 words.
- **Suggested H2/section sequence:** Hero with real interface → 4-step workflow → service types → 8 verified benefit cards → floor and kitchen demo → multi-outlet menu controls → pricing CTA → buyer FAQs → demo form.
- **Demonstrate/verify:** F01–F19 subject to release acceptance.
- **Internal links:** `/features/restaurant-billing-software/`, `/features/kot-management/`, `/solutions/cafe-pos/`, `/pricing/`, `/book-demo/`.

### `/restaurant-management-software/` — Pillar · P1
- **Primary target:** restaurant management software (Planner avg. **500**). **Supporting cluster:** `restaurant software` (500), `restaurant software india` (500), `restaurant management software india` (50), `restaurant software solutions` (50), `restaurant management system software` (50).
- **SEO title:** Restaurant Management Software | RestaBee  |  **H1:** Restaurant management software for daily operations
- **Intent/angle:** Daily operations hub: connecting front-of-house, kitchen, cashier and owner rather than POS-only checkout. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** What restaurant management software covers → operational workflow → tables and team roles → KOT and billing → menu publishing → cash shifts and reports → limitations → restaurant type fit → FAQs and demo.
- **Demonstrate/verify:** F01,F03,F04,F05,F11,F14,F15.
- **Internal links:** `/`, `/features/restaurant-billing-software/`, `/features/restaurant-table-management/`, `/features/multi-outlet-restaurant-management/`.

### `/features/restaurant-billing-software/` — Feature · P0
- **Primary target:** restaurant billing software (Planner avg. **5,000**). **Supporting cluster:** `billing software for restaurant` (5,000), `restaurant billing software india` (500), `restaurant billing system` (500), `restaurant billing app` (500), `billing software for restaurant in india` (500).
- **SEO title:** Restaurant Billing Software | RestaBee  |  **H1:** Restaurant Billing Software for your restaurant
- **Intent/angle:** High-intent checkout page: GST invoice preview, discounts, tender recording, split payment. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Bill creation workflow → GST/tax configuration → discount types → splits and merges → cash UPI card recording → printing → refund approvals → common billing use cases → FAQ → demo.
- **Demonstrate/verify:** F05,F06,F07,F12,F18.
- **Internal links:** `/`, `/features/split-billing/`, `/features/restaurant-gst-billing/`, `/pricing/`.

### `/features/kot-management/` — Feature · P0
- **Primary target:** kitchen order ticket system (Planner avg. **50**). **Supporting cluster:** `kitchen order ticket app` (50), `restaurant kitchen order system` (50), `kitchen order management system` (50), `kitchen order ticket printer` (50).
- **SEO title:** Kitchen Order Ticket System | RestaBee  |  **H1:** Kitchen Order Ticket System for your restaurant
- **Intent/angle:** Explain KOT meaning briefly, then show KOT creation, station-wise routing, amendments and state changes. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** What is a KOT → POS-to-KOT workflow → station routing → modifiers notes → partial readiness and recalls → printed KOT vs KDS → sample kitchen journey → FAQ → demo.
- **Demonstrate/verify:** F04,F02,F18.
- **Internal links:** `/features/kitchen-display-system/`, `/blog/what-is-kot-in-restaurant/`, `/features/restaurant-order-management/`.

### `/features/kitchen-display-system/` — Feature · P0
- **Primary target:** kitchen display system (Planner avg. **500**). **Supporting cluster:** `kitchen display system for restaurant` (500), `kitchen display systems` (500), `restaurant kitchen display system` (50), `kitchen display software` (50), `pos with kitchen display` (50), `restaurant kds` (50).
- **SEO title:** Kitchen Display System | RestaBee  |  **H1:** Kitchen Display System for your restaurant
- **Intent/angle:** Target digital kitchen queue, not printed tickets or generic displays. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** KDS role → new preparing ready statuses → station assignment → partial quantities → changes and acknowledgements → KDS vs printed tickets → demonstration → FAQ.
- **Demonstrate/verify:** F04.
- **Internal links:** `/features/kot-management/`, `/blog/kot-vs-kds/`, `/features/restaurant-order-management/`.

### `/features/restaurant-table-management/` — Feature · P0
- **Primary target:** restaurant table management software (Planner avg. **50**). **Supporting cluster:** `restaurant table management` (50), `table management restaurant` (50), `restaurant table management systems` (50), `pos table management` (50), `table management app` (50).
- **SEO title:** Restaurant Table Management Software | RestaBee  |  **H1:** Restaurant Table Management Software for your restaurant
- **Intent/angle:** Restaurant floor and seated-party workflow without public reservation portal promise. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Visual floor and sections → waiting and seating → assign captain → move party → bill requests → cleaning and release → illustrated scenario → FAQ.
- **Demonstrate/verify:** F03,F16.
- **Internal links:** `/solutions/restaurant-pos/`, `/features/restaurant-order-management/`, `/features/restaurant-reservation-records/`.

### `/features/restaurant-order-management/` — Feature · P0
- **Primary target:** restaurant pos ordering system (Planner avg. **50**). **Supporting cluster:** `restaurant ordering and billing system` (50), `restaurant order management system` (500), `restaurant pos ordering system` (50), `kitchen orders` (50).
- **SEO title:** Restaurant Pos Ordering System | RestaBee  |  **H1:** Restaurant Pos Ordering System for your restaurant
- **Intent/angle:** Distinguish dine-in, staff-entered takeaway and staff-entered delivery with customizations. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Order types → variants and modifiers → combos and kitchen notes → draft vs sent → amendments → station handoff → bill handoff → demo.
- **Demonstrate/verify:** F01,F02,F09.
- **Internal links:** `/features/kot-management/`, `/features/restaurant-billing-software/`, `/solutions/takeaway-pos/`.

### `/features/restaurant-menu-management/` — Feature · P0
- **Primary target:** restaurant menu management software (Planner avg. **50**). **Supporting cluster:** `restaurant menu management system` (50), `menu management software` (50), `menu management system for restaurants` (50), `restaurant menu system` (50), `food menu management system` (50).
- **SEO title:** Restaurant Menu Management Software | RestaBee  |  **H1:** Restaurant Menu Management Software for your restaurant
- **Intent/angle:** Central approval/publication process and independently maintained outlet menus. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Categories and prices → variants addons and combos → station assignment → draft review/publish → select outlet application → availability toggles → audited changes → FAQ.
- **Demonstrate/verify:** F11,F13.
- **Internal links:** `/features/multi-outlet-restaurant-management/`, `/features/restaurant-order-management/`.

### `/features/split-billing/` — Feature · P1
- **Primary target:** split bills (Planner avg. **5,000**). **Supporting cluster:** `split bills app` (500), `restaurant split bill` [editorial], `split payment restaurant` [editorial], `split bill restaurant pos` [editorial].
- **SEO title:** Split Bills | RestaBee  |  **H1:** Split Bills for your restaurant
- **Intent/angle:** Show distinction: split eligible draft invoice items vs record multiple payments. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Split bill vs split payment → allocation examples → combine eligible drafts → cash UPI card mix → discount/tax treatment → demo → FAQs.
- **Demonstrate/verify:** F05,F06,F07.
- **Internal links:** `/features/restaurant-billing-software/`, `/features/restaurant-gst-billing/`.

### `/features/restaurant-gst-billing/` — Feature · P1
- **Primary target:** restaurant gst billing software (Planner avg. **not in exports**). **Supporting cluster:** `gst billing software for restaurant` [editorial], `restaurant gst invoice` [editorial], `gst restaurant bill` [editorial], `restaurant bill gst` [editorial].
- **SEO title:** Restaurant Gst Billing Software | RestaBee  |  **H1:** Restaurant Gst Billing Software for your restaurant
- **Intent/angle:** GST-specific POS tax configuration; no filing/certification claims. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** GST lines and tax profiles → example restaurant invoice → discount and tax handling → records for accountant → exclusions → common questions.
- **Demonstrate/verify:** F05,F14,F18.
- **Internal links:** `/features/restaurant-billing-software/`, `/blog/restaurant-gst-bill-format/`.

### `/features/restaurant-sales-reports/` — Feature · P1
- **Primary target:** restaurant sales reporting software (Planner avg. **not in exports**). **Supporting cluster:** `restaurant sales report` [editorial], `restaurant pos reports` [editorial], `restaurant analytics software` (50), `restaurant sales dashboard` [editorial].
- **SEO title:** Restaurant Sales Reporting Software | RestaBee  |  **H1:** Restaurant Sales Reporting Software for your restaurant
- **Intent/angle:** Demonstrate verified issued-sales and collected-payment measures, never unproven forecasts. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Sales vs collections → items and discounts → tax and payment methods → date and outlet filters → shift variance → sample report → FAQ.
- **Demonstrate/verify:** F14,F10.
- **Internal links:** `/features/restaurant-cash-management/`, `/features/multi-outlet-restaurant-management/`.

### `/features/restaurant-cash-management/` — Feature · P1
- **Primary target:** restaurant cashier software (Planner avg. **50**). **Supporting cluster:** `cashier software` (50), `restaurant cash management` [editorial], `cash shift management` [editorial], `restaurant cash register software` [editorial].
- **SEO title:** Restaurant Cashier Software | RestaBee  |  **H1:** Restaurant Cashier Software for your restaurant
- **Intent/angle:** Cashier shift governance and customer dues differentiates from simple bill creation. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Opening float → drawer entries → count and variance → split tenders → due creation and recovery → roles/approvals → sample shift close → FAQ.
- **Demonstrate/verify:** F07,F08,F10,F15.
- **Internal links:** `/features/restaurant-billing-software/`, `/features/restaurant-sales-reports/`.

### `/features/multi-outlet-restaurant-management/` — Feature · P0
- **Primary target:** multi outlet restaurant pos (Planner avg. **not in exports**). **Supporting cluster:** `franchise pos` (50), `multiple outlet pos system` [editorial], `restaurant chain pos` [editorial], `multi location restaurant pos` [editorial], `central menu management` [editorial].
- **SEO title:** Multi Outlet Restaurant Pos | RestaBee  |  **H1:** Multi Outlet Restaurant Pos for your restaurant
- **Intent/angle:** Distinct differentiator: controlled central menu publishing + outlet-scoped teams and reports. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Central vs local menus → draft review → outlet application → permissions → outlet reports → scenario 3 locations → operational boundaries → FAQ.
- **Demonstrate/verify:** F11,F14,F15.
- **Internal links:** `/restaurant-management-software/`, `/features/restaurant-menu-management/`, `/pricing/`.

### `/features/restaurant-customer-records/` — Feature · P2
- **Primary target:** restaurant customer management software (Planner avg. **not in exports**). **Supporting cluster:** `customer records restaurant` [editorial], `restaurant customer database` [editorial], `customer management software` (50,000).
- **SEO title:** Restaurant Customer Management Software | RestaBee  |  **H1:** Restaurant Customer Management Software for your restaurant
- **Intent/angle:** Records and order history only; not loyalty automation. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Customer details → linked orders → invoice customer fields → privacy and permissions → not a marketing automation system → FAQs.
- **Demonstrate/verify:** F17.
- **Internal links:** `/features/restaurant-billing-software/`.

### `/features/restaurant-reservation-records/` — Feature · P2
- **Primary target:** restaurant reservation management software (Planner avg. **not in exports**). **Supporting cluster:** `restaurant table reservation software` [editorial], `restaurant booking management` [editorial].
- **SEO title:** Restaurant Reservation Management Software | RestaBee  |  **H1:** Restaurant Reservation Management Software for your restaurant
- **Intent/angle:** Internal reservation recording and assignment, not customer online booking. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Staff entry of booking → customer and party → table assignment → floor coordination → boundaries → demo → FAQs.
- **Demonstrate/verify:** F16,F03.
- **Internal links:** `/features/restaurant-table-management/`.

### `/solutions/restaurant-pos/` — Solution · P0
- **Primary target:** restaurant pos systems (Planner avg. **500**). **Supporting cluster:** `pos system for restaurant` (500), `restaurant pos software` (500), `pos software for restaurant` (500), `restaurant point of sale` (5,000).
- **SEO title:** Restaurant Pos Systems for India | RestaBee  |  **H1:** Restaurant Pos Systems
- **Intent/angle:** Dine-in buyer journey + floor coordination; do not just repeat homepage. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Full-service restaurant challenges → waiter order flow → table map → KOT → combined/split bill → menu updates → roles → proof → FAQs.
- **Demonstrate/verify:** F01–F07,F11.
- **Internal links:** `/`, `/features/restaurant-table-management/`, `/features/restaurant-billing-software/`.

### `/solutions/cafe-pos/` — Solution · P0
- **Primary target:** cafe pos (Planner avg. **500**). **Supporting cluster:** `cafe pos software` (50), `pos for cafe` (500), `cafe billing software` (500), `pos system for cafe` (500), `coffee shop pos software` (50).
- **SEO title:** Cafe Pos for India | RestaBee  |  **H1:** Cafe Pos
- **Intent/angle:** Coffee/drinks modifiers and quick counter service, plus tables when used. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Cafe counter workflow → milk sizes/variants examples → item modifiers → barista/kitchen station → payments → daily item trends → FAQs → demo.
- **Demonstrate/verify:** F01,F02,F04,F05,F14.
- **Internal links:** `/features/restaurant-billing-software/`, `/features/kitchen-display-system/`, `/pricing/`.

### `/solutions/qsr-pos/` — Solution · P1
- **Primary target:** qsr pos (Planner avg. **50**). **Supporting cluster:** `qsr pos software` (50), `qsr pos system` (50), `quick service restaurant software` (50), `fast food restaurant software` (50).
- **SEO title:** Qsr Pos for India | RestaBee  |  **H1:** Qsr Pos
- **Intent/angle:** Fast ordering and multi-station kitchen queues; avoid proven speed numeric claims. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Queue/service model → quick checkout → combos/variants → station KOT → takeaway fees → reports → FAQs → demo.
- **Demonstrate/verify:** F01,F02,F04,F05,F09.
- **Internal links:** `/features/restaurant-order-management/`, `/features/kot-management/`.

### `/solutions/takeaway-pos/` — Solution · P1
- **Primary target:** takeaway pos (Planner avg. **50**). **Supporting cluster:** `takeaway pos system` (50), `takeaway billing software` [editorial], `takeaway restaurant pos` [editorial], `restaurant billing app` (500).
- **SEO title:** Takeaway Pos for India | RestaBee  |  **H1:** Takeaway Pos
- **Intent/angle:** Staff-entered takeaway orders; packaging charges and pickup tracking only when confirmed. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Staff order entry → modifiers → packaging charges → KOT status → receipt and collection → FAQs.
- **Demonstrate/verify:** F01,F02,F04,F05,F09.
- **Internal links:** `/features/restaurant-order-management/`, `/features/restaurant-billing-software/`.

### `/solutions/cloud-kitchen-pos/` — Solution · P1
- **Primary target:** cloud kitchen pos (Planner avg. **50**). **Supporting cluster:** `pos for cloud kitchen` (50), `cloud kitchen pos system` (50), `cloud kitchen billing software` (50), `cloud kitchen management software` (50), `cloud kitchen software` (50).
- **SEO title:** Cloud Kitchen Pos for India | RestaBee  |  **H1:** Cloud Kitchen Pos
- **Intent/angle:** Manual delivery order entry with kitchen and billing; no aggregator sync promise. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Cloud kitchen fit and limitations → staff-entered delivery → station routing → packaging/delivery charges → payments and reports → FAQs → demo.
- **Demonstrate/verify:** F01,F04,F05,F09,F14; NO aggregator sync.
- **Internal links:** `/features/restaurant-order-management/`, `/features/kitchen-display-system/`.

### `/solutions/bakery-pos/` — Solution · P2
- **Primary target:** bakery pos software (Planner avg. **50**). **Supporting cluster:** `bakery pos` (50), `bakery pos system` (50), `bakery billing software` (50), `pos for bakery` [editorial].
- **SEO title:** Bakery Pos Software for India | RestaBee  |  **H1:** Bakery Pos Software
- **Intent/angle:** Only publish after a bakery-specific usability demo; no production batches/ingredients assumptions. **Depth:** 800–1,400 words.
- **Suggested H2/section sequence:** Counter sales → variants/combos → pickup → tax → daily reporting → trial workflow → FAQ.
- **Demonstrate/verify:** VALIDATE format fit F01,F05.
- **Internal links:** `/features/restaurant-billing-software/`.

### `/pricing/` — Commercial · P0
- **Primary target:** restaurant pos software price (Planner avg. **50**). **Supporting cluster:** `restaurant pos system price` (50), `restaurant billing software price` (50), `pos software price in india` (50), `pos system price` (500).
- **SEO title:** Restaurant POS Pricing in India | RestaBee  |  **H1:** Restaurant POS pricing that makes sense for your outlet
- **Intent/angle:** Transparent INR prices, billing cadence, included features, onboarding and GST. **Depth:** 700–1,100 words.
- **Suggested H2/section sequence:** Plan cards → annual vs monthly → included features → per-outlet definition → device/support clauses → onboarding and migration → FAQ → demo.
- **Demonstrate/verify:** Pricing is proposed pending owner approval.
- **Internal links:** `/book-demo/`, `/features/restaurant-billing-software/`.

### `/book-demo/` — Conversion · P0
- **Primary target:** restaurant pos demo (Planner avg. **50**). **Supporting cluster:** `restaurant pos software demo` [editorial], `restaurant billing software demo` [editorial], `restaurant software free demo` [editorial].
- **SEO title:** Book a Restaurant POS Demo | RestaBee  |  **H1:** See RestaBee working with your restaurant workflow
- **Intent/angle:** Conversion page; not a keyword stuffing landing page. **Depth:** 300–700 words.
- **Suggested H2/section sequence:** What demonstration includes → choose restaurant format → outlet count and top problem → calendaring if available → privacy/consent → next steps.
- **Demonstrate/verify:** Actual demo booking fulfillment must work.
- **Internal links:** `/pricing/`, `/`.

### `/about/` — Trust · P0
- **Primary target:** restabee (Planner avg. **not in exports**). **Supporting cluster:** `restabee pos` [editorial], `restabee software` [editorial].
- **SEO title:** About RestaBee | Restaurant POS Team  |  **H1:** About RestaBee
- **Intent/angle:** Company identity, team, product mission; verified credentials and real address only. **Depth:** 300–700 words.
- **Suggested H2/section sequence:** Who we serve → why we built it → product principles → team facts → business identity → contact.
- **Demonstrate/verify:** Public company information require verification.
- **Internal links:** `/contact/`, `/book-demo/`.

### `/contact/` — Trust · P0
- **Primary target:** restabee contact (Planner avg. **not in exports**). **Supporting cluster:** `restabee support` [editorial], `restabee phone` [editorial].
- **SEO title:** Contact RestaBee | Sales & Support  |  **H1:** Contact RestaBee
- **Intent/angle:** Genuine sales and support channels + privacy notice. **Depth:** 300–700 words.
- **Suggested H2/section sequence:** Sales contact → support contact and hours → company details → demo CTA.
- **Demonstrate/verify:** Channels/hours need owner signoff.
- **Internal links:** `/book-demo/`, `/privacy-policy/`.

### `/blog/what-is-restaurant-pos/` — Guide · P1
- **Primary target:** what is a pos in restaurant (Planner avg. **not in exports**). **Supporting cluster:** `pos full form` (50,000), `pos meaning` (5,000), `pos system meaning` (5,000), `point of sale meaning` (5,000), `what is a pos system` [editorial], `restaurant pos system` (500).
- **SEO title:** What Is A Pos In Restaurant | RestaBee Guide  |  **H1:** What Is A Pos In Restaurant
- **Intent/angle:** Define POS with restaurant-specific visual walkthrough; avoid attracting retail-only users. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Quick answer → what POS is in restaurant → POS workflow → hardware vs software → KOT and GST → buying checklist → FAQs.
- **Demonstrate/verify:** Education only.
- **Internal links:** `/`, `/features/restaurant-billing-software/`, `/pricing/`.

### `/blog/restaurant-pos-cost-india/` — Guide · P0
- **Primary target:** pos system price (Planner avg. **500**). **Supporting cluster:** `restaurant pos system price` (50), `pos software price in india` (50), `restaurant billing software price` (50), `pos system price in india` (50).
- **SEO title:** Pos System Price | RestaBee Guide  |  **H1:** Pos System Price
- **Intent/angle:** Unbiased cost explainer with hardware, setup, tax, renewal and features. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Types of pricing → example 3-year TCO → device/printer costs → hidden cost checklist → how to compare vendor quotes → RestaBee plans once approved → FAQs.
- **Demonstrate/verify:** Quote external dated price sources; avoid unverified comparisons.
- **Internal links:** `/pricing/`, `/blog/restaurant-pos-buying-checklist/`.

### `/blog/best-restaurant-pos-software-india/` — Comparison · P1
- **Primary target:** best restaurant pos software in india (Planner avg. **50**). **Supporting cluster:** `best restaurant pos` (500), `best restaurant pos systems` (500), `best restaurant billing software` (500), `top restaurant software` (500), `best pos software for restaurants in india` (50).
- **SEO title:** Best Restaurant Pos Software In India | RestaBee  |  **H1:** Best Restaurant Pos Software In India
- **Intent/angle:** Transparent product comparison including RestaBee limitations and named alternatives. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** How evaluated → decision matrix by restaurant type → vendor-by-vendor objective notes → pricing caveats → which system for which need → FAQs.
- **Demonstrate/verify:** Competitor statements sourced and updated.
- **Internal links:** `/`, `/pricing/`, `/blog/restaurant-pos-buying-checklist/`.

### `/blog/restaurant-pos-buying-checklist/` — Guide · P0
- **Primary target:** restaurant pos buying checklist (Planner avg. **not in exports**). **Supporting cluster:** `best pos for restaurant` (500), `restaurant pos system` (500), `restaurant management software` (500), `restaurant billing system` (500).
- **SEO title:** Restaurant Pos Buying Checklist | RestaBee Guide  |  **H1:** Restaurant Pos Buying Checklist
- **Intent/angle:** Downloadable printable checklist and RFP; feature/need evaluation. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** 10 operational demo tests → offline fallback question → print compatibility → order→kitchen→bill → integration verification → multi outlet → data migration → support SLA → cost checklist.
- **Demonstrate/verify:** No performance claims.
- **Internal links:** `/features/restaurant-billing-software/`, `/book-demo/`.

### `/blog/what-is-kot-in-restaurant/` — Guide · P0
- **Primary target:** kitchen order ticket (Planner avg. **50,000**). **Supporting cluster:** `kitchen order ticket system` (50), `kot meaning in restaurant` [editorial], `kot full form in hotel` [editorial], `kitchen order ticket example` [editorial].
- **SEO title:** Kitchen Order Ticket | RestaBee Guide  |  **H1:** Kitchen Order Ticket
- **Intent/angle:** Knowledge article clearly separate from commercial KOT software page. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Definition and sample → KOT full form → what fields are on KOT → workflow → common errors → printed vs digital → FAQ.
- **Demonstrate/verify:** Use accurate example KOT.
- **Internal links:** `/features/kot-management/`, `/blog/kot-vs-kds/`.

### `/blog/kot-vs-kds/` — Guide · P1
- **Primary target:** kds in restaurant (Planner avg. **50**). **Supporting cluster:** `kitchen order ticket` (50,000), `restaurant kds` (50), `pos kitchen display` (50), `kds restaurant` (500).
- **SEO title:** Kds In Restaurant | RestaBee Guide  |  **H1:** Kds In Restaurant
- **Intent/angle:** Compare printed ticket and live KDS, table and diagram; honest hardware caveats. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Comparison table → setup and printer needs → stations and handoffs → internet/printer questions → decision checklist → FAQs.
- **Demonstrate/verify:** No offline guarantees.
- **Internal links:** `/features/kitchen-display-system/`, `/features/kot-management/`.

### `/blog/restaurant-gst-bill-format/` — Guide · P1
- **Primary target:** restaurant invoices (Planner avg. **500**). **Supporting cluster:** `restaurant bill format` [editorial], `gst bill format restaurant` [editorial], `restaurant invoice software` (50), `gst invoice software` (50,000).
- **SEO title:** Restaurant Invoices | RestaBee Guide  |  **H1:** Restaurant Invoices
- **Intent/angle:** Restaurant invoice anatomy including applicability tax rules review by CA. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Sample annotated bill → fields → CGST/SGST context with CA review → discount examples → common invoicing issues → software demo CTA.
- **Demonstrate/verify:** Have CA validate GST examples before publishing.
- **Internal links:** `/features/restaurant-gst-billing/`, `/features/restaurant-billing-software/`.

### `/blog/how-to-switch-restaurant-pos/` — Guide · P1
- **Primary target:** restaurant pos migration (Planner avg. **not in exports**). **Supporting cluster:** `changing restaurant pos` [editorial], `restaurant pos software` (500), `restaurant software` (500).
- **SEO title:** Restaurant Pos Migration | RestaBee Guide  |  **H1:** Restaurant Pos Migration
- **Intent/angle:** How to evaluate/migrate without interruption; no migration guarantee. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Data inventory → menu clean-up → staff training → test KOT/taxes → printer test → parallel run → go-live checklist.
- **Demonstrate/verify:** Operational checklist not assured migration tooling.
- **Internal links:** `/pricing/`, `/book-demo/`.

### `/blog/restaurant-menu-management-guide/` — Guide · P2
- **Primary target:** menu management (Planner avg. **500**). **Supporting cluster:** `menu management software` (50), `restaurant menu management software` (50), `food menu management system` (50), `restaurant menu system` (50).
- **SEO title:** Menu Management | RestaBee Guide  |  **H1:** Menu Management
- **Intent/angle:** Operational menu-change checklist; templates and error prevention. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Standardize items/variants → mods → allergens as supplied → approval and publish → multiple outlets → walkthrough.
- **Demonstrate/verify:** User-provided allergen info only.
- **Internal links:** `/features/restaurant-menu-management/`, `/features/multi-outlet-restaurant-management/`.

### `/blog/free-vs-paid-restaurant-billing-software/` — Guide · P2
- **Primary target:** free restaurant billing software (Planner avg. **500**). **Supporting cluster:** `restaurant billing software free download` (500), `free restaurant pos software` (500), `restaurant billing software free` [editorial], `best free restaurant billing software` (50).
- **SEO title:** Free Restaurant Billing Software | RestaBee Guide  |  **H1:** Free Restaurant Billing Software
- **Intent/angle:** Capture free search intent with balanced trade-offs; clearly no free-forever plan unless launched. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Genuinely free vs trial → limitations → support/data/export → per-outlet cost examples → when paid makes sense.
- **Demonstrate/verify:** Do not label RestaBee as free.
- **Internal links:** `/pricing/`, `/features/restaurant-billing-software/`.

### `/blog/petpooja-alternative/` — Comparison · P2
- **Primary target:** petpooja alternative (Planner avg. **500**). **Supporting cluster:** `petpooja software price` (5,000), `petpooja pos price` (500), `petpooja software` (5,000), `petpooja billing software price` (500).
- **SEO title:** Petpooja Alternative | RestaBee  |  **H1:** Petpooja Alternative
- **Intent/angle:** Only once factual product test and pricing validated; fairness and trademark acknowledgement. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** When Petpooja may suit → when RestaBee may suit → feature validation table → which integrations are missing → onboarding/pricing → FAQ.
- **Demonstrate/verify:** No false equivalence. Petpooja trademark acknowledged..
- **Internal links:** `/pricing/`, `/book-demo/`.

### `/blog/qr-table-ordering-guide/` — Future educational · P2
- **Primary target:** qr code restaurant menu (Planner avg. **500**). **Supporting cluster:** `restaurant qr code ordering system` (500), `qr code menu for restaurants` (500), `qr menu for restaurants` (500), `qr ordering` (50), `table ordering system` (50).
- **SEO title:** Qr Code Restaurant Menu | RestaBee Guide  |  **H1:** Qr Code Restaurant Menu
- **Intent/angle:** Educational guide may publish now; NEVER promise shipped RestaBee QR orders. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Scan/view/order/payment differences → guest UX → security → KOT handoff → accessibility → deployment checklist → FAQ.
- **Demonstrate/verify:** QR ordering not shipped; optional waitlist.
- **Internal links:** `/blog/restaurant-pos-buying-checklist/`.

### `/blog/restaurant-inventory-management-guide/` — Future educational · P2
- **Primary target:** restaurant inventory management (Planner avg. **500**). **Supporting cluster:** `restaurant inventory software` (500), `restaurant inventory management system` (500), `restaurant inventory control software` (500), `restaurant inventory management software` (500).
- **SEO title:** Restaurant Inventory Management | RestaBee Guide  |  **H1:** Restaurant Inventory Management
- **Intent/angle:** Ingredient stock/BOM/purchase reference guide; avoid implying RestaBee current support. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Opening/closing stock → recipes/BOM → waste/variance → purchase/reorder → selection checklist → FAQ.
- **Demonstrate/verify:** Inventory module future, not launched.
- **Internal links:** `/restaurant-management-software/`.

### `/blog/restaurant-staff-shift-management-guide/` — Future educational · P2
- **Primary target:** restaurant staff management software (Planner avg. **not in exports**). **Supporting cluster:** `restaurant employee management` [editorial], `restaurant staff scheduling` [editorial], `restaurant shift management software` [editorial].
- **SEO title:** Restaurant Staff Management Software | RestaBee Guide  |  **H1:** Restaurant Staff Management Software
- **Intent/angle:** Distinguish present staff permissions/cashier shifts from future scheduling/payroll. **Depth:** 1,200–2,000 (subject to intent) words.
- **Suggested H2/section sequence:** Roles vs rosters → attendance → payroll → permissions → shift settlement → future modules → checklist.
- **Demonstrate/verify:** Staff scheduling/attendance planned only.
- **Internal links:** `/features/restaurant-cash-management/`.

### `/features/restaurant-inventory-management/` — Future product · HOLD
- **Primary target:** restaurant inventory management software (Planner avg. **500**). **Supporting cluster:** `restaurant inventory software` (500), `restaurant inventory management system` (500), `restaurant inventory tracking` (50), `restaurant inventory control software` (500).
- **SEO title:** Restaurant Inventory Management Software | RestaBee  |  **H1:** Restaurant Inventory Management Software
- **Intent/angle:** PUBLISH ONLY after released and verified: ingredients, stock inward/outward, recipe/BOM, alerts only if tested. **Depth:** 900–1,300 after release words.
- **Suggested H2/section sequence:** Ingredients and stock → purchase → recipe → variance → low stock → integration with billing → demo.
- **Demonstrate/verify:** Not live.
- **Internal links:** `/restaurant-management-software/`.

### `/features/restaurant-staff-management/` — Future product · HOLD
- **Primary target:** restaurant staff management software (Planner avg. **not in exports**). **Supporting cluster:** `restaurant staff scheduling` [editorial], `restaurant attendance management` [editorial], `restaurant workforce management` [editorial].
- **SEO title:** Restaurant Staff Management Software | RestaBee  |  **H1:** Restaurant Staff Management Software
- **Intent/angle:** PUBLISH ONLY once real staff management ships; separate from live role-based permissions. **Depth:** 900–1,300 after release words.
- **Suggested H2/section sequence:** Attendance → roster → leave → shift → permissions → reports → FAQ.
- **Demonstrate/verify:** Not live.
- **Internal links:** `/restaurant-management-software/`.

### `/features/qr-code-table-ordering/` — Future product · HOLD
- **Primary target:** restaurant qr code ordering system (Planner avg. **500**). **Supporting cluster:** `qr ordering` (50), `qr code table ordering` (50), `restaurant qr menu` (50), `scan to order` (5,000), `table ordering system` (50).
- **SEO title:** Restaurant Qr Code Ordering System | RestaBee  |  **H1:** Restaurant Qr Code Ordering System
- **Intent/angle:** PUBLISH ONLY after guest scanning, ordering and kitchen POS synchronization accepted. **Depth:** 900–1,300 after release words.
- **Suggested H2/section sequence:** Scan and browse → restaurant table identity → cart/checkout → KOT → security → billing → FAQ.
- **Demonstrate/verify:** Not live.
- **Internal links:** `/features/restaurant-table-management/`.

## E. Detailed homepage conversion architecture and copy
1. **Above fold:** logo, minimal menu, a real POS screenshot (not a fake dashboard), eyebrow `Restaurant POS for India`, headline **“From the first order to the final bill.”** Subhead: “Take dine-in, takeaway and staff-entered delivery orders. Route kitchen tickets, manage tables, apply discounts and record payments from one restaurant workspace.” CTAs **Book a Demo** and **See the Workflow**.
2. **Service types:** Dine-in • Takeaway • Delivery orders (entered by staff). Avoid aggregator partner logos.
3. **4-step product proof:** Take order → Send to kitchen → Track ready/served → Preview bill & record collection. Capture one consistent demo restaurant across all visuals.
4. **Eight validated capability cards:** order types/modifiers; table/party workflow; station-wise KOT; GST/tax billing; split eligible draft bills; controlled central menu publishing; cash shifts and customer dues; permission-scoped reports.
5. **Deep visuals:** show two terminals/KDS real state transitions; menu draft-review-publish; split payment. Give screens explanatory captions, mobile alternatives and descriptive alt text.
6. **Personas:** restaurant owner, cashier, waiter/captain, kitchen, multi-outlet manager. Use a role/workspace example instead of making up efficiency percentages.
7. **Commercial reassurance:** transparent features/pricing once approved; onboarding process as actually delivered; hardware/printer compatibility verified during a demo; open support channels and real hours.
8. **FAQs:** service types, how KOT works, split bills vs payments, central menu vs outlet independence, printing arrangements, how to start. FAQ answer must describe operational limits; do not imply integrated payments or Zomato/Swiggy APIs.
9. **Final CTA:** demo form and contact methods with consent, error handling and confirmed lead delivery.

### Example homepage metadata
**SEO title:** Restaurant POS Software India | Billing & KOT – RestaBee  
**Meta description:** Restaurant POS for dine-in, takeaway and delivery order entry, station-wise KOT, GST billing, table management and reports. Book a RestaBee demo.  
**Focus keyword:** `restaurant pos` or `restaurant pos software` (select one in Rank Math; additional phrases are supportive text).

## F. Rank Math + Google on-page publishing standard
1. **Search intent first.** One canonical primary intent per landing page. Use exact phrase where it reads naturally in SEO title, H1, opening 100 words, slug (where appropriate), at least one H2 and one image alt only when truly descriptive. Primary keyword in first ~10% passes a Rank Math content test.
2. **Meta:** distinct SEO titles typically 45–60 characters where feasible, lead with the subject; unique descriptions roughly 120–160 characters, include a clear buyer promise and CTA. Pixel truncation matters more than exact character counts. No duplicated titles across home/solution/feature pages.
3. **Related phrase placement:** assign 3–8 true supporting terms per page. Put each into the section that answers its intent—do not reproduce a term list, use a footer “SEO keywords” block or repeat 15 variants in H2s.
4. **Density:** Rank Math describes ~1–1.5% as a sufficient rough range, but its own guidance says natural language is more important. **No forced density target** for an exact multiword phrase; do not sacrifice comprehension or make every phrase appear exactly a fixed number of times.
5. **Depth:** commercial home 900–1,400; features and solutions 800–1,400; comparisons/guides 1,200–2,000 when the user needs it. Google explicitly has **no preferred minimum word count**; richer examples, diagrams, pricing boundaries and FAQs outrank padding.
6. **Page anatomy:** one H1, descriptive H2s/H3s, clear above-fold CTA, screenshots and annotated workflows, specific supported facts, buying objections, 4–7 concise FAQs, pricing/demo link and at least 2 contextual internal links. Feature pages link back to overview/pillar and sideways to related modules; solution pages link to actual features.
7. **Images:** use real screenshots (WebP/AVIF, compression, useful file names, alt text stating what is depicted); never misleading UI/mock orders or public guest details. Videos with a text transcript / on-page explanation.
8. **Schema:** Organization on site, WebSite on home; BreadcrumbList on inner pages, BlogPosting/Article for editorial, SoftwareApplication/WebApplication *only* if required real pricing/reviews/details exist. Do not fabricate `aggregateRating`; Google rich-result eligibility for SoftwareApplication may require actual review/rating and an offer. FAQPage markup does not generally earn FAQ rich results for ordinary SaaS sites.
9. **Technical:** domain/canonical one version, HTTPS, responsive pages, noindex staging/private app/search-thin pages, robots accessible public marketing pages, auto XML sitemap in Search Console, GA4 events, mobile CWV measurement, image optimization, redirects for retired slugs, accessibility and clear business identity.
10. **Rank Math scores:** treat 80+ as a *workflow QA signal*, not a Google ranking guarantee. Publish useful pages if a checkbox is incompatible with correct brand, grammar or intent; rank/CTR/leads matter more than plugin scores.

### Content example — handling a keyword cluster without stuffing
**Page:** `/features/restaurant-billing-software/`  
**Main term:** restaurant billing software.  
**Introduction:** “RestaBee restaurant billing software helps your cashier prepare invoices, apply permitted discounts and record cash, UPI or card payments after service.”  
**H2:** “How restaurant billing works from order to settlement.”  
**H2:** “GST bill preview, taxes and discounts.”  
**H2:** “Split bills and record split payments.”  
**H2:** “What to check before choosing billing software for a restaurant in India.”  
**FAQ:** “Can I accept cash and UPI on one bill?” Answer accurately as *recording* mixed tenders, not automatic UPI confirmation.  
**CTA:** See real order-to-bill demonstration.

## G. Future module editorial policy and rollout
| Module | Current public position | Release gate for commercial page | Suggested launch window |
|---|---|---|---|
| Ingredient inventory | Not substantiated as live by supplied copy brief | Passed stock, purchase, recipe/BOM, deductions, audits and acceptance tests | Target 2–3 months; no promise |
| Staff management | Present role-based POS permissions; workforce roster/payroll not confirmed | Specify and test which of attendance, roster, shifts, leave, payroll are genuinely included | Target 2–3 months; no promise |
| Table QR ordering | Public self-serve scan/order not confirmed | QR-to-table mapping, guest menu/cart, kitchen routing, payment/security/consent and tests | Target 2–3 months; no promise |
Publish educational guides as truthful neutral resources if desired, but withhold commercial product URLs and Product schema until demonstrably launched. Add each feature via release blog + deep product page + relevant comparison/pricing update once accepted. Do not treat `Coming soon` as equivalent to operational availability.

## H. Pricing model — PROPOSAL, not an existing RestaBee offer
**Recommendation:** predictable **per-outlet subscription** with simple monthly/annual billing, base essentials in every tier, clear onboarding and verified per-outlet feature boundaries. Avoid perpetual “free POS” and transaction-based commissions on restaurant sales. No usage-based kitchen ticket fees.
| Proposed package | Monthly bill | Annual-billed equivalent | Annual contract per outlet | Intended limits / core access |
|---|---:|---:|---:|---|
| Essentials | ₹899 | ₹699/month | ₹8,388 | One outlet. POS order entry, KOT, basic billing/tax, menu editing, payment method recording, key basic reports |
| Operations | ₹1,499 | ₹1,199/month | ₹14,388 | Essentials + table/party flow, kitchen display, split draft bills, dues/cash shift, stronger reporting/permissions (verify exact entitlement) |
| Multi-outlet | Quote | from ₹1,499/outlet/month | from ₹17,988/outlet | Operations + approved central menu publication, outlet permissions and multi-outlet reporting, with group discount and central onboarding |
**Important:** These are *candidate price points* to test against actual hosting, support, onboarding, implementation complexity and competitive win/loss data; they are **not published RestaBee prices**. GST treatment must be explicitly specified after owner/CA decision (recommend prices + applicable GST on B2B invoices); do not silently assert GST inclusive. Define seat/terminal/printer limits only after engineering sign-off, never invent them.
**Commercial terms to choose:** Annual effective discounts are ~22% vs monthly billing for Essentials/Operations. A founding-customer program can offer 20% off **the first annual subscription invoice only** to the first 30 paid outlets, non-stackable, with renewal at clearly disclosed list price. Prefer 14-day assisted pilot or 30-day money-back under a written eligibility policy rather than indefinite free tier. Setup/onboarding fee of ₹2,999 per outlet can be waived selectively for annual contracts if cost coverage permits; never claim “free setup” before adopting a real policy.
**Packaging guardrail:** keep basic order → KOT → bill complete in Essentials; never strip essential KOT into expensive tier. Charge for verifiable added value (advanced kitchen boards, central multi-outlet operations, workforce/stock modules later), not arbitrary staff-seat restrictions that create shift friction. For multiple outlets, negotiate a written volume schedule (e.g., 10% for 3–5, 15% for 6+), with no stacking of launch promotion.
**Future revenue:** inventory as optional module ₹299–499/outlet/month; QR table ordering ₹299–599/outlet/month; staffing/attendance ₹299–499/outlet/month when each is launched. Evaluate integrated payments / aggregator connection as future services *only when technical and commercial partnerships are operational*; disclose any fees clearly. Enterprise services: setup/migration, training, multi-branch rollout and tailored reporting where real service can be delivered.

## I. Customer acquisition and go-to-market funnel
**ICP 1:** 1-outlet restaurant with 5–20 tables, currently pen-and-paper or generic billing. Buying trigger: wrong KOTs, end-of-day reconciliations, table confusion.  **ICP 2:** cafés and QSRs with modifier-heavy menus and fast counter operations.  **ICP 3:** 2–10 outlet group frustrated by repeating menu changes and inconsistent permission control.
**Offer stack:** Real 15–25-minute demo tailored to restaurant format → frictionless pilot/demo dataset → menu and taxes onboarding only within signed scope → team training → documented go-live validation → post-launch check-in. No 24-hour go-live or instant support promise until measured.
**Channels, ordered:** (1) Google Search Ads exact/phrase for restaurant billing software, restaurant POS, café POS and demo intents; negatives include `login`, `dashboard`, `download`, `jobs`, `free`, general QR terms and competitor support. (2) Local field demos via city restaurant associations, accountant/GST consultants, POS printer partners. (3) Organic feature/vertical pages and educational topics. (4) WhatsApp consent-based prospect follow-up, no spam. (5) Referral with **₹1,000 account credit** only when a referred outlet remains paid for 60 days (proposed). (6) Case studies after permission and real baseline proof.
**Sales pipeline:** Source → qualified (real outlet, city, decision maker, current workflow) → live demo completed → proposal issued → trial/pilot → subscribed and paid → activated and first live bill → day-30 retained → referral eligible. Record loss reason, competitor, concerns, required missing feature and time-to-value.
**Suggested demo form fields:** Name, business name, phone (required), city, outlet count (1 / 2–5 / 6+), format (restaurant/café/QSR/cloud kitchen/other), current billing tool, main pain point. Email optional. Consent checkbox when sending promotional follow-ups; never claim WhatsApp confirmation exists without integration.
**Partner program:** Accountant and restaurant equipment seller co-referrals; choose flat fixed payout after 60–90 days collected, rather than unbounded recurring commission. Written rules for returns, cancellations, refunds and disclosure.

### Acquisition unit economics — ILLUSTRATIVE, not forecast
- Assume **net subscription ARPA ₹1,050 per paying outlet per month**, before GST and after discounts: **100 outlets → ₹1,05,000 MRR / ₹12.6 lakh ARR**; **250 outlets → ₹2,62,500 MRR / ₹31.5 lakh ARR**; **500 outlets → ₹5,25,000 MRR / ₹63 lakh ARR**. This is contracted revenue run-rate, not recognised cash profit or operating margin.
- Illustrative target acquisition funnel only: 100 qualified leads → 40 completed demos → 12 paid outlets (**12% lead-to-paid**). Validate from CRM; no guarantee. Example paid CAC from ₹24,000 campaign cost / 12 outlets = ₹2,000 *excluding sales/onboarding costs*. Full loaded CAC must include staff, commissions, setup and tooling.
- With illustrative ₹1,050 ARPA and 75% gross contribution, **₹2,000 full loaded CAC would yield about 2.5 months payback** (₹2,000 ÷ ₹787.50). Recalculate once actual costs exist. Track separate monthly/yearly billing cashflow and accounting recognition.
- Measure activation (first real bill), time-to-first-KOT, support tickets/outlet, onboarding hours/outlet, 30/90-day retention, subscription MRR/ARR, net/gross revenue retention, paid CAC and payback. Aim for repeatable 6–9 month maximum fully loaded CAC payback in early scale; validate profitability before expanding paid channels.

## J. First 90 days — publishing, campaigns and deliverables
| Window | Publish/build | Sales/marketing | Success gate |
|---|---|---|---|
| Week 0–2 | Audit and remove unsupported claims; rebuild homepage and real proof; publish Billing, KOT, KDS, Tables, Menu, Multi-outlet, Café, Pricing, Demo, trust pages; configure Rank Math and GSC | Pick 3 demo scenarios, train salesperson, pilot assisted onboarding | Every public feature claim has real product proof; 100% lead forms tested |
| Week 3–4 | Order management, Restaurant POS solution, Restaurant management pillar, QSR, Takeaway, Cash/Reports; KOT definition and POS buying checklist | Start small exact/phrase ads and local referrals; gather objections | Measure page-level qualified demo and activation conversion |
| Month 2 | Cloud kitchen qualified page, GST, split billing, how-to and POS cost article; update SERP intent map | A/B test demo CTA and annual plan framing; 2 permitted case studies if genuine | Search Console impressions, qualified lead rate, CAC by channel; support cost |
| Month 3 | Publish comparison and niche guides based on Search Console; only publish stock/QR/staff feature pages if actually released and accepted | Partner offer and customer referral; instrument lifecycle and renewal | Positive activated-customer retention and repeatable paid conversion |
**Prioritization note:** publishing 42 URLs at once is not necessary or desirable. Initial live set should be approximately 12–16 high-value unique pages. P1/P2 must be released according to evidence and editorial capacity, not calendar vanity metrics. HOLD URLs must not be indexed.

## K. SEO dashboard and monitoring
| Metric | Baseline & method | Cadence | Why |
|---|---|---|---|
| Indexability | Canonical/indexable URLs in GSC, inspect sitemap | Weekly launch month | Detect crawling/noindex mistakes |
| Organic non-brand clicks/impressions | Search Console page+query, India segment, compare 28-day periods | Monthly | Real search demand |
| Keyword visibility | Landing intent clusters incl. billing, KOT, café, POS | Monthly | Growth by category, not vanity volume |
| Qualified demo | Analytics CTA → form submitted → successful CRM creation | Weekly | Primary organic conversion |
| Demo completion → sale | CRM with outcome and lost reasons | Weekly | Commercial fit |
| Paid search economics | Search term negatives, qualified CAC, paid activation | Weekly | Avoid wasting spend on QR/login/broad POS |
| Activation and retention | First real KOT/bill, 30/90 day active outlet | Weekly/monthly | Product value |
| Site performance | Core Web Vitals and mobile usability, real user data when available | Monthly | Conversion / experience |
**SEO expectations:** New-domain commercial head terms are competitive and Google indexation/rank growth are not guaranteed. Set a 3–6-month review milestone for initial long-tail visibility, and 6–12 months for an informed assessment of head-term opportunity; these are evaluation windows, **not promised rankings**. Avoid numeric click/rank forecasts until existing GSC data and initial conversion data are available.

## L. Implementation and content release checklist
- [ ] Decide whether any existing restabee.com path has organic value; use 301s if replaced, preserve canonical root, update sitemap.
- [ ] Resolve “RestaBee” vs “Restabee” style; consistently brand name, logo, trademark and site title. Ensure owner/company contact information is real.
- [ ] Obtain real demonstration environment and screenshots from a consistent synthetic restaurant; remove customer-identifying data and fictitious public endorsements.
- [ ] Get a signed product-release checklist for F01–F19 and printer/device promises. Supplied file expressly says it is a *copy brief*, not definitive implementation status.
- [ ] Agree exact subscription terms, billing, GST, cancellation/refund, trial eligibility, support hours, setup scope and sales SLA; then publish pricing.
- [ ] Create reusable WP Page templates: homepage; feature; solution; pillar; comparison; guide; pricing; demo. Enable H1, CTA and semantic sections in editable blocks.
- [ ] Implement Rank Math meta, OG image, site name, breadcrumbs, canonical, structured data, robots, XML sitemap, Search Console and GA4 consent/legal flow.
- [ ] Establish standardized page fields: URL, owner, state (draft/live/hold), main keyword, cluster, title, meta, H1, 5 H2, real visuals, CTA, 2–5 links, schema, QA/review date.
- [ ] Build email/CRM lead notifications, double-check demo-form deliverability, spam prevention, privacy/consent handling and thank-you state; test mobile first.
- [ ] Add changelog and review date for competitive/price/tax content. No fabricated testimonials, reviews, integration logos, uptime or finance claims.

## M. Content ownership and instructions for a WordPress writing team
For every page: **(1)** Read this page brief. **(2)** Validate the promised features with the RestaBee product owner. **(3)** Check current top search results for target location/intent and whether it calls for a product or educational page. **(4)** Write original customer-facing copy in clear Indian English; avoid template repetition. **(5)** Use actual interface screenshots and one worked order example. **(6)** Fill Rank Math title, description, focus keyword, slug and schema. **(7)** Link only to truly relevant published pages. **(8)** QA claims and CTA, then publish and review 30 days after indexing. Pages should not be spun versions of one another.
**Copy quality:** show exactly *what happens* when a customer orders and how each restaurant worker acts. Prefer “The kitchen sees a station-specific ticket when an item is sent” to “Revolutionise restaurant productivity with a 360° seamless AI-powered platform.” Never claim “AI-powered” unless specific AI functionality is demonstrated.

## Source links and verification
- Petpooja: https://www.petpooja.com/poss
- Petpooja billing: https://www.petpooja.com/poss/restaurant-billing-software
- Petpooja pricing: https://www.petpooja.com/poss/pricing
- Restroworks: https://www.restroworks.com/
- GoFrugal: https://www.gofrugal.com/restaurant/restaurant-pos-software/
- SlickPOS: https://slickpos.com/
- Restrofi: https://restrofi.com/
- DineOpen: https://app.dineopen.com/pricing
- Rank Math: https://rankmath.com/kb/score-100-in-tests/
- Google SEO: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google SoftwareApplication: https://developers.google.com/search/docs/appearance/structured-data/software-app
- Google FAQ: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- RestaBee current public landing: https://restabee.com/
- Uploaded source files: `landing-page-features.md` (25 October 2026); six “Keyword Stats 2026-10-25” CSVs (Google Keyword Planner, date range through 30 September 2026).
**Limitations:** I could inspect the website and the supplied feature copy, but did not access the private `STATUS.md` feature audit referenced by the brief or run a live authenticated product acceptance test. The source brief must not be treated as release approval. The ranking and pricing suggestions are strategic proposals, not guarantees.
