# 0057 — Blog navigation and related guide links

- Date: 2026-11-12
- Status: Accepted
- Scope: Shared navigation and inbound links to existing educational guides

## Context

Decision [0042](0042-features-directory-and-main-navigation.md) keeps the main navigation focused on product routes. After reviewing the initial blog implementation, the user asked to make Blog discoverable in the main navigation and add links from related product pages.

## Decision

- Add Blog to the desktop and mobile main navigation. This user-approved change supersedes decision 0042's navigation scope for Blog discovery.
- Link the kitchen order ticket guide from the KOT and kitchen display pages.
- Link the POS buying checklist and cost guide from the pricing page.
- Keep each link label in the validated Astro content and matching Pages CMS fields.

## Consequences

- Readers can reach the blog from every shared site header.
- The KOT guide receives links from both related kitchen feature pages; pricing guides receive links from the public pricing route.
- Blog routes and these links remain local until the website is deployed.

## Verification

Build verification checks the desktop Blog navigation entry, active state on blog routes, and the related inbound links.
