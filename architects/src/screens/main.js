import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <Link
          to="/architects"
          className={classes.link}
        >
          <Button
            className="playButton"
            variant="outlined"
            color="primary"
            size="large"
          >
            Learn more about Belarusian architects!
          </Button>
        </Link>
      </Paper>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
};

export default withStyles(styles)(Main);
