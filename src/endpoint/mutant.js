// “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
const processData = require('../logic/process_data.js');

module.exports = (fastify, opts, done) => {
    fastify.post('/mutant', (request, reply) => {
        const data = JSON.parse(request.body);
        
        const processedData = processData(data);
        console.log(processedData);
        reply.type('application/json').code(processedData.code);
        reply.header("Content-Type", "application/json");
        reply.send({ ...processedData });
    });

    done();
};