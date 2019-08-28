// const express = require('express');
// const request = require('request');
const flyingmongoosedb = require('./cloudmongo');
const SavedWord = require('./savedWord-model.js')

const mongo = {
    show: (req, res) => {
        SavedWord.find({}, (err, results) => {
            if (err) {
                console.log("ohhh no, error with showing", err)
                res.status(404).send("Oh no, error")
            }
            if (!results.length) {
                return res.status(200).send("Sorry, nothing in this database")
            }
            else {
                res.status(200).set('Content-Type', 'application/json').send(JSON.stringify(results));
            }
        })
    },
    post: (req, res) => {
        // console.log("in post", req.body)
        SavedWord.create(req.body, (err) => {
            if (err) {
                console.log("Error in creating word:", err)
                res.status(400).send("Error sending word")
            }
            else { res.status(200).send("good job") }
        })
    },
    delete: (req, res) => {
        SavedWord.findOneAndDelete(req.body, (err) => {
            if (err) {
                console.log("Error in deleting word:", err)
                res.status(400).send("Error deleting word")
            }
            else { res.status(200).send("good job, you deleted it") }
        })
    }
}

module.exports = mongo;