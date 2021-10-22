import React from 'react';
import Like from './common/like';

function MoviesTable(props) {
  // MEMO: props are read-only arguments
  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th
            style={{ cursor: 'pointer' }}
            onClick={() => props.onSort(props.movies.indexOf(props.movies) + 1)}
          >
            No.
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => props.onSort('title')}>
            Title <i className="fa fa-caret-down">&nbsp;</i>
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => props.onSort('genre.name')}>
            Genre
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => props.onSort('numberInStock')}>
            Rate
          </th>
          <th scope="col">Like</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.moviesInPage.map((movie) => (
          <tr key={movie._id}>
            <td>{props.movies.indexOf(movie) + 1}</td>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.dailyRentalRate}</td>
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
