const { Schema, model } = require('mongoose');


const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    instructions: {
        type: String,
        required: true
    },
    minutes: {
        type: Number,
        required: true,
    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ]
});




const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
