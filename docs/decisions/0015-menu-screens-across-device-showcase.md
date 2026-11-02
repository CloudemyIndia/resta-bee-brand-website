# 0015: Show the POS menu on every device in the showcase

## Context

After the responsive screenshot map in [decision 0013](0013-responsive-pos-screenshot-map.md), the user clarified that the "ONE RESTAURANT WORKSPACE" illustration should show POS menu screens on desktop, tablet and phone. My Shift belongs in the cash-shifts feature instead. On mobile, the device screenshots should remain available through a carousel rather than being hidden.

## Decision

- Use the desktop POS menu screenshot in the desktop frame, the tablet POS menu screenshot in the tablet frame and the photo-menu phone screenshot in the phone frame.
- Keep all three device frames visible at desktop widths. At tablet widths show the tablet frame. At phone widths make all three frames browsable in a horizontally scrollable, keyboard-focusable carousel.
- Place the My Shift phone screenshot with the "Cash shifts & dues" feature.
- Keep the Table QR section and the separate "Photos on or off" preference cards unchanged.

## Rejected

- Showing the floor, kitchen or guest QR menu in the device showcase instead of the POS menu.
- Hiding the desktop and tablet menu screens on mobile without a way to browse them.
- Keeping My Shift in the device showcase after the user asked to move it elsewhere.

## Consequences

The device illustration now demonstrates the POS order-entry menu on all three device types. Mobile users can swipe or scroll through all device frames. My Shift appears beside the cash-shift copy. These are product screenshots with illustrative sample restaurant data.

## Supersedes

[Decision 0013](0013-responsive-pos-screenshot-map.md) only for device showcase image assignment and mobile device visibility; its other feature screenshot mappings remain in effect.
