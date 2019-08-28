require('dotenv').config();
const mongoose = require('mongoose');

const flyingmongoosedb = mongoose.connect(process.env.DB_URI,
    { useNewUrlParser: true, useFindAndModify: false },
    (err, client) => {
        if (err) { console.log("error: ", err) }
        // console.log(client)
        console.log("connected to mongodb")
    })

module.exports = flyingmongoosedb;