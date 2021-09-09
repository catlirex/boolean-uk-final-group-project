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
import { APP_COLOR } from "../../consistent";
import { Fireplace, FormatListNumberedRtl } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(10),
  },
  form: {},
  passengersNum: {
    display: "flex",
    alignItems: "center",
  },
  luggageOptions: {
    display: "grid",
    alignItems: "center",
    background: APP_COLOR.lightPink,
    width: "200px",
    height: "100px",
    border: "1px, solid black",
    borderRadius: "5px",
  },
  luggageText: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(5),
  },
  boxWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "30px",
    gridGap: theme.spacing(8),
  },
}));

const BookingForm = () => {
  const [numberOfPassangers, setNumberOfPassangers] = useState(0);
  const [numberOf10KgLuggage, setNumberOf10KgLuggage] = useState(0);
  const [numberOf20KgLuggage, setNumberOf20KgLuggage] = useState(0);
  const [numberOf30KgLuggage, setNumberOf30KgLuggage] = useState(0);

  console.log("num of passengers", numberOfPassangers);
  console.log("num of 10kg Luggage", numberOf10KgLuggage);
  console.log("num of 20kg Luggage", numberOf20KgLuggage);
  console.log("num of 30kg Luggage", numberOf30KgLuggage);
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.main}>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography component="h3">Number Of Passengers</Typography>

                <Typography component="p">Need to check stock</Typography>
                <BookingButtons
                  valueToShow={numberOfPassangers}
                  handleDecrement={() =>
                    setNumberOfPassangers(numberOfPassangers - 1)
                  }
                  handleIncrement={() =>
                    setNumberOfPassangers(numberOfPassangers + 1)
                  }
                />
              </Grid>
              <Grid>
                <Typography component="p">Whant more luggage?</Typography>
                <Grid className={classes.boxWrapper}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    justifyContent="space-between"
                  >
                    <div className={classes.luggageOptions}>
                      <Typography className={classes.luggageText}>
                        Luggage Option 10kg
                      </Typography>
                    </div>
                    <BookingButtons
                      valueToShow={numberOf10KgLuggage}
                      handleDecrement={() =>
                        setNumberOf10KgLuggage(numberOf10KgLuggage - 1)
                      }
                      handleIncrement={() =>
                        setNumberOf10KgLuggage(numberOf10KgLuggage + 1)
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    justifyContent="space-between"
                  >
                    <div className={classes.luggageOptions}>
                      <Typography className={classes.luggageText}>
                        Luggage Option 20kg
                      </Typography>
                    </div>
                    <BookingButtons
                      valueToShow={numberOf20KgLuggage}
                      handleDecrement={() =>
                        setNumberOf20KgLuggage(numberOf20KgLuggage - 1)
                      }
                      handleIncrement={() =>
                        setNumberOf20KgLuggage(numberOf20KgLuggage + 1)
                      }
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={2}
                    justifyContent="space-between"
                  >
                    <div className={classes.luggageOptions}>
                      <Typography className={classes.luggageText}>
                        Luggage Option 30kg
                      </Typography>
                    </div>
                    <BookingButtons
                      valueToShow={numberOf30KgLuggage}
                      handleDecrement={() =>
                        setNumberOf30KgLuggage(numberOf30KgLuggage - 1)
                      }
                      handleIncrement={() =>
                        setNumberOf30KgLuggage(numberOf30KgLuggage + 1)
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default BookingForm;
