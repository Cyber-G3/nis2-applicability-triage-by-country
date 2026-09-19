# Portfolio Case — NIS2 Applicability Triage by Country

## Problem
NIS2 scope decisions depend on entity type, sector, size, special scope routes, establishment and Member State implementation. A generic checklist can hide those distinctions.

## Decision architecture
```text
Country + Entity + Sector + Size
            ↓
EU baseline scope logic
            ↓
Special scope routes
            ↓
Essential / Important triage
            ↓
Jurisdiction / cross-border review
            ↓
National module status
            ↓
Qualified decision record
```

## What this demonstrates
- Regulation translated into deterministic decision logic
- EU baseline separated from national implementation
- Explicit verification status rather than false certainty
- 27-country information architecture
- EN/ES product delivery
- Exportable decision records and worked scenarios

## Product and growth direction
Verified national modules can support country-specific NIS2 landing pages, qualified inbound traffic and a structured hand-off to professional applicability/readiness work.

## Professional boundary
The output is preliminary decision support and does not replace review of applicable national law or competent-authority guidance.
