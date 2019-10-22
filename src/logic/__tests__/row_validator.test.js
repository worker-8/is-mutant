const rowValidator = require('../row_validator.js');

test('find mutant DNA', () => {
  const origin = [
    'ATGCGA',
    'CAGTGC',
    'TTATGT',
    'AGAAGG',
    'CCCCTA',
    'TCACTG'];
  const expected = 1;
  expect(rowValidator(origin)).toBe(expected);
});

test('find mutant DNA not there', () => {
  const origin = [
    'ATGCGA',
    'CAGTGC',
    'TTATGT',
    'AGAAGG',
    'CCACTA',
    'TCACTG'];
  const expected = 0;
  expect(rowValidator(origin)).toBe(expected);
});