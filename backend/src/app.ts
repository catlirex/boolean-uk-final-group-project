import express from "express";
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.all("*", (req, res) => {
  res.json({ msg: "ok" });
});

module.exports = app;
