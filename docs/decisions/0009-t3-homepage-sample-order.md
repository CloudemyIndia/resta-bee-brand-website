# 0009: Align the homepage sample order to Table T3

## Context

The supplied table QR and menu screenshot identify Table T3 and show Paneer Tikka at ₹200. The previous hero bill and kitchen/billing examples used Table T1 and a different Paneer Tikka sample amount, so the related examples did not match the supplied product visual.

## Decision

Use Table T3 for the related homepage sample order across the hero bill, kitchen ticket and collection example. Keep the floor overview's T1–T6 labels because it represents six distinct tables. Set Paneer Tikka to ₹200 each in the central menu and hero bill. The sample bill uses 2 × Paneer Tikka (₹400), Veg Biryani ₹240, subtotal ₹640, sample tax ₹32, and total ₹672. Collection amounts are ₹300 cash and ₹372 UPI.

## Rejected

- Keeping T1 in related order/bill examples: it conflicts with the supplied T3 QR visual.
- Showing a ₹400 line total without making the ₹200 unit price clear: the page should agree with the supplied menu screenshot.
- Renaming every floor-plan table T3: that would make six distinct table examples appear to be the same table.

## Consequences

Homepage examples now present one coherent sample order for T3 and consistent arithmetic. Amounts remain illustrative, not public menu pricing guarantees.

## Supersedes

[Decision 0006](0006-bill-preview-hero.md) only for its Table T1 sample association. The bill-preview hero and separate kitchen-ticket placement remain in effect.
