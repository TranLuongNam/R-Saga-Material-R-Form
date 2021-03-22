import {
  CHANGE_MODAL_CONTENT,
  CHANGE_MODAL_TITLE,
  HIDE_MODAL,
  SHOW_MODAL,
} from '../constants/modal';

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};
export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
export const changeModalTitle = (title) => {
  return {
    type: CHANGE_MODAL_TITLE,
    payload: {
      title,
    },
  };
};
export const changeModalContent = (component) => {
  return {
    type: CHANGE_MODAL_CONTENT,
    payload: {
      component,
    },
  };
};
