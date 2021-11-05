//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function MovieForm({ match, history }) {
  return (
    <div>
      <h1>Movie {match.params.id}</h1>
      <button className="btn btn-primary" onClick={() => history.push('/movies')}>
        Save
      </button>
    </div>
  );
}

export default MovieForm;