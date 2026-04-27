import express from 'express';
const router = express.Router();

const products = [
    {sku: 'A001', item: 'Macbook Air 13', brand: 'Apple', description: 'Lorem ipsum...'},
    {sku: 'A023', item: 'Ipad Pro', brand: 'Apple', description: 'Lorem ipsum...'},
    {sku: 'B033', item: 'Xiaomi Redmi 9', brand: 'Xiaomi', description: 'Lorem ipsum...'},
]

router.get('/search', (req, res) => {
    if(!req.query.brand) {
        return res.status(400).json({
            message: 'Incorrect query params'
        })
    }
    const selectProducts = products.filter(elem => elem.brand === req.query.brand);
    console.log(selectProducts)
    res.status(200).json({
        message: 'Ok',
        products: selectProducts
    })
});

router.post('/', (req, res) => {
    if(!req.body) {
        return res.status(400).json({
            message: 'Product data mandatory'
        })
    }
    products.push(req.body);
    res.status(200).json({
        message: 'Ok',
        product: products[products.length - 1]
    })
})

router.put('/:sku', (req, res) => {
    if(!req.body || !req.params.sku) {
        return res.status(400).json({
            message: 'Product data or sku param mandatory'
        })
    }
    const productIndex = products.findIndex(elem => {
        return elem.sku === req.params.sku;
    })
    if (productIndex < 0) {
        return res.status(404).json({
            mensaje: 'No se encontró ningún producto con ese sku'
        })
    }
    for (const property in req.body) {
        console.log(property);
        products[productIndex][property] = req.body[property]
    }
    res.status(200).json({
        message: 'Ok',
        product: products[productIndex]
    })
})

router.delete('/:sku', (req, res) => {
    if (!req.params.sku) {
        return res.status(400).json({
            message: 'sku params mandatory'
        })
    }
    const productIndex = products.findIndex(elem => {
        return elem.sku === req.params.sku;
    })
    if (productIndex < 0) {
        return res.status(404).json({
            mensaje: 'No se encontró ningún producto con ese sku'
        })
    }
    const deletedProduct = products.splice(productIndex, 1);
    res.status(200).json({
        message: 'Ok',
        deletedProduct
    })
})

export default router;