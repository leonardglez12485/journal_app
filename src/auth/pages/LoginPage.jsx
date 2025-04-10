import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  ButtonGroup,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formData = {
  email: 'Your email',
  password: 'Your password',
};

const formValidations = {
  email: [
    (value) => value.includes('@'), 'Email must have an @'
  ],
  password: [
    (value) => value.length >= 6, 'Password must be at least 6 characters'
  ]
}

export const LoginPage = () => {

  const [formSubmited, setformSubmited] = useState(false); 

  const {status, errorMessage} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {email, password, onInputChange, formState, isFormValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const isAuthenticated = useMemo(() => status === 'checking', [status]);  

  const onSubmit = (event) => {
    event.preventDefault();
    if(!isFormValid) return;
    dispatch(startLoginWithEmailPassword(formState));
    //setformSubmited(true);
  }

  const onGoogleSignIn = () => {
    console.log('Google sign in');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
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
             {'Invalid credentials'}
           </Alert>
          <ButtonGroup variant="contained" spacing={2} fullWidth>
            <Button disabled={isAuthenticated} sx={{ mr: 1 }} type="submit"> Login </Button>
            <Button disabled={isAuthenticated} onClick={onGoogleSignIn} variant="contained"fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
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
          <Grid container direction="row" justifyContent='end'>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
