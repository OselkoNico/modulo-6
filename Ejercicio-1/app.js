import express from 'express';
const app = express();
const port = 3000;

import alumns from './routes/alumns.js';
import teachers from './routes/teachers.js';

app.use('/alumnos', alumns);
app.use('/profesores', teachers);

app.use((req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    })
})

app.listen(port, () => {
    console.log(`Servidor escuhando en http://localhost:${port}`)
})