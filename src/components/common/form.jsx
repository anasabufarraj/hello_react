//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Joi from 'joi-browser';
import Input from './input';
import InputSelect from './inputSelect';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputValidation = this.handleInputValidation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  handleFormValidation() {
    // DOC: Update errors state object using 'Joi' object.
    let { error } = Joi.validate(this.state.data, this.schema, this.schema.options);

    if (!error) {
      return null;
    } else {
      let errors = {};
      for (let _i of error.details) {
        errors[_i.path[0]] = _i.message;
      }

      return errors;
    }
  }

  handleFormSubmit(e) {
    // DOC: Handle form validation and submit to server.
    e.preventDefault();
    const errors = this.handleFormValidation();

    this.setState({ errors: errors || {} });
    this.handleFormSubmitToServer();
  }

  handleInputValidation({ name, value }) {
    // DOC: Validate input value against 'Joi' schema.
    const input = { [name]: value };
    const inputSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(input, inputSchema);
    return error ? error.details[0].message : null;
  }

  handleInputChange(e) {
    // DOC: Handle field validation error on input change.
    const errors = this.state.errors;
    const message = this.handleInputValidation(e.currentTarget);

    if (errors) {
      errors[e.currentTarget.name] = message;
    } else {
      delete errors[e.currentTarget.name];
    }

    // DOC: Update the state with an event listener to the current target value.
    const data = this.state.data;

    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ errors, data });
  }

  handleCancel() {
    window.location = '/';
  }

  renderSubmitButton(label) {
    return (
      <button className="btn btn-primary me-3" disabled={this.handleFormValidation()}>
        {label}
      </button>
    );
  }

  renderCancelButton(label) {
    // DOC: Used <input type"button"/> instead of <button>, since <button> element will implicitly submits.
    return (
      <input type="button" className="btn btn-outline-dark me-3" value={label} onClick={this.handleCancel} />
    );
  }

  renderInput(label, type, name, autoFocus = false) {
    return (
      <Input
        label={label}
        type={type}
        name={name}
        value={this.state.data[name]}
        onChange={this.handleInputChange}
        error={this.state.errors[name]}
        autofocus={autoFocus}
      />
    );
  }

  renderInputSelect(label, name, options) {
    return (
      <InputSelect
        label={label}
        name={name}
        value={this.state.data[name]}
        options={options}
        onChange={this.handleInputChange}
        error={this.state.errors[name]}
      />
    );
  }
}

export default Form;
