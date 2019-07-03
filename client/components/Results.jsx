import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import SingleEntry from './SingleEntry.jsx';

const Entries = styled.div `
background-color: lightgreen;
height: 90%;
width: 100%;
display: flex;
flex-flow: column wrap;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
`

const Results = () => {
    
    const {inputQuery, resultsArray} = useContext(MyContext)
    let entries = [];
    if (resultsArray.length>0) {
        console.log('heck yes! results!')
        entries = resultsArray.map(x => <SingleEntry el={x}/>)
    }

    return (
        <Entries>
            <h1>{inputQuery}</h1>
            {
                resultsArray.length === 0 && 
                <p>Currently no search!</p>
            }
            {
                resultsArray.length > 0 && 
                entries
            }
        </Entries>
    )
}

export default Results;
//for now let's make one fucking huge entry then modularize into multiple smaller divs