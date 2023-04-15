import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params:{
    api_key: '02a1ba0aa97c351517a2a3b32a072cd2',
    language: 'es-ES',
  },
});

export default movieDb;
