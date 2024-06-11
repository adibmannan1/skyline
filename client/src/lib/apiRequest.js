import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'https://skyline-three.vercel.app/api',
    withCredentials: true
});

export default apiRequest;
