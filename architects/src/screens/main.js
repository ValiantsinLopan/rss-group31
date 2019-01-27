import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';


class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Paper className={classes.banner}>
          <div className={classes.bannerContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Culture portal
              <br />
              about belarusian architects
            </Typography>
            <Typography variant="subtitle2" color="inherit" paragraph gutterRight>
              During the course of its history Belarusian nation has created
              a highly developed and original architecture.
              Its best monuments mirror the peculiarities and most
              important architectural trends and achievements of the epoque,
              prove the practical wisdom and artistic craftsmanship of Belarusian people.
            </Typography>
            <Link
              to="/architects"
              className={classes.link}
            >
              <Button
                className="playButton"
                variant="contained"
                color="secondary"
                size="large"
              >
                Learn more!
              </Button>
            </Link>
          </div>
        </Paper>

        <Paper className={classes.archOfTheDay}>
          <div className={classes.archOfTheDayContent}>
            <Typography component="h2" variant="h4" color="inherit" gutterBottom>
              Architect of the day
            </Typography>
          </div>
        </Paper>
        <Paper className={classes.contributors}>
          <div className={classes.contributorsContent}>
            <Typography component="h2" variant="h5" color="inherit" gutterBottom>
              Project team
            </Typography>
            {/* userprofile components */}
          </div>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  banner: {
    backgroundColor: theme.palette.grey[800],
    marginLeft: '240px',
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  bannerContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  contributors: {
    backgroundColor: theme.palette.grey[800],
    marginLeft: '240px',
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  contributorsContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  archOfTheDay: {
    backgroundColor: theme.palette.common.white,
    marginLeft: '240px',
    color: theme.palette.grey[800],
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  archOfTheDayContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});


export default withStyles(styles)(Main);
