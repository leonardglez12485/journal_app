import { useMemo } from "react";
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
} from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startCheckingAuthentication, startGoogleSignIn } from "../../store/auth";




export const LoginPage = () => {

  const {status} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: 'leonardglez12485@gmail.com',
    password: '123456', 
  });

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    dispatch(startCheckingAuthentication());
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
              //sx={{ maxHeight: 30 }}
            />
          </Grid>
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
