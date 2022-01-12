import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Listing {
    id: ID!
    image: String!
    title: String!
    address: String!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }
  type Query {
    listings: [Listing!]!
  }
  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
