import { Top } from './components/top';
import { ApolloProvider, gql } from '@apollo/client';
import { client } from './apollo/client';

export function App() {
  return (
    <ApolloProvider client={client}>
      <Top />
    </ApolloProvider>
  );
}
