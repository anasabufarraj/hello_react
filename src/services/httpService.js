//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../config.json';
// import logService from './logService';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// DOC: Handle unexpected errors.
axios.interceptors.response.use(null, (err) => {
  const expectedErrors = err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedErrors) {
    // logService.log(err); // TODO: Uncomment for log Service before production deployment.
    toast.error('An unexpected error occurred!', config.toastOptions);
  }

  return Promise.reject(err);
});

function includeCustomHeaders(jwt) {
  // DOC: Include the custom header 'x-auth-token' in every request.
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  includeCustomHeaders,
};

export default httpService;
