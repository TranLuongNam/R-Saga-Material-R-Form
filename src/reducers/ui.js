import {
  HIDE_LOADING,
  HIDE_SIDEBAR,
  SHOW_LOADING,
  SHOW_SIDEBAR,
} from '../constants/ui';

const initialState = {
  showLoading: false,
  showSideBar: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    case SHOW_SIDEBAR: {
      return {
        ...state,
        showSidebar: true,
      };
    }
    case HIDE_SIDEBAR: {
      return {
        ...state,
        showSidebar: false,
      };
    }
    default:
      return { ...state };
  }
};

export default uiReducer;
