import {
  CHANGE_MODAL_CONTENT,
  CHANGE_MODAL_TITLE,
  HIDE_MODAL,
  SHOW_MODAL,
} from '../constants/modal';

const initialState = {
  showModal: false,
  component: null,
  title: '',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        title: '',
        component: null,
      };
    case CHANGE_MODAL_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    case CHANGE_MODAL_CONTENT:
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    default:
      return { ...state };
  }
};
export default modalReducer;
