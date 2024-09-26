// src/router/create.ts
function makeHandler(handler) {
  return async (req, reply) => {
    const res = await handler({
      body: req.body,
      params: req.params,
      query: req.query,
      req
    });
    await reply.send(res);
  };
}
function makeRouter(inputRouter) {
  const app = inputRouter.withTypeProvider();
  function registerEndpoint(endpoint) {
    app.route({
      method: endpoint.method,
      url: endpoint.url,
      handler: makeHandler(endpoint.handler)
    });
  }
  return {
    app,
    endpoint(ops) {
      registerEndpoint(ops);
    },
    delete: () => null,
    get: () => null,
    post: () => null,
    put: () => null
  };
}
export {
  makeRouter
};
