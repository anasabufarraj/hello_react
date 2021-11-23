//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function register(user) {
  // DOC: Register a new user Get the new JSON Web Token returned from the custom header 'x-auth-token' when
  //  registering the user data,
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
