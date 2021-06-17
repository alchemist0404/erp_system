import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import validator from 'validator'
import { store } from 'react-notifications-component';

import { API } from "../../hooks";

import useStyles from '../../assets/styles';
import Copyright from '../api/copyright';

export default function SignUp({ setPageStatus }) {

  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cPassword, setCPassword ] = useState('')
  const [ checkFlag, setCheckFlag ] = useState(false)

  const classes = useStyles.signup();

  const handleSignup = async () => {

    var notificationOption = {
      title: "Error!",
      message: "Please input all fields.",
      type: "danger",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2500,
        onScreen: true
      }
    };

    if(!handleValidate('normal', firstname) || !handleValidate('normal', lastname) || !handleValidate('normal', password) || !handleValidate('normal', email) || !handleValidate('normal', cPassword) || !handleValidate('flag', checkFlag)) {
      store.addNotification(notificationOption);
      return;
    }

    if(!handleValidate('email', email)) {
      notificationOption.message = "Please input valid email address."
      store.addNotification(notificationOption);
      return;
    }

    if(!handleValidate('confirm', cPassword)) {
      notificationOption.message = "Password doesn't match."
      store.addNotification(notificationOption);
      return;
    }

    let userData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    }
    
    const data = await API.signup(userData);
    
    if(data.status === false) {
      notificationOption.message = data.msg;
    } else {
      notificationOption.title = "Success!";
      notificationOption.message = "Your request has been submitted successfuly.";
      notificationOption.type = "success";
    }
    store.addNotification(notificationOption);
  }

  const handleValidate = (type, value) => {
    if(type === 'normal') {
      return value !== '';
    } else if(type === 'email') {
      return validator.isEmail(value)
    } else if(type === 'confirm') {
      if(value !== '') {
        return password === value;
      } else {
        return false;
      }
    } else if(type === 'flag') {
      return checkFlag
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                id="password_confirmation"
                autoComplete="current-password-confirmation"
                onChange={(e) => setCPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" onChange={() => setCheckFlag(!checkFlag)} />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSignup()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setPageStatus(0)} >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}