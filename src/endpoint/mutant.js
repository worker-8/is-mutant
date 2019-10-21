// “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
const processData = require('../logic/process_data.js');
const response = require('../response');
const conn = require('../source/conn');

module.exports = async (fastify, opts, done) => {
    fastify.post('/mutant', async (request, reply) => {
        const data = JSON.parse(request.body);
        if (data === null) {
            response.notMutant(null, 'error', reply);
        }
        let sql = `INSERT INTO registry (dna, is_mutant) VALUES (?,?)`;
        const processedData = processData(data);

        let query = await new Promise((resolve) =>
            conn.query(
                sql,
                [
                    request.body,
                    (processedData.code === 200) ? 1 : 0
                ],
                function (err, rows) {
                    if (err) {
                        return response.badRequest('error db', err, reply);
                    } else {
                        return resolve({ dna: request.body, is_mutant: (processData.code === 200) ? 1 : 0 });
                    }
                }
            )
        );

        return (processedData.code === 200)
            ? response.mutant(data, 'done: mutant', reply)
            : response.notMutant(data, 'done: not mutant', reply);
    });

    done();
};