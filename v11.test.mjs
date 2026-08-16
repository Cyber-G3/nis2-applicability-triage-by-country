import test from'node:test';import assert from'node:assert/strict';import{sizeBand,assess,record}from'./v11-core.js';
test('calculates large entity',()=>assert.equal(sizeBand({employees:250}).band,'large'));
test('calculates medium entity',()=>assert.equal(sizeBand({employees:60}).band,'medium'));
test('large Annex I can be essential',()=>assert.equal(assess({country:'ES',entityType:'health-provider',sector:'health',employees:300,specialRoute:'none'}).category,'potentially-essential'));
test('medium Annex II is important',()=>assert.equal(assess({country:'DE',entityType:'manufacturer',sector:'manufacturing',employees:80,specialRoute:'none'}).category,'potentially-important'));
test('DNS route ignores size',()=>assert.equal(assess({country:'FR',entityType:'dns',sector:'digital-infrastructure',employees:2,specialRoute:'tld-dns'}).status,'potentially-in-scope'));
test('DORA creates uncertainty',()=>assert.ok(assess({country:'IE',entityType:'bank',sector:'banking',employees:300,dora:true}).uncertainties.some(x=>x.includes('DORA'))));
test('decision record contains governance',()=>assert.equal(record({owner:'CISO'},assess({})).governance.owner,'CISO'));
