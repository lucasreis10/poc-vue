import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';

export const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT,
  fetch,
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
