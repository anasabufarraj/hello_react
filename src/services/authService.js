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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk5NDNmM2VkN2MxNDM3ZGVjYmM2YmYiLCJuYW1lIjoiQW5hcyBBYnUgRmFycmFqIiwiZW1haWwiOiJhbmFzLnIuYWJ1ZmFycmFqQGdtYWlsLmNvbSIsImlhdCI6MTYzNzQzNzc1Mn0.CcSUXM2srN7H_1z-70fx5KOrkmtv97pbW3FsH1Q4YZs
