import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://ecommerce-web.us-east-1.elasticbeanstalk.com/',
    headers: {
        common: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        post: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response.status === 401) {
            // თუ ვადაგასული თოქენია, წაშალოს
            if (localStorage.getItem('token')) localStorage.removeItem('token');
            // არასწორად შეყვანილი პაროლის შემთხვევაში
            if (error.response.data && error.response.data.errors[0]) return Promise.reject(error.response.data.errors[0])
            // ყველა დანარჩენ შემთხვევაში
            if (window.location.href.indexOf("/login") === -1) { window.location = "/login" }
        } else {
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;