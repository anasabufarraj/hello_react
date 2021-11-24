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
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleIsAdmin() {
    const user = this.state.user;
    return user ? user.isAdmin : null;
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer limit={3} />
        <NavBar user={this.state.user} isAdmin={this.handleIsAdmin()} />
        <div className="container fw-light my-4">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" render={() => <Movies user={this.state.user} />} />
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
