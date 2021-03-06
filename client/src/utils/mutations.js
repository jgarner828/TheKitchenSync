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


export const KITCHEN_ADD_PRODUCT = gql`
  mutation addProduct($profileId: String!, $productId: ID!) {
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

export const KITCHEN_REMOVE_PRODUCT = gql`
  mutation removeProduct($profileId: String!, $productId: ID!) {
    removeProduct(profileId: $profileId, product: $product) {
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


export const ADD_PRODUCT = gql`
mutation Mutation($product: ProductInput) {
  addProduct(product: $product) {
    _id
    name
    quantity
    uom
    refrigerated
    expires
    purchaseDate
  }
}
`;
export const ADD_RECIPE = gql`
mutation Mutation($recipe: RecipeInput) {
  addRecipe(recipe: $recipe) {
    _id
    name
    instructions
    minutes
    reactions {
      _id
      reactionBody
      username
      createdAt
    }
    ingredients {
      _id
 
    }
  }
}
`;

export const ADD_FAV_RECIPE = gql`
  mutation addFavRecipe($profileId: String!, $recipeId: ID!) {
    profile {
      _id
      username
      kitchen
      friends
      recipes
    }
  }
`;




