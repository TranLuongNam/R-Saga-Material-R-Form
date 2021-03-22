import {
  HIDE_LOADING,
  HIDE_SIDEBAR,
  SHOW_LOADING,
  SHOW_SIDEBAR,
} from '../constants/ui';

export const showLoading = () => ({
  type: SHOW_LOADING,
});
export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const showSidebar = () => ({
  type: SHOW_SIDEBAR,
});

export const hideSidebar = () => ({
  type: HIDE_SIDEBAR,
});
