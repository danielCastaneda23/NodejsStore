 const productController = require('../controller/products');
 const cartController = require('../controller/cart')
 
 module.exports = (router) => {
    router
    .get('/productos/listar/:id', productController.getOneProduct)
    .get('/productos/listar', productController.getAllProducts)
    .post('/productos/agregar', productController.createProduct)
    .put('/productos/actualizar', productController.updateProduct)
    .delete('/productos/borrar/:id', productController.deleteProduct)

    .get('/carrito/listar',cartController.getCart)
    .post('/carrito/agregar/:id_producto',cartController.addCart)
    .delete('/carrito/borrar/:id',cartController.deleteCart)
    return router
}