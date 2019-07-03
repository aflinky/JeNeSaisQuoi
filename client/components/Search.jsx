import React, {useState, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import reducers from '../reducers/reducers.js';
import * as types from '../actions/actionTypes';

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
    // const {inputQuery, resultsArray} = useContext(MyContext)
    const copyContext = useContext(MyContext)
    const [localState, setLocalState] = useState(copyContext)
    // ^ if using localState, includes inputQuery string and resultsArray
    // ^ better for using useReducer?

    
    // console.log("inputQuery", inputQuery)
    // const [userInput, setUserInput] = useState("");
    // ^ else simply make userInput the relevant state
    const [state, dispatch] = useReducer(reducers, localState) //maybe need to move reducer to initialState

    const changeQuery = (e) => {
        e.preventDefault();
        // console.log('changing')
        // setUserInput(e.target.value)
        console.log("COPYCONTEXT:", copyContext)
        setLocalState({...localState, "inputQuery": e.target.value})
        // console.log("userInput is changing", userInput) //logs before the change, but the change happened!
        console.log("localState is changing", localState) //logs before the change, but the change happened!
    }
    const submitQuery = e => {
        e.preventDefault();
        console.log('STEP 1: clicked')
        console.log("STEP 2: localState.inputQuery:", localState.inputQuery)
        //when using localState
        console.log("STEP 3: this is localState: ", localState) // < gives inputQuery and resultsArray
        dispatch({type: types.SUBMIT, payload: localState.inputQuery})
        //STEP 4 in reducers
        console.log("STEP 5: this is localState: ", localState) 
        //need to set MyContext state
    }

    return (
        <form onSubmit={submitQuery}>
            <Input type="text" placeholder="Chercher" onChange={changeQuery}></Input>
            <Button type="submit">Chercher</Button>
        </form>
    )
}



export default Search;


// https://reactjs.org/docs/hooks-custom.html
// function useReducer(reducer, initialState) {
//     const [state, setState] = useState(initialState);
  
//     function dispatch(action) {
//       const nextState = reducer(state, action);
//       setState(nextState);
//     }
  
//     return [state, dispatch];
//   }