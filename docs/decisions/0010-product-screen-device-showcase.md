# 0010: Use product screens in feature and device showcases

## Context

The user asked to include floor, kitchen queue and central-menu screenshots, and to show product screens inside desktop, tablet and phone mockups. The workspace contains wide floor/KDS/central-menu screens and a portrait guest QR menu. The central-menu screenshot's Paneer Tikka price differs from the homepage-approved ₹200 example.

## Decision

Use the floor screenshot in the floor feature, the KDS screenshot in the kitchen feature and a pixel-preserving crop of the central-menu screenshot in the multi-outlet feature. The crop excludes the inconsistent Paneer Tikka item and does not alter any remaining pixels. Add a static device showcase with the floor screen in a desktop mockup, the kitchen queue in a tablet mockup and the supplied guest QR menu in a phone mockup. Label the screenshots as illustrative sample restaurant data.

## Rejected

- Displaying the full central-menu screenshot beside the ₹200 homepage example: it shows Paneer Tikka at ₹240 Regular and ₹340 Large.
- Retouching those values in the source screenshot: that would make the product image inaccurate.
- Describing the phone QR menu as the staff POS: it is the guest ordering screen.

## Consequences

The homepage uses real product-screen assets in feature context and in a device composition. Device frames are static marketing mockups; only the phone image is a portrait capture, and the wide screenshots are not viewport-specific tablet captures. Do not treat the composition as proof of exact cross-device layout parity. A staff POS or My Shift phone capture and an actual tablet-viewport capture would support a more exact device story.
