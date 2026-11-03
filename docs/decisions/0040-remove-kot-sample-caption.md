# 0040 — Remove the visible KOT sample-ticket caption

- Date: 2026-11-03
- Status: Accepted
- Scope: `/features/kot-management/`

## Context

The KOT hero showed the actual Kitchen Queue screenshot with a separate visible caption, “Sample ticket shown” followed by a transcription of the sample order. The screenshot already contains its ticket data, and the figure caption identifies the real RestaBee Kitchen Queue and sample restaurant data.

## Decision

Remove the redundant visible ticket transcription and its label. Keep descriptive image alternative text and the screenshot’s sample-data disclosure. The actual KOT remains visible in the screenshot.

## Rejected

- Removing the screenshot’s sample-data label or useful alternative text; these serve separate disclosure and accessibility needs.

## Consequences

- The hero has less repeated text beneath the device frame.
- The build verifier checks that the removed visible caption does not return. Current route state and verification belong in [STATUS](../STATUS.md).
