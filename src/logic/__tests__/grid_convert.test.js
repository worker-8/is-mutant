const gridConvert = require('../grid_convert');

test('Correct way convert', () => {
    const origin=["a","b","c","d"];
    const expected = [["a"], ["b"], ["c"], ["d"]];

    expect(gridConvert(origin)).toEqual(expected);
});

test('is not array', () => {
    const origin = 'no Array';
    expect(gridConvert(origin)).toBeFalsy();
});

test('no data', () => {
    expect(gridConvert()).toBeFalsy();
});