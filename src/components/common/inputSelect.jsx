//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function InputSelect(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} className="form-select" onChange={props.onChange} id={props.name}>
        {/*<option value={props.defaultValue}>{props.defaultValue}</option>*/}
        <option value="">--Select--</option>
        {props.options
          // .filter((_option) => _option.name !== props.defaultValue)
          .map((_option) => (
            <option key={_option._id} value={_option._id}>
              {_option.name}
            </option>
          ))}
      </select>
      <div className="form-text fw-light text-danger">{props.error}</div>
    </div>
  );
}

export default InputSelect;

//         <option value="">--Select---</option>
//         {options.map((option) => (
//           <option key={option._id} value={option._id}>
//             {option.name}
//           </option>
//         ))}
