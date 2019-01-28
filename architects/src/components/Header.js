import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import indigo from '@material-ui/core/colors/indigo';
import ArchitectsList from './ArchitectsList';

const drawerWidth = 240;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }

  render() {
    const { classes, theme, showDrawer } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={showDrawer ? classes.appBar : classes}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
              disabled={!showDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link
              to="."
              className={classes.link}
            >
              <Typography variant="h5" className={classes.homeLink} noWrap>
                Belarusian architects portal
              </Typography>
            </Link>

          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen && showDrawer}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <ArchitectsList />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="persistent"
              open={showDrawer}
            >
              <ArchitectsList />
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      marginBottom: '70px',
    },
    [theme.breakpoints.up('xs')]: {
      marginBottom: '70px',
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: 'none',
  },
  homeLink: {
    color: theme.palette.common.white,
    '&:hover': {
      color: indigo[50],
    },
  },
});

export default withStyles(styles, { withTheme: true })(Header);
