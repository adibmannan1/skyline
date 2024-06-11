import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'https://skyline-flame.vercel.app/api',
    withCredentials: true
})

export default apiRequest