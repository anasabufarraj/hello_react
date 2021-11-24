//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const user = auth.getCurrentUserToken();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer limit={3} />
        <NavBar user={user} isAdmin={auth.isAdmin(user)} />
        <div className="container fw-light my-4">
          <Switch>
            <Route
              path="/register"
              render={(props) => {
                // DOC: Prevent the access to 'RegisterForm' route if the user logged in.
                //  Component's props include history, location, and match.
                if (user) {
                  return <Redirect to="/" />;
                } else {
                  return <RegisterForm {...props} />;
                }
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                // DOC: Prevent the access to 'LoginForm' route if the user logged in.
                //  Component's props include history, location, and match.
                if (user) {
                  return <Redirect to="/" />;
                } else {
                  return <LoginForm {...props} />;
                }
              }}
            />
            <Route path="/logout" component={Logout} />
            <Route
              path="/movies/:id"
              render={(props) => {
                // DOC: Prevent the access to 'MovieForm' route if the user not logged in.
                //  Component's props include history, location, and match.
                if (!user) {
                  return <Redirect to="/login" />;
                } else {
                  return <MovieForm {...props} />;
                }
              }}
            />
            <Route path="/movies" render={(props) => <Movies user={user} {...props} />} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
