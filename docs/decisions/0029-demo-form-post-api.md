# 0029 — Submit demo enquiries to the public leads API

Date: 2026-11-03. Authorized by the user’s request to implement the supplied public lead endpoint.

## Context

The homepage currently prepares an email draft. The backend now documents an unauthenticated `POST /api/public/leads` contract at [the public demo API guide](../../../resta_bee_pos/docs/public-demo-api.md), with seven form fields and a `{ success, message, data }` response. The production API has not been deployed.

## Decision

Submit `name`, `restaurant`, `city`, `phone`, `email`, `outlets` and `interest` as JSON to `${PUBLIC_API_BASE_URL}/api/public/leads`. Default the static production build to `https://api.restabee.com`; allow local development to set `PUBLIC_API_BASE_URL=http://127.0.0.1:3007`. Show success only when the response body has `success: true`, regardless of HTTP 200. Attach `INVALID_REQUEST.errors` to matching fields; for other failures, preserve form values and offer the existing email contact as a fallback. Do not send credentials or selected commercial terms from the browser.

## Rejected

- Keep an email-draft-only form: it does not create the CRM prospect the new endpoint supports.
- Treat HTTP 200 alone as acceptance: the backend uses HTTP 200 for validation and rate-limit failures too.
- Deploy the backend or claim production lead delivery: the user says the API is not deployed, and this website change does not authorize a backend rollout.

## Consequences

The backend CORS allowlist must include the production website origin (and the local Astro origin for local browser integration). The endpoint must be deployed before production submissions can succeed. Verify end-to-end CRM intake with an approved test record after rollout; see [BACKLOG](../BACKLOG.md).

## Supersession

Supersedes [0003](0003-open-kitchen-homepage.md) only for the email-draft enquiry handoff. Its visual direction and remaining homepage decisions stay in effect.
