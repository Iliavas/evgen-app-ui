import {ApolloClient, InMemoryCache} from "@apollo/client";


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: "no-cors"
  },
  defaultOptions: defaultOptions
})

export default client;