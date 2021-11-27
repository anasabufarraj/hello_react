//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../../services/authService';

function ProtectedRoute({ path, component: Component, render, ...rest }) {
  // DOC: Protect a component route if the user is not logged in and return the current window location.
  return (
    <Route
      path={path}
      render={(props) => {
        if (!auth.getCurrentUserToken()) {
          return <Redirect to={{ pathname: '/login', state: props.location.pathname }} />;
        }

        return Component ? <Component {...props} /> : render(props);
      }}
      {...rest}
    />
  );
}

export default ProtectedRoute;
