import test from 'node:test';
import assert from 'node:assert/strict';
import {COUNTRIES} from './countries.js';
import {NIS2_COUNTRY_REFERENCES,nis2CountryReference} from './nis2-country-references.js';
test('all 27 EU countries have national NIS2 reference entries',()=>{assert.equal(Object.keys(NIS2_COUNTRY_REFERENCES).length,27);for(const code of Object.keys(COUNTRIES)){const x=nis2CountryReference(code);assert.ok(x,code);assert.ok(x.authority&&x.csirt&&x.authorityUrl&&x.source&&x.transpositionSource,code);assert.equal(x.verification,'reference-only')}});
test('unknown country is not treated as an EU NIS2 reference',()=>assert.equal(nis2CountryReference('US'),null));
