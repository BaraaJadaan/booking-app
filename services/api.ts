import axios from 'axios';

const api = axios.create({
  baseURL: 'http://atlas.weno.travel',
  headers: {
    'x-api-key': 'TEST_KEY',
  },
});
export default api;
