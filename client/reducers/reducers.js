import {useContext} from 'react';
import * as types from '../actions/actionTypes';
import MyContext from '../MyContext.js';

const reducers = (initialState=useContext(MyContext).initialState, action) => {
    switch (action.type) {
        case types.SUBMIT: {
            // console.log('STEP 4a: inside the SUBMIT reducer, INITIALSTATE:', initialState)
            // console.log('STEP 4b: inside the SUBMIT reducer, ACTION.TYPE:', action.type)
            // console.log('STEP 4c inside the SUBMIT reducer, ACTION.PAYLOAD:', action.payload)
            return { displayQuery: action.payload, resultsArray: []};
        };
        default:
            console.log("defaulting")
            return initialState;
    }
};

export default reducers;