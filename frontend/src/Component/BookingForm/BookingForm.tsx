import React, { useState, useEffect, SyntheticEvent } from "react";
import useStore from "../../store";
import { useHistory } from "react-router";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import BookingButtons from "./BookingButtons";
import { APP_COLOR } from "../../consistent";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(10),
  },
  mainHeader: {
    margin: "20px",
    textAlign: "center",
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
  const classes = useStyles();
  const history = useHistory();
  const [numberOfPassangers, setNumberOfPassangers] = useState(0);
  const [numberOf10KgLuggage, setNumberOf10KgLuggage] = useState(0);
  const [numberOf20KgLuggage, setNumberOf20KgLuggage] = useState(0);
  const [numberOf30KgLuggage, setNumberOf30KgLuggage] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  const getUserBooking = useStore((state) => state.getUserBooking);
  const outboundBooking = useStore((state) => state.outboundBooking);
  const inboundBooking = useStore((state) => state.inboundBooking);
  const loggedInUser = useStore((state) => state.loggedInUser);

  console.log("inbound booking", inboundBooking);
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

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const outbooking: Bookings = {
      userId: loggedInUser?.id,
      bookExtraLuggage: [],
      tickets: [],
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

    const inbooking: Bookings = {
      userId: loggedInUser?.id,
      bookExtraLuggage: [],
      tickets: [],
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

    if (inboundBooking) {
      if (numberOfPassangers !== 0) {
        for (let i = 0; i < numberOfPassangers; i++) {
          console.log("inside inbookin", inbooking.tickets);
          console.log("inside inboundbooking", inboundBooking.tickets);
          outbooking.tickets.push(inboundBooking?.tickets[0]);
          console.log("after push", inbooking.tickets);
        }
      }
    }
    // const target = e.target as HTMLFormElement;
    if (outboundBooking) {
      fetch(`http://localhost:3000/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(outbooking),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    if (inboundBooking) {
      fetch(`http://localhost:3000/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(outbooking),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    history.push("/mybooking");
  };

  return (
    <Container component="main" maxWidth="sm">
      <h1 className={classes.mainHeader}>Booking Form</h1>
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
          <Grid className={classes.priceWrapper}>
            <Grid>
              <Typography>Total Price ${totalPrice.toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <SquareButton variant="contained" type="submit">
            PayMent
          </SquareButton>
        </form>
      </div>
    </Container>
  );
};

export default BookingForm;
