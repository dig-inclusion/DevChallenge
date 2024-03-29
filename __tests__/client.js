const { HttpLink } = require('apollo-link-http');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const fetch = require('node-fetch');




const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:5000/graphql',
  fetch,
});

const graphQLClient = new ApolloClient({
  link,
  cache,
  onError: e => { console.log(e); },
});

module.exports = { graphQLClient };
