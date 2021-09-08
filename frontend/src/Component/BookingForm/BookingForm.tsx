import React, { useState, SyntheticEvent, useEffect } from "react";
import useStore from "../../store";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import BookingButtons from "./BookingButtons";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {},
  passengersNum: {
    display: "flex",
    alignItems: "center",
  },
}));

const BookingForm = () => {
  const [numberOfPassCounter, setnumberOfPassCounter] = useState("0");

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.main}>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid item xs={6}>
                <Typography component="h3">Number Of Passengers</Typography>
                <Typography component="p">Need to check stock</Typography>
                <BookingButtons />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default BookingForm;
