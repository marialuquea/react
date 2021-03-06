import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('deep learning'); //default search term of DL in homepage
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response); //the response when we search for something
    // but from the response we are interested in response.data.items
    // because it contains a list of results for what we're looking
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] //default video as soon as user does a search
    });
  };

  onVideoSelect = (video) => {
    //console.log('From app: ', video);
    this.setState({ selectedVideo: video }); // selected video by user appears
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
