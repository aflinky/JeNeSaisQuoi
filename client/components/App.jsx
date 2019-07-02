import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const Title = styled.div `
border: 1px solid black;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.h1 `
color: purple;
`

const App = () => {
    return (
        <Wrapper>
            <Title>Bienvenue dans l'appli !</Title>
        </Wrapper>
    )
}

export default App;