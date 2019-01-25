import axios from 'axios';

const  KEY = 'AIzaSyBxBmbEEHNNYjHAHObTT5vvXckX3a-YNAk';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});

