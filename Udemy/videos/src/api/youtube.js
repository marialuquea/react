import axios from 'axios';

const KEY = 'AIzaSyDYwKJdBdAL1fzFU7rHgS5rQ0zA-Fs2zKY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
