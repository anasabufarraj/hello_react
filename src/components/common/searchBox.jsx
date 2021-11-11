//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function SearchBox(props) {
  return (
    <div className="input-group">
      <input
        type="text"
        name="searchQuery"
        value={props.value}
        id="search"
        onChange={(e) => props.onChange(e.currentTarget.value)}
        placeholder="Search"
        className="form-control"
      />
      <button className="btn btn-primary" onClick={props.onClear} disabled={!props.value}>
        Clear
      </button>
    </div>
  );
}

export default SearchBox;
