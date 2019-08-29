import React, {useState, useContext, useEffect, useReducer} from 'react';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import reducers from '../reducers/reducers.js';
import {submitQ} from '../actions/actions.js'

const Form = styled.form `
display: flex;
`
const Input = styled.input `
font-size: 12px;
height: 25px;
width: 275px;
border-radius: 10px;
border: 2px rgb(91, 129, 255) outset;
outline: none;
padding: 10px;
`
const Button = styled.button `
font-size: 12px;
padding: 7px;
border-radius: 10px;
border: 2px rgb(91, 129, 255) outset;
outline: none;
word-wrap: breakword;
cursor: pointer;
`


const Search = () => {
    const [localInput, setlocalInput] = useState("");
    const [initialState, setInitialState] = useContext(MyContext);
    const [state, dispatch] = useReducer(reducers, initialState) //whatever this initalState is RIGHT now is what is sent...

    useEffect(() => {
        // console.log('heres the effect \n', "initialState: ", initialState, "\nlocalInput: ", localInput, "\nstate: ", state)
        setInitialState(state)
    }, [state]) //listens for changes in state (result of lightcyanucer) then UPDATES initialState

    const changeQuery = (e) => { //changes localInput state while typing
        e.preventDefault();
        setlocalInput(e.target.value);
    }
    const submitQuery = e => { //submits localInput as payload to SUBMIT action through dispatcher to update inital State (global state)
        e.preventDefault();
        dispatch(submitQ(localInput))
    }

    return (
        <Form onSubmit={submitQuery}>
            <Input type="text" placeholder="Search : chercher" onChange={changeQuery}></Input>
            <Button type="submit">Translate : Traduire</Button>
        </Form>
    )
}

export default Search;

// USEFUL BREAKDOWN FOR UNDERSTANDING REACT USEREDUCER HOOK
// https://reactjs.org/docs/hooks-custom.html
// function useReducer(Reducer, initialState) {
//     const [state, setState] = useState(initialState);
  
//     function dispatch(action) {
//       const nextState = Reducer(state, action);
//       setState(nextState);
//     }
  
//     return [state, dispatch];
//   }