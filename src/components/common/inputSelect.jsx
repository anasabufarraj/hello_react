//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function InputSelect({ name, label, value, onChange, options, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} id={name} className="form-select" onChange={onChange}>
        <option value="">--Select--</option>
        {options.map((_g) => (
          <option key={_g._id} value={_g._id}>
            {_g.name}
          </option>
        ))}
      </select>
      <div className="form-text fw-light text-danger">{error}</div>
    </div>
  );
}

export default InputSelect;
