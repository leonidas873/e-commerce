import axios from 'axios';

export const SERVER_URL = 'http://ecommerce-web.us-east-1.elasticbeanstalk.com';

export const API = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})
  
API.interceptors.request.use(req => {
    if(localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
});