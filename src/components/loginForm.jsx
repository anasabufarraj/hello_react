//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: '', password: '' },
      errors: {},
    };
  }

  schema = {
    options: { abortEarly: false },
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().min(6).required().label('Password'),
  };

  handleFormSubmitToServer() {
    console.warn('Submitted to Server');
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Username', 'text', 'username', true)}
              {this.renderInput('Password', 'password', 'password')}
              {this.renderSubmitButton('Login')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
