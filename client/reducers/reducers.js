import react, {useContext} from 'react';
import * as types from '../actions/actionTypes';
import MyContext from '../MyContext.js';

const initialState = { //establish what intialState should be
    inputQuery: "where am i",
    resultsArray: []
}

const reducers = (state=initialState, action) => {
    switch (action.type) {
        case types.SUBMIT: {
            console.log('STEP 4a: inside the SUBMIT reducer, STATE:', state)
            console.log('STEP 4b: inside the SUBMIT reducer, ACTION.TYPE:', action.type)
            return {
                inputQuery: "merp", //changes input (ideally wipes it clean)
                results: [] //makes fetch and spits out array of entry objects or error
            }
        };
        default:
            return state;
    }
};

export default reducers;