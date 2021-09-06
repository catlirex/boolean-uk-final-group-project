import React, { SyntheticEvent } from "react";
import useStore from "../store";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  close: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    borderRadius: theme.spacing(200),
    color: theme.palette.common.white,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUpModal() {
  const classes = useStyles();
  const modal = useStore((state) => state.modal);
  const setModal = useStore((state) => state.setModal);
  const setSignupUser = useStore((state) => state.setSignupUser);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newUser = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      password: target.password.value,
    };
    setSignupUser(newUser);
    setModal("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.main}>
        <Grid container justifyContent="flex-end">
          <Button onClick={() => setModal("")} className={classes.close}>
            X
          </Button>
        </Grid>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Account
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => setModal("logIn")}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUpModal;

//   function handleSubmit(event: SyntheticEvent) {
//     event.preventDefault();

//     const target = event.target as HTMLFormElement;

//     let newUser: {
//       firstName: string;
//       lastName: string;
//       password: string;
//       email: string;
//     } = {
//       firstName: target.firstName.value,
//       lastName: target.lastName.value,
//       password: target.password.value,
//       email: target.email.value,
//     };

//     fetch(`http://localhost:3000/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw Error("Failed");
//       }
//     });
//     setModal("");
//   }
