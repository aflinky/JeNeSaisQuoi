import React, {useState, useContext, useEffect, useReducer} from 'react';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import reducers from '../reducers/reducers.js';
import {submitQ} from '../actions/actions.js'

const Input = styled.input `
background: turquoise;
height: 20px;
width: 300px;
border-radius: 10px;
outline: none;
padding: 10px;
`
const Button = styled.button `
padding: 12px;
border-radius: 10px;
outline: none;
`


const Search = () => {
    const [localInput, setlocalInput] = useState("");
    const [initialState, setInitialState] = useContext(MyContext);
    const [state, dispatch] = useReducer(reducers, initialState) //whatever this initalState is RIGHT now is what is sent...

    useEffect(() => {
        console.log('heres the effect \n', "initialState: ", initialState, "\nlocalInput: ", localInput, "\nstate: ", state)
        setInitialState(state)
    }, [state]) //listens for changes in state (result of reducer) then UPDATES initialState

    const changeQuery = (e) => { //changes localInput state while typing
        e.preventDefault();
        setlocalInput(e.target.value);
    }
    const submitQuery = e => { //submits localInput as payload to SUBMIT action through dispatcher to update inital State (global state)
        e.preventDefault();
        dispatch(submitQ(localInput))
    }

    return (
        <form onSubmit={submitQuery}>
            <Input type="text" placeholder="Chercher" onChange={changeQuery}></Input>
            <Button type="submit">Chercher</Button>
        </form>
    )
}

export default Search;

// USEFUL BREAKDOWN FOR UNDERSTANDING REACT USEREDUCER HOOK
// https://reactjs.org/docs/hooks-custom.html
// function useReducer(reducer, initialState) {
//     const [state, setState] = useState(initialState);
  
//     function dispatch(action) {
//       const nextState = reducer(state, action);
//       setState(nextState);
//     }
  
//     return [state, dispatch];
//   }