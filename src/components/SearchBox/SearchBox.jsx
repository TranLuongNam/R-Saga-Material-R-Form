import { TextField, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            autoComplete="off"
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
            placeholder=" Please Enter Keyword ..."
          />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBox);
