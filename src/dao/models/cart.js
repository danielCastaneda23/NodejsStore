const {Schema, model} = require('mongoose');
const {productSchema} = require('../models/product')
const cartSchema = new Schema({
    producto: productSchema,
    },
    {timestamps: true}
)

const cartModel = model('cart',cartSchema)

module.exports = cartModel