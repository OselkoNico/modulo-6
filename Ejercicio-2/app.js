import express from 'express';
const app = express();
const port = 3000;

import players from './routes/players.js';

app.use(express.json());
app.use('/players', players);

app.use((req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})