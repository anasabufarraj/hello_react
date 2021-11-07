//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import Input from './common/input';

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: '', password: '' },
      errors: {},
      schema: {
        options: { abortEarly: false },
        username: Joi.string().email().required().label('Username'),
        password: Joi.string().min(6).required().label('Password'),
      },
    };
  }

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
              <Input
                label={'Username'}
                type={'text'}
                value={this.state.data.username}
                onChange={this.handleInputChange}
                name={'username'}
                error={this.state.errors.username}
                autofocus={true}
              />
              <Input
                label={'Password'}
                type={'password'}
                value={this.state.data.password}
                onChange={this.handleInputChange}
                name={'password'}
                error={this.state.errors.password}
              />
              <button className="btn btn-primary" disabled={this.handleFormValidation()}>
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
