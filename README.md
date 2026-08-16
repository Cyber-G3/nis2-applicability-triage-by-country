# NIS2 Applicability Triage by Country v1.2

Free, bilingual, privacy-first decision-support tool for a qualified preliminary NIS2 scope screen by EU Member State, sector, size and special scope route.

## Live tool

- [Open in English](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=en)
- [Abrir en español](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=es)

## Professional samples

- [DemoCo Health Cloud — Spain](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=en&scenario=health)
- [Managed Service Provider — Germany](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=en&scenario=msp)
- [Small DNS Provider — France](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=en&scenario=dns)
- [Financial Entity / DORA — Ireland](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=en&scenario=dora)
- [Ejemplo sanitario en español](https://cyber-g3.github.io/nis2-applicability-triage-by-country/?lang=es&scenario=health)

Each sample loads a fictional worked example and generates its qualified decision record automatically. Do not use sample data as compliance evidence.

## EU baseline and national modules

The tool separates the common EU Directive assessment from national implementation:

- **Spain — Partial:** official DSN, INCIBE-CERT and BOE sources reviewed; final transposition, registration and authority allocation must still be confirmed.
- **Germany, France, Italy, Netherlands, Ireland and Portugal — Planned:** authority directory available; national decision logic is not yet verified.
- **Other Member States — Pending:** EU baseline assessment only.

The interface never labels a pending national module as a completed country assessment.

## Capabilities

- All 27 EU Member States
- Country authority directory with review date and explicit verification status
- Annex I / Annex II sector screen
- Evidence-based size calculation (employees, turnover, balance and group aggregation flag)
- Exact entity/service type and Article 2(2) special routes
- Essential / important preliminary category
- Main-establishment, cross-border and special digital-provider jurisdiction screen
- DORA, CER, exclusion and national-designation review
- Owner, reviewer, approver, next review and approval state
- Four professional worked scenarios
- JSON, Markdown, CSV and print/PDF decision record
- 27 generated country SEO landing pages and sitemap
- English and Spanish URLs (`?lang=en`, `?lang=es`)
- Local browser processing; no analytics or account

## Important limitation

This tool provides preliminary decision support only. It does not make a final legal determination, replace national law review or guarantee compliance.

## Local validation

```bash
npm test
npm run check
```

Built by [SpectraSec](https://www.spectrasec.eu/). Apache-2.0.
