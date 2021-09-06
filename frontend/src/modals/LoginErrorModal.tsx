import React from "react";
import useStore from "../store";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

export default function LoginErrorModal() {
  const setModal = useStore((state) => state.setModal);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Typography component="h1" variant="h6">
        Username/Password incorrect
      </Typography>
      <Grid item>
        <Link onClick={() => setModal("signUp")}>
          Not our member yet? Sign Up
        </Link>
      </Grid>
    </Container>
  );
}
