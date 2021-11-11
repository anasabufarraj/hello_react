//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function Search(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        id="search"
        className="form-control"
        onChange={props.onChange}
        placeholder="Search"
        autoFocus={true}
      />
    </div>
  );
}

export default Search;
