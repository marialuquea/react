import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        header: {
          Authorization:
            'Client-ID 0ad346e10da46f63177b7212ab5ed208a2a0fbda562e5c03783d70e68f946953'
        }
      }).
      then(response => { //callback invoked with whatever data we got from unsplash
        console.log('response.data.results: ' + response.data.results);  
      });
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
