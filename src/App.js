import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Wrapper from "./Wrapper";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Wrapper />
          </PrivateRoute>          
        </Switch>
      </div>
    </Router>
  );
}
