//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';

export function getMovies() {
  return httpService.get('/movies');
}

export function getMovie(movieId) {
  return httpService.get(`/movies/${movieId}`);
}

export function deleteMovie(movieId) {
  return httpService.delete(`/movies/${movieId}`);
}

export function saveMovie(movie) {
  // DOC: Save a movie to the database after removing the id, since ids added automatically.
  //  An underscore as the first character in an ID is often used to indicate an internal
  //  implementation that is not considered part of the API.
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(`/movies/${movie._id}`, body);
  }

  return httpService.post(`/movies`, movie);
}
