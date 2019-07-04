import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import SingleEntry from './SingleEntry.jsx';
import axios from 'axios';
import useAxios from 'axios-hooks'
// import reactaxios from 'react-axios';

const Entries = styled.div`
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
    const [initialState, setInitialState] = useContext(MyContext);
    const { inputQuery, displayQuery, resultsArray } = initialState;
    useEffect(() => {
        console.log('FROM RESULTS COMPONENT: inital state changed')
        setInitialState(initialState)

        async function fetchData() {
            const result = await axios('http://slack-server.elasticbeanstalk.com/calendar/NY/12');
            console.log(result.data)
            
        }
        fetchData();

        // const translate = async () => {
        //     const cheese = await axios('http://localhost:3000/cheese');
        //     console.log(cheese)
        // }
        // translate();

        // const translate = async () => {
            
            // fetch('http://localhost:3000/:word', {
            //     method: 'GET',
            //     params: {word:"cheese"}
            // })

            // const url = "http://localhost:3000/"
            // fetch(url, {word: "cheese"})

        // .then((response) => response.json)
        // .then((jason) => console.log(jason))
        // }
        // translate();

        // axios.get('http://localhost:3000/cheese').then((response) => {console.log(response)})

    }, [initialState])

    // const [{ data, loading, error }, refetch] = useAxios(
    //     'http://localhost:3000/cheese'
    //   )
     
    //   if (loading) console.log("loading")
    //   if (error) console.log("loading")
    //   if (data) console.log("cheese", data)

    // const translate = async () => {
    //     const cheese = await axios('http://localhost:3000/cheese');
    //     console.log(cheese)
    // }
    // translate();

    let entries = [];
    if (resultsArray.length > 0) {
        console.log('heck yes! results!')
        entries = resultsArray.map(x => <SingleEntry el={x} key={Math.random()} />)
    }

    return (
        <Entries>
            <h1>InputQuery: {inputQuery}, DisplayQuery: {displayQuery}</h1>
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