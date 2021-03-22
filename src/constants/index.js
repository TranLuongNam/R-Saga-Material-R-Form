import AdminHomePage from '../containers/AdminHomePage/AdminHomePage';
import LoginPage from '../containers/LoginPage/LoginPage';
import SignUpPage from '../containers/SignUpPage/SignUpPage';
import TashBoard from '../containers/TashBoard/TashBoard';

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
    path: '/admin',
    name: 'Trang Quản Trị',
    component: AdminHomePage,
  },
  {
    path: '/',
    exact: true,
    name: ' Quản Lý Công Việc',

    component: TashBoard,
  },
];

export const ROUTES = [
  {
    name: 'Đăng Nhập',
    path: '/sign-in',
    component: LoginPage,
  },
  {
    name: 'Đăng Ký',
    path: '/sign-up',
    component: SignUpPage,
  },
];
