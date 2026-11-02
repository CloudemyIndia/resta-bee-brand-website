# 0018: Use the tablet screenshot for the no-photo menu card

## Context

The no-photo menu preference card was using separate desktop and phone assets at those widths. The user specifically asked that this card use the supplied tablet screenshot.

## Decision

Use `/pos-images/restabee-pos-menu-tablet.webp` for the entire “Without dish photos” card at all viewport widths. Keep the with-photo card and the separate three-device showcase mappings unchanged.

## Rejected

- Selecting the desktop or phone no-photo variant in the preference card based on viewport width.

## Consequences

The no-photo preference card consistently shows the tablet layout; the device showcase remains responsive and uses its respective compact desktop, tablet and phone screenshots.

## Supersedes

Supersedes the viewport-specific no-photo card mapping in [0017](0017-correct-menu-variant-screenshots.md). Decision 0017 still governs the photo card and the three-device showcase.
