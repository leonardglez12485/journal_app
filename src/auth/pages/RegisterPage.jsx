import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  ButtonGroup,
  Alert,
} from "@mui/material";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layouts/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email: 'leonardglez12485@gmail.com',
  password: '123456',
  displayName: 'Leonardo Gonzalez',
};

const formValidations = {
  email: [
    (value) => value.includes('@'), 'Email must have an @'
  ],
  password: [
    (value) => value.length >= 6, 'Password must be at least 6 characters'
  ],
  displayName: [
    (value) => value.length >= 1, 'Display name is required'
  ]
}

export const RegisterPage = () => {

  const [formSubmited, setformSubmited] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuth = useMemo(() => status ==='checking', [status])

  const {displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid, } = useForm(formData, formValidations);

  const dispatch = useDispatch();

  const onSubmit =(event) => {
    event.preventDefault();
    if (!isFormValid) return;
    setformSubmited(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title="Register">
      {/* <h3>Form Valid: {isFormValid ? 'Valid' : 'Invalid'}</h3> */}
      <form onSubmit={onSubmit} className= 'animate__animated animate__fadeIn animate__faster'>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Type your full name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@domain.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
              //sx={{ maxHeight: 30 }}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="enter your password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
              //sx={{ maxHeight: 30 }}
            />
          </Grid>
          <Alert severity="error"sx={{ display: errorMessage ? 'flex' : 'none', width: '100%' }} >
            {errorMessage}
          </Alert>
         
          <ButtonGroup disabled= {isCheckingAuth} variant="contained" spacing={2} fullWidth>
            <Button type="submit" sx={{ mr: 1 }}> Create Account </Button>
          </ButtonGroup>
          {/* <Grid container spacing={2}>
              <Grid size="grow" >
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid size="grow">
                <Button variant="contained"  fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid> */}
          <Grid container direction="row" justifyContent='right'>
            <Typography sx={{ mr: 1 }}>
              Already have an account?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

