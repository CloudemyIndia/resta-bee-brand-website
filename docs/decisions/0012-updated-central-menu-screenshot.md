# 0012: Use the corrected full central-menu screenshot

## Context

The initial central-menu screenshot showed Paneer Tikka at ₹240 regular, while the homepage's approved sample price is ₹200. Decision [0010](0010-product-screen-device-showcase.md) therefore used a crop that excluded that item. The user has now replaced `public/images/central-menu.webp` with the corrected screenshot.

## Decision

Use the supplied full central-menu screenshot in the multi-outlet section. The replacement is 2094×1656 and visibly lists Paneer Tikka at ₹200 regular and ₹340 large. Preserve all screenshot values and pixels; keep the homepage sample bill at ₹200 each.

## Rejected

- Keeping the crop from the previous screenshot: it no longer reflects the user's corrected asset and omits useful menu context.
- Retouching the screenshot: the supplied replacement already presents the intended values.

## Consequences

The full menu workspace, category controls and outlet settings are visible. Its aspect ratio makes the section image taller than the previous crop. The screenshot remains illustrative catalog data.

## Supersedes

[Decision 0010](0010-product-screen-device-showcase.md) only for the central-menu image crop; the other screenshot placements and device composition remain in effect.
