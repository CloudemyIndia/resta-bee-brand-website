# RestaBee public website
Public product marketing and demo acquisition for restaurant operators.
## Documentation index
- Read [docs/STATUS.md](docs/STATUS.md) first on every task; it alone owns current implementation and verification state.
- [PRODUCT.md](PRODUCT.md): durable product context and evidence links.
- [DESIGN.md](DESIGN.md): visual system and performance constraints.
- [Homepage handoff](docs/RESTABEE-HOMEPAGE-BRIEF.md): standalone SEO, keyword and content brief based on supplied docs; excludes visual design and implementation status.
- [Open-kitchen homepage decision](docs/decisions/0003-open-kitchen-homepage.md): visual direction, enquiry handoff and supersession of the prior composition.
- [docs/decisions/](docs/decisions/): numbered decisions, immutable after use.
- [docs/BACKLOG.md](docs/BACKLOG.md): decided, unbuilt work.
- [docs/runbook.md](docs/runbook.md): local commands, deployment and recovery.
- [feature brief](docs/landing-page-features.md): proposed copy; never release approval.
- [strategy](docs/RestaBee-Complete-Website-SEO-Launch-Strategy.md): research input; architecture/pricing choices follow decision 0001.
## Stack
Astro, TypeScript and static output; verified-on 2026-10-27 through package-lock.json and npm run check/build. src/pages owns routes; src/components reusable UI; src/styles theme; public contains publishable assets only.
## Hard rules
Never run git add/commit/push or undo staging. Leave changes unstaged.
Never publish internal sales documents, invented proof, unsupported integrations or offline claims.
Label synthetic interface demonstrations. Keep marketing and POS deployment targets separate.
Read capability evidence before publishing claims. Do not silently resolve contradictory intent; ask and log in STATUS Unresolved.
Only this file defines documentation authority. Date/scope/test every status claim. Link facts instead of duplicating them. Delete shipped plans after extracting durable decisions.
