import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: {'Authorization': sessionStorage.getItem('jwtToken')}
});

export default myAxios;