import React from "react";
import "date-fns";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { PinkButton } from "../LoginHeader";
import { APP_COLOR } from "../../consistent";
import useStore from "../../store";

const StyledForm = styled.form`
  display: grid;
  place-items: center;
  gap: 10px;
  padding: 30px;
  border-radius: 10px;

  box-shadow: 0px 0px 10px 0px ${APP_COLOR.lightGrey};
`;

export default function FlightStatusFrom() {
  const [selectedDate, setSelectedDate] = React.useState<
    Date | MaterialUiPickersDate
  >(new Date());
  const searchFlightStatus = useStore((state) => state.searchFlightStatus);

  const handleDateChange = (date: MaterialUiPickersDate) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      flightNumber: { value: string };
    };

    e.preventDefault();
    const flightNumber = target.flightNumber.value.toUpperCase();
    const dateString = selectedDate
      ?.toISOString()
      .split("T")[0]
      .split("-")
      .join("");
    if (dateString) {
      const dateNum = parseInt(dateString);
      console.log(flightNumber, dateNum);

      searchFlightStatus(flightNumber, dateNum);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>View Flight Status</h1>
      <TextField
        id="status-flight-number"
        name="flightNumber"
        label="Flight Number"
        variant="outlined"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <PinkButton type="submit">Search</PinkButton>
    </StyledForm>
  );
}
