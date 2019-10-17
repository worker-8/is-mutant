const prometheus = require("./plugins/prometheus");
const basics = require('./endpoint/basics');
const fastify = require('fastify')({
    logger: true
});

fastify.register(prometheus);
fastify.register(basics);

fastify.listen(1337, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
});