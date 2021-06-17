import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { store } from 'react-notifications-component';
import jwt from 'jwt-simple';

import Copyright from '../api/copyright';
import { API } from "../../hooks";
import useStyles from '../../assets/styles';

import { session_store } from "../../redux/actions/auth";

import config from '../../config/config.json';

export default function SignIn({ setPageStatus }) {

  const classes = useStyles.signin()
  const [ emailValidate, setEmailValidate ] = useState(true)
  const [ showPassword, setShowPassword ] = useState(false)
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState(false)

  const dispatch = useDispatch()

  const emailInput = (val) => {
    setEmail(val)
    setEmailValidate(validator.isEmail(val))
  }

  const handleSignin = async () => {
    const data = await API.signin({
      email: email,
      password: password
    });
    var notificationOption = {
      title: "Success!",
      message: "You have signined successfully.",
      type: "success",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2500,
        onScreen: true
      }
    }

    if(data.status === false) {
      notificationOption.title = "Error!"
      notificationOption.message = data.msg
      notificationOption.type = "danger"
    } else {
      var userData = data.userdata
      delete userData.password

      const encodedData = jwt.encode(userData, config.jwt_secret)

      console.log(encodedData);
      sessionStorage.setItem('token', encodedData)
      dispatch(session_store(userData))
    }
    store.addNotification(notificationOption)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">

          <FormControl className={classes.textField} variant="outlined">
            <InputLabel htmlFor="email" error={!emailValidate}>Email</InputLabel>
            <OutlinedInput
              
              error={!emailValidate}

              id="email"
              value={email}
              onChange={(e) => emailInput(e.target.value)}
              labelWidth={45}
            />
          </FormControl>

          <FormControl className={classes.textField} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" error={password === ""}>Password</InputLabel>
            <OutlinedInput
              
              error={password === ""}

              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password===false?"":password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSignin()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2"  onClick={() => setPageStatus(1)} >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}