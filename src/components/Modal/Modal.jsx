import { Modal, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';

class ModalForm extends Component {
  render() {
    const { classes, open, component, modalActionsCreator, title } = this.props;
    const { hideModal } = modalActionsCreator;
    return (
      <Modal open={open} onClose={hideModal} className={classes.Modal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

ModalForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  title: PropTypes.string,
  modalActionsCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};
const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});
const mapDispatchToProps = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(ModalForm);
