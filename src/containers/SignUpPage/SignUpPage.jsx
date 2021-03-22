import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './styles';

class SignUpPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  onHandleSignUp = () => {
    const { history } = this.props;
    history.push('/sign-in');
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signUp}>
          <Card>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Đăng Ký Tài Khoản !</Typography>
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
                <TextField
                  id="cpassword"
                  label="Confirm PassWord"
                  className={classes.TextField}
                  fullWidth
                  margin="normal"
                />

                <FormControlLabel
                  control={<Checkbox value="argee" />}
                  label="Tôi Đã Đọc Và Đồng Ý Điều Khoản !"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  onClick={this.onHandleSignUp}
                >
                  Đăng Ký
                </Button>
                <div className="pt-1 text-md-center">
                  <span>
                    Bạn Đã Có Tài Khoản?
                    <Link to="/sign-in">
                      <Button>
                        <i>Đăng Nhập !</i>
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

export default withStyles(styles)(withRouter(SignUpPage));
