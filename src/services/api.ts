import axios from 'axios';

const api = axios.create({
  baseURL: 'https://634f14c14af5fdff3a6e1ec8.mockapi.io',
});

export default api;

