import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const endpoint = 'https://31mj2mmpnq.sse.codesandbox.io/';
const httpLink = new HttpLink({ uri: endpoint });
const link = ApolloLink.from([httpLink]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
});

