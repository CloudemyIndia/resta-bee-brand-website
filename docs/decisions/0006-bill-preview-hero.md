# 0006 Bill preview in the hero
Date: 2026-11-02. Authorized by the user's direction to make the first hero ticket a bill because the kitchen ticket is already covered elsewhere on the homepage.

## Choice
Use a static bill preview as the hero's product document: item prices, sample tax and total due, associated with Table T1. Keep kitchen instructions and station tickets in the lower kitchen feature section. Retain the feature glance and platform labels from 0005.

## Rationale
The hero gives visitors an immediate view of billing while the page still explains kitchen preparation in its dedicated product section. A bill preview may show prices; a kitchen ticket should not.

## Rejected
- Showing a kitchen ticket beside the hero image, because kitchen tickets are already represented in the product section below.
- Mixing kitchen instructions into the bill preview, because the two documents serve different tasks.

## Evidence
The browser assertion in `scripts/home-smoke-actions.json` verifies Table T1, bill line prices and total, and the separate kitchen-slip feature. Sample amounts remain labelled illustrative.

## Supersedes
This decision supersedes 0005 only for which document appears in the hero and the hero's supporting copy. It retains 0005's feature glance, platform labels and evidence boundaries.
