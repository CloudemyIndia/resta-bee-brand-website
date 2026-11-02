# 0008: Use supplied Table QR Ordering visuals

## Context

The dedicated QR section previously used a hand-authored QR pattern and CSS-drawn phone menu. The user supplied `public/images/table-rq.webp` and `public/images/table-qr-menu.webp` and asked to use them instead.

## Decision

Use `table-rq.webp` for the table QR card and `table-qr-menu.webp` inside the phone frame. Keep both as visual content within the section's illustrative guest/staff flow, not as interactive controls. Preserve the surrounding explanation that a guest request is reviewed by staff before preparation.

## Rejected

- Retaining the hand-drawn QR or CSS menu: the user supplied more faithful product assets.
- Treating either image as an interactive page element: this homepage section explains the feature and does not implement guest ordering.

## Consequences

The section now uses product-provided QR and menu imagery. Responsive image sizing and loading are covered by the homepage capture script. The screenshot's sample restaurant content remains illustrative.
