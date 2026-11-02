# 0025: Remove duplicate panels and inset screenshot frames

Date: 2026-11-03

## Context

The Floor and Kitchen screenshots already sit inside colored feature cards, so their separate figure backgrounds made the screenshots and labels look like another attached panel. The Central menu and menu preference screenshots needed visible inset space between their frames and surrounding card edges.

## Decision

- Keep the Floor and Kitchen figures transparent, without an additional background, border or shadow.
- Retain the screenshot device bezels and place their illustrative captions above the screenshots.
- Inset the Central menu and both menu preference screenshot frames within their containing cards.
- Keep a 16px top margin on mobile Floor, Kitchen and Central menu screenshot pictures.

## Rejected

- Adding another colored panel behind the Floor and Kitchen screenshots.
- Letting Central menu or menu preference bezels touch the edge of their surrounding card.

## Consequences

The Floor and Kitchen screens sit directly on their existing feature-card backgrounds. Other screenshot frames have breathing room inside their cards; responsive capture checks verify the inset and no-panel styling.

## Supersedes

Supersedes [0024](0024-screen-labels-above-device-frames.md) on product-screen framing and spacing. The labels-above-screens placement remains in effect.
