import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from "../lib/constants";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clracxbkk130q01w7x431qrgi/master",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      //   authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
