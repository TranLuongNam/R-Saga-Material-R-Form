import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import styles from './styles';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import { STATUSES } from '../../constants';

const listTask = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read in Material',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Soccer',
    description: 'With My Friend',
    status: 2,
  },
  {
    id: 1,
    title: 'Play Game',
    description: '',
    status: 1,
  },
];

class DashBoard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  openForm = () => {
    this.setState({
      open: true,
    });
  };
  renderDashBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList key={status.value} tasks={taskFilter} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };
  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Board}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="small"
          onClick={this.openForm}
        >
          <AddIcon /> Thêm Mới Công Việc
        </Button>
        {this.renderDashBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

DashBoard.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(DashBoard);
