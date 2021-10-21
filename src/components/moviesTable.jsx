import React from 'react';
import Like from './common/like';

function MoviesTable(props) {
  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Movie</th>
          <th scope="col">Genre</th>
          <th scope="col">In Stock</th>
          <th scope="col">Favourite</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {props.moviesInPage.map((movie) => (
          <tr key={movie._id}>
            <td>{props.movies.indexOf(movie) + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>
              <Like liked={movie.liked} onLike={() => props.onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => props.onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
