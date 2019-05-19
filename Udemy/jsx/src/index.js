// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

/*
function getButtonText() {
  return 'Click on me!';
}
*/

// Create a react component
/*
 a react component is a function or a class
 that produces HTML to show to the user using JSX
 and handles feedback from the user using event handlers
*/
const App = () => { // a function based component

  const buttonText = 'Click Me!';
  //const whatever = ['Hi', 'There'];
  //const buttonText = { text: 'Click me!'};  WILL NOT WORK unless you call it by buttonText.text
  const style = { backgroundColor: 'blue', color:'white' };

  return ( // use brackets () for multiline returns
    <div>
      <label for="name" className="label">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />, // first argument, the const App but in HTML form
  document.querySelector('#root') //second argument, where to put the html
);
