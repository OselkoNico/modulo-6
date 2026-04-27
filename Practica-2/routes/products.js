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

export default router;