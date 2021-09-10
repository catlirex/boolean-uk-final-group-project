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
  priceWrapper: {
    display: "grid",
    alignItems: "center",
    marginTop: "30px",
    gridGap: theme.spacing(8),
  },
}));

type Bookings = {
  userId: number | undefined;
  bookExtraLuggage: {
    quantity: number;
    extraLuggageId: number;
  }[];
  tickets: {
    class: string;
    scheduledFlightId: number;
  }[];
};

const BookingForm = () => {
  const [numberOfPassangers, setNumberOfPassangers] = useState(0);
  const [numberOf10KgLuggage, setNumberOf10KgLuggage] = useState(0);
  const [numberOf20KgLuggage, setNumberOf20KgLuggage] = useState(0);
  const [numberOf30KgLuggage, setNumberOf30KgLuggage] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);

  const outboundBooking = useStore((state) => state.outboundBooking);
  const inboundBooking = useStore((state) => state.inboundBooking);
  const loggedInUser = useStore((state) => state.loggedInUser);

  const ExtraLuggage = () => {
    let num = null;
    if (numberOf30KgLuggage !== 0) {
      num = numberOf30KgLuggage;

      let thirtyExtraLuggage = {
        quantity: num,
      };
      return thirtyExtraLuggage;
    }
    if (numberOf20KgLuggage !== 0) {
      num = numberOf20KgLuggage;
      const twentyKgExtraLuggage = {
        quantity: num,
      };

      return { twentyKgExtraLuggage };
    }

    if (numberOf10KgLuggage !== 0) {
      num = numberOf10KgLuggage;

      const tenKgExtraLuggage = {
        quantity: num,
      };
      return tenKgExtraLuggage;
    }
  };

  const handleSubmit = () => {
    // OutBound Bookings
    // if (outboundBooking?.tickets || outboundBooking?.bookExtraLuggage) {
    const outbooking: Bookings = {
      userId: loggedInUser?.id,
      bookExtraLuggage: [],
      tickets: [
        { class: "econ", scheduledFlightId: 123 },
        { class: "econ", scheduledFlightId: 123 },
        { class: "econ", scheduledFlightId: 123 },
      ],
    };

    if (numberOf10KgLuggage) {
      outbooking.bookExtraLuggage.push({
        quantity: numberOf10KgLuggage,
        extraLuggageId: 1,
      });
    }
    if (numberOf20KgLuggage) {
      outbooking.bookExtraLuggage.push({
        quantity: numberOf20KgLuggage,
        extraLuggageId: 2,
      });
    }
    if (numberOf30KgLuggage) {
      outbooking.bookExtraLuggage.push({
        quantity: numberOf30KgLuggage,
        extraLuggageId: 3,
      });
    }
    console.log("Outbound", outbooking);
    // }
    // Inbound Bookings
    // if (inboundBooking?.bookExtraLuggage || inboundBooking?.tickets) {
    const inbooking: Bookings = {
      userId: loggedInUser?.id,
      bookExtraLuggage: [],
      tickets: [
        { class: "econ", scheduledFlightId: 123 },
        { class: "econ", scheduledFlightId: 123 },
        { class: "econ", scheduledFlightId: 123 },
      ],
    };

    if (numberOf10KgLuggage) {
      inbooking.bookExtraLuggage.push({
        quantity: numberOf10KgLuggage,
        extraLuggageId: 1,
      });
    }
    if (numberOf20KgLuggage) {
      inbooking.bookExtraLuggage.push({
        quantity: numberOf20KgLuggage,
        extraLuggageId: 2,
      });
    }
    if (numberOf30KgLuggage) {
      inbooking.bookExtraLuggage.push({
        quantity: numberOf30KgLuggage,
        extraLuggageId: 3,
      });
    }
    console.log("Inbound", inbooking);
    // }

    // if (numberOfPassangers !== 0) {
    //   for (let i = 0; i < numberOfPassangers; i++) {
    //     inbooking.tickets.push({
    //       // class: ,
    //       // scheduledFlightId:
    //       //   inboundBooking?.tickets.TicketType.scheduledFlightId,
    //     });
    //   }
    // }
  };

  console.log(handleSubmit());

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.main}>
        <form onSubmit={handleSubmit} className={classes.form}>
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
                      handleDecrement={() => {
                        setNumberOf10KgLuggage(numberOf10KgLuggage - 1);
                        if (totalPrice !== 0) {
                          setTotalPrice(totalPrice - 20);
                        }
                        ExtraLuggage();
                      }}
                      handleIncrement={() => {
                        setNumberOf10KgLuggage(numberOf10KgLuggage + 1);
                        setTotalPrice(totalPrice + 20);
                        ExtraLuggage();
                      }}
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
                      handleDecrement={() => {
                        setNumberOf20KgLuggage(numberOf20KgLuggage - 1);
                        if (totalPrice !== 0) {
                          setTotalPrice(totalPrice - 30);
                        }
                        ExtraLuggage();
                      }}
                      handleIncrement={() => {
                        setNumberOf20KgLuggage(numberOf20KgLuggage + 1);
                        setTotalPrice(totalPrice + 30);
                        ExtraLuggage();
                      }}
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
                      handleDecrement={() => {
                        setNumberOf30KgLuggage(numberOf30KgLuggage - 1);
                        if (totalPrice !== 0) {
                          setTotalPrice(totalPrice - 50);
                        }
                        ExtraLuggage();
                      }}
                      handleIncrement={() => {
                        setNumberOf30KgLuggage(numberOf30KgLuggage + 1);
                        setTotalPrice(totalPrice + 50);
                        ExtraLuggage();
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Grid className={classes.priceWrapper}>
        <Grid>
          <Typography>Total Price ${totalPrice.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingForm;
