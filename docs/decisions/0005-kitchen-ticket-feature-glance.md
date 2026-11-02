# 0005 Kitchen ticket and feature glance
Date: 2026-11-02. Authorized by the user's correction that kitchen tickets do not show prices and request to highlight roles, menu publishing, table QR ordering, platform apps, floor clarity, focused UI and reports.

## Choice
Show a kitchen ticket with table, item quantities and preparation notes; keep bill prices and totals out of that visual. Add a compact six-item feature glance for the restaurant floor, role-scoped access, central menu publishing, table QR ordering, task-focused workspaces and reports. Show the requested Web, Android, iPhone, Mac and Windows app targets as text, without app-store badges or availability claims.

## Rationale
The kitchen ticket should represent the kitchen's work and stay distinct from a guest bill. A short feature glance helps restaurant operators understand the POS beyond order entry while leaving deeper feature explanations in the page sections below.

## Rejected
- Prices, tax and bill totals on a kitchen ticket, because they belong in billing.
- Calling the listed capabilities “exclusive”; these are useful product features, not verified category exclusivity.
- Ratings, customer outcomes, store badges or release-availability promises without separate evidence.

## Evidence and limits
Role access, floor operations, reports and central menu publication are in the paired POS source and the [landing-page capability audit](../../resta_bee_pos/docs/STATUS.md#landing-page-capability-audit--25-oct-2026). QR guest/staff web flows exist in source and the API mounts `/api/guest` and `/api/qr-ordering`; a read-only 2026-11-02 probe returned the guest route's expected unavailable response for a non-existent sample restaurant slug and authentication-required responses for staff routes. This establishes deployed routes, not acceptance against a real restaurant's QR menu. Native source/build evidence lives in the linked Flutter STATUS; target labels do not assert app-store listing or complete parity.

## Supersedes
This decision supersedes 0004 only for the kitchen ticket's contents and the homepage capability overview. Its static-ticket direction, open-kitchen identity, palette and illustrative-evidence boundaries remain in effect.
