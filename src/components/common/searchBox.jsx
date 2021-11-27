//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function SearchBox({ value, onChange, onClear }) {
  return (
    <div className="input-group">
      <input
        type="text"
        name="searchQuery"
        value={value}
        id="search"
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="Search"
        className="form-control"
      />
      <button className="btn btn-primary" onClick={onClear} disabled={!value}>
        Clear
      </button>
    </div>
  );
}

export default SearchBox;
