import { GraphQLClient } from "graphql-request";
import { InMemoryCache } from "@apollo/client";

const API_URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clracxbkk130q01w7x431qrgi/master";

export const graphqlClient = new GraphQLClient(API_URL, {
  cache: new InMemoryCache(),
  // headers : {
  //     "x-api-key" : "API_KEY"
  // }
});
