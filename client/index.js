import React, { useState, useContext } from 'react'
import { render } from 'react-dom';
import App from './components/App.jsx';
import './scss/application.scss';


    render(
            <App />,
        document.getElementById('root')
    );


//useContext
//make myContext.js
//useState in myContext.js with Provider and value
//export myContext
//use myContext with useContext
//useReducer
//make actions
//make reducers
//bundle that shit and export/import

//within input
//on submission of input
//useReducer to dispatch type: changeShit payload: e.target.value