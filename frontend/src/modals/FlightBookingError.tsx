import React from "react";
import useStore from "../store";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { APP_COLOR } from "../consistent";

const SquareButton = withStyles(() => ({
  root: {
    height: "auto",
    width: "15vw",
    fontSize: "0.8rem",
    color: APP_COLOR.white,
    backgroundColor: APP_COLOR.sharpPick,
    boxShadow: `0 0 5px 0 ${APP_COLOR.lightGrey}`,
    placeSelf: "center",
    "&:hover": {
      backgroundColor: APP_COLOR.pink,
    },
  },
}))(Button);

export default function FlightBookingError() {
  const setModal = useStore((state) => state.setModal);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Typography component="h1" variant="h6">
        Please Select Flight and class
      </Typography>
      <SquareButton onClick={() => setModal("")}>Ok</SquareButton>
      <Grid item></Grid>
    </Container>
  );
}
