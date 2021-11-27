//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/common/protectedRoute';
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
    return (
      <React.Fragment>
        <ToastContainer limit={3} />
        <NavBar />
        <div className="container fw-light my-4">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="not-found" />
            {/* NOTE: Use the following method to add properties directly in the Route component:
                 <Route path="/movies" render={(props) => <Movies user={} {...props} />} />
                 Component props include history, location, and match properties.*/}
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
