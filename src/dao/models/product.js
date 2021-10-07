const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    nombre: String,
    descripcion: String,
    foto: String,
    precio: Number,
    stock: Number
    },
    {timestamps: true}

)

const productModel = model('product',productSchema)

module.exports = {productModel,productSchema}