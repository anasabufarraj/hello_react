//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
// noinspection JSUnresolvedFunction

import React from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '' },
      errors: {},
      schema: {
        options: { abortEarly: false },
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldValidation = this.handleFieldValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation() {
    // DOC: Update errors state object using 'Joi' object.
    let { error } = Joi.validate(this.state.account, this.state.schema, this.state.schema.options);

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

  handleSubmit(e) {
    // DOC: Prevent default form submission and handle submission validation error.
    e.preventDefault();
    let errors = this.handleValidation();
    this.setState({ errors: errors || {} });
  }

  handleFieldValidation({ name, value }) {
    // DOC: Validate input value against a specific input schema.
    let input = { [name]: value };
    let inputSchema = { [name]: this.state.schema[name] };
    let { error } = Joi.validate(input, inputSchema);

    return error ? error.details[0].message : null;
  }

  handleChange(e) {
    // DOC: Handle field validation errors on input change.
    let errors = this.state.errors;
    let message = this.handleFieldValidation(e.currentTarget);

    if (errors) {
      errors[e.currentTarget.name] = message;
    } else {
      delete errors[e.currentTarget.name];
    }

    // DOC: Update the state using an event listener to the current target value.
    let account = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ errors, account });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleSubmit}>
              <Input
                label={'Username'}
                type={'text'}
                value={this.state.account.username}
                onChange={this.handleChange}
                name={'username'}
                error={this.state.errors.username}
                autofocus={true}
              />
              <Input
                label={'Password'}
                type={'password'}
                value={this.state.account.password}
                onChange={this.handleChange}
                name={'password'}
                error={this.state.errors.password}
              />
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
