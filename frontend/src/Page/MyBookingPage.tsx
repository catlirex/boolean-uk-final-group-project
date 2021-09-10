import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useStore from "../store";
import BookingCard from "../Component/MyBooking/BookingCard";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { APP_COLOR } from "../consistent";

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

const StyledMain = styled.main`
  padding: 20px 50px;
`;
const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 0;
  gap: 20px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function MyBookingPage() {
  const userBooking = useStore((state) => state.userBooking);
  const getUserBooking = useStore((state) => state.getUserBooking);
  const loggedInUser = useStore((state) => state.loggedInUser);
  const setModal = useStore((state) => state.setModal);

  useEffect(() => {
    if (!loggedInUser) setModal("logIn");
  }, [loggedInUser]);

  useEffect(() => {
    getUserBooking();
  }, [loggedInUser]);

  console.log("userBooking", userBooking);

  return (
    <StyledMain>
      <h1>My Booking</h1>
      <StyledUl>
        {userBooking?.length
          ? userBooking.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          : null}
      </StyledUl>
      <SquareButton onClick={() => setModal("removeAccount")}>
        Remove Account
      </SquareButton>
    </StyledMain>
  );
}
