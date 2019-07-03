import React, {useState, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import reducers from '../reducers/reducers.js'

const Input = styled.input `
background: turquoise;
height: 20px;
width: 300px;
border-radius: 10px;
outline: none;
`
const Button = styled.button `
padding: 4px;
border-radius: 10px;
outline: none;
`

const Search = () => {
    const con = useContext(MyContext)
    // const st = useState(MyContext)
    console.log(con)
    // console.log("this", useState(MyContext))
    const copyContext = useContext(MyContext)
    const {inputQuery} = useContext(MyContext)
    console.log(inputQuery)
    console.log("copyContext", copyContext)
    // const reducer = (state, action) => action;
    // const [initialState, setInitialState] = MyContext;
    const [localInputQuery, setLocalInputQuery] = useState(copyContext);
    const [localState, dispatch] = useReducer(reducers, copyContext) //local, distpact/reducer, MyContext state
    const changeQuery = (e) => {
        e.preventDefault();
        console.log('changing')
        setLocalInputQuery(e.target.value)
        console.log("this is changing", localInputQuery) //logs before the chnage, but the change happened!
    }
    const submitQuery = e => {
        e.preventDefault();
        console.log('clicked')
        console.log(localInputQuery) //full input here!
        // dispatch({type: SUBMIT, payload: inputQuery}) //should submit query and then get wiped
    }

    return (
        <form onSubmit={submitQuery}>
            <Input type="text" placeholder="Chercher" onChange={changeQuery}></Input>
            <Button type="submit">Chercher</Button>
        </form>
    )
}



export default Search;