# 0058 — Blog imagery and print-only checklist removal

- Date: 2026-11-12
- Status: Accepted
- Scope: Blog article images and the buying-checklist article's print-only component

## Context

The initial blog article pages used POS interface screenshots in device frames. The buying guide also had a separate print/save checklist and RFP block. The user asked to reserve blog artwork for custom editorial images, reduce their display size, remove image frames and remove the print-only checklist feature.

## Decision

- Remove POS screenshots from all three blog articles. Do not reuse product UI screenshots as blog art.
- Keep `featuredImage` optional in Astro Content Collections and Pages CMS for future custom editorial images. Display it unframed at a maximum width of 780px and height of `min(52svh, 440px)` on desktop, with a smaller mobile limit.
- Remove the standalone print/save checklist and RFP block, its button, print stylesheet, script and CMS fields. Keep the guide's regular editorial checklist content.
- Allow the optional image's CMS fields to be absent from current articles; the build verifier still checks all populated content against the CMS field map.

## Rejected

- Reusing POS product screenshots as featured blog art: the user plans to add custom editorial images.
- Device frames around article imagery: the user asked for unframed blog images.
- A dedicated print/save interface: the user does not need it.

## Consequences

- Blog articles currently render without featured images until custom art is added.
- Future images remain CMS-editable and use the smaller unframed presentation.

## Verification

`npm run check && npm run build` verifies the collection schema, CMS parity, article routes, absence of POS screenshots and print-only controls, and the custom image sizing rule.
