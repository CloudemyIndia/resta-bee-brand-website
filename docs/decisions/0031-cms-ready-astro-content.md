# 0031: Keep marketing content editable through typed Astro collections

Date: 2026-11-03

## Context

The current source arrangement and CMS setup state are recorded in [STATUS](../STATUS.md). Future pages need consistent page quality and a Git-based editing path alongside the static site.

## Decision

- Keep page layouts, shared header/footer, visual styles, interactions and section rendering in reviewed Astro components.
- Store public page copy, SEO fields, FAQ items, image references and supported section data in typed Astro Content Collections with explicit schemas.
- Use a small, documented section model rendered by fixed components. Editors may update approved text and reorder supported content; they may not enter arbitrary Astro, HTML or CSS.
- Use the planned Pages CMS Git-based editor to edit structured collection files and blog Markdown. Keep the site statically generated at build time.
- Preserve route identity and the distinction between factual page claims, metadata and structured data. Derive JSON-LD from the validated page model and only describe visible content.
- Make the collection schema support the existing homepage and feature page before migrating their content. Future page work begins from the keyword row and this content model.

## Rejected

- Editing `.astro` templates directly in a CMS: these are executable presentation components, not safe content fields.
- An unrestricted visual page builder: arbitrary layouts can break shared navigation, accessibility, SEO structure and responsive spacing.
- Runtime CMS fetching for these mostly static marketing pages: it adds request-time work without a freshness requirement.

## Consequences

The current routes become CMS-editable only after the collection schema, Pages CMS config and migration are implemented and verified with an editor-driven build. The CMS setup and page migrations are queued in [BACKLOG](../BACKLOG.md). Astro remains responsible for presentation and static rendering.
