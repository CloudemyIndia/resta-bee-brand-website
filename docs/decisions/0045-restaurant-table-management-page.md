# Restaurant table management page

## Context
The page expansion plan assigns `/features/restaurant-table-management/` a separate feature-evaluation intent. The supplied keyword workbook assigns `restaurant table management software` as the primary phrase and five related terms. The POS floor screen and implementation support staff-managed sections, table status, waiting parties, seating, service assignment, table changes, bill requests and cleaning.

## Decision
Build the route as a static Astro page using shared navigation, footer and layout. Keep all visible prose, metadata, image alternative text, floor states, workflow steps and FAQs in the validated Pages CMS backed content collection. Show the supplied desktop and phone floor captures in matching device frames, label the RestaBee screen and sample data separately, and link existing order, billing and Table QR routes. Describe reservation records as staff floor-planning data; do not imply a public guest booking portal.

Use a self-canonical, WebPage and BreadcrumbList schema, sitemap and `llms.txt` entry. Follow the page release gates in [decision 0033](0033-astro-page-release-gates.md). The primary phrase density is an editorial check, with 0.5% as its floor when natural.

## Rejected
- Treating Table QR ordering as the same workflow as staff floor management; each has its own section and route context.
- Claiming public reservation booking, guest self-seating or unsupported integrations.
- Sending the feature-directory card to a homepage anchor after the dedicated route exists.
