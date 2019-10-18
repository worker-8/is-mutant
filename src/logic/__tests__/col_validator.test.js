const colValidator = require('../col_validator.js');
const gridConvert = require('../grid_convert');

/*
'ATGCGA'
'CAGTGC'
'TTATGT'
'TGAAGG'
'TCCCTA'
'TCACTG'
*/

test('find mutant DNA', () => {
    const origin = gridConvert([
        'ATGCGA',
        'CAGTGC',
        'TTATGT',
        'TGAACG',
        'TCCCTA',
        'TCACTG']);
    const expected = 1;
    expect(colValidator(origin)).toBe(expected);
});

test('find mutant DNA not there', () => {
    const origin = gridConvert([
        "ATGCGA",
        "CAGTGC",
        "ATATGT",
        "TGAACG",
        "TCCCTA",
        "TCACTG"]);
    const expected = 0;
    expect(colValidator(origin)).toBe(expected);
});
