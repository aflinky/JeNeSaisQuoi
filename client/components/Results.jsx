import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import SingleEntry from './SingleEntry.jsx';
import axios from 'axios';
import useAxios from 'axios-hooks'; //says you don't need this BUT IT LIES

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
    const { displayQuery, resultsArray } = initialState;

    useEffect(() => {
        console.log('FROM RESULTS COMPONENT: inital state changed')
        // setInitialState(initialState)
        
        // async function fetchData(word) {
        //     console.log(`fetching ${word} here`)
        //     const result = await axios('http://localhost:3000/dictionary/' + word);
        //     // console.log(result.data)
        //     resolve(result.data)
        // }

        function fetchData(word) {
            return new Promise((resolve, reject) => {
                axios('http://localhost:3000/dictionary/' + word, (err, data) => {
                    if (err) {
                        reject("error in axios")
                    }
                    else resolve(data)
                })
            })
        }

        const promise = fetchData("cat");
        console.log(promise)

        if (!!displayQuery) {
            // const info = fetchData(displayQuery)
            // while (info.status !== "fulfilled") {console.log("waiting")}
            console.log("info", info)
        }

    }, [initialState]) //whenever the display query updates, so should the entries

    const entries = [];
    if (resultsArray.length > 0) {
        resultsArray.forEach(x => {
            // let entry = makeEntries(x)
            entries.push(< SingleEntry el = { x } key = { Math.random() } />)
        })
    }
    // console.log(entries)

    return (
        <Entries>
            <h1>DisplayQuery: {displayQuery}</h1>
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