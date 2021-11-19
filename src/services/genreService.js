//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function getGenres() {
  return httpService.get(`${config.APIEndpointBase}/genres`);
}
