const cartService = require('../services/cart')
const cart = new cartService()

const productService = require('../services/product')
const product = new productService()

exports.getCart = async(req, res) => {
    const carrito = await cart.getCart()
    res.json(carrito)
}
exports.addCart = async(req, res) => {
    const id = req.params.id_producto;
    const productos = await  product.getAllProducts()
    const newCarritoProduct = await productos.find(x => x.id === id);
    const carrito = await cart.getCart()

    const updateproduct = carrito.find((x) => x.producto.id === newCarritoProduct.id)
    if(!!updateproduct){
        console.log(updateproduct.producto.stock, updateproduct.id)
        await cart.updateCart(updateproduct.id , {'producto.stock': updateproduct.producto.stock+1})
    }else{
        await cart.addCart({
            producto:
                {
                    ...newCarritoProduct
                }
            })
    }


        res.json('Agregado al carrito')
}
exports.deleteCart = async(req, res) => {
    id = (req.params.id)
    await cart.deleteCart(id)
    res.json('Item Eliminado')
}