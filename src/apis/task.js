import axiosServices from '../common/axiosServices';
import { API_ENDPOINT } from '../constants';
import qs from 'query-string';
const url = 'tasks';
export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosServices.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = (data) => {
  return axiosServices.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTask = (data, taskId) => {
  return axiosServices.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};

export const deleteTask = (taskId) => {
  return axiosServices.delete(`${API_ENDPOINT}/${url}/${taskId}`);
};
