module.exports = (fastify, opts, done) => {
    fastify.get('/status', (request, reply) => {
        reply.type('application/json').code(200);
        reply.header("Content-Type", "application/json");
        reply.send({ '/status': 'API - test' });
    });

    done();
};