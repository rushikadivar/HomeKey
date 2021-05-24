import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import Header from './components/Header'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Profile from './pages/Profile';


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
    // <ThemeProvider theme={theme}>
    //   <Header />
    //   <Router>
    //     <Switch>
    //       <Route exact path="/">
    //           <Link to={<SignUp />} />
    //           {/* <Footer /> */}
    //       </Route>
    //       <Route exact path="/signup">
    //         <Link to={<SignUp />} />
    //         {/* <Footer /> */}
    //       </Route>
    //       <Route exact path="/signin">
    //         <Link to={<SignIn />} />
    //         {/* <Footer /> */}
    //       </Route>
    //       <Route exact path="/account">
    //         <Link to={<Profile />} />
    //         {/* <Footer /> */}
    //       </Route>
    //     </Switch>
    //   </Router>
    //   <Footer />
    // </ThemeProvider>

    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Switch>
            <Route path="/account" component={Profile} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>        
        <Footer />
      </ThemeProvider>    
    </div>

  );
}

export default App;
