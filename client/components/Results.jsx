import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import MyContext from '../MyContext.js';
import SingleEntry from './SingleEntry.jsx';
import axios from 'axios'; //says you don't need this BUT IT LIES
import useAxios from 'axios-hooks';

const Query = styled.h1`
margin-top: 20px;
font-family: font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-shadow: none;
`
const Entries = styled.div`
background-color: lightcyan;
height: 95%;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
border: 2px lightskyblue outset;
margin: 10px;
padding: 0px 20px 10px;
box-shadow: 6px 6px 15px black;
overflow: scroll;
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
const Loading = styled.p`
background-color: white;
border-radius: 10px;
border: 2px lightskyblue outset;
margin-top: 28%;
padding: 10px;
`

const Results = () => {
    const [initialState, setInitialState] = useContext(MyContext);
    const { displayQuery, resultsArray } = initialState;
    const [{ data, loading, error }] = useAxios(
        'http://localhost:3000/dictionary/' + displayQuery
    )
    let entries = [];
    useEffect(() => {
        console.log('FROM RESULTS COMPONENT: inital state changed')
        entries = [];
    }, [initialState, error, data]) //whenever the display query updates, so should the entries

    // if (error) { console.log("error", error) }
    // { console.log("data", data) }
    if (data) {
        // console.log("data.query: ", data.query)
        // console.log("data.words.translations: ", data.words.translations)
        if (data.words) {
            for (let piece of data.words) {
                console.log(piece.term.toLowerCase())
                console.log(displayQuery.toLowerCase())
                // console.log("this", piece.term.toLowerCase().match(displayQuery.toLowerCase()).length)
                // console.log("HERERERERERE",(piece.term.toLowerCase().match(displayQuery.toLowerCase())))
                if (!(piece.term.toLowerCase().match(displayQuery.toLowerCase())) && !(piece.term.toLowerCase().match(displayQuery.toLowerCase()))) continue
                console.log("piece", piece)
                console.log("piece.translations", piece.translations)
                for (let entry of piece.translations) {
                    let tempObj = {};
                    tempObj.term = piece.term;
                    tempObj.type = piece.type;
                    tempObj.term2 = entry.term;
                    tempObj.type2 = entry.type;
                    tempObj.examples = entry.examples;
                    entries.push(tempObj)
                }
            }
        }
    }


    const singals = [];
    if (entries.length > 0) {
        entries.forEach(x => {
            singals.push(<br />)
            singals.push(< SingleEntry el={JSON.stringify(x)} key={Math.random()*100} />)
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
            {
                displayQuery && error && !data && !loading &&
                <NoMatch>Sorry, nothing matched your search!</NoMatch>
            }
            {
                loading && 
                <Loading>Loading!</Loading>
            }
            {
                entries.length > 0 &&
                singals
            }
        </Entries>
    )
}

export default Results;
//for now let's make one fucking huge entry then modularize into multiple smaller divs