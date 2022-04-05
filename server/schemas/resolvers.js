const { Profile } = require('../models');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },

  Mutation: {
    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    }
  }
};

module.exports = resolvers;
