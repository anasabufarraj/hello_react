//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function getMovies() {
  return httpService.get(`${config.APIEndpointBase}/movies`);
}

export function getMovie(movieId) {
  return httpService.get(`${config.APIEndpointBase}/movies/${movieId}`);
}

export function deleteMovie(movieId) {
  return httpService.delete(`${config.APIEndpointBase}/movies/${movieId}`);
}

export function saveMovie(movie) {
  // DOC: Save a movie to the database after removing the id, since ids added automatically.
  //  An underscore as the first character in an ID is often used to indicate an internal
  //  implementation that is not considered part of the API.
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(`${config.APIEndpointBase}/movies/${movie._id}`, body);
  }

  return httpService.post(`${config.APIEndpointBase}/movies`, movie);
}
