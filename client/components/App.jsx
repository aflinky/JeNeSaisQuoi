import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Saved from './Saved.jsx';

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
    return (
        <Wrapper>
            <LeftWrapper>
                <Search/>
                <Saved/>
            </LeftWrapper>
            <Results/>
        </Wrapper>
    )
}

export default hot(module)(App);