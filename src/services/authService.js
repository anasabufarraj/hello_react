//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import jwtDecode from 'jwt-decode';
import httpService from './httpService';
import config from '../config';

// DOC: Include the custom header in every request.
httpService.includeCustomHeaders(getToken());

function getToken() {
  return localStorage.getItem(config.tokenKey);
}

async function login(user) {
  // DOC: Get the data JSON Web Token (JWT) and store in the browser's localStorage object.
  const { data: jwt } = await httpService.post('/auth', {
    // NOTE: Map the submit object to the database architecture.
    //  data: { username: '', password: '' }
    //  username.toLowerCase() => email
    //  password => password
    email: user.username.toLowerCase(),
    password: user.password,
  });

  localStorage.setItem(config.tokenKey, jwt);
}

function autoLogin(jwt) {
  // DOC: Automatically login the user by storing the given token in the browser's local storage object.
  localStorage.setItem(config.tokenKey, jwt);
}

function getCurrentUserToken() {
  // DOC: Get the current stored token if exist, then return after decoding.
  try {
    const jwt = getToken();
    return jwtDecode(jwt);
  } catch (err) {
    return null;
  }
}

function logout() {
  localStorage.removeItem(config.tokenKey);
}

const auth = {
  login,
  autoLogin,
  getCurrentUserToken,
  logout,
}; // DOC: Omit object value if key and value identical (ES6)

export default auth;
