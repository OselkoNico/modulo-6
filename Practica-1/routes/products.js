import express from "express";
export const app = express();

export const products = [
    {id: 1, sku: 'A001', item: 'Macbook Air 13', description: 'Lorem ipsum...'},
    {id: 2, sku: 'A023', item: 'Ipad Pro', description: 'Lorem ipsum...'},
    {id: 3, sku: 'B033', item: 'Xiaomi Redmi 9', description: 'Lorem ipsum...'},
];

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Ok',
        products
    })
});