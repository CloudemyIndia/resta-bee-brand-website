# RestaBee landing-page feature brief

Prepared 25 Oct 2026 for website copy and demo planning. This is a proposed content brief, not a release checklist or implementation-status document. Capability evidence, exclusions and acceptance limits live in the [feature audit in STATUS](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026). Recheck that audit before publishing claims. Feature IDs below link the copy to that evidence.

## Positioning

Lead with daily restaurant operations: taking an order, preparing it in the right kitchen, serving the guest and settling the bill. Use multi-outlet menu control as the second major story. Keep platform subscription administration out of restaurant-facing feature cards.

Suggested title: **Restaurant POS for orders, kitchen and billing | RestaBee**

Suggested description: **Manage dine-in, takeaway and delivery orders, kitchen tickets, GST billing, split payments and cash shifts with RestaBee. Book a demo for your restaurant.**

Suggested hero headline: **From the first order to the final bill.**

Suggested hero body: **Take orders, send tickets to the kitchen, track preparation and settle bills in one restaurant workspace. Manage your menu and give each team member access to the work they handle.**

Primary CTA: **Book a demo**. Secondary CTA: **See how it works**. The latter should scroll to the workflow demo, not an unimplemented product tour.

Suitable audience labels: restaurants, cafés, takeaway counters and multi-outlet restaurant teams. These are suggested use cases, not customer-adoption claims. Delivery means staff-entered delivery orders; see the exclusions in STATUS before adding delivery logos or automation claims.

## Eight main feature cards

