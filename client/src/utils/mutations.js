import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addProfile($username: String!, $email: String!, $password: String!) {
  addProfile(username: $username, email: $email, password: $password) {
    token
    profile {
      _id
      username
      kitchen {
        _id
        name
        quantity
        uom
        refrigerated
        expires
        purchaseDate
      }
      friends {
        friends {
          _id
          username
        }
        recipes {
          _id
          name
          instructions
          minutes
          ingredients {
            _id
            name
            quantity
            uom
            refrigerated
            expires
            purchaseDate
          }
        }
      }
    }
  }
}
`;


export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      username
      email
      kitchen {
        _id
        name
        quantity
        uom
        refrigerated
        expires
        purchaseDate
      }
      friends {
        _id
        username
      }
      recipes {
        _id
        name
        instructions
        minutes
        ingredients {
          _id
          name
          quantity
          uom
          refrigerated
          expires
          purchaseDate
        }
        reactions {
          _id
          reactionBody
          username
          createdAt
        }
      }
    }
  }
}
`;



export const ADD_FRIEND = gql`
mutation Mutation($profileId: ID!, $friend: String!) {
  addFriend(profileId: $profileId, friend: $friend) {
    _id
    username
    email
    password
    kitchen {
      _id
      name
      quantity
      uom
      refrigerated
      expires
      purchaseDate
    }
    friends {
      _id
      username
      email
    }
    recipes {
      _id
      name
      instructions
      minutes
      ingredients {
        _id
        name
        quantity
        uom
        refrigerated
        expires
        purchaseDate
      }
      reactions {
        _id
        reactionBody
        username
        createdAt
      }
    }
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


export const ADD_RECIPE = gql`

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




