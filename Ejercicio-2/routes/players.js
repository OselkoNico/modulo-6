import express from 'express';
const router = express.Router();

const players = [
    { name: "Jason", surname: "Nickolson", age: "22" },
    { name: "Mike", surname: "Jackson", age: "21" },
    { name: "Robert", surname: "Suliban", age: "20" }
]

router.get('/', (req, res) => {
    if(!req.query.name) {
        return res.status(400).json({
            message: 'Incorrect query params'
        })
    }
    const devolverJugadores = players.filter(a => a.name === req.query.name);
    console.log(devolverJugadores);
    res.status(200).json({
        message: 'Ok',
        jugadores: devolverJugadores
    })
})

router.post('/', (req, res) => {
    const { name, surname, age } = req.body;

    if(!name || !surname || age === undefined) {
        return res.status(400).json({
            message: 'Missing required fields'
        });
    }
    const ageNumber = Number(age);

    if(isNaN(ageNumber)) {
        return res.status(400).json({
            message: 'Age must be a number'
        });
    }
    const newPlayer = { name, surname, age: ageNumber };
    players.push(newPlayer);
    res.status(200).json({
        message: 'Ok',
        jugador: newPlayer
    })
})