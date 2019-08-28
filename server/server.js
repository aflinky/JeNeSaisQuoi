const express = require('express'); //use express
const app = express(); //call express shit "app"
const path = require('path'); //use path for correct directions
const linguee = require('linguee');
const ling = require('./scraper'); //already uses body-parser?
const mongo = require('./mongo.js')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// let connectedToDB = false;

// mongoose.connection.once('open', () => {
//     console.log('Connected with MongoDB savedWords');
// });


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/dictionary/:word', ling.getStuff);


app.post('/words', bodyParser.json(), mongo.post);
app.get('/words', mongo.show);
app.delete('/words', bodyParser.json(), mongo.delete);


// console.log('process var: ', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the root route '/'
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
}
// const port = process.env.PORT 
app.listen(3000, () => { console.log(`listening on port 3000`) }); //listens on port 3000 -> http://localhost:3000/