| Feature | Suggested copy | Visual / demo evidence to capture |
| --- | --- | --- |
| Orders for every service type | Take dine-in, takeaway and delivery orders. Add variants, extras and kitchen instructions before sending items for preparation. | POS cart, service-type selection and an item customization dialog. [F01, F02](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| A clear view of the floor | See occupied tables, seat waiting parties, assign service staff and move a party when plans change. | Floor with occupied/free tables and the party panel. [F03](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| Kitchen tickets by station | Give each kitchen station its preparation queue. Start items, mark quantities ready and track what is ready for pickup. | Actual station KOT board showing new, preparing and ready items. [F04](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| Flexible restaurant billing | Preview bills, apply permitted discounts and record cash, UPI or card payments, including a mix of payment methods. | Bill preview and collection with two tenders. Describe recorded payments accurately. [F05, F07](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| Split bills for the way guests pay | Divide eligible items into separate draft bills or combine eligible orders before issuing a bill. | Arrange checks with a clear item allocation. [F06](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| One menu across your outlets | Build a central menu, review changes and apply published updates to selected outlets. Keep outlet menus independent when needed. | Central menu, publication review and outlet application summary. [F11](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| Cash shifts and outstanding dues | Track opening cash, drawer movements, shift counts and balances still owed by customers. | My shift summary and Due register using separate screenshots. [F08, F10](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |
| Reports for restaurant decisions | Review issued sales, confirmed collections, item sales, tax, discounts and cash-shift variance by permitted outlet and date. | Actual report with date/outlet filters; label which report is shown. [F14](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026) |

## Detailed functionality for feature pages and demos

### Order taking and item choices — F01, F02

Suggested heading: **Capture the order the way the guest wants it.**

Show service type, item search, variants, paid modifiers, fixed/configurable combos and kitchen notes. Demonstrate saving a draft separately from sending it, then adding items to an existing service order. Keep item preparation notes separate from billing notes. Include a permitted amendment/cancellation example and the resulting kitchen change notice; avoid suggesting dispatched or billed items can be edited without review. Do not present local draft preservation as offline ordering or billing.

### Tables, parties and reservations — F03, F16

Suggested heading: **Keep tables and service staff in sync.**

Show sections/tables, waiting and seated parties, waiter/captain assignment, permitted table moves, bill requests, service completion and cleaning/release. A reservation demo can show booking details and assignment to service. Avoid automatic seating, automatic table release, over-capacity seating or a public online booking portal unless separately implemented and accepted.

### Kitchen preparation — F04

Suggested heading: **Send each item to the right kitchen station.**

Show station queues, item instructions, partial quantities, readiness, permitted recall and amendment acknowledgment. For combos, show the actual components routed to their stations. Keep Ready, Served and Paid visibly distinct. Use a real multi-station example instead of promising every device updates with zero latency.

### Bills, discounts and taxes — F05, F06

Suggested heading: **Prepare the bill before collecting payment.**

Show invoice preview, customer details and the shared payment editor. Explain direct final-amount adjustment separately from flat/percentage discounts before tax. Demonstrate permitted split/combined draft bills and captured invoice tax lines. Use “GST billing” or “configurable GST/tax profiles”; avoid “government certified,” “automatic GST filing” or “e-invoicing integration.”

### Collections, dues and tips — F07, F08

Suggested heading: **Record how each bill was settled.**

Show one payment method or a split across cash, UPI and card, partial collection, permitted customer due, later collection against the original invoice, cash change and tips recorded separately from the bill. Payment-method recording must not be described as automatic bank settlement, live QR verification or payment-terminal integration.

### Delivery and packaging charges — F09

Suggested heading: **Set charges for each order.**

Show owner-configured flat delivery/packaging defaults, permitted per-cart edits and the captured refund policy. Delivery charges apply to delivery orders; packaging can be selected where applicable. Keep “flat order charges” distinct from distance pricing, courier dispatch or delivery tracking.

### Refunds and approvals — F12

Suggested heading: **Review adjustments and track money returned.**

Show item-, amount- or percentage-based bill reductions, remaining refund eligibility, approval controls, credit-note references and payout history. Distinguish an approved adjustment from completed money return. Delivery/packaging refund exceptions follow the configured policy and permission checks.

### Menu control — F11, F13

Suggested heading: **Prepare menu changes centrally. Publish when ready.**

Show categories, variants/prices, modifiers, combos, stations, kitchen instruction groups and applicable dietary/allergen fields. Follow with draft review, publishing, outlet application/history and immediate stop/resume sale. Do not imply that every catalogue edit silently changes active orders or prices at every outlet. Allergen fields contain restaurant-provided information; they are not an allergy-safety certification.

### Team access and records — F15

Suggested heading: **Give each team member the access they need.**

Show owner, manager, waiter, captain, cashier and kitchen workspaces with outlet-scoped access. An accounts role can review permitted financial records. Demonstrate approval history and audit records. Platform sales/finance/support administration belongs in internal demos, not restaurant feature cards.

### Customer records and printing — F17, F18

Suggested headings: **Keep guest details with their orders.** / **Print bills and kitchen tickets.**

Show permitted guest/contact records, linked order history and customer details on a bill. For printing, show actual bill/KOT documents, print-job status and controlled reprints. Explain the local bridge/printer setup during onboarding. Do not show loyalty points, marketing campaigns, automated WhatsApp delivery or universal plug-and-play printer compatibility.

## Live-operation message — F19

Suggested copy: **Keep the floor, kitchen and billing team working from current order information.**

Use this beneath the operational workflow or kitchen section. Show a real change arriving on a second terminal. Describe live orders, table occupancy, preparation and sale availability specifically; do not label every settings/report screen realtime. Treat browser/mobile background alerts as an acceptance-gated demonstration, not a general delivery guarantee.

## Internal platform capabilities

Subscription administration, sales leads/onboarding, manual reconciliation, platform finance and consent-based support belong in internal product/sales documentation. Their implementation assessment is in [STATUS](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026). They should not displace the restaurant's order, kitchen and billing story on the landing page.

## Recommended page sequence

1. Hero with an actual POS screenshot and demo CTA.
2. Service-type strip: Dine-in, Takeaway, Delivery.
3. Four-step workflow: Take order → Send to kitchen → Track preparation → Settle bill.
4. Eight feature cards above, with links to deeper sections.
5. Kitchen and floor demo, using two or three readable screenshots.
6. Central menu/outlet-control section.
7. Billing section covering split bills, payment recording, dues and charges.
8. Role-based access and reporting section.
9. Short FAQs and the demo form.

Use screenshots from one consistent demo restaurant. Mask guest phone numbers, account emails and sensitive financial/customer details. Label illustrative values. Never use invented reviews, outlet counts, savings percentages or integration logos as proof.

## Suggested FAQ copy

**Can I manage dine-in, takeaway and delivery?**

Yes. Staff can create orders for each service type and manage their kitchen and billing workflow. Ask for a demo of the service types your outlet uses.

**Can guests split a bill or use multiple payment methods?**

Eligible draft bills can be arranged before issue. Collections can be recorded across more than one payment method. Split bills and split payments are separate controls.

**Can I manage menus for more than one outlet?**

Use a central menu with reviewed publication and outlet application, or keep outlet menus independent. Access depends on the staff member's permitted outlets.

**Can I record delivery and packaging charges?**

Set flat defaults and edit permitted charges per order. Refund rules can be configured for those charges.

**Does RestaBee connect to Swiggy, Zomato or payment gateways?**

Keep this FAQ off the public page until integration scope is chosen. If responding to a prospect, use the restrictions in the capability audit; do not imply that recording a delivery order or UPI payment is a provider integration.

**Which devices and printers can I use?**

Arrange a demo on your intended devices and confirm printer compatibility during setup. Do not publish app-store badges, a hardware compatibility list or an offline-operation claim without the acceptance evidence linked from STATUS.

## Replacement plan for the existing website

| Existing website location | Proposed replacement |
| --- | --- |
| Page title, description and SEO keywords promising inventory/aggregator integration | Use the title/description above; focus keywords on restaurant POS, billing, KOT, table service and multi-outlet menu management. |
| Hero text and sample Swiggy order | Use the order-to-bill story; show a staff-entered dine-in/takeaway example. |
| Inventory card and stock-alert demo | Replace with Cash shifts & dues or Central menu control. |
| Swiggy/Zomato card and integration logos | Replace with Delivery & packaging charges; remove unsupported provider logos. |
| “Print or WhatsApp receipts instantly” | Use “Preview and print bills” with confirmed setup conditions. |
| Pricing-plan bullets promising integrations or support hours | Define the commercial plan with the owner first; do not infer limits, integrations, pricing or response times from technical roles/subscriptions. |
| Testimonials and claimed customer outcomes | Publish only real, authorized testimonials and substantiated numbers. Otherwise use product screenshots and a demo invitation. |
| FAQs and demo-form placeholder requesting unavailable integrations | Align examples with tables, KOT, billing, menu control and reports. |

## Review before publication

Recheck the capability audit, choose approved screenshots, verify the demo form/CTA destination and confirm actual pricing/support terms. Review customer-facing integrations and device badges separately. Editing this brief does not authorize changing the website, enabling gated modules or publishing new commercial promises.
