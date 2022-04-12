import { gql } from '@apollo/client';

export const ALL_PROFILES = gql`
query profiles {
  profiles {
    _id
    username
    email
    password
  }
}
`;

export const ONE_PROFILE = gql`
query profile($profileId: ID!) {
  profile(profileId: $profileId) {
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

export const MY_PROFILE = gql`
  query me(profileId: $profileId) {
    me {
      profile {
        _id
        username
      }
    }
  }
`;

export const ALL_PRODUCT = gql`
query products {

}
`;

export const ONE_PRODUCT = gql`
query product($productId: ID!) {
}
`;


export const ONE_RECIPE = gql`
  query recipe {
    _id
    name
    instructions
    minutes
    ingredients
    reactions
  }
`;

export const ALL_RECIPE = gql`
  query recipes {
    recipe {
      _id
      name
      instructions
      minutes
      ingredients
      reactions
    }
  }
`;
