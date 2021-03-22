import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles';
import DashBoard from '../../components/DashBoard/DashBoard';
import PropTypes from 'prop-types';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <DashBoard {...remainProps}>
              <YourComponent {...routeProps} />
            </DashBoard>
          );
        }}
      />
    );
  }
}

AdminLayoutRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default withStyles(styles)(AdminLayoutRoute);
