import React, {useState} from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Saved from './Saved.jsx';
import MyContext from '../MyContext'

const Wrapper = styled.div `
display: flex;
justify-content: space-evenly;
height: 650px;
background-color: teal;
padding: 10px;
`

const LeftWrapper = styled.div `
display: flex;
flex-flow: column wrap;
justify-content: space-evenly;
height: 90%;
background-color: blueviolet;
padding: 10px;
`

const App = () => {
    const init = { //establish what intialState should be
        inputQuery: "",
        resultsArray: []
    }
    return (
        <MyContext.Provider value={init}>
            <Wrapper>
                <LeftWrapper>
                    <Search/>
                    <Saved/>
                </LeftWrapper>
                <Results/>
            </Wrapper>
        </MyContext.Provider>
    )
}

export default hot(module)(App);