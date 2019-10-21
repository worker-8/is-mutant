const prometheus = require("./plugins/prometheus");
const basics = require('./endpoint/basics');
const mutant = require('./endpoint/mutant');
const status = require('./endpoint/status');
const fastify = require('fastify')({
    logger: true
});

fastify.register(prometheus);
fastify.register(basics);
fastify.register(mutant);
fastify.register(status);

fastify.listen(1337, '0.0.0.0', async (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
});