import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
  addTaskFailed,
  addTaskSuccess,
  deleteTaskFailed,
  deleteTaskSuccess,
  fetListTask,
  fetListTaskFail,
  fetListTaskSuccess,
  updateTaskFailed,
  updateTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../constants';
import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASK,
  FILTER_TASK,
  UPDATE_TASK,
} from '../constants/task';

function* watchingFetchListAction() {
  while (true) {
    const action = yield take(FETCH_TASK);

    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getList, params);
    yield delay(1000);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetListTaskSuccess(data));
    } else {
      yield put(fetListTaskFail(data));
    }
    yield put(hideLoading());
  }
}
function* filterTaskSaga({ payload }) {
  yield delay(1000);
  const { keyword } = payload;
  yield put(fetListTask({ q: keyword }));
  // const { keyword } = payload;
  // const list = yield select((state) => state.tasks.listTask);
  // console.log(list);
  // const filterTask = list.filter((task) =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  // );
  // console.log(filterTask);
  // yield put(filterTaskSuccess(filterTask));
}
function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select((state) => state.tasks.taskEditing);
  yield put(showLoading());
  const resp = yield call(
    updateTask,
    { title, description, status },
    taskEditing.id,
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  delay(1000);
  yield put(hideLoading());
}
function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteTask, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFailed(data));
  }
  delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchingFetchListAction);
  yield takeLatest(FILTER_TASK, filterTaskSaga);
  yield takeEvery(ADD_TASK, addTaskSaga);
  yield takeLatest(UPDATE_TASK, updateTaskSaga);
  yield takeLatest(DELETE_TASK, deleteTaskSaga);
}
export default rootSaga;
