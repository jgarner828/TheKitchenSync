const db = require('../config/connection');
const { Profile, Product, Recipe } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const recipeSeeds = require('./recipeSeeds.json');
const productSeeds = require('./productSeeds.json');
 

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await Product.deleteMany({});
    await Product.create(productSeeds);

    await Recipe.deleteMany({});
    await Recipe.create(recipeSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
