import { Box, Grid, withStyles } from '@material-ui/core';
import React, { PureComponent } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import PropTypes from 'prop-types';
import styles from './styles';

class TaskList extends PureComponent {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            return (
              <TaskItem
                task={task}
                status={status}
                key={task.id}
                onClickEdit={() => onClickEdit(task)}
                onClickDelete={() => onClickDelete(task)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskList);
