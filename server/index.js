// IMPORTERA FUNKTIONALITET
const express = require('express');
const app = express();
const cors = require('cors')
const { db } = require('./firebase');
require('dotenv').config()
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");

console.log(process.env.APIKEY);

// EXPRESS-RATE-LIMITER
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
 
app.use(limiter);

// GÖR OM POSTS TILL JSON
app.use(express.json());

// STÄLL IN PORT
const serverPort = process.env.PORT || 3005;

// SERVE PUBLIC-MAPP
app.use(express.static(__dirname + '/../build'))

// ENABLE CORS
app.use(cors())

// // MIDDLEWARE Kolla mot authorization-nyckel i header
let auth = (req, res, next) => {
    
    const APIKey = process.env.APIKEY
    
    if(req.method != 'GET'){
        
        if(APIKey === req.headers['authorization']){
            
            next()

        } else {

            res.status(403).send("You don't have the right API-key")
        }
        
    } else {
        
        next()
        
    }
}

app.use(auth)
app.use(helmet())

// ROUTES
const hamstersRoute = require('./routes/hamsters')
app.use('/api/hamsters', hamstersRoute)
const chartsRoute = require('./routes/charts')
app.use('/api/charts', chartsRoute)
const gamesRoute = require('./routes/games')
app.use('/api/games', gamesRoute)
const statsRoute = require('./routes/stats')
app.use('/api/stats', statsRoute)

// LOCALHOST
app.listen(serverPort, () => {
    console.log(`Server up and running on port ${serverPort}`);
})