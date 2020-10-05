import { GraphQLResolveInfo, GraphQLScalarType } from "graphql";

type ResolverResult<T> = T | Promise<T>;

type ResolverFunctionGeneric<Parent, Args, Context, Info, Result> = (parent: Parent, args: Args, context: Context, info: Info) => ResolverResult<Result>

interface GraphqlContext { }
type ResolverFunction<Args, Result> = ResolverFunctionGeneric<{}, Args, GraphqlContext, GraphQLResolveInfo, Result>

interface Query {
    hello: ResolverFunction<{}, "world">
}

interface RootResolver {
    Query: Query
}

export { RootResolver }