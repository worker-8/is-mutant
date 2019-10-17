module.exports = (fastify, opts, done) => {
  fastify.get('/', (request, reply) => {
    reply.type('application/json').code(200);
    reply.header("Content-Type", "application/json");
    reply.send({ '/': 'API - test' });
  });

  fastify.get("/live", (request, reply) => {
    reply
      .status(200)
      .header("Content-Type", "application/json")
      .send({ ok: true });
  });

  done();
}
