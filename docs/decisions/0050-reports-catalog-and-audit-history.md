# Decision 0050: Reports catalog and audit history

- Date: 2026-11-04
- Status: Accepted
- Scope: Reports catalog section on `/features/restaurant-sales-reports/`
- Refines: [Decision 0049](0049-restaurant-sales-reports-page.md)

## Context

The POS Reports catalog and the supplied reference show ten report types grouped under Sales, Collections and finance, and Operations. The application exposes Audit separately as a read-only history route, not as a report returned by the Reports catalog endpoint. Its event timestamp and role scope differ from sales/collection posting-date rules.

## Decision

Present the ten supported catalog reports in three matching groups:

- **Sales:** Issued sales and credits; Item sales; Category sales; Discounts and credits.
- **Collections and finance:** Confirmed collections and returns; Tax components; Open receivables; Cash shifts and variance; Tips collected and returned.
- **Operations:** Orders and kitchen service.

Also show **Audit history** under Operations, clearly identifying it as a separate read-only view. Describe its recorded event time, actor, action, record and available reason; note its role-scoped visibility, sensitive-field redaction and audit-timestamp date basis. Do not describe Audit history as a financial report or conflate it with invoice/payment posting dates.

Keep all group labels, report labels and descriptions in the validated Astro collection and Pages CMS fields. Use static informational rows; do not imply each row opens an in-page or external report.

## Rejected

- Leaving out report types shown in the current catalog.
- Treating the audit history endpoint as part of the financial report catalog.
- Linking report rows to the POS app without a verified destination or access behavior.

## Consequences

- The page names all ten catalog reports and separately explains Audit history.
- The audit section and FAQ distinguish event timestamps from report posting dates.
- Keyword density, CMS field parity, route metadata, report names and build output are rechecked after the content change.

## References

- [POS Reports catalog definitions](../../../resta_bee_pos/src/features/business-ui/remaining/ReportCatalog.jsx)
- [Backend report catalog](../../../resta-bee-backend/src/domain/restaurantReports.js)
- [Audit read contract](../../../resta-bee-backend/src/domain/restaurantAudit.js)
- [Audit screen](../../../resta_bee_pos/src/features/audit/Audit.jsx)
- [Report and Audit route ownership](../../../RestaBeePosFlutter/docs/decisions/0087-report-and-audit-read-route-owners.md)
