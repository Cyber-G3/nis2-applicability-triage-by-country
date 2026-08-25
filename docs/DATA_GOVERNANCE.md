# Regulatory Data Governance

## Purpose

This repository is a preliminary NIS2 applicability triage tool. Country-specific logic is regulatory data and must be treated as versioned, reviewable content rather than static application copy.

## Required metadata per national module

Each country module should maintain:

- country code and module version;
- verification status (`verified`, `partial`, `planned`, `pending`);
- last reviewed date;
- effective date of the national rule when known;
- official source title and URL;
- source publication date when available;
- reviewer/approver reference;
- supersedes/superseded-by reference when a source changes;
- explicit assumptions and unresolved legal questions.

## Decision output contract

The structured output should expose at minimum:

- `schema_version`;
- `assessment_timestamp`;
- country and jurisdiction route;
- EU baseline result;
- national-module status and version;
- sector / Annex route;
- size calculation inputs and result;
- Article 2(2) special-route indicators;
- preliminary entity category;
- DORA/CER/exclusion flags;
- reason codes;
- official source references;
- source review date;
- unresolved validation items;
- reviewer/approver state.

## Change control

A national module must not move from `planned`/`pending` to `verified` solely because an authority directory exists. Verification requires review of the applicable national legal instrument and relevant official implementation guidance. Material changes must update the module version or dataset version and add regression tests for affected decision paths.

## Stack role

The output is regulatory scope context for downstream components. It may inform risk, control mapping, supplier assurance and audit-readiness workflows, but those tools must not reinterpret a `pending` or `partial` country module as a final legal determination.
