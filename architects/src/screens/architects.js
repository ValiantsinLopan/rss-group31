import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from '../components/Header';

class Architects extends Component {
  render() {
    return (
      <div>
        <Header />
        <Paper>
          <Typography>
            Belarusian architects
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Architects;
