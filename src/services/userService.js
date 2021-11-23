//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function register(user) {
  // DOC: Get the new JSON Web Token returned from the custom header 'x-auth-token' when
  //  registering the user data, then automatically login the user by storing the token in
  //  the browser's localstorage object.
  return httpService.post(`${config.APIEndpointBase}/users`, {
    // NOTE: Map the submit object to the database architecture.
    //  data: { name: '', email: '', password: '' }
    //  name => name
    //  email => email
    //  password => password
    name: user.name,
    email: user.email,
    password: user.password,
  });
}
