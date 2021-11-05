//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
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
        username: Joi.string().required(),
        password: Joi.string().required(),
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldValidation = this.handleFieldValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation() {
    // DOC: Return error messages arrays.
    let result = Joi.validate(this.state.account, this.state.schema, { abortEarly: false });

    console.log(result.error.details); // TODO: Remove

    let errors = {};

    if (!this.state.account.username.trim()) {
      errors.username = 'Username is required.';
    }
    if (!this.state.account.password.trim()) {
      errors.password = 'Password is required.';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  handleSubmit(e) {
    // DOC: Prevent default form submission and handle submission validation error.
    e.preventDefault();

    let errors = this.handleValidation();
    this.setState({ errors: errors || {} }); // If no error, set to empty object.
  }

  handleFieldValidation(input) {
    if (input.name === 'username') {
      if (input.value.trim() === '') {
        return 'Username is required.'; // TODO: Refactor
      }
    }

    if (input.name === 'password') {
      // validation
    }
  }

  handleChange(e) {
    // DOC: Handle field validation errors,
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
    this.setState({ account, errors });
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
