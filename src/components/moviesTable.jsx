import React from 'react';
import Like from './common/like';

function MoviesTable(props) {
  return (
    <table className="table m-3">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th style={{ cursor: 'pointer' }} scope="col" onClick={() => props.onSort('title')}>
            Title <i className="fa fa-caret-down">&nbsp;</i>
          </th>
          <th style={{ cursor: 'pointer' }} scope="col" onClick={() => props.onSort('genre.name')}>
            Genre <i className="fa fa-caret-down">&nbsp;</i>
          </th>
          <th style={{ cursor: 'pointer' }} scope="col" onClick={() => props.onSort('numberInStock')}>
            Rate <i className="fa fa-caret-down">&nbsp;</i>
          </th>
          <th scope="col">Like</th>
          <th scope="col">Handle</th>
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
              <button onClick={() => props.onDelete(movie)} className="btn btn-danger btn-sm">
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
