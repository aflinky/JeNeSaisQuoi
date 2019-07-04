'use strict';

const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const linguee = require('linguee');


const ling = {
    getStuff: (req, res) => {
        const {word} = req.params;
        console.log("word", word);
        linguee
            .translate(word, { from: 'eng', to: 'fra' })
            .then(function (response) {
                res.status(200).set('Content-Type', 'application/json').send(response)
            })
            .catch(function (error) {
                console.log("oh shit, error: ", error)
                res.status(404).send("ohhhh shit")
            });
    }
}

module.exports = ling;