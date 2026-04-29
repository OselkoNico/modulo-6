import express from 'express';
const app = express();
const port = 3000;

import products from './routes/products.js';

app.use(express.json());

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'ACME Technologies',
            version: '1.0.0',
            description: 'App test APIRest',
            contact: {
                name: 'John Doe',
                email: 'john@doe.com'
            }
        },
        servers: [
            {url: 'http://localhost:3000'}
        ],
        supportedSubmitMethods: []
    },
    apis: [
        './routes/products.js'
    ]
}

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs, {customCss: '.swagger-ui .topbar, .swagger-ui .try-out {display: none}'}))

app.use('/products', products);
app.use((req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});