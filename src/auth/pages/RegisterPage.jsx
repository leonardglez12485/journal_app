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

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Type your full name"
              fullWidth
              //sx={{ maxHeight: 30 }}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@domain.com"
              fullWidth
              //sx={{ maxHeight: 30 }}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="enter your password"
              fullWidth
              //sx={{ maxHeight: 30 }}
            />
          </Grid>
          <ButtonGroup variant="contained" spacing={2} fullWidth>
            <Button sx={{ mr: 1 }}> Create Account </Button>
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

