import axios from 'axios';

const SERVER_URL = 'http://node-env-1.eba-npp53eyx.us-east-1.elasticbeanstalk.com';

export const login = async (email, password) => {
    try {
      const results = await axios.post(`${SERVER_URL}/auth/login`, { email, password });
      localStorage.setItem("user", JSON.stringify(results.data.userData.email));
      localStorage.setItem("token", results.data.token);  
    } catch (err) {
      throw new Error(err);
    }
  };
  

  export const register = async (values) => {
    try {
      const results = await axios.post(`${SERVER_URL}/auth/register`, values);
      localStorage.setItem("user", JSON.stringify(results.data.userData.email));
      localStorage.setItem("token", results.data.token);  
    } catch (err) {
      throw new Error(err);
    }
  };  

  export const subscribe = async (email) => {
    try {
      let result = await axios.post(`${SERVER_URL}/sub`, {email});  
      return result;
    } catch (err) {
      // throw new Error(err);
      alert(err.response.data)
    }
  };  