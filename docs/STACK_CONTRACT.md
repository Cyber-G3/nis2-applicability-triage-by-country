# Stack Contract

## Role

This repository provides preliminary NIS2 applicability and jurisdiction context. It should emit structured regulatory scope context for downstream GRC engines.

## Downstream flow

```text
NIS2 applicability triage
  -> applicability decision record
  -> control mapping / supplier risk / audit readiness / incident workflows
```

## Boundary

This repository does not determine final legal applicability, certification status, control effectiveness or audit readiness. National modules marked `pending`, `planned` or `partial` must remain visibly non-final in downstream consumers.

## Interoperability target

Downstream systems should consume a versioned decision record rather than scrape UI text. The record should preserve country, module status/version, reason codes, review date and source references so decisions remain traceable when national law changes.
