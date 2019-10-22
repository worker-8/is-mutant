const colValidator = require('../col_validator.js');

test('find mutant DNA', () => {
  const origin = [
    'ATGCGA',
    'CAGTGC',
    'TTATGT',
    'TGAACG',
    'TCCCTA',
    'TCACTG'];
  const expected = 1;
  expect(colValidator(origin)).toBe(expected);
});

test('find mutant DNA not there', () => {
  const origin = [
    'ATGCGA',
    'CAGTGC',
    'ATATGT',
    'TGAACG',
    'TCCCTA',
    'TCACTG'];
  const expected = 0;
  expect(colValidator(origin)).toBe(expected);
});
