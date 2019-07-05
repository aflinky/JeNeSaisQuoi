import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import SingleEntry from './SingleEntry.jsx';
import axios from 'axios'; //says you don't need this BUT IT LIES
import useAxios from 'axios-hooks';

const Query = styled.h1`
margin-top: 20px;
`
const Entries = styled.div`
background-color: lightcyan;
height: 95%;
width: 100%;
display: flex;
flex-flow: column wrap;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
border: 2px lightskyblue outset;
margin: 10px;
padding: 0px 20px;
box-shadow: 6px 6px 15px black;
`
const Waiting = styled.p`
background-color: white;
border-radius: 10px;
border: 2px lightskyblue outset;
margin-top: 36%;
padding: 10px;
`
const NoMatch = styled.p`
background-color: white;
border-radius: 10px;
border: 2px lightskyblue outset;
margin-top: 28%;
padding: 10px;
`

const Results = () => {
    const [initialState, setInitialState] = useContext(MyContext);
    const { displayQuery, resultsArray } = initialState;
    useEffect(() => {
        console.log('FROM RESULTS COMPONENT: inital state changed')
    }, [initialState]) //whenever the display query updates, so should the entries

    const [{ data, loading, error }] = useAxios(
        // 'http://localhost:3000/dictionary/' + displayQuery
    )
    if (error) { console.log("error", error) }
    { console.log("data", data) }

    const entries = [];
    if (resultsArray.length > 0) {
        resultsArray.forEach(x => {
            // let entry = makeEntries(x)
            entries.push(< SingleEntry el={data} key={Math.random()} />)
        })
    }

    return (
        <Entries>
            <Query>{displayQuery}</Query>
            {
                error && !data && !displayQuery &&
                <Waiting>Waiting for you to search!</Waiting>
            }
            <br />
            <p>{JSON.stringify(data)}</p>
            {
                displayQuery && error &&
                <NoMatch>Sorry, nothing matched your search!</NoMatch>
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