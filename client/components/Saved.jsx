import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../MyContext.js';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import useAxios from 'axios-hooks';

const SavedData = styled.div`
background-color: whitesmoke;
height: 80%;
width: 400px;
border-radius: 10px;
border: 2px rgb(91, 129, 255) outset;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow: scroll;
`
const Entry = styled.div`
background-color: lightcyan;
height: fit-content;
width: 80%;
margin: 4px;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
border: 2px lightblue solid;
`
const Key = styled.p`
font-weight: 750;
`
const Span = styled.span`
font-weight: 400;
`
const Button = styled.button`
border-radius: 4px;
width: 75px;
border: 2px skyblue solid;
outline: none;
cursor: pointer;
`

const Saved = () => {
  const [initialState, setInitialState] = useContext(MyContext)
  const { reloadCount } = initialState;
  let [{ data, loading, error }] = useAxios(
    'http://localhost:3000/words/'
  )
  let savedEntries = [];
  useEffect(() => {
    if (reloadCount>0) data = []
  }, [reloadCount])

  const deleteWord = e => { //submits localInput as payload to SUBMIT action through dispatcher to update inital State (global state)
    e.preventDefault();
    const deletePair = JSON.parse(e.target.id)
    try {
      const response = axios.delete('http://localhost:3000/words', { "term": deletePair.term });
      setInitialState({ ...initialState, reloadCount: reloadCount+1 })
      // console.log('👉 Returned data:', response);
    }
    catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }

  if (data && data !== "Sorry, nothing in this database") {
    // console.log(data)
    for (let entry of data) {
      let examples = []
      for (let x of entry.examples) {
        // console.log(x)
        examples.push(<p key={"examples" + Math.random() * 100}>{x.from}</p>)
        examples.push(<p key={"examples" + Math.random() * 100}>{x.to}</p>)
        examples.push(<br />)
      }
      // console.log(entry)
      savedEntries.push(<Entry>
        <Key>ENG: <Span>{entry.term}</Span></Key>
        <pre><Key>   type: <Span>{entry.type}</Span></Key></pre>
        <Key>FR: <Span>{entry.term2}</Span></Key>
        <pre><Key>   type: <Span>{entry.type2}</Span></Key></pre>
        <br />
        {
          examples.length > 0 &&
          examples
        }
        <Button onClick={deleteWord} id={JSON.stringify(entry)}>DELETE ME</Button>
      </Entry>)
    }
  }

  return (
    <SavedData>
      {
        savedEntries.length > 0 &&
        savedEntries
      }
    </SavedData>
  )
}

export default Saved;