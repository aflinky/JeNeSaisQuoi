import React, {useState, useContext, useEffect, useReducer} from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import reducers from '../reducers/reducers.js';
import * as types from '../actions/actionTypes';
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
    // const copyContext = useContext(MyContext)
    const [localInput, setlocalInput] = useState("");
    // ^ if using localInput, includes inputQuery string and resultsArray
    // ^ better for using useReducer?
    // console.log("copyContext", copyContext)
    const [initialState, setInitialState] = useContext(MyContext);
    const [state, dispatch] = useReducer(reducers, initialState) //whatever this initalState is RIGHT now is what is sent...
    useEffect(() => {
        console.log('heres the effect \n', "initialState: ", initialState, "\nlocalInput: ", localInput, "\nstate: ", state)
        setInitialState(state)
        // console.log('heres the effect AGAIN \n', "initialState: ", initialState, "\nlocalInput: ", localInput, "\nstate: ", state)        
    }, [state, localInput, initialState]) //listens for stuff in array
    // console.log("INITIAL STATEEEEEEE:", initialState)
    // if (state) {setInitialState(state)}
    
    // const [state, dispatch] = useReducer(reducers, {"inputQuery":"here", "displayQuery":"meow", "resultsArray": []}) //maybe need to move reducer to initialState
    // const [state, dispatch] = useReducer(reducers, setInitialState(initialState)) //doesn't actually give state for reducer to use

    const changeQuery = (e) => {
        e.preventDefault();
        setlocalInput(e.target.value);
        // setInitialState({...initialState, inputQuery: localInput}) //<<< THIS ONE SETS INITIAL STATE SUCCESSFULLY
            // setInitialState({...initialState, "inputQuery": e.target.value})
        // console.log("localInput is changing", localInput) //logs before the change, but the change happened!
            console.log("local input query changing?", localInput) //logs before the change, but the change happened!
            console.log("here's the intialState: ", initialState)
    }
    const submitQuery = e => {
        e.preventDefault();
        console.log('\n\n\n\n')
        console.log('STEP 1: clicked')
        console.log("STEP 2: localInput: ", localInput)
        // setInitialState({...state, inputQuery: localInput}); //<<< THIS ONE DOESN'T SET INITIAL STATE
        // setInitialState({...initialState, inputQuery: localInput}) //updates after remounting
        // setInitialState({inputQuery: localInput, displayQuery: "meow", resultsArray: []})
        // setInitialState({inputQuery: localInput, displayQuery: "testing", resultsArray: ['d','e']}) //JUST CHECKING that Results updates as necessary
        console.log("STEP 3: this is initialState: ", initialState) //won't be updated yet
        // setInitialState(dispatch(submitQ(localInput))) //=> throws undefined
        
        // async function d() { //DID NOT WORK, ERRORS
        //     const whatIwant = await dispatch(submitQ(localInput));
        //     // const thisIsWhatIWant = await whatIwant;
        //     console.log("IS THIS WHAT I WANT?", whatIwant)
        // }
        // d();

        const whatIwant = new Promise((resolve, reject) => {
            resolve(dispatch(submitQ(localInput)))
        })

        // dispatch(submitQ(localInput))
        whatIwant.then(() => {console.log("in promise, state:", state, "whatIWant", whatIwant); setInitialState(state)})
        // console.log(initialState)
        //STEP 4 in reducers
        console.log("STEP BEFORE 5, state: ", state)
        console.log("STEP 5: this is initialState: ", initialState) 
        // console.log("STEP 6: result of dispatch: ", result)
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