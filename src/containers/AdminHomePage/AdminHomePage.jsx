import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import logo from '../../assets/images/logo192.png';
import styles from './styles';
class AdminHomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.adminPage}>
        <h1>Trang Quản Trị</h1>
        <img src={logo} alt="logo" />
      </div>
    );
  }
}

AdminHomePage.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(AdminHomePage);
