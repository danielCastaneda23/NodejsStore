const cartModel = require('../dao/models/cart')

module.exports = class {
    async getCart(){
        return cartModel.find();
    }
    async addCart(product){
        await cartModel.create(product)
    }
    async updateCart(id,obj){
        await cartModel.findByIdAndUpdate(id,obj)
    }
    async deleteCart(id){
        await cartModel.findByIdAndDelete(id)
    }
}