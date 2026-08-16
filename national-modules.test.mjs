import test from'node:test';import assert from'node:assert/strict';import{nationalModule,nationalAssessment}from'./national-modules.js';
test('Spain is partial not falsely verified',()=>assert.equal(nationalModule('ES').status,'partial'));
test('Spain has official sources and national questions',()=>{assert.ok(nationalModule('ES').sources.length>=3);assert.ok(nationalModule('ES').questions.length>=4)});
test('undeveloped country is explicitly pending',()=>assert.equal(nationalModule('AT','Austria').status,'pending'));
test('national addendum is versioned',()=>assert.equal(nationalAssessment('ES').moduleVersion,'1.2.0'));
