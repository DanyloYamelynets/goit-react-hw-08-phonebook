import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance.defaults.headers.Authorization = '';
};

export const registerRequest = async formData => {
  const { data } = await instance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const loginRequest = async formData => {
  const { data } = await instance.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const logOutRequest = async () => {
  const { data } = await instance.post('/users/logout');
  clearToken();
  return data;
};

export const currentUserRequest = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

// ==================CONTACTS==================
export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const addContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};
export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
