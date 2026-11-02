# 0007: Dedicated Table QR Ordering section

## Context

The homepage feature glance already names Table QR ordering. The user asked for a dedicated section immediately before pricing. The homepage brief previously advised against marketing public QR table ordering as released without acceptance evidence (`docs/RESTABEE-HOMEPAGE-BRIEF.md:75`). This explicit direction supersedes that placement/content restriction for the homepage section; the product evidence boundary still applies.

The POS source contains guest menu/cart/order-request UI and staff review flows in `../..`'s sibling repository (`/Volumes/FilesDrive/Public/RestaBee/resta_bee_pos/src/features/qr-ordering/GuestOrdering.jsx` and `QrWorkspace.jsx`). The API mounts guest and staff QR routes. On 2026-11-02, read-only API probes returned an unavailable response for a non-existent sample restaurant slug and authentication-required responses for staff routes. These establish route availability, not end-to-end acceptance at an operating restaurant.

## Decision

Add a dedicated Table QR Ordering section after multi-outlet content and immediately before pricing. Describe the source-supported flow: a guest scans a table code, browses the menu and sends an order request; staff review and accept it before preparation. Keep the sample QR, phone menu and request card illustrative and non-functional, with a visible illustrative caption. Link the feature-glance item to the section.

## Rejected

- Describing a guest request as automatically sent to kitchen or automatically accepted: the observed flow includes staff review.
- Showing a live/scannable QR code or implying an active restaurant menu: the inspected sample restaurant was unavailable and full real-restaurant acceptance is unresolved.
- Omitting the requested dedicated section based on the earlier brief: the user's later explicit direction supersedes that earlier homepage restriction.

## Consequences

The homepage explains QR ordering in a dedicated section and retains a concise feature-glance mention. User-facing copy is limited to the guest request and staff review flow. Before presenting QR ordering as production-verified for a real restaurant, verify a complete guest-to-staff flow with an accepted restaurant configuration.

## Supersedes

The QR-specific homepage restriction in `docs/RESTABEE-HOMEPAGE-BRIEF.md:75` for this dedicated homepage section only. It does not supersede product capability or release-verification requirements.
