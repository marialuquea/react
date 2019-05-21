import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props); //initialise

    // this is the only time we do direct assignment
    // to this.state
    // always call setState sometime after this
    this.state = { lat: null, errorMessage: '' };

    // call getPosition and give a callback
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate!!!
        // dones not occur while the constructor is running
        // will run at some point in time in the future
        this.setState({ lat: position.coords.latitude });
      },
      err => {  // second callback
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //content visible on screen
  componentDidMount() {
    console.log('My component was rendered to the screen');
  }

  // sit and wait for updates
  componentDidUpdate() {
    console.log('My component was just updated - it re-rendered!');
  }

  // React says we have to define render!!
  // must be called render and return some amount of js
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lat: {this.state.lat}</div>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
