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

export function saveMovie(movie) {
  // DOC: Save a movie to the database after pruning the id, since ids added automatically by mongodb.
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(`${config.APIEndpointBase}/movies/${movie._id}`, body);
  }

  return httpService.post(`${config.APIEndpointBase}/movies`, movie);
}

export function deleteMovie(movieId) {
  return httpService.delete(`${config.APIEndpointBase}/movies/${movieId}`);
}
