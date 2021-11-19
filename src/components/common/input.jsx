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
        name={props.name}
        value={props.value}
        id={props.name}
        className="form-control"
        onChange={props.onChange}
        autoFocus={props.autofocus}
      />
      <div className="form-text fw-light text-danger">{props.error}</div>
    </div>
  );
}

export default Input;
