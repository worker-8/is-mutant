const isMutant = require('../is_mutant');

test('isMutant : ATCCGA false', () => {
  expect(isMutant('ATCCGA')).toBe(false);
});

test('isMutant : AAAAGA true', () => {
  expect(isMutant('AAAAGA')).toBe(true);
});

test('isMutant : ATTTTA true', () => {
  expect(isMutant('ATTTTA')).toBe(true);
});

test('isMutant : AATTTT true', () => {
  expect(isMutant('AATTTT')).toBe(true);
});

test('isMutant : AATT false', () => {
  expect(isMutant('AATT')).toBe(false);
});

test('isMutant : AAAA true', () => {
  expect(isMutant('AAAA')).toBe(true);
});