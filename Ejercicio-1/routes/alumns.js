import express from 'express';
const router = express.Router();

const alumns = [
    { name: "Juan", surname: "Gomez Alvarez", age: "23" },
    { name: "Ana", surname: "Martin Chal", age: "20" },
    { name: "Antonio", surname: "Benitez Royal", age: "21" }
]

router.get('/', (req, res) => {
    if (!req.query.name) {
        return res.status(400).json({
            message: 'Incorrect query params'
        })
    }
    const devolverAlumnos = alumns.filter(elem => elem.name === req.query.name);
    console.log(devolverAlumnos)
    res.status(200).json({
        message: 'Ok',
        alumnos: devolverAlumnos
    })
})

export default router;