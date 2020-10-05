import { RootResolver } from './types';
import { scalarTypesResolver } from './scalarTypes';
import { todosResolver } from './todos';

const resolvers:RootResolver = {
    ...scalarTypesResolver,
    Query: {
        hello: () => "world",
        ...todosResolver.Query
    },
    Mutation: {
        ...todosResolver.Mutation
    }
};

export default resolvers