import { gql } from '@apollo/client';

export const ALL_PROFILES = gql`
  query profiles {
    profile {
      _id
      username
    }
  }
`;

export const ONE_PROFILE = gql`
  query profile {
    profiles {
      _id
      username
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
