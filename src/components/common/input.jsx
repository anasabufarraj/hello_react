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
      <div className="form-text">{props.message}</div>
    </div>
  );
}

export default Input;
