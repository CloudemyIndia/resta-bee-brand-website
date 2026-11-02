# 0024: Place product-screen labels above device frames

Date: 2026-11-03

## Context

On desktop captures, the illustrative labels beneath the Floor, Kitchen and Central menu product screens read as trailing text attached to the bottom of the screen frames.

## Decision

Place those three labels above their screenshot bezels. On viewports at 700px and below, leave a 16px top margin between each label and its device frame. Keep the larger section-level spacing before the screen figure.

## Rejected

- Keeping labels below the screenshots, where they read as a tail at the frame edge.
- Embedding labels in the screenshot image, which would reduce clarity and flexibility.

## Consequences

The labels are distinct from the screen imagery and device bezel. Responsive capture checks assert their order and the mobile gap.
