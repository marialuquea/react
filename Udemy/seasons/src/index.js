import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
  /*
  constructor(props) { // good to do one-time setup
    super(props); //initialise
    // this is the only time we do direct assignment
    // to this.state
    // always call setState sometime after this
    this.state = { lat: null, errorMessage: '' };
  }
  */

  state = { lat: null, errorMessage: '' }; //equivalent to defining a constructor and initialising


  //content visible on screen
  // good for data-loading
  componentDidMount() {
    console.log('My component was rendered to the screen');

    // call getPosition and give a callback
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }


  // sit and wait for updates
  // good to do more data-loading when state/props change
  componentDidUpdate() {
    console.log('My component was just updated - it re-rendered!');
  }


  // React says we have to define render!!
  // must be called render and return some amount of jsx
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
