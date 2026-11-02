# 0028: Publish a concise llms.txt site guide

Date: 2026-11-03

## Context

The public marketing site has one indexable content page. The `llms.txt` proposal describes a small Markdown guide at the site root that gives agents context and links to useful public pages.

## Decision

- Publish the proposal's conventional `/llms.txt` filename as a static public file.
- Summarize only public, currently documented product positioning and link to public homepage sections.
- Keep it separate from `robots.txt` and `sitemap.xml`: it is contextual material, not crawler access policy or an indexable-page list.
- Revisit the links when public feature, pricing or resource pages are added.

## Rejected

- Name it `llm.txt`: the referenced proposal uses `llms.txt`.
- Add private sales information, API details, unsupported product capabilities or long duplicated homepage copy.
- Present the community proposal as an official search-engine ranking or indexing requirement.

## Consequences

The root file is copied from `public/llms.txt` into static output and checked during builds. Its usefulness depends on the linked public pages and adoption by individual tools; it does not control crawler access.
