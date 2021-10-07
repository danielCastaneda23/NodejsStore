let productos = [
    {
        id: 1,
        timestamp:Date.now(),
        nombre: 'PrimerProducto',
        descripcion: 'Lorem Secundario',
        codigo: '123fre45',
        foto:'https://ncgalleryfurniture.com/wp-content/uploads/2017/07/B130-582.jpg',
        precio: 2500,
        stock: 2,
    },
    {
        id: 2,
        timestamp:Date.now(),
        nombre: 'SegundoProducto',
        descripcion: 'Lorem Secundario',
        codigo: '123fre45',
        foto:'https://m.media-amazon.com/images/I/61W7gzQ1FdL._AC_SX355_.jpg',
        precio: 2500,
        stock: 2,
    }
]
let carrito = [
    {
        id: 1,
        timestamp: Date.now(),
        producto: {
            id: 1,
            timestamp:Date.now(),
            nombre: 'PrimerProducto',
            descripcion: 'Lorem Secundario',
            codigo: '123fre45',
            foto:'https://ncgalleryfurniture.com/wp-content/uploads/2017/07/B130-582.jpg',
            precio: 2500,
            stock: 2,
        }
    }
]