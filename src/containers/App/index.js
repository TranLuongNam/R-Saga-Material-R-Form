import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import theme from '../../common/Theme';
import configStore from '../../redux/configStore';
import styles from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/globalLoading/GlobalLoading';
import Modal from '../../components/Modal/Modal';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ADMIN_ROUTER, ROUTES } from '../../constants';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminLayoutRoute from '../../common/AdminLayoutRoute';
import DefaultLayoutRoute from '../../common/DefaultLayoutRoute';

const store = configStore();

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTER.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };
  renderDefaultRoutes = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route) => {
      return (
        <DefaultLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <GlobalLoading />
            <Modal />
            <Switch>
              {this.renderAdminRoutes()}
              {this.renderDefaultRoutes()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
