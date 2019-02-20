import axios from 'axios';

const  KEY = 'AIzaSyC6zUJXuDGlfK36mP86cqVBbv8XhOeNEa4';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
});

