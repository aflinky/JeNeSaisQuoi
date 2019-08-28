import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Saved from './Saved.jsx';
import MyContext from '../MyContext';
import reducers from '../reducers/reducers.js'

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 600px;
background-color: rgb(91, 129, 255);
padding: 6px;
border-radius: 10px;
border: 4px rgb(91, 129, 255) outset;
box-shadow: 6px 6px 15px black;
margin: 10px 0;
`

const LeftWrapper = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: space-evenly;
height: 95%;
background-color: skyblue;
margin: 10px;
padding: 0px 20px;
border-radius: 10px;
border: 2px skyblue outset;
box-shadow: 6px 6px 15px black;
`

const App = () => {
  const init = { //establish what intialState should be
    displayQuery: "",
    resultsArray: [],
    reloadCount: 0
  }
  const [initalState, setInitalState] = useState(init)

  return (
    <MyContext.Provider value={[initalState, setInitalState]}>
      <Wrapper>
        <LeftWrapper>
          <Search />
          <Saved />
        </LeftWrapper>
        <Results />
      </Wrapper>
    </MyContext.Provider>
  )
}

export default hot(module)(App);