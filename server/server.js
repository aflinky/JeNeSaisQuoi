const express = require('express'); //use express
const app = express(); //call express shit "app"
const path = require('path'); //use path for correct directions
const linguee = require('linguee');
const ling = require('./scraper'); //already uses body-parser?
// const apiKey = process.env.REACT_APP_YANDEX_API_KEY
// const yandexTranslator = require('yandex-translator')(apiKey);


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/dictionary/:word', ling.getStuff)


console.log('process var: ', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the root route '/'
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
}

app.listen(3000, () => { console.log("listening on port 3000") }); //listens on port 3000 -> http://localhost:3000/