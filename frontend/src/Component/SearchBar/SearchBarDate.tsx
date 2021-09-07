import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { alpha } from "@material-ui/core/styles";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

type SearchBarPropsType = {
  setDepartureDate: (date: MaterialUiPickersDate) => void;
  setArrivalDate: (date: MaterialUiPickersDate) => void;
  arrivalDate: ParsableDate;
  departureDate: ParsableDate;
};
export default function SearchBarDate({
  setDepartureDate,
  setArrivalDate,
  arrivalDate,
  departureDate,
}: SearchBarPropsType) {
  const handleDepartureDateChange = (date: MaterialUiPickersDate) => {
    // console.log(setDepartureDate);
    setDepartureDate(date);
  };

  const handleArrivalDateChange = (date: MaterialUiPickersDate) => {
    setArrivalDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="DD/MM/yyyy"
          margin="normal"
          id="date-picker-dialog"
          label="Departure Date"
          value={departureDate}
          color="secondary"
          onChange={handleDepartureDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          margin="normal"
          id="date-picker-dialog"
          label="Return Date"
          color="secondary"
          format="DD/MM/yyyy"
          value={arrivalDate}
          onChange={handleArrivalDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
