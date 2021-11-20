//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function register(user) {
  return httpService.post(`${config.APIEndpointBase}/users`, {
    // NOTE: Map the submit object to the database.
    //  data: { name: '', email: '', password: '' }
    //  name => name
    //  email => email
    //  password => password
    name: user.name,
    email: user.email,
    password: user.password,
  });
}
