import { Button, TextField, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { PureComponent } from 'react';
import styles from './styles';

class TaskForm extends PureComponent {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm Mới Công Việc</DialogTitle>
        <TextField
          id="standard-name"
          label="Name"
          margin="normal"
          className={classes.textField}
        />
        <TextField
          id="standard-name"
          label="Name"
          margin="normal"
          className={classes.textField}
        />
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
