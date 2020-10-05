import { RootResolver } from './types';

const resolvers:RootResolver = {
    Query: {
        hello: () => "world",
    },
};

export default resolvers