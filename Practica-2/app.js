import express from 'express';
const app = express();
const port = 3000;

import products from './routes/products.js';

app.use('/products', products);
app.use((req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})