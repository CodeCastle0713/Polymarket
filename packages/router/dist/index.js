"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  makeRouter: () => makeRouter
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeRouter
});
