const express = require('express'); //use express
const app = express(); //call express shit "app"
const path = require('path'); //use path for correct directions
const linguee = require('linguee');



app.get('/money', (req, res) => {
    linguee
        .translate('money', { from: 'eng', to: 'fra' })
        .then(function (response) {
            console.log(response);
            res.status(200).set('Content-Type', 'application/json').send(response)
        })
        .catch(function (error) {
            console.log("oh shit, error: ", error)
            res.status(404).send("ohhhh shit")
        });
    
})

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