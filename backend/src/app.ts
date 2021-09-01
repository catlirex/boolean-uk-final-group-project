import express from 'express';
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import airportRouter from './resources/airport/router';
import authRouter from './resources/auth/router';

// App initialisation
const app = express();

// MiddleWares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Auth
app.use(authRouter);

// Routes
app.use('/airports', airportRouter);

// Catch All
app.all('*', (req, res) => {
  res.json({ msg: 'ok' });
});

module.exports = app;
