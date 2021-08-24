import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from "./components/AddUser/AddUser";
import { EditUser } from "./components/EditUser/EditUser";
import { UserList } from "./components/UserList/UserList";
import Home from "./components/Homepage/Home";
import React from "react";
import Navbar from "./components/NavigationBar/Navbar";
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
        </Switch>
        <Navbar />
        <Switch>
          <PrivateRoute path="/addUser">
            <AddUser />
          </PrivateRoute>
          <PrivateRoute path="/editUser">
            <EditUser />
          </PrivateRoute>
          <PrivateRoute path="/userList">
            <UserList />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
