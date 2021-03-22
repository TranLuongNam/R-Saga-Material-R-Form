import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

class LoginPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  onHandleSignIn = () => {
    const { history } = this.props;
    history.push('/');
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Đăng Nhập Để Tiếp Tục!
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="PassWord"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  onClick={this.onHandleSignIn}
                >
                  Đăng Nhập
                </Button>
                <div className="pt-1 text-md-center">
                  <span>
                    Bạn Chưa Có Tài Khoản?
                    <Link to="/sign-up">
                      <Button>
                        <i>Đăng Ký !</i>
                      </Button>
                    </Link>
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
