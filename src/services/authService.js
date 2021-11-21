//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function login(user) {
  return httpService.post(`${config.APIEndpointBase}/auth`, {
    // NOTE: Map the submit object to the database architecture.
    //  data: { username: '', password: '' }
    //  email => email
    //  password => password
    email: user.username,
    password: user.password,
  });
}
