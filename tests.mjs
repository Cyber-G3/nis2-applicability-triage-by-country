import test from'node:test';import assert from'node:assert/strict';import{triage}from'./core.js';
test('large Annex I entity is potentially in scope',()=>assert.equal(triage({country:'ES',sector:'energy',size:'large'}).status,'potentially-in-scope'));
test('small Annex II entity needs national review',()=>assert.equal(triage({country:'DE',sector:'manufacturing',size:'small'}).status,'needs-national-review'));
test('DNS route applies regardless of size',()=>assert.equal(triage({country:'FR',sector:'digital-infrastructure',size:'micro',exception:'tld-dns'}).status,'potentially-in-scope'));
test('missing jurisdiction remains unresolved',()=>assert.equal(triage({}).status,'unresolved'));
