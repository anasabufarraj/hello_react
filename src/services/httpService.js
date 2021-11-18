import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../config.json';
// import logService from './logService';

axios.interceptors.response.use(null, (err) => {
  const expectedErrors = err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedErrors) {
    // logService.log(err);
    toast.error('An unexpected err occurred!', config.toastOptions);
  }

  return Promise.reject(err);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};

export default httpService;
