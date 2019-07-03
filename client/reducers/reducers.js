import react, {useContext} from 'react';
import * as types from '../actions/actionTypes';
import MyContext from '../MyContext.js';
// const linguee = require('linguee');
// import linguee from 'linguee'
// const cheerio = require('cheerio');
// const request = require('request');
// const express = require('express');

// const initialState = { //establish what FAKE intialState should be //only used for testing
//     inputQuery: "where am i",
//     displayQuery: "idk",
//     resultsArray: ["fuck"]
// }
// const {intialState} = useContext(MyContext) //should use real inital context to start

const reducers = (initialState=useContext(MyContext).initialState, action) => {
    switch (action.type) {
        case types.SUBMIT: {

            const newState = Object.assign({
                inputQuery: "EMPTY", //changes input (ideally wipes it clean) OR leaves it?
                displayQuery: action.payload,
                resultsArray: ['x'] //makes fetch and spits out array of entry objects or error
            })
            console.log('STEP 4a: inside the SUBMIT reducer, INITIALSTATE:', initialState)
            console.log('STEP 4b: inside the SUBMIT reducer, ACTION.TYPE:', action.type)
            console.log('STEP 4c inside the SUBMIT reducer, ACTION.PAYLOAD:', action.payload)
            console.log('STEP 4.d inside the SUBMIT reducer, newState',newState)
            // setInitialState(newState)
            return newState;
        };
        default:
            return state;
    }
};

export default reducers;