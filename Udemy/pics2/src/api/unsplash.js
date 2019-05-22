import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  header: {
    Authorization: 'Client-ID 2a73ca9c4f11dceefe231dee36d55bdade46b8e4f6b5d27c38ebc54f7ee9899a'
  }
});
