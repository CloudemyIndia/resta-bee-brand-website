# 0017: Match each menu preference to its correct screenshot

## Context

The photo preference card previously used the tablet compact-menu screenshot at wider widths, so both preference cards displayed a menu without dish photos. The device showcase also mixed photo and compact menu screenshots, and the My Shift phone image appeared too small beside its cash-shift copy.

## Decision

- Show the desktop and phone screenshots with dish photography in the "With dish photos" card.
- Show the tablet screenshot on tablet widths, the desktop compact screenshot on desktop widths, and the phone compact screenshot on mobile in the "Without dish photos" card.
- Use compact/no-photo POS menu screenshots in all three device frames to keep the multi-device demonstration consistent.
- Display My Shift in a larger, bezel-framed phone treatment beside "Cash shifts & dues".
- Preserve all supplied images without cropping or editing; keep the Table QR section unchanged.

## Rejected

- Reusing the no-photo tablet screenshot in the photo-preference card.
- Mixing photo and compact menu screens across the three device frames.
- Leaving the My Shift screenshot as a small, unframed thumbnail.

## Consequences

Each menu preference card now shows the matching interface at each available viewport. The multi-device showcase has one consistent compact menu appearance. My Shift has a larger frame and remains adjacent to its cash-shift explanation.

## Supersedes

- [Decision 0014](0014-seo-image-names-and-menu-preference-screens.md) only for wider-screen menu preference image selection.
- [Decision 0015](0015-menu-screens-across-device-showcase.md) only for device menu-image variants and My Shift frame treatment; device placement and mobile carousel behavior remain in effect.
