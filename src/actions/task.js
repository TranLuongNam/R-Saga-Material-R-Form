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
  FILTER_TASK,
  FILTER_TASK_SUCCESS,
  SET_TASK_EDITTING,
  UPDATE_TASK,
  UPDATE_TASK_FAILED,
  UPDATE_TASK_SUCCESS,
} from '../constants/task';
import { STATUSES } from '../constants/index';

export const fetListTask = (params = {}) => {
  return {
    type: FETCH_TASK,
    payload: {
      params,
    },
  };
};

export const fetListTaskSuccess = (data) => {
  return {
    type: FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetListTaskFail = (error) => {
  return {
    type: FETCH_TASK_FAIL,
    payload: {
      error,
    },
  };
};
export const filterTask = (keyword) => ({
  type: FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});
export const addTask = (title, description) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskFailed = (error) => {
  return {
    type: ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const setTaskEditing = (task) => {
  return {
    type: SET_TASK_EDITTING,
    payload: {
      task,
    },
  };
};

export const updateTask = (title, description, status = STATUSES[0].value) => {
  return {
    type: UPDATE_TASK,
    payload: {
      title,
      description,
      status,
    },
  };
};

export const updateTaskSuccess = (data) => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateTaskFailed = (error) => {
  return {
    type: UPDATE_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTaskSuccess = (data) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteTaskFailed = (error) => {
  return {
    type: DELETE_TASK_FAILED,
    payload: {
      error,
    },
  };
};

/*
  B1:Goi fetListTaskRequest,
  B2:Goi fetListTask,
  B3:Goi fetListTaskSuccess,
  B4:Goi fetListTaskFail
*/
// export const fetListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetListTask());
//     taskApi
//       .getList()
//       .then((res) => {
//         const { data } = res;
//         dispatch(fetListTaskSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetListTaskFail(error));
//       });
//   };
// };
