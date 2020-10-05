import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';
import { initDb } from './db';

function serverInits() {
    return Promise.all([
        initDb()
    ]);
}

serverInits()
    .then(() => {

        const server = new ApolloServer({
            typeDefs,
            resolvers: resolvers as any,
            tracing: true
        });

        server.listen({ port: 8050 })
            .then(({ url }) => {
                console.log(`Server running at ${url}`);
            })
            .catch(err => console.error(err));

    })
    .catch(err => console.error("Unable to start server ", err))
