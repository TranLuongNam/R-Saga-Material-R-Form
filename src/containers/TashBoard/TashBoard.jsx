import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import SearchBox from '../../components/SearchBox/SearchBox';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';
class TashBoard extends Component {
  componentDidMount() {
    const { taskActionsCreator } = this.props;
    const { fetListTask } = taskActionsCreator;
    fetListTask();
  }

  showToast = () => {
    toast.success('Thành Công!');
  };
  openForm = () => {
    const { modalActionsCreator, taskActionsCreator } = this.props;
    const { setTaskEditing } = taskActionsCreator;
    setTaskEditing(null);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionsCreator;
    showModal();
    changeModalTitle('Thêm Mới Công Việc');
    changeModalContent(<TaskForm />);
  };
  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionsCreator } = this.props;
    const { filterTask } = taskActionsCreator;
    filterTask(value);
  };
  handleEdit = (task) => {
    // console.log('task:', task);
    const { taskActionsCreator, modalActionsCreator } = this.props;
    const { setTaskEditing } = taskActionsCreator;
    setTaskEditing(task);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionsCreator;
    showModal();
    changeModalTitle('Cập Nhật Công Việc');
    changeModalContent(<TaskForm />);
  };
  handleDelete = (task) => {
    const { id } = task;
    const { taskActionsCreator } = this.props;
    const { deleteTask } = taskActionsCreator;
    deleteTask(id);
  };
  showModalDelete = (task) => {
    const { modalActionsCreator, classes } = this.props;
    const {
      showModal,
      hideModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionsCreator;
    showModal();
    changeModalTitle('Xóa Công Việc !');
    changeModalContent(
      <div className={classes.modelDelete}>
        <div className={classes.modalConfirm}>
          Bạn có chắc chắn muốn xóa &nbsp;
          <span>
            <i>{task.title}</i>
          </span>
          ?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Hủy Bỏ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDelete(task)}
            >
              Xác Nhận
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };
  renderTashBoard = () => {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              key={status.value}
              tasks={taskFilter}
              status={status}
              onClickEdit={this.handleEdit}
              onClickDelete={this.showModalDelete}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };
  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
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
          <AddIcon /> Add New Jobs
        </Button>
        {this.renderSearchBox()}
        {this.renderTashBoard()}
      </div>
    );
  }
}

TashBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreator: PropTypes.shape({
    fetListTask: PropTypes.func,
    filterTask: PropTypes.func,
    setTaskEditing: PropTypes.func,
  }),
  modalActionsCreator: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  listTask: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    listTask: state.tasks.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsCreator: bindActionCreators(taskActions, dispatch),
    modalActionsCreator: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TashBoard),
);
