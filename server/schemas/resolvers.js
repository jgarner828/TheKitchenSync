const { AuthenticationError } = require('apollo-server-express');
const { Profile, Recipe } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.profile._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    products: async () => {
      return Product.find();
    },

    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    
    recipes: async () => {
      return Recipe.find();
    },
    recipe: async (parent, { recipeId }) => {
      return Recipe.findOne({ _id: recipeId });
    },
  },

  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);

      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addFriend: async (parent, { profileId, friend }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { friends: friend },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addProduct: async (parent, { name, quantity, oum, refrigerated, expires }) => {
      const product = await Product.create({  name, quantity, oum, refrigerated, expires  });
      
      return { product };

    },

    kitchenAddProduct: async (parent, { profileId, productId }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { kitchen: productId },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    kitchenRemoveProduct: async (parent, {profileId, productId}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $pull: { kitchen: productId },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addRecipe: async (parent, { name, instructions, minutes }) => {
      return Recipe.create({ name, instructions, minutes, ingredients });
    },

    addFavRecipe: async (parent, { profileId, recipe }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { recipes: recipe },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },







  }
};

module.exports = resolvers;
