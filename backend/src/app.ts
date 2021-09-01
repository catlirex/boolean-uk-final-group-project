
import express from 'express';
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import airportRouter from './resources/airport/router';
import userRouter from "./resources/user/router"
import authRouter from './resources/auth/router';
import scheduledFlightRouter from './resources/scheduledFlight/router';



// App initialisation
const app = express();

// MiddleWares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Auth
app.use(authRouter);

// Airport
app.use('/airports', airportRouter);

//User
app.use("/users", userRouter)

//Scheduled Flight
app.use("/scheduledFlight", scheduledFlightRouter)


// Catch All
app.all('*', (req, res) => {
  res.json({ msg: 'ok' });
});

module.exports = app;
