import express from 'express';
const router = express.Router();

const users = [
    {id: "1", name: 'Juan', surname: 'Lopez'},
    {id: "2", name: 'Laura', surname: 'Gomez'},
    {id: "3", name: 'Carlos', surname: 'Perez'},
];

router.get('/:id', (req, res) => {
    const product = users.filter(el => req.params.id === el.id);
    res.status(200).json({
        message: 'Ok',
        product: product[0]
    })
});

export default router;