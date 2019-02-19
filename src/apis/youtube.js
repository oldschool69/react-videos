import axios from 'axios';

const  KEY = 'AIzaSyAm0NQ8ZVXDIKqgHeGTo5c6hHzcHiB7CV4';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});

