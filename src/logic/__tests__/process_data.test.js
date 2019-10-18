const processData = require('../process_data.js');

test('No Data', () => {
    const origin = {};
    const expected = { 'code': 403, 'msg': 'NO DATA' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});

test('one gen mutant row', () => {
    const origin = {
        'dna': [
            'ACGTAA',
            'CCCCGG',
            'GTACAC',
            'AGCTAG',
            'AGGGCC',
            'AGGGCC']
    };
    const expected = { 'code': 403, 'msg': 'Not Mutant' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});

test('two gen mutant row', () => {
    const origin = {
        'dna': [
            'ACGTAA',
            'CCCCGG',
            'GTTTTC',
            'AGCTAG',
            'AGGGCC',
            'AGGGCC']
    };
    const expected = { 'code': 200, 'msg': 'Is Mutant' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});

test('three gen mutant row', () => {
    const origin = {
        'dna': [
            'ACGTAA',
            'CCCCGG',
            'GTTTTC',
            'AGGGGG',
            'AGGGCC',
            'AGGGCC']
    };
    const expected = { 'code': 200, 'msg': 'Is Mutant' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});

test('one gen mutant col', () => {
    const origin = {
        'dna': [
            'ACGGTC',
            'ACCCGG',
            'ATCTTC',
            'AGGTGG',
            'AGGGCC',
            'AGGGCC']
    };
    const expected = { 'code': 403, 'msg': 'Not Mutant' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});

test('two gen mutant col', () => {
    const origin = {
        'dna': [
            'ACGGTC',
            'ACCCGG',
            'AGCTTC',
            'AGGTGG',
            'AGGGCC',
            'AGGGCC']
    };
    const expected = { 'code': 200, 'msg': 'Is Mutant' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});

test('no gen mutant', () => {
    const origin = {
        'dna': ['ACGTAA', 'CGTTAC', 'GTACAC', 'AGCTAG', 'AGGGCC', 'AGGGCC']
    };
    const expected = { 'code': 403, 'msg': 'Not Mutant' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});