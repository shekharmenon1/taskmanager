import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:5001:test', // local
  baseURL: 'http://3.27.168.243:5001', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
