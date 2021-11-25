//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function Input({ name, label, type, value, onChange, autofocus, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        className="form-control"
        onChange={onChange}
        autoFocus={autofocus}
      />
      <div className="form-text fw-light text-danger">{error}</div>
    </div>
  );
}

export default Input;
