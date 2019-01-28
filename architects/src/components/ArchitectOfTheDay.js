import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import ArchitectInfo from './ArchitectInfo';

class ArchitectOfTheDay extends ArchitectInfo {
  render() {
    const { classes } = this.props;
    // const dummyUrl = '#';
    return (
      // warning: frankly hardcoded
      <div className={classes.archOfTheDay}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/ru/7/7c/Karol_VA.jpg" className={classes.archPhoto} />
        <Typography variant="h6" component="h2" className={classes.archOfTheDayName}>
          Vladimir Adamovich Korol
        </Typography>
        {/* <Typography paragraph>
          <Link href={dummyUrl} className={classes.link}>
            link to the page of this architect
          </Link>
        </Typography> */}
      </div>
    );
  }
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  archPhoto: {
    margin: 10,
    width: 100,
    height: 100,
  },
  archOfTheDayName: {
    paddingTop: 10,
  },
});

export default withStyles(styles, { withTheme: true })(ArchitectOfTheDay);
