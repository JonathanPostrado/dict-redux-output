import React from 'react';
import useAuth from '../../hooks/useAuth';

import {
  Route,
  Redirect,
} from "react-router-dom";

const authRoute = "/login"

const PrivateRoute = ({ children, ...rest }) => {

  const { isLogin } = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: authRoute,
              state: { from: location }
            }}
          />
        )
      }
    />
  );    

}

export default PrivateRoute;