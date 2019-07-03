import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';

const Entries = styled.div `
background-color: forestgreen;
height: 90%;
width: 400px;
`

const Results = () => {
    return (
        <Entries>

        </Entries>
    )
}

export default Results;
//for now let's make one fucking huge entry then modularize into multiple smaller divs