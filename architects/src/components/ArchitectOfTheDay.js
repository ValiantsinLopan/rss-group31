import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArchitectProfile from './ArchitectProfile';

class ArchitectOfTheDay extends ArchitectProfile {
  render() {
    const { classes } = this.props;
    const dummyUrl = '#';
    return (
      // dummy block; to be replaced
      <div className={classes.archOfTheDay}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Architect_Langbard_Iosif_Grigorevich.jpg/200px-Architect_Langbard_Iosif_Grigorevich.jpg" className={classes.bigAvatar} />
        <Typography className={classes.archOfTheDayName} paragraph>
          Architect of the day block is here.
        </Typography>
        <Typography paragraph>
          <Link href={dummyUrl} className={classes.link}>
            link to the architects page
          </Link>
        </Typography>
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
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
  },
  archOfTheDayName: {
    paddingTop: 50,
  },
});

export default withStyles(styles, { withTheme: true })(ArchitectOfTheDay);