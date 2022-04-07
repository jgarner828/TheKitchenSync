const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    kitchen: [Product]
    friends: [Profile]
  }

  type Product {
    _id: ID
    name: String
    quantity: Int
    uom: String
    refrigerated: Boolean
    expires: String
    purchaseDate: String
  }

  type Recipe {
    _id: ID
    name: String
    instructions: String
    minutes: Int
    ingredients: [Product]
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    username: String
    createdAt: String
  }

  

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
