const { Router } = require('express')
const { db } = require('./../firebase');

const router = new Router();

// GET ALL

router.get('/', async (req, res) => {
    
    try{
        let hamsters = []

        let snapshot = await db.collection('hamsters').get()

        snapshot.forEach(hamster => {
            hamsters.push(hamster.data())
        })
        
        res.status(200).send({ allHamsters: hamsters })
    }
    catch(err){
        console.error(err);
    }
})

// GET RANDOM

router.get('/random', async (req, res) => {

    try{
        let hamsters = await db.collection("hamsters").get()
        let randId = Math.floor(Math.random()*hamsters._size)
        
        let snapshot = await db.collection('hamsters').where("id", "==", randId).get()
        
            snapshot.forEach(hamster => {

                res.status(200).send({ randomHamster: hamster.data()})            
            });
    }
    catch(err){
        console.error(err);
    }
})

// GET ONE

router.get('/:id', async (req, res) => {

    try{
        let id = parseInt(req.params.id)
        let hamsters = []
        
        let snapshot = await db.collection('hamsters').where("id", "==", id).get()
        
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        } 

        snapshot.forEach(hamster => {
            hamsters.push(hamster.data());
        });

        res.status(200).send({ specificHamster: hamsters })
    }
    catch(err){
        console.error(err);
    }
})

// UPDATE GAMES / WINS / DEFEATS

router.put('/:id/results', async (req, res) => {
    
    let id = parseInt(req.params.id)

    try {
        
        let results = await db.collection('hamsters').where("id", "==", id).get()
        results.forEach(hamster => {

            let data = hamster.data()
            let wins = data.wins + req.body.wins
            let defeats = data.defeats + req.body.defeats

            db.collection('hamsters').doc(hamster.id).update({
                games: data.games++,
                wins: wins,
                defeats: defeats
            })
            .then(() => {
                res.status(200).send('Hamster wins/defeats/games updated!')
            })
        })
    }
    catch(err){
        console.log(err);
        
    }
        
})

// POST HAMSTER

router.post('/new', async (req, res) => {
    
    try {
        let hamsters = []
        let results = await db.collection('hamsters').get()
        
        results.forEach(hamster => {

            hamsters.push(hamster.data())
        })
        let sortedHamsters = _.sortBy(hamsters, 'id')
        let highestId = sortedHamsters.slice(-1)
        let newId = []
        for(id of highestId){
            newId.push(id.id) 
        }
            

        db.collection('games').doc().set({
            id: parseInt(newId)+1,
            name: req.body.name,
            age: req.body.age,
            favFood: req.body.favFood,
            loves: req.body.loves,
            imgName: req.body.imgName,
            games: 0,
            wins: 0,
            defeats: 0
        })
        
    }
    catch(err){
        console.log(err);
        
    }
        
})

module.exports = router