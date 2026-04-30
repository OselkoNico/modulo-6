import express from 'express';
const router = express.Router();

const teachers = [
    { name: "Pedro", apellidos: "Juanez Kap", edad: "32" },
    { name: "Juana", apellidos: "Ann Errr", edad: "56" },
    { name: "Roberto", apellidos: "Finn Artuz", edad: "61" }
]

router.get('/profesores', (req, res) => {
    if (!res.query.name) {
        return req.status(400).json({
            message: 'Incorrect query params'
        })
    }
    const devolverProfesores = teachers.filter(ejem => ejem.name === res.query.name);
    console.log(devolverProfesores)
    res.status(200).json({
        message: 'Ok',
        profesores: devolverProfesores
    })
})

export default router;