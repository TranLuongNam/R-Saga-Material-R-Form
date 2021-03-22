import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import loadingGif2 from '../../assets/images/loading.gif';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.loadingGlobal}>
          <img
            src={loadingGif2}
            alt="loading"
            className={classes.loadingIcon}
          />
        </div>
      );
    }
    return xhtml;
  }
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const withConnect = connect(mapStateToProps, null);
export default compose(withStyles(styles), withConnect)(GlobalLoading);
