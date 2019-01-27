import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ArchitectInfo from './ArchitectInfo';

class ArchitectOfTheDay extends ArchitectInfo {
  render() {
    const { classes } = this.props;
    const dummyUrl = '#';
    return (
      // dummy block; to be replaced
      <div className={classes.archOfTheDay}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Architect_Langbard_Iosif_Grigorevich.jpg/200px-Architect_Langbard_Iosif_Grigorevich.jpg" className={classes.archPhoto} />
        <Typography className={classes.archOfTheDayName} paragraph>
          Architect of the day block is here
        </Typography>
        <Typography paragraph>
          <Link href={dummyUrl} className={classes.link}>
            link to the page of this architect
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
  archPhoto: {
    margin: 10,
    width: 100,
    height: 100,
  },
  archOfTheDayName: {
    paddingTop: 50,
  },
});

export default withStyles(styles, { withTheme: true })(ArchitectOfTheDay);
