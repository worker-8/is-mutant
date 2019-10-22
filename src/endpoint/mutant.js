const processData = require('../logic/process_data.js');
const response = require('../response');
const registry = require('../source/registry');

const responseQuestion = (data, dna, reply) => (res) => {
  if (res.count >= 1) {
    return (res.rows[0].is_mutant)
      ? response.mutant(data, 'db: mutant', reply)
      : response.notMutant(data, 'db: not mutant', reply);
  }

  const processedData = processData(data);
  registry
    .insert(dna, processedData.code === 200)
    .then(res => {
      if (!res.status) {
        return Promise.reject(
          response.badRequest('error db', res.err, reply)
        );
      }

      return (res.isMutant)
        ? response.mutant(data, 'done: mutant', reply)
        : response.notMutant(data, 'done: not mutant', reply);
    });
};

module.exports = async (fastify, opts, done) => {
  fastify.post('/mutant', async (request, reply) => {
    const data = JSON.parse(request.body);
    if (data === null) {
      response.notMutant(null, 'error', reply);
    }
    const dna = data.dna.join('-');

    return registry
      .findByDNA(dna)
      .then(res => {
        if (!res.status) {
          return Promise.reject(
            response.badRequest('error db', res.err, reply)
          );
        }
        return res;
      }).then(responseQuestion(data, dna, reply));
  });

  done();
};