//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Joi from 'joi-browser';

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
  }

  handleFormValidation() {
    // DOC: Update errors state object using 'Joi' object.
    let { error } = Joi.validate(this.state.data, this.state.schema, this.state.schema.options);

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
    // DOC: Handle form validation error before submit.
    e.preventDefault();
    let errors = this.handleFormValidation();
    this.setState({ errors: errors || {} });

    this.handleFormSubmitToServer();
  }

  handleInputValidation({ name, value }) {
    // DOC: Validate input value against 'Joi' schema.
    let input = { [name]: value };
    let inputSchema = { [name]: this.state.schema[name] };
    let { error } = Joi.validate(input, inputSchema);

    return error ? error.details[0].message : null;
  }

  handleInputChange(e) {
    // DOC: Handle field validation error on input change.
    let errors = this.state.errors;
    let message = this.handleInputValidation(e.currentTarget);

    if (errors) {
      errors[e.currentTarget.name] = message;
    } else {
      delete errors[e.currentTarget.name];
    }

    // DOC: Update the state with an event listener to the current target value.
    let data = this.state.data;
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ errors, data });
  }
}

export default Form;
