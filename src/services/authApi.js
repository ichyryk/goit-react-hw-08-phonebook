import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchRegister = credentials => {
  return axios.post('/users/signup', credentials);
};

export const fetchLogIn = credentials => {
  return axios.post('/users/login', credentials);
};

export const fetchLogOut = () => {
  return axios.post('/users/logout');
};

export const fetchCurrentAuth = () => {
  return axios.get('/users/current');
};
