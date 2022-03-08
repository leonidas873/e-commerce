import axios from 'axios';

const SERVER_URL = 'http://ecommerce-web.us-east-1.elasticbeanstalk.com';

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
      const result = await axios.post(`${SERVER_URL}/auth/register`, values);
      // localStorage.setItem("user", JSON.stringify(results.data.userData.email));
      // localStorage.setItem("token", results.data.token);  
      return result;
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


// products 

export const getAllProducts = async () => {
  try {
    let result = axios.get(`${SERVER_URL}/products`);
    return result;
  } catch (err) {
    throw new Error(err)
  }
}

// sort 

export const getSortedProducts = async (type) => {
  try {
    let result = axios.get(`${SERVER_URL}/products/?sort=${type}`);
    return result;
  } catch (err) {
    throw new Error(err)
  }
}