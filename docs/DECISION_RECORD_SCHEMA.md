# Applicability Decision Record — target schema

A stable machine-readable result should use a versioned contract such as:

```json
{
  "schema_version": "1.0",
  "assessment_timestamp": "ISO-8601",
  "country": "ES",
  "jurisdiction_route": "main-establishment|local-establishment|special-provider|other",
  "eu_baseline": {
    "in_scope": null,
    "sector_route": null,
    "size_result": null,
    "special_scope_route": null,
    "preliminary_category": null
  },
  "national_module": {
    "module_version": "1.2.0",
    "status": "partial",
    "reviewed": "YYYY-MM-DD"
  },
  "cross_regulation": {
    "dora": null,
    "cer": null,
    "exclusion": null
  },
  "reason_codes": [],
  "sources": [],
  "unresolved_validation_items": [],
  "review": {
    "owner": null,
    "reviewer": null,
    "approver": null,
    "approval_state": null,
    "next_review": null
  }
}
```

This is a contract target, not a final legal determination. Consumers must preserve the national-module verification status and unresolved validation items.
