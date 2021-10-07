const {productModel} = require('../dao/models/product')
module.exports = class {
    async getAllProducts(){
        return productModel.find()
    }
    async getOneProduct(id){
        return productModel.findById(id);
    }
    async createProduct(product){
        await productModel.create(product)
    }
    async deleteProduct(id){
        await productModel.findByIdAndDelete(id)
    }
}