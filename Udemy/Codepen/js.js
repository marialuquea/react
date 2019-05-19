/* React is split into two different libraries
 * React knows what a component is and how to make components work together
 * ReactDOM knows how to take a component and make it show up in the DOM, as some HTML
*/

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
}

class App extends React.Component { <!--A JavaScript class-->
  state = { styleOne: {}, styleTwo: {} };

  onMouseMove = (event) => { //event handler, detect user interaction
    this.setState({
      styleOne: transform(-event.clientX / event.clientY), //respond to user interaction
      styleTwo: transform(event.clientX / event.clientY)
    })
  }

  render() {
    // THIS IS JSX
    return <div onMouseMove={this.onMouseMove}>
      <div className="panel" style={this.state.styleOne} />
      <div className="panel" style={this.state.styleTwo} />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
