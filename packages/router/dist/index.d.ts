import { RawServerBase, RawRequestDefaultExpression, RouteGenericInterface, FastifySchema, FastifyBaseLogger, FastifyTypeProvider, FastifyRequest, HTTPMethods, RawReplyDefaultExpression, ContextConfigDefault, FastifyInstance } from 'fastify';
import { FastifyReplyType, ResolveFastifyReplyType } from 'fastify/types/type-provider';

interface NeatPayload<RawServer extends RawServerBase, RawRequest extends RawRequestDefaultExpression<RawServer>, RouteGeneric extends RouteGenericInterface, ContextConfig, SchemaCompiler extends FastifySchema, Logger extends FastifyBaseLogger, TypeProvider extends FastifyTypeProvider, RequestType extends FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger> = FastifyRequest<RouteGeneric, RawServer, RawRequest, SchemaCompiler, TypeProvider, ContextConfig, Logger>> {
    req: RequestType;
    body: RequestType['body'];
    params: RequestType['params'];
    query: RequestType['query'];
}

type NeatHandler<RawServer extends RawServerBase, RawRequest extends RawRequestDefaultExpression<RawServer>, RouteGeneric extends RouteGenericInterface, ContextConfig, SchemaCompiler extends FastifySchema, Logger extends FastifyBaseLogger, TypeProvider extends FastifyTypeProvider, ReplyType extends FastifyReplyType = ResolveFastifyReplyType<TypeProvider, SchemaCompiler, RouteGeneric>> = (context: NeatPayload<RawServer, RawRequest, RouteGeneric, ContextConfig, SchemaCompiler, Logger, TypeProvider>) => Promise<ReplyType> | ReplyType;

interface EndpointDeclaration<RawServer extends RawServerBase, RawRequest extends RawRequestDefaultExpression<RawServer>, RouteGeneric extends RouteGenericInterface, ContextConfig, SchemaCompiler extends FastifySchema, TypeProvider extends FastifyTypeProvider, Logger extends FastifyBaseLogger> {
    method: HTTPMethods;
    url: string;
    handler: NeatHandler<RawServer, RawRequest, RouteGeneric, ContextConfig, SchemaCompiler, Logger, TypeProvider>;
}

declare function makeRouter<RawServer extends RawServerBase, RawRequest extends RawRequestDefaultExpression<RawServer>, RawReply extends RawReplyDefaultExpression<RawServer>, Logger extends FastifyBaseLogger, TypeProvider extends FastifyTypeProvider, RouteGeneric extends RouteGenericInterface = RouteGenericInterface, ContextConfig = ContextConfigDefault, const SchemaCompiler extends FastifySchema = FastifySchema, EndpointType extends EndpointDeclaration<RawServer, RawRequest, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger> = EndpointDeclaration<RawServer, RawRequest, RouteGeneric, ContextConfig, SchemaCompiler, TypeProvider, Logger>>(inputRouter: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>): any;

export { makeRouter };
