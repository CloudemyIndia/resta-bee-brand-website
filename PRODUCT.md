# Product
<!-- impeccable:product-schema 1 -->
## Platform
web
## Purpose and audience
RestaBee's public website helps restaurant operators understand the order-to-kitchen-to-bill workflow and request a demo.
## Confirmed constraints
Astro static output is the selected stack. GitHub Pages through GitHub Actions is the initial marketing host; the configured Firebase Hosting target remains a fallback. The marketing domain is restabee.com; the POS site is restabee-pos. DNS authority is separate from hosting; the public nameserver lookup returned Cloudflare on 2026-11-03, while earlier project notes named Hostinger. Verify the active DNS account before record changes. APIs run on Cloud Run. Lead capture will use the existing CRM through a future POST endpoint. See [decision 0027](docs/decisions/0027-github-pages-hosting-and-seo-release.md).
Preserve the supplied logo and recognizable orange brand accent. Historical homepage choices are recorded in [decisions 0007–0026](docs/decisions/0007-table-qr-ordering-section.md); upcoming page sequencing and the later homepage review are in [decision 0030](docs/decisions/0030-seo-page-expansion.md).
## Product evidence
Use the sibling POS [capability audit](../resta_bee_pos/docs/STATUS.md#public-capability-audit) and [public pricing decision](docs/decisions/0001-astro-marketing.md) before publishing claims. Unbuilt page opportunities remain in [BACKLOG](docs/BACKLOG.md); shipped page intent and content decisions are indexed in [AGENTS.md](AGENTS.md). Never invent customers, endorsements, integrations or metrics. Authored interface demonstrations must be labelled illustrative.
