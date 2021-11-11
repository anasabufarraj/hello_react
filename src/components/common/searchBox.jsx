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
        autoFocus={true}
      />
    </div>
  );
}

export default SearchBox;
