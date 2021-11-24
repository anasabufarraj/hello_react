//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../../services/authService';

function ProtectedRoute({ path, component: Component, render, ...rest }) {
  // DOC: Protect a component route if the user is not logged in.
  return (
    <Route
      path={path}
      render={(props) => {
        if (!auth.getCurrentUserToken()) {
          return <Redirect to="/login" />;
        }

        return Component ? <Component {...props} /> : render(props);
      }}
      {...rest}
    />
  );
}

export default ProtectedRoute;
