//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import httpService from './httpService';
import config from '../config';

export function getMovies() {
  return httpService.get(config.movieApiEndpoint);
}

// export function getMovie(id) {
//   const { data } = await httpService.get(config.movieApiEndpoint);
//   return data.find((m) => m._id === id);
// }

// export function saveMovie(movie) {
//   const movieInDb = movies.find((m) => m._id === movie._id) || {};
//   movieInDb.title = movie.title;
//   movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
//   movieInDb.numberInStock = Number(movie.numberInStock);
//   movieInDb.dailyRentalRate = Number(movie.dailyRentalRate);
//
//   if (!movieInDb._id) {
//     movieInDb._id = Date.now().toString();
//     movies.push(movieInDb);
//   }
//   return movieInDb;
// }

export function deleteMovie(movieId) {
  return httpService.delete(`${config.movieApiEndpoint}/${movieId}`);
}
