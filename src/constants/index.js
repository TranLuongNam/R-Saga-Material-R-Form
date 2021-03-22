import AdminHomePage from '../containers/AdminHomePage/AdminHomePage';
import TashBoard from '../containers/TashBoard/TashBoard';
// import TashBoard from '../containers/TashBoard/TashBoard';

export const API_ENDPOINT = 'http://localhost:3000';
export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTER = [
  {
    path: '/',
    exact: true,
    name: 'Trang Quản Trị',
    component: AdminHomePage,
  },
  {
    path: '/task-board',
    name: 'Quản Lý Công Việc',
    component: TashBoard,
  },
];
