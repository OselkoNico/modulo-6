import express from 'express';
const app = express();
const port = 3000;

import products from './routes/products.js';
import users from './routes/users.js';

app.use('/products', products);
app.use('/users', users);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});