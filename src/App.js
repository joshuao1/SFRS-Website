import React from 'react';

import NavBar from "./components/navbar/Navbar.js";
import Footer from './components/Footer.js';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      //main: '#1976d2',
      //Red 700
      main: '#ffadad',
    },
    secondary: {
      //
      main: '#f0f0f0',
      contrastText: 'black',
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
