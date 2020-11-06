import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "@material-ui/core/Link";
import {
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  TextField,
  Grid,
  Typography,
  makeStyles,
  Divider,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "./icons/GoogleIcon";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Links color="inherit" href="/">
        Your Website
      </Links>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Sign() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <h2 style={{ marginLeft: 30 }}>
            Rep<span style={{ color: "#4967e9" }}>suite</span>.
          </h2>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4">
              <strong>Hey There👋</strong>
            </Typography>
            <Typography
              component="h2"
              variant="body2"
              style={{ marginTop: 10 }}
            >
              <strong>
                Welcome back to Rep
                <span style={{ color: "#4967e9" }}>suite</span>.
              </strong>
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to="/dashboard">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </Link>

              <Grid container>
                <Grid item xs>
                  <Links href="#" variant="body2">
                    Forgot password?
                  </Links>
                </Grid>
                <Grid item>
                  <Links href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Links>
                </Grid>
              </Grid>

              <Box mt={5}>
                <Divider />
              </Box>
              <Box mt={2}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  Or continue with
                </Typography>

                <Box mt={2} width="75%" className="center">
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    startIcon={<GoogleIcon />}
                    fullWidth
                  >
                    Sign in with Google
                  </Button>
                </Box>
                <Box mt={2} width="75%" className="center">
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    startIcon={
                      <FacebookIcon color="primary" style={{ fontSize: 30 }} />
                    }
                    fullWidth
                  >
                    Sign in with Facebook
                  </Button>
                </Box>
              </Box>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </>
  );
}
