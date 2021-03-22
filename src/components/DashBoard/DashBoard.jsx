import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import SlideBar from './SlideBar/SlideBar';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as uiActions from '../../actions/ui';
import cn from 'classnames';

class DashBoard extends Component {
  handleToggleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  };
  render() {
    const { classes, children, name, showSidebar } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          onToggleSlideBar={this.handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <SlideBar
            showSidebar={showSidebar}
            onToggleSlideBar={this.handleToggleSidebar}
          />
          <div
            className={cn(classes.wrapperChildren, {
              [classes.shiftLext]: showSidebar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
DashBoard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  uiActionsCreator: PropTypes.shape({
    showSideBar: PropTypes.func,
    hideSlideBar: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(styles))(DashBoard);
