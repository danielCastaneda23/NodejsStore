const productService = require('../services/product')
const product = new productService()

exports.getOneProduct = async(req, res , next) => {
    const id = req.params.id;
    const productos = await product.getOneProduct(id)

    res.json(productos)
}
exports.getAllProducts = async(req, res, next) =>{
    const productos = await product.getAllProducts()
    res.json(productos)

}
exports.createProduct = async(req, res , next) => {
    const newProduct = req.body.information;
    const productos = await product.getAllProducts()
    await product.createProduct({
        ...newProduct,
        stock: productos.length
    })
    res.json(productos)
}
exports.updateProduct = async(req, res , next) => {
    
}
exports.deleteProduct = async(req, res , next) => {
    id = (req.params.id)
    await product.deleteProduct(id)
    const productos = await product.getAllProducts()
    res.json(productos)
}
