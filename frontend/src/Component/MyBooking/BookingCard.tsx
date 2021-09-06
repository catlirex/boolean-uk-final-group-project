import React from "react";
import { UserBookingType } from "../../store";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { APP_COLOR } from "../../consistent";

type Props = {
  booking: UserBookingType;
};

const StyledLi = styled.li`
  min-width: 200px;
  box-shadow: 0 0 10px 0;
  border-radius: 10px;
  padding: 10px;
  span {
    color: ${APP_COLOR.grey};
  }
  p {
    font-weight: 600;
    padding: 5px 0px;
  }
  h2 {
    padding: 10px 0px;
  }
  .status {
    padding-top: 10px;
    font-size: 1rem;
    background-color: ${APP_COLOR.lightPink};
    padding: 10px;
    margin: 10px 0;
  }
  .price-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
  .route-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    background-color: ${APP_COLOR.lightPink};
    padding: 10px;
    margin: 10px 0;
  }
`;

export const PinkButton = withStyles(() => ({
  root: {
    height: "50px",
    WebkitBorderRadius: "10px",
    margin: "0",
    marginLeft: "5px",
    backgroundColor: APP_COLOR.lightGrey,

    "&:hover": {
      backgroundColor: APP_COLOR.lightPink,
    },
  },
}))(Button);

export default function BookingCard({ booking }: Props) {
  const { status, scheduledFlight } = booking.tickets[0];
  const { date, flightNumberId, flightNumber, time } = scheduledFlight;

  const dateStringArray = date.toString().split("");
  dateStringArray?.splice(4, 0, "-");
  dateStringArray?.splice(7, 0, "-");
  const displayDate = dateStringArray?.join("");

  return (
    <StyledLi>
      <p>{flightNumberId}</p>
      <p>{displayDate}</p>
      <p>{time}</p>
      <div className="route-container">
        <h2>{flightNumber.departureAirportId}</h2>
        <h2>to</h2>
        <h2>{flightNumber.arrivalAirportId}</h2>
      </div>

      <span>Tickets: {booking.tickets.length} </span>
      <div className="price-container">
        <span>Class: {booking.tickets[0].class}</span>
        <span>
          Price: £{" "}
          {booking.tickets[0].class === "econ"
            ? booking.tickets.length * scheduledFlight.economicPrice
            : booking.tickets[0].class === "first"
            ? booking.tickets.length * scheduledFlight.firstClassPrice
            : booking.tickets.length * scheduledFlight.businessPrice}
        </span>
      </div>

      <p className="status">Flight Status: {scheduledFlight.status}</p>

      <PinkButton>{status}</PinkButton>
    </StyledLi>
  );
}
