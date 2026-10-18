import test from'node:test';import assert from'node:assert/strict';import{nationalModule,nationalAssessment,relatedRegulationScreen}from'./national-modules.js';
test('Spain is partial not falsely verified',()=>assert.equal(nationalModule('ES').status,'partial'));
test('Spain has official sources and national questions',()=>{assert.ok(nationalModule('ES').sources.length>=3);assert.ok(nationalModule('ES').questions.length>=4)});
test('undeveloped country is explicitly pending',()=>assert.equal(nationalModule('AT','Austria').status,'pending'));
test('national addendum is versioned',()=>assert.equal(nationalAssessment('ES').moduleVersion,'1.3.0'));

test('ENS ALTA is not inferred from NIS2 or public contract',()=>{const x=relatedRegulationScreen('ES',{esPublicSupplier:'yes'});assert.ok(x.some(v=>v.id==='ENS'));assert.ok(!x.some(v=>v.id==='ENS-ALTA'))});
test('Spanish privacy and financial review triggers are independent',()=>{const x=relatedRegulationScreen('ES',{esPersonalData:'yes',esFinancial:'yes'});assert.ok(x.some(v=>v.id==='GDPR-LOPDGDD'));assert.ok(x.some(v=>v.id==='DORA'))});
test('Other countries do not inherit Spanish regulation',()=>assert.deepEqual(relatedRegulationScreen('FR',{esPublicSupplier:'yes'}),[]));
