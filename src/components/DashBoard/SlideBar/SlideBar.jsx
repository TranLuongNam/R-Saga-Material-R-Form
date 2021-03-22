import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import styles from './styles';
import { ADMIN_ROUTER } from '../../../constants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  };

  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTER.map((item) => {
            return (
              <ListItem className={classes.menuItem} key={item.path} button>
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
