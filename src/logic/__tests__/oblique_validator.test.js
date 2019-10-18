const obliqueValidator = require('../oblique_validator');

test('find one mutant gen', () => {
    const origin = [
        "ATGCGT",
        "CAGTTC",
        "TTAAGT",
        "AGAAAG",
        "CACCAT",
        "TCACTA"];
    const expected = 1;
    expect(obliqueValidator(origin)).toBe(expected);
});

test('find two mutant gen', () => {
    const origin = [
        "ATGCGA",
        "CAGTAC",
        "TTAAGT",
        "AAAAAG",
        "CACCAT",
        "TCACTA"];
    const expected = 2;
    expect(obliqueValidator(origin)).toBe(expected);
});

test('find mutant DNA not there', () => {
    const origin = [
        "TTGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCACTA",
        "TCACTG"];
    const expected = 0;
    expect(obliqueValidator(origin)).toBe(expected);
});