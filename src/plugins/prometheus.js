const fastifyPlugin = require("fastify-plugin");
const Prometheus = require("prom-client");

const symbolRequestTime = Symbol("RequestTimer");

module.exports = fastifyPlugin((fastify, opts, next) => {
  Prometheus.collectDefaultMetrics();
  const httpRequestDurationMicroseconds = new Prometheus.Histogram({
    name: "http_request_duration_ms",
    help: "Duration of HTTP requests in ms",
    labelNames: ["method", "route", "code"],
    buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500]
  });

  fastify.get("/metrics", async (req, reply) => {
    reply.header("Content-Type", Prometheus.register.contentType);
    return Prometheus.register.metrics();
  });

  fastify.addHook("onRequest", (req, res, done) => {
    req[symbolRequestTime] = process.hrtime();
    done();
  });

  fastify.addHook("onSend", (request, reply, payload, done) => {
    const hrDuration = process.hrtime(request.req[symbolRequestTime]);
    const responseTimeInMs = Math.round(
      hrDuration[0] * 1e3 + hrDuration[1] / 1e6
    );

    httpRequestDurationMicroseconds
      .labels(request.req.method, request.req.url, reply.res.statusCode)
      .observe(responseTimeInMs);

    done();
  });

  next();
});
