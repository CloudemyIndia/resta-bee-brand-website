# 0014: Use descriptive image filenames and tablet menu examples

## Context

The user requested SEO-friendly names for the supplied screenshots and asked that the tablet POS screenshot appear in both "Photos on or off" preference cards. The tablet capture shows the shared POS order-entry workspace without dish photos. The two phone captures show the photo and compact variants separately.

## Decision

- Rename all 14 supplied files in `public/pos-images` to lowercase, hyphen-separated names that describe the RestaBee screen and device where useful. Keep the WebP file contents unchanged.
- Use the tablet POS capture in both menu preference cards for widths above 700px. Keep the distinct with-photo and compact phone screenshots for widths up to 700px.
- Preserve the menu preference labels and copy explaining the per-user setting. Alt text describes the visible screen without claiming that the tablet capture shows photos.
- Keep the Table QR section composition unchanged; its QR and guest-menu files receive descriptive filenames but remain the same supplied visuals.

## Rejected

- Keeping filenames with spaces, inconsistent capitalization, spelling errors, or generic names such as `tab pos menu.webp`.
- Cropping, compressing, retouching, or converting the supplied screenshots as part of the rename.
- Replacing the established Table QR/menu visual arrangement or adding QR variants.

## Consequences

All references in the homepage and responsive screenshot checks use the new filenames. Filenames describe the image subject; they do not guarantee search rankings. The same tablet screenshot appears in both preference cards on desktop/tablet layouts as requested, while the phone screenshots continue to distinguish the two menu appearances.

## Supersedes

[Decision 0013](0013-responsive-pos-screenshot-map.md) only for the wider-screen menu preference card sources and asset URL naming; its other viewport mappings and image placements remain in effect.
