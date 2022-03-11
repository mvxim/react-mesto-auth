import { BASE_URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const register = (userData) => {
  return fetch(`${ BASE_URL }/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(checkResponse);
};

export const login = (userData) => {
  return fetch(`${ BASE_URL }/signin`, {
    //const BASE_URL = 'http://api.mvxim.nomoredomains.work'
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(checkResponse);
};

export const getContent = () => {
  return fetch(`${ BASE_URL }/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
      .then(checkResponse);
  // .then(data => data);
};

export const logout = () => {
  return fetch(`${ BASE_URL }/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(checkResponse);
};
