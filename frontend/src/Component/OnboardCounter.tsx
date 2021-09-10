import React, { useEffect } from "react";
import useStore from "../store";
import { APP_COLOR } from "../consistent";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const PinkButton = withStyles(() => ({
  root: {
    height: "50px",
    WebkitBorderRadius: "10px",
    margin: "0",
    marginLeft: "5px",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightPink,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

function OnboardCounter() {
  const bookingList = useStore((state) => state.bookingList);
  const setBookingList = useStore((state) => state.setBookingList);

  const id: any = bookingList?.map((booking) => {
    return booking.id;
  });

  useEffect(() => {
    setBookingList(id);
  }, []);

  return (
    <div>
      <h2>Onboard Counter</h2>
      <h2>An input for the ticket id</h2>
      {bookingList?.map((booking) => {
        return (
          <div>
            <div>
              <p>
                {booking.scheduledFlightId},{" "}
                {booking.scheduledFlight?.gateNumber},{" "}
                {booking.scheduledFlight?.time}, {booking.status}
              </p>
              <PinkButton>Update Status</PinkButton>
              <h2>Passenger List</h2>
              <ul>
                <li>
                  {booking.passengerFirstName} {booking.passengerLastName}{" "}
                  {booking.seatNumer} {booking.id}{" "}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OnboardCounter;
