import React from 'react';

class SearchBar extends React.Component {

  state = { term: ''};
  // if term isn't empty, the text will show when the page renders

  onFormSubmit = (event) => {
    event.preventDefault(); // so the page doesn't refresh every time the user searches something
    // arrow functions automatically bind the value of this for all the code
    // inside the function
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              onClick={(event) => console.log('Input was clicked')}
              value = {this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
