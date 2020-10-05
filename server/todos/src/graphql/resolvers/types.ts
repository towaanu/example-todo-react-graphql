import { GraphQLResolveInfo, GraphQLScalarType } from "graphql";

type ResolverResult<T> = T | Promise<T>;

type ResolverFunctionGeneric<Parent, Args, Context, Info, Result> = (parent: Parent, args: Args, context: Context, info: Info) => ResolverResult<Result>

interface GraphqlContext { }
type ResolverFunction<Args, Result> = ResolverFunctionGeneric<{}, Args, GraphqlContext, GraphQLResolveInfo, Result>

export interface Todo {
    id: number,
    label: string,
    isDone: boolean
}

export interface TodoInput {
    label: string,
    isDone?: boolean
}

export interface TodoUpdateInput {
    label?: string
    isDone?: boolean 
}

interface Query {
    hello: ResolverFunction<{}, "world">
    todos: ResolverFunction<{}, Todo[]>
}

interface Mutation {
    createTodo: ResolverFunction<{ todo: TodoInput }, Todo>
    updateTodo: ResolverFunction<{id:string, todo: TodoUpdateInput}, Todo | undefined>
}

interface RootResolver {
    Date: GraphQLScalarType,
    Query: Query,
    Mutation: Mutation
}

export { RootResolver }