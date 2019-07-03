import React, {useState} from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Saved from './Saved.jsx';
import MyContext from '../MyContext';
import reducers from '../reducers/reducers.js'

const Wrapper = styled.div `
display: flex;
justify-content: space-evenly;
height: 650px;
background-color: mediumaquamarine;
padding: 10px;
border-radius: 10px;
`

const LeftWrapper = styled.div `
display: flex;
flex-flow: column wrap;
justify-content: space-evenly;
height: 90%;
background-color: lavender;
padding: 10px;
border-radius: 10px;
`

const App = () => {
    const init = { //establish what intialState should be
        inputQuery: "TESTINGSTRING",
        displayQuery: "",
        resultsArray: ["a", "b", "c"],
        // const [state, dispatch] = useReducer(reducers, localState),
        // reducers: reducers
    }
    const [initalState, setInitalState] = useState(init)

    return (
        <MyContext.Provider value={[initalState, setInitalState]}>
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