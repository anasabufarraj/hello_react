//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { name: '', email: '', password: '' },
      errors: {},
      schema: {
        options: { abortEarly: false },
        name: Joi.string().required().label('Full Name'),
        email: Joi.string().email().required().label('Email'),
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
        <h2 className="mb-3">Register</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Full Name', 'text', 'name', true)}
              {this.renderInput('Email', 'email', 'email')}
              {this.renderInput('Password', 'password', 'password')}
              {this.renderSubmitButton('Register')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
