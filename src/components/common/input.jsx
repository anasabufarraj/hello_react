//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function Input(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        className="form-control"
        autoFocus={props.autofocus}
      />
      {/* TODO: Disable before validation completed*/}
      <div className="form-text fw-light text-danger">{props.error}</div>
    </div>
  );
}

export default Input;
