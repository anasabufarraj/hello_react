//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../config.json';
// import logService from './logService';

axios.interceptors.response.use(null, (err) => {
  const expectedErrors = err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedErrors) {
    // logService.log(err); // TODO: Uncomment lines for log Service before production deployment.
    toast.error('An unexpected err occurred!', config.toastOptions);
  }

  return Promise.reject(err);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
