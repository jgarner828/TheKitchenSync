const { gql } = require('apollo-server-express');

const typeDefs = gql`

  input ProductInput {
    _id: ID
    name: String
    quantity: Int
    uom: String
    refrigerated: Boolean
    expires: String
    purchaseDate: String
  }

  input RecipeInput {
    _id: ID
    name: String
    instructions: String
    minutes: Int
    ingredients: [ProductInput]
    reactions: [ReactionInput]
  }

  input RecipeInput {
    _id: ID
    name: String
    instructions: String
    minutes: Int
    ingredients: [ProductInput]
    reactions: [ReactionInput]
  }

  input ReactionInput {
    _id: ID
    reactionBody: String
    username: String
    createdAt: String
  }


  
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    kitchen: [Product]
    friends: [Profile]
    recipes: [Recipe]
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


  type Auth {
    token: ID!
    profile: Profile
  }

  

  type Query {
    me: Profile
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    recipe: Recipe
    recipes: [Recipe]
  }


  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFriend(profileId: ID!, friend: String!): Profile
    addFavRecipe(profileId: ID!, recipe: RecipeInput): Profile
    addProduct(profileId: ID!, product: ProductInput): Profile
    removeProduct(profileId: ID!, product: ProductInput): Profile
  }
`;

module.exports = typeDefs;
