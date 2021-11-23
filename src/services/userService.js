//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function register(user) {
  // DOC: Register a new user to the database.
  return httpService.post(`${config.APIEndpointBase}/users`, {
    // NOTE: Map the submit object to the database architecture.
    //  data: { name: '', email: '', password: '' }
    //  name => name
    //  email => email
    //  password => password
    name: user.name,
    email: user.email.toLowerCase(),
    password: user.password,
  });
}
