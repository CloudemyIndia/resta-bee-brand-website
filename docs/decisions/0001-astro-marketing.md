# 0001 Astro marketing architecture
Date: 2026-10-25. Confirmed in the user conversation.
## Context
The public website needs product pages and a portable blog while the POS and API already have hosting.
## Decision
Use Astro static output and Firebase Hosting site `restabee` through the `marketing` target. Leave POS site `restabee-pos` independent; API remains on Cloud Run and DNS on Hostinger. Use Pages CMS with GitHub publishing later. Leads will POST to the existing CRM API when an endpoint is supplied.
The public pricing DOCX governs commercial copy: [pricing document](../RestaBee-Public-Pricing.docx).
## Rejected
WordPress was the strategy recommendation; rejected for this build because the user chose Astro. Cloudflare hosting was deferred to avoid initial infrastructure setup; static output preserves a later move. Feature-tier pricing in the strategy/workbook was rejected in favor of the public pricing document.
## Consequences
Content publication needs an automated rebuild. CRM credentials cannot ship in client code. Marketing deployment must explicitly target its own site.
## Supersession
None.
