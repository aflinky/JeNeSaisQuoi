import * as types from '../actions/actionTypes';

//import initialState from MyContext

const reducers = (state=initialState, action) => {
    switch (action.type) {
        case types.SUBMIT: {
            return {
                inputQuery = "", //clears input
                results = [] //should be something here
            }
        };
        default:
            return state;
    }
};

export default reducers;