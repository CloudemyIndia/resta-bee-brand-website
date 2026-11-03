# Decision 0047: Three-column footer navigation

- Date: 2026-11-04
- Status: Accepted
- Scope: Shared public-site footer

## Context

The shared footer had product and getting-started links, but dedicated feature pages were mixed into the Product list. With the feature directory and solution pages now available, the footer needs clear link groups while the main navigation remains focused.

## Decision

Keep the brand and contact block beside three footer navigation columns: Product, Features and Get started. Put all dedicated feature routes and the feature directory under Features. Keep the cafe solution and pricing under Product. At narrower widths, collapse the navigation groups into two columns.

## Rejected

- Mixing feature routes into the Product list, which obscures the feature directory and makes the links harder to scan.
- Adding individual feature pages to the main header navigation, which remains focused on the primary site pages.

## Consequences

- Every public page using the shared footer exposes the same three link groups.
- The build verifier checks the three groups and their shared output across pages; evidence is recorded in [STATUS](../STATUS.md).

## References

- [Features directory and main-page navigation](0042-features-directory-and-main-navigation.md)
- [Astro page release gates](0033-astro-page-release-gates.md)
