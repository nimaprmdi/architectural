import { GraphQLClient } from "graphql-request";

const API_URL = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clracxbkk130q01w7x431qrgi/master";

export const graphqlClient = new GraphQLClient(API_URL, {
  // headers : {
  //     "x-api-key" : "API_KEY"
  // }
});
