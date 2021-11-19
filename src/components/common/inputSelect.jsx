//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function InputSelect(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} className="form-select" onChange={props.onChange} id={props.name}>
        <option value="">{props.defaultValue}</option>
        {props.options
          .filter((_g) => _g.name !== props.defaultValue)
          .map((_g) => (
            <option key={_g._id} value={_g._id}>
              {_g.name}
            </option>
          ))}
      </select>
      <div className="form-text fw-light text-danger">{props.error}</div>
    </div>
  );
}

export default InputSelect;
