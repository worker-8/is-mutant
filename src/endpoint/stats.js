const response = require('../response');
const registry = require('../source/registry');

module.exports = async (fastify, opts, done) => {
  fastify.get('/stats', async (request, reply) => {
    let stats = {
      ADN:
      {
        'count_mutant_dna': 0,
        'count_human_dna': 0,
        'ratio': 0
      }
    };

    registry.getStats().then(res => {
      if (!res.status) {
        return Promise.reject(
          response.badRequest('error db', res.err, reply)
        );
      }
      
      if (res.row.total > 0) {
        stats.ADN.count_mutant_dna = res.row.mutant;
        stats.ADN.count_human_dna = res.row.total - res.row.mutant;
        stats.ADN.ratio = (((res.row.mutant * 100) / res.row.total) / 100).toFixed(2);
      }

      return response.ok(stats, 'Done', reply);
    });
  });

  done();
};
