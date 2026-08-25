# v1.2 Release Gate

## Current state

The public application is live and supports all 27 EU Member States with an EU baseline decision flow. Country-specific national modules have explicit verification states.

## Final quality gates

- [ ] Fresh CI succeeds on current `main`.
- [ ] Fresh Pages deployment succeeds on current `main`.
- [ ] Confirm Spain remains correctly classified as `partial` against current official sources.
- [ ] Confirm all planned/pending national modules remain visibly non-final.
- [ ] Confirm exported decision records include country/module status and source traceability.
- [ ] Confirm no stale or superseded official source is presented as current without a review date.

## Scope freeze

Do not add new national decision logic without official-source review, review-date metadata and regression tests. SEO landing pages and authority directories must not be treated as legal-module verification.
