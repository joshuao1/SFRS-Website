import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';

import { Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import About from '../../views/About'
import Blog from '../../views/Blog'
import Home from '../../views/Home'

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  
const styles = {
  links: {
    marginLeft: 'auto',
    marginRight: '0',
  },
}

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function NavBar() {
    return (
      <Router>
        <CssBaseline>
          <ElevationScroll>
            <AppBar color='primary' position='sticky' style={styles.bar}>
              <Toolbar>
                <Typography variant='h5' color='inherit'>
                  Students for Refugees Society
                </Typography>
                <div style={styles.links}>
                  <Button href="/" color='inherit'>
                    Home
                  </Button>
                  <Button href="/about" color='inherit'>
                    About
                  </Button>
                  <Button href="/blog" color='inherit'>
                    Blog
                  </Button>
                  <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfeqA-btyc8kVmd-kDwwbtMBgec1hx9DfjBdeHhY8T3QSTB_Q/viewform" color='inherit'>
                    Sign Up
                  </Button>
                </div>

                
              </Toolbar>
            </AppBar>   
          </ElevationScroll>
        </CssBaseline>  
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog posts={posts} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }

export default NavBar;
