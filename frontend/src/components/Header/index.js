import React from 'react';
import { Typography, Toolbar, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <AppBar position="static" color="white">
        <Toolbar>
          <div id="header">
            <Link to={'/'}>
              <Typography variant="h5" color="inherit">
                {' '}
                <span className="text--purple cursive-text">The 14th Set</span>{' '}
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
