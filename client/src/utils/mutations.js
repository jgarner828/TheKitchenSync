import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;


export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token
        profile {
          _id
          username
        }
    }
  }
`;



export const ADD_FRIEND = gql`
  mutation addFriend($profileId: String!) {
    addFriend(name: $name) {
      _id
      name
      skills
    }
  }
`;


export const ADD_FAV_RECIPE = gql`
  mutation addFavRecipe($profileId: String!, $recipe: RecipeInput!) {
    profile {
      _id
      username
      kitchen
      friends
      recipes
    }
  }
`;


export const ADD_PRODUCT = gql`
  mutation addProduct($profileId: String!, $product: ProductInput) {
    addProduct(profileId: $profileId, product: $product) {
      profile {
        _id
        username
        kitchen
        friends
        recipes
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation removeProduct($profileId: String!, $product: ProductInput) {
    removeProduct(profileId: $profileId, product: $product) {
      profile {
        _id
        username
        kitchen
        friends
        recipes
      }
  }
`;
