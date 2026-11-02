# 0013: Map the supplied POS screenshots to matching screens

## Context

The user supplied a complete screenshot set in `public/pos-images`: desktop and mobile floor, kitchen and central-menu views; desktop, tablet and mobile POS menus; a phone My Shift view; and POS menu examples with and without dish photography. Each screenshot is a complete capture and must be used without cropping. The earlier homepage used separate screenshot assets and a cropped kitchen ticket. The Table QR code and guest menu have an established visual treatment that the user asked to preserve.

## Decision

- Use full desktop screenshots for the floor, kitchen and central-menu feature sections at wider viewports, and their matching phone screenshots at widths up to 700px.
- In the device showcase, show the desktop POS menu on desktop, the tablet POS menu on tablet sized viewports, and the My Shift screen on a phone. On narrow screens show the phone mockup alone; on tablet sized screens show the tablet mockup; on desktop show all three.
- Add separate photo and compact POS menu examples. Select desktop captures at wider viewports and their corresponding phone captures on narrow screens. Explain that each user can choose whether the POS menu displays dish photos.
- Use the supplied screenshots at natural aspect ratio; do not crop, edit, or retouch them.
- Keep the existing Table QR Ordering section, layout and visuals unchanged. Point it to the same supplied QR code and guest-menu images now located in `public/pos-images`; add no variants or screenshot edits.

## Rejected

- Reusing the previously cropped floor/KDS/menu assets: they are not the new supplied per-screen captures and cropping conflicts with the user's instruction.
- Showing desktop interfaces inside phone frames or the guest QR menu as the staff POS screen.
- Showing both menu-image preferences as if they are active simultaneously; present them as alternatives each user can choose between.
- Changing the established Table QR composition or adding QR/menu image variants.

## Consequences

The homepage adds a menu display preference section. Responsive `<picture>` sources select the portrait captures on narrow screens while keeping complete landscape captures on wider screens. The device showcase changes its visible device composition by viewport; this presentation describes available screen layouts and is not independent proof of product support or device compatibility.

## Supersedes

- [Decision 0010](0010-product-screen-device-showcase.md) for feature screenshot source selection and device showcase screen assignment.
- [Decision 0011](0011-focused-kitchen-ticket-crop.md) for the cropped kitchen screenshot selection.
- [Decision 0012](0012-updated-central-menu-screenshot.md) for the central-menu screenshot source and crop treatment.
