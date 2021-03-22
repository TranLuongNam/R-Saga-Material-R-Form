import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React, { PureComponent } from 'react';
import styles from './styles';

class TaskItem extends PureComponent {
  render() {
    const { classes, task, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
            onClick={onClickEdit}
          >
            <EditIcon />
          </Fab>
          <Fab
            color="primary"
            className={classes.fab}
            arial-label="Delete"
            size="small"
            onClick={onClickDelete}
          >
            <DeleteForeverIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
TaskItem.propTypes = {
  classes: PropTypes.object,
  onClickEdit: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
