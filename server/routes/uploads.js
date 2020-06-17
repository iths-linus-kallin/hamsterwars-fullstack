const {Router} = require('express')
const { db } = require('../firebase');
const _ = require('underscore');

const router = new Router();

// TOP 5

router.post('/top', async (req, res) => {

    try{
        let hamsters = []
        
        let snapshot = await db.collection('hamsters').get()
            
        snapshot.forEach(hamster => {
            hamsters.push(hamster.data());
        });

        let sortedHamsters = _.sortBy(hamsters, 'wins')
        let topFiveTemp = sortedHamsters.slice(-5)
        let topFive = topFiveTemp.reverse()
        
        res.status(200).send({topFiveHamsters: topFive})
    }
    catch(err){
        console.error(err);
    }
})

module.exports = router