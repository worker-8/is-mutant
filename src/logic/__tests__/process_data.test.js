const processData = require('../process_data.js');

test('No Data', () => {
    const origin = {};
    const expected = { 'code': 403, 'msg': 'NO DATA' }
    expect(processData(origin).code).toBe(expected.code);
    expect(processData(origin).msg).toBe(expected.msg);
});