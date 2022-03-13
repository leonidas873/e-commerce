import axios from 'axios';
import { API } from './utils/API';

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
    return result;
  } catch (err) {
    throw new Error(err);
  }
};  

export const requestResetPassword = async email => {
  try {
    return await axios.post(`${SERVER_URL}/auth/forgot-password`, {email});
  } catch (err) {
    throw err.response.status;
  } 
}

export const resetPassword = async data => {
  try {
    return await axios.put(`${SERVER_URL}/auth/reset-password`, {...data});
  } catch (err) {
    throw err.response.data;
  }  
}

export const subscribe = async (email) => {
  try {
    let result = await axios.post(`${SERVER_URL}/sub`, {email});  
    return result;
  } catch (err) {
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

// getting single product
export const getSingleProduct = async productId => {
  try {
    return axios.get(`${SERVER_URL}/products/${productId}`)
  } catch (err) {
    throw new Error(err)
  }
}

// add to cart
export const addToCart = async productId => {
  try {
    return API.post(`/cart`, {productId: productId, number: 1})
  } catch (err) {
    throw new Error(err)
  }
}

//  get all colors
export const getAllColors = async () => {
  try {
    let result = axios.get(`${SERVER_URL}/colors`);
    return result;
  } catch (err) {
    throw new Error(err)
  }
}

// get products with filters
export const getProducts = async (filters) => {
  let filtersObj = filters;
  let colors = JSON.stringify(filtersObj?.colors).replace(/[\[\]']+/g,'');

  try {
    return axios.get(`${SERVER_URL}/products`, {params: {...filtersObj, colors: colors}});
  } catch (err) {
    throw new Error(err)
  }
}

//fetch cart products
export const fetchCartProducts = async () => {
  try {
    return await API.get(`/cart`)
  } catch (err) {
    throw new Error(err)
  }
}

//get all product types
export const getTypes = async () => {
  try {
    return await axios.get(`${SERVER_URL}/types`)
  } catch (err) {
    throw new Error(err)
  }
}