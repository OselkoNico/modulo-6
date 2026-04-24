import express from 'express';
const app = express();
const port = 3000;

import products from './routes/products.js';

app.use('/products', products);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});