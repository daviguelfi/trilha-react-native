import { AsyncStorage } from 'react-native';

import axios from 'axios';
import CONSTANTS from '../constants';

const client = axios.create({
  baseURL: CONSTANTS.API.BASE,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000
});

client.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem('token');
    const token = '07255ba2c8d38d01b0553c04389a108dfe42a8cf';
    config.headers.Authorization = `Token ${token}`;
    return config;
  },
  err => Promise.reject(err)
);

client.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      await AsyncStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default client;
