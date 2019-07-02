import React from 'react'
import { render } from 'react-dom';
import App from './components/App.jsx';
import './scss/application.scss';
// import myContext from './myContext.js'

// const init = {
//     inputQuery: "",
//     resultsArray: []
// }

// const [initialState, setInitialState] = useState(init)
// console.log(initialState)

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