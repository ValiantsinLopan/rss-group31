import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class ArchitectInfo extends Component {
  render() {
    const { classes, name, language } = this.props;
    return (
      // dummy block; to be replaced
      <div className={classes.archInfo}>
        <Avatar src={name.image} className={classes.archPhoto} />
        <Typography gutterBottom variant="h5" component="h2" className={classes.archName}>
          {`${name[language].firstName} ${name[language].thirdName} ${name[language].secondName}`}
        </Typography>
        <Typography className={classes.archInfo} paragraph>
          + short info.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus.
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
    marginBottom: 40,
    width: 200,
    height: 200,
  },
  archInfo: {
    paddingTop: 50,
  },
});

export default connect(
  store => ({
    language: store.page.language,
    name: store.architects.currentArchitect.description.name,
  }),
)(withStyles(styles, { withTheme: true })(ArchitectInfo));
