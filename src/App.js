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
      main: '#5271ff',
      dark: '#6f79a8',
    },
    secondary: {
      // 
      main: '#eceff1',
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
