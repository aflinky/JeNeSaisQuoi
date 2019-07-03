'use strict';

const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const linguee = require('linguee');


const ling = {
    getMoney: (req, res) => {
        linguee
            .translate('be', { from: 'eng', to: 'fra' })
            .then(function (response) {
                // console.log(response);
                res.status(200).set('Content-Type', 'application/json').send(response)
            })
            .catch(function (error) {
                console.log("oh shit, error: ", error)
                res.status(404).send("ohhhh shit")
            });
    }
}

module.exports = ling;