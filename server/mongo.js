const express = require('express');
const request = require('request');
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
                res.status(200).send(results);
            }
        })
    },
    post: (req, res) => {
        SavedWord.create(req.body, (err) => {
            if (err) {
                console.log("Error in creating message:", err)
                res.status(400).send("Error sending message")
            }
            else { res.status(200).send("good job") }
        })
    }
}

module.exports = mongo;