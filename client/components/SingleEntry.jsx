import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import axios from 'axios';

const Entry = styled.div `
background-color: lightblue;
height: 100px;
width: 400px;
margin: 4px;
padding: 10px;
border-radius: 10px;
`

const SingleEntry = (props) => { //takes props (one entry with relevant info)
    //make the props what I want
    console.log("these are SingleEntry props")
    useEffect(() => {
        // console.log
    }, [])
    return (
        <Entry>
            <p>{JSON.stringify(props.el)}</p>
        </Entry>
    )
}

export default SingleEntry;
//for now let's make one fucking huge entry then modularize into multiple smaller divs