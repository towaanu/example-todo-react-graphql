import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';
import Todos from './containers/Todos';

function App() {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <Todos />
      </ApolloProvider>
    </div>
  );
}

export default App;
