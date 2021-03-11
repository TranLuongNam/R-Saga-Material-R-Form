import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import theme from '../../common/Theme';
import DashBoard from '../DashBoard/DashBoard';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <DashBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
