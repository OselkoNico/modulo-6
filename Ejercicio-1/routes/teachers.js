import express from 'express';
const router = express.Router();

const teachers = [
    { name: "Pedro", apellidos: "Juanez Kap", edad: "32" },
    { name: "Juana", apellidos: "Ann Errr", edad: "56" },
    { name: "Roberto", apellidos: "Finn Artuz", edad: "61" }
]

router.get('/', (req, res) => {
    if (!req.query.name) {
        return res.status(400).json({
            message: 'Incorrect query params'
        })
    }
    const devolverProfesores = teachers.filter(ejem => ejem.name === req.query.name);
    console.log(devolverProfesores)
    res.status(200).json({
        message: 'Ok',
        profesores: devolverProfesores
    })
})

export default router;