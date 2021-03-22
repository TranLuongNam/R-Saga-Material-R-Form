import { toastError, toastSuccess } from '../common/Helpers/toastHelper';
import {
  ADD_TASK,
  ADD_TASK_FAILED,
  ADD_TASK_SUCCESS,
  DELETE_TASK,
  DELETE_TASK_FAILED,
  DELETE_TASK_SUCCESS,
  FETCH_TASK,
  FETCH_TASK_FAIL,
  FETCH_TASK_SUCCESS,
  FILTER_TASK_SUCCESS,
  SET_TASK_EDITTING,
  UPDATE_TASK,
  UPDATE_TASK_FAILED,
  UPDATE_TASK_SUCCESS,
} from '../constants/task';

const initialState = {
  listTask: [],
  taskEditing: null,
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case FETCH_TASK_FAIL:
      toastError(action.payload.error);
      return { ...state, listTask: [] };
    case FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case ADD_TASK:
      return {
        ...state,
      };
    case ADD_TASK_SUCCESS:
      toastSuccess('Newly Added Successful Jobs!');
      return {
        ...state,
        listTask: [action.payload.data].concat(state.listTask),
      };
    case ADD_TASK_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    case SET_TASK_EDITTING:
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    case UPDATE_TASK:
      return { ...state };
    case UPDATE_TASK_SUCCESS:
      const { listTask } = state;
      toastSuccess('Job Update Successful!');
      const index = listTask.findIndex(
        (item) => item.id === action.payload.data.id,
      );
      if (index !== -1) {
        const newListTask = [
          ...listTask.slice(0, index),
          action.payload.data,
          ...listTask.slice(index + 1),
        ];
        return {
          ...state,
          listTask: newListTask,
        };
      }
      return { ...state };
    case UPDATE_TASK_FAILED:
      toastError(action.payload.error);
      return {
        ...state,
      };
    case DELETE_TASK:
      return { ...state };
    case DELETE_TASK_SUCCESS:
      toastSuccess('Delete job successfully!');
      return {
        ...state,
        listTask: state.listTask.filter(
          (item) => item.id !== action.payload.data,
        ),
      };
    case DELETE_TASK_FAILED:
      toastError(action.payload.error);
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
