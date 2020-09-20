import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';



import NavBar from "./components/navbar/Navbar.js";
import Footer from './components/Footer.js';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Footer/>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
