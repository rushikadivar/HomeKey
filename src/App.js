import './App.css';
import SignIn from './components/SignIn'
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

require('dotenv').config()

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                < SignIn/>
              </>
            )
          }}>
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
