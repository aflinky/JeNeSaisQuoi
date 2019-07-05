import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import axios from 'axios';
import useAxios from 'axios-hooks';

const Entry = styled.div`
background-color: lightblue;
height: fit-content;
width: 80%;
margin: 4px;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
`
const Key = styled.p`
font-weight: 750;
`
const Span = styled.span`
font-weight: 400;
`

const SingleEntry = (props) => { //takes props (one entry with relevant info)
    props = JSON.parse(props.el)
    // console.log("EXAMPLES", props.examples)
    const ex = [];
    for (let x of props.examples) {
        console.log("X", x)
        ex.push(<p key={"ex"+Math.random()*100}>{x.from}</p>)
        ex.push(<p key={"ex"+Math.random()*100}>{x.to}</p>)
    }
    useEffect(() => {
        // console.log
    }, [])
    const saveWord = e => { //submits localInput as payload to SUBMIT action through dispatcher to update inital State (global state)
        e.preventDefault();
        console.log(e.target.info+"clicked!")
        console.log(props)
        
    }
    return (
        <Entry>
            <Key>ENG: <Span>{props.term}</Span></Key>
            <pre><Key>   type: <Span>{props.type}</Span></Key></pre>
            <Key>FR: <Span>{props.term2}</Span></Key>
            <pre><Key>   type: <Span>{props.type2}</Span></Key></pre>
            {
                ex.length>0 &&
                ex
            }
            <button onClick={saveWord}>SAVE ME</button>
        </Entry>
    )
}

export default SingleEntry;
//for now let's make one fucking huge entry then modularize into multiple smaller divs