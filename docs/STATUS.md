# Implementation state
## Local development — verified 2026-10-27
| Claim | Scope and executed falsification command |
| --- | --- |
| Replacement homepage, 404 and historical prototype generate successfully | Dev: `npm run check && npm run build` → 0 errors, warnings or hints; 3 static routes; publication boundaries and homepage anchors pass. |
| Homepage contains the photographic service stage, workflow controls, public-price term selector and email-draft enquiry | Dev: `rg -n -e service-stage -e data-term -e demo-form -e mailto: -e tel: src/pages/index.astro` → matching source; `npm run build` → rendered homepage generated. Design intent is in [decision 0003](decisions/0003-open-kitchen-homepage.md). |
| Workflow, all subscription terms, FAQ and mobile navigation pass browser checks | Dev: `node /Users/akashverma/.agents/skills/anatomy/scripts/drive.mjs http://127.0.0.1:4322/ --actions scripts/home-smoke-actions.json --width 320 --height 800 --scale 1 --reduced` and the same command at 390×900 → assertions passed, console clean. |
| Enquiry preparation validates required fields, preserves encoded details, focuses the email action and invalidates stale drafts | Dev: the browser suite above checks empty/invalid input, recipient, Unicode/ampersand encoding, unsent disclosure, focus and changed-input invalidation. It does not send an email or verify delivery. |
| Responsive captures load all six image elements without horizontal overflow | Dev: `node scripts/capture-home.mjs` → 320, 390, 430, 768, 1280 and 1440px assertions pass, consoles clean. Evidence: `.impeccable/review/{small,mobile,wide-phone,tablet,laptop,desktop}.png` and readable hero/section crops. |
| Homepage executable JavaScript remains below the 30KB budget | Dev: `npm run build` → 3,527 bytes across executable homepage scripts; JSON data excluded. |
| Historical prototype retains its model, labels and noindex boundary | Dev: `node scripts/check-station.mjs` → 4 states, 827 bytes executable JavaScript; noindex and illustration label verified. It is separate from the homepage. |
| Publishable image provenance is recorded | Dev: `/Users/akashverma/.agents/skills/impeccable/scripts/impeccable embed-prompt --scan public` → 9 rasters, 0 missing. WebP prompt metadata uses JSON sidecars; PNG logo derivatives embed origin metadata. |

Mobile Lighthouse lab evidence, verified 2026-10-27: the command in [runbook](runbook.md#homepage-review) writes `.impeccable/review/lighthouse-mobile.json`. Scores: performance 100, accessibility 100, best practices 100, SEO 100; largest-contentful paint 1.7s, total blocking time 0ms, cumulative layout shift 0. This is local simulated mobile evidence, not production Core Web Vitals or conversion-rate evidence.

Mechanical design scan: `impeccable detect --json src/pages/index.astro src/styles/home.css` → 0 mechanical findings and 207 palette/type/radius documentation advisories against the previous design metadata. The new design is documented separately after the visual review; the detector is not accessibility certification.

Visual review, dev scope, 2026-10-27: `cat .impeccable/review/finish-verdict.md` records a ship verdict for the four scored fixes: responsive word spacing, agenda numbering, contrast and active design documentation. This is a fix-batch verdict, not user acceptance or a numerical design-quality rating.

Production scope: no deployment, DNS change, Firebase association, email send or CRM write was performed. `git status --short` confirms changes remain unstaged, including pre-existing user changes and deleted legacy assets.

## Unresolved
- A CRM lead endpoint, payload contract and abuse controls have not been supplied. The enquiry form prepares an email draft; lead delivery and CRM persistence are unverified.
- Email/telephone details were inherited from the previous website and need owner confirmation before publication.
- Product screenshots, customer testimonials and adoption/results evidence have not been approved. Restaurant photography and operational examples are explicitly illustrative.
- Full screen-reader review, physical-device acceptance and production field performance remain unverified.
- Firebase project ID and CLI association require verification before deployment.
- CMS integration, blog routes, publishing automation and remaining website pages are queued in [BACKLOG](BACKLOG.md).
- The sibling POS capability audit is implementation evidence dated 2026-10-25, not fresh production acceptance.
