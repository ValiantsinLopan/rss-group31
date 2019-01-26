import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

class Header extends Component {
  render() {
    return (
      <AppBar />
    );
  }
}

const styles = {

};

export default withStyles(styles)(Header);
