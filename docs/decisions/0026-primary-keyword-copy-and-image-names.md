# 0026: Use the primary restaurant POS keyword in product copy and filenames

Date: 2026-11-03

## Context

The SEO keyword map assigns “restaurant POS” as the homepage's primary query. The user asked for more natural mentions in key homepage sections and descriptive image names, without requiring a 1% density target.

## Decision

- Keep the H1 and title focused on restaurant POS software and the order-to-bill workflow.
- Use the primary phrase in the opening copy, demo CTA, capability section, device showcase, Table QR Ordering explanation and a buyer FAQ where it reads naturally.
- Name the core floor, kitchen, menu and central-menu screenshots with descriptive `restaurant-pos` filenames. Name the QR code and guest menu screenshots for their Table QR Ordering purpose.
- Preserve the current image assignments, responsive variants, and uncropped source files.

## Rejected

- Repeating the exact phrase to reach an arbitrary 1% threshold.
- Adding keyword lists to image alt text or reusing the primary phrase in unrelated asset names.

## Consequences

The built homepage copy has a higher exact primary phrase density while retaining readable product descriptions. Current filenames and content placements are in `src/pages/index.astro`; the original Keyword Map remains unchanged.

## Supersedes

Supersedes earlier filename examples in [0013](0013-responsive-pos-screenshot-map.md), [0014](0014-seo-image-names-and-menu-preference-screens.md) and [0020](0020-responsive-device-and-report-screens.md) where those examples use the former asset names. Their screenshot assignments and viewport rules remain in effect.
