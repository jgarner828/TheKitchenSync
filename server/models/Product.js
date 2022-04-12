const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    uom: {
        type: String,
    },
    refrigerated: {
        type: Boolean,
    },
    expires: {
        type: Date,
    },
    purchaseDate: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
});


const Product = model('Product', productSchema);

module.exports = Product;
