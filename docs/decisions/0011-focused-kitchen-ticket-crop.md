# 0011: Focus the kitchen screenshot on the T3 ticket

## Context

The supplied KDS screenshot includes unrelated sample tickets with aged durations such as 9020 minutes. Those values distract from the kitchen flow and make the sample look stalled.

## Decision

Use a pixel-preserving crop around the Table T3 kitchen ticket for the kitchen feature and tablet mockup. Keep the original `kds.webp` unchanged. The crop retains the ticket status and Ready action, and does not retouch any visible values.

## Rejected

- Showing the whole screen with unrelated aged tickets in a homepage feature: the old sample timings distract from the intended kitchen workflow.
- Editing ticket durations or status inside the screenshot: that would make the product screen inaccurate.

## Consequences

The feature and device visuals focus on one sample ticket. The images remain illustrative and do not claim live ticket state. The original screenshot remains available for source reference.

## Supersedes

[Decision 0010](0010-product-screen-device-showcase.md) only for the kitchen screenshot crop; its feature placement and device composition remain in effect.
