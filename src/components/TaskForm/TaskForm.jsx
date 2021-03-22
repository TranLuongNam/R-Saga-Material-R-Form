import { Box, Button, Grid, MenuItem, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import renderSelectField from '../FormHelper/Select/Select';
import renderTextField from '../FormHelper/TextField/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends PureComponent {
  handleSubmitForm = (data) => {
    const { taskActionsCreator, taskEditing } = this.props;
    const { addTask, updateTask } = taskActionsCreator;
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };
  renderStatusSelection = () => {
    let xhtml = null;
    const { taskEditing, classes } = this.props;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng Thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Completed</MenuItem>
        </Field>
      );
    }
    return xhtml;
  };
  render() {
    const {
      classes,
      modalActionsCreator,
      handleSubmit,
      invalid,
      submitting,
      taskEditing,
    } = this.props;
    // console.log('taskEditting', taskEditing);
    const { hideModal } = modalActionsCreator;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu Đề"
              className={classes.textField}
              name="title"
              component={renderTextField}
              margin="normal"
              value={taskEditing ? taskEditing.title : ''}
            />
          </Grid>

          <Grid item md={12}>
            <Field
              id="description"
              label="Mô Tả"
              rowsMax="4"
              multiline
              className={classes.textField}
              name="description"
              component={renderTextField}
              margin="normal"
              value={taskEditing ? taskEditing.description : ''}
            />
          </Grid>
          {this.renderStatusSelection()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mbt={1}>
              <Box ml={1}>
                <Button
                  variant="contained"
                  style={{ fontSize: 12 }}
                  onClick={hideModal}
                >
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ fontSize: 12 }}
                disabled={invalid || submitting}
              >
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionsCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  taskEditing: PropTypes.object,
  handleSubmit: PropTypes.func,
  taskActionsCreator: PropTypes.shape({
    addTask: PropTypes.func,
  }),
};
const mapStateToProps = (state) => ({
  taskEditing: state.tasks.taskEditing,
  initialValues: {
    title: state.tasks.taskEditing ? state.tasks.taskEditing.title : null,
    description: state.tasks.taskEditing
      ? state.tasks.taskEditing.description
      : null,
    status: state.tasks.taskEditing ? state.tasks.taskEditing.status : null,
  },
});
const mapDispatchToProps = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
  taskActionsCreator: bindActionCreators(taskActions, dispatch),
});

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
