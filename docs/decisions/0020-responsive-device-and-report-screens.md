# 0020: Match the POS and report screens to their responsive layout

## Context

The no-photo preference card displayed a tablet screenshot on phone widths. The mobile device showcase used a horizontal carousel, and its scroll instruction remained visible on desktop where all devices were already shown. A mobile Reports screenshot has now been supplied.

## Decision

- Use the compact POS desktop screenshot above 950px, tablet screenshot from 701px through 950px, and phone screenshot at 700px and below in the no-photo menu preference card.
- Add the supplied mobile Reports screen as a framed phone image beside Reports and team access. Its publishable name is `restabee-pos-reports-mobile.webp`.
- On phone widths, show the desktop, tablet and phone POS frames in a vertical stack with space above and below each frame. Remove the horizontal carousel behavior. Keep native figure semantics inside a labeled group; do not assign carousel or slide roles.
- Hide the device scroll instruction except on phone widths, where it tells visitors they can scroll down to see the screens.
- Keep the existing three-device composition on desktop and the single tablet composition at tablet widths.

## Rejected

- Reusing the tablet image at every size for the no-photo preference.
- Keeping a horizontal device carousel on phones.
- Showing the scroll instruction on desktop when all three screens are visible.

## Consequences

Each no-photo preference card uses the image that matches its viewport. Phone visitors can inspect all three complete device screens in sequence. The owner section pairs the supplied mobile Reports UI with the My Shift phone screen.

## Supersedes

Supersedes the all-width tablet mapping in [0018](0018-tablet-screen-for-no-photo-card.md) and the mobile-carousel behavior in [0015](0015-menu-screens-across-device-showcase.md). Other parts of those decisions remain unchanged.
