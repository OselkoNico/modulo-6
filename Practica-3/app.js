import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

const fakeDatabaseConnection = () => {
    return false;
}

app.use('/data', (req, res) => {
    const data = fakeDatabaseConnection();
    if (data === false) {
        return res.status(500).json({
            message: 'Database server temporarily unavailable, please try again later',
        })
    }
    res.status(200).json({
        message: 'Ok',
        data
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})