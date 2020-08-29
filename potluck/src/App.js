import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Display from "./components/Display";
import PrivateRoute from './components/utils/PrivateRoute';
import AddEvent from './components/AddEvent';

const App = () => {

  return (
    // todo: Switch Version

    <div className="App">
      <div>
        <Navigation />

      </div>

      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/">
          <Registration />
        </Route>


        <PrivateRoute exact path="/singleEvent">
          <Display />
        </PrivateRoute>

        <PrivateRoute exact path="/Search">
          <Search />
        </PrivateRoute>

        <PrivateRoute exact path='/addevent'>
          <AddEvent />
        </PrivateRoute>

        <PrivateRoute exact path="/home">
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
