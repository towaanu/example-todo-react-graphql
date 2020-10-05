import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 8050 })
    .then(({ url }) => {
        console.log(`Server running at ${url}`);
    })
    .catch(err => console.error(err));