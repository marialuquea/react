import React from 'react';

class SearchBar extends React.Component {

  state = { term: ''};
  // if term isn't empty, the text will show when the page renders

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}
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
