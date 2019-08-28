import {useContext} from 'react';
import * as types from '../actions/actionTypes';
import MyContext from '../MyContext.js';

const reducers = (initialState=useContext(MyContext).initialState, action) => {
    switch (action.type) {
        case types.SUBMIT: {
            return { displayQuery: action.payload, resultsArray: []};
        };
        default:
            console.log("defaulting")
            return initialState;
    }
};

export default reducers;