// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e4644e',//will be calculated from palette.primary.main,
      main: '#e2553c',
      dark: '#df452a',//will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#285ea4',
      main: '#245494',
      dark: '#204b83',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Raleway',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

require('dotenv').config()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
        <Route exact path="/">
            <Link to={<SignUp />} />
            <Footer />
        </Route>
        <Route exact path="/signup">
          <Link to={<SignUp />} />
          <Footer />
        </Route>
        <Route exact path="/signin">
          <Link to={<SignIn />} />
          <Footer />
        </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
