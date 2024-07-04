// src/api/axios.js
import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust the baseURL as needed
});

export default Axios;