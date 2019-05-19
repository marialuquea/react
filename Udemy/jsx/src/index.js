// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
/*
 a react component is a function or a class
 that produces HTML to show to the user using JSX
 and handles feedback from the user using event handlers
*/
const App = () => { // a function based component
  return <div>Hello World!</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />, // first argument, the const App but in HTML form
  document.querySelector('#root') //second argument, where to put the html
);
