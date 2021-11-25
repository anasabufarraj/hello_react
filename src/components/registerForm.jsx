//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import { register } from '../services/userService';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import auth from '../services/authService';
import { toast } from 'react-toastify';
import config from '../config.json';

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { name: '', email: '', password: '' },
      errors: {},
    };
  }

  schema = {
    options: { abortEarly: false },
    name: Joi.string().required().label('Name'),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(6).required().label('Password'),
  };

  async handleFormSubmitToServer() {
    try {
      // DOC: Register the user with autologin by storing the returned token returned from
      //  the custom header 'x-auth-token' when registering the user data.
      //  Finally, reset the current window location.
      const { headers } = await register(this.state.data);

      auth.autoLogin(headers['x-auth-token']);
      window.location = '/';
    } catch (err) {
      // DOC: If an error caught, update the state with email field error.
      if (err.response && err.response.status === 400) {
        const errors = this.state.errors;

        errors.email = err.response.data;
        this.setState({ errors });
        toast.error('User already registered!', config.toastOptions);
      }
    }
  }

  render() {
    if (auth.getCurrentUserToken()) return <Redirect to="/" />;

    return (
      <React.Fragment>
        <h2 className="mb-3">Register</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Name', 'text', 'name', true)}
              {this.renderInput('Email', 'email', 'email')}
              {this.renderInput('Password', 'password', 'password')}
              {this.renderSubmitButton('Register')}
              {this.renderCancelButton('Cancel')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
