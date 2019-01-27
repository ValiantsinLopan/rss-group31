import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core';

class ArchitectsList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.toolbar} />
        <List>
          {
          ['Архитектор1', 'Архитектор2', 'Архитектор3', 'Архитектор4'].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))
        }
        </List>
      </div>
    );
  }
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

export default withStyles(styles, { withTheme: true })(ArchitectsList);
