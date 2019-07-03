import React, {useState, useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';

const Input = styled.input `
background: turquoise;
height: 20px;
width: 300px;
border-radius: 10px;
outline: none;
`

const Search = () => {
    // const [initialState, setInitialState] = MyContext;
    // const [localInputQuery, setLocalInputQuery] = useState(sumbit, MyContext);
    const [localState, dispatch] = useReducer()
    const changeQuery = (e) => {
        e.preventDefault();
        setInputQuery({inputQuery: e.target.value})
        // console.log(inputQuery)
    }
    const submitQuery = e => {
        e.preventDefault();
        //dispatch({type: SUBMIT, payload: inputQuery}) //should submit query and then get wiped
    }

    return (
        <form onSubmit={submitQuery}>
            <Input type="text" placeholder="Chercher" onChange={changeQuery}></Input>
            <button type="submit">Chercher</button>
        </form>
    )
}



export default Search;