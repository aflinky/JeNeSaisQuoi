import * as types from './actionTypes.js';

export const submitQ = data => ({
    type: types.SUBMIT,
    payload: data
});