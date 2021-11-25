//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import auth from '../services/authService';
import { toast } from 'react-toastify';
import config from '../config.json';

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
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  async handleFormSubmitToServer() {
    // DOC: Login the user then reset the current window location to the home page.
    try {
      await auth.login(this.state.data);

      // DOC: Redirect to the current window location when login.
      const { state: currentLocation } = this.props.location;
      window.location = currentLocation ? currentLocation : '/';
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error('Invalid username or password!', config.toastOptions);
      }
    }
  }

  render() {
    if (auth.getCurrentUserToken()) return <Redirect to="/" />;

    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Username', 'text', 'username', true)}
              {this.renderInput('Password', 'password', 'password')}
              {this.renderSubmitButton('Login')}
              {this.renderCancelButton('Cancel')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